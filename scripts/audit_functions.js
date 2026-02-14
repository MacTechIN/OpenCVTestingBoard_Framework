
const fs = require('fs');
const path = require('path');

const functionsFilePath = path.join(__dirname, '../src/data/opencv-functions.ts');
const processorFilePath = path.join(__dirname, '../src/lib/opencv-processor.ts');

console.error(`Reading functions from: ${functionsFilePath}`);
if (!fs.existsSync(functionsFilePath)) {
    console.error("Functions file not found!");
    process.exit(1);
}

const functionsContent = fs.readFileSync(functionsFilePath, 'utf8');
const processorContent = fs.readFileSync(processorFilePath, 'utf8');

console.error(`Functions file size: ${functionsContent.length} bytes`);

// Simplified Regex to find objects with id, syntax, and parameters.
// We'll iterate manually or use a simpler regex.
// Expected format: { id: '...', ..., parameters: [ ... ], ..., syntax: '...' }
// Let's rely on 'id:' being the start of a definition block.

// Search for the start of opencvFunctions array
const startMarker = 'export const opencvFunctions: OpenCVFunction[] = [';
const startIndex = functionsContent.indexOf(startMarker);

if (startIndex === -1) {
    console.error("Could not find opencvFunctions array start");
    process.exit(1);
}

const functionsOnly = functionsContent.substring(startIndex);

// We will split the file by "{ id: '" to get chunks.
const chunks = functionsOnly.split(/{\s*id:\s*'/);
// First chunk is garbage (array start).
const defs = [];

chunks.slice(1).forEach(chunk => {
    // chunk starts with "ID', ..."
    // extract ID
    const idMatch = chunk.match(/^([^']+)'/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    // extract parameters block
    // parameters: [ ... ]
    // We need to find the content between [ and ].
    // This is hard with regex if nested, but here it's likely simple.
    const paramStart = chunk.indexOf('parameters: [');
    let params = [];
    if (paramStart !== -1) {
        const afterStart = chunk.substring(paramStart + 13); // len of "parameters: ["
        // find closing ] - simple assumption: no nested brackets in params definitions
        const paramEnd = afterStart.indexOf(']'); 
        if (paramEnd !== -1) {
            const paramBlock = afterStart.substring(0, paramEnd);
            // find name: '...'
            const nameMatches = paramBlock.matchAll(/name:\s*'([^']+)'/g);
            for (const m of nameMatches) {
                params.push(m[1]);
            }
        }
    }
    
    // extract syntax
    const syntaxMatch = chunk.match(/syntax:\s*'([^']*)'/);
    const syntax = syntaxMatch ? syntaxMatch[1] : '';
    
    // determine required inputs
    let inputCount = 1;
    if (syntax.includes('src2') || syntax.includes('src1, src2')) inputCount = 2;
    if (syntax.includes('mask')) inputCount = 2; // Rough heuristic

    defs.push({ id, params, syntax, inputCount });
});

console.error(`Parsed ${defs.length} function definitions.`);

// 2. Analyze implementations
const report = [];

defs.forEach(def => {
    // Find implementation block
    // pattern: case 'ID': ... break;
    // We need to be careful about not matching sub-strings.
    const caseStart = processorContent.indexOf(`case '${def.id}':`);
    
    const result = {
        id: def.id,
        status: 'Pass',
        reason: []
    };

    if (caseStart === -1) {
         result.status = 'NG';
         result.reason.push('Implementation (switch case) not found.');
    } else {
        // Find the break; for this case
        const afterCase = processorContent.substring(caseStart);
        // Find next "case " or "break;" but "break;" is safer.
        // Actually, we should look for the *next* case to define boundary, or simply look for "break;"
        // However, nested switches might exist? A simple indexOf('break;') is usually fine for this file structure.
        // But what if `if (...) break;` exists?
        // We really want the END of the case block.
        // Let's assume the case block ends at the next `case '` or `default:` or end of function.
        // Searching for `\n        case '` (indentation) is a good heuristic.
        
        let blockEnd = afterCase.indexOf('\n        case \'');
        if (blockEnd === -1) blockEnd = afterCase.indexOf('\n        default:');
        if (blockEnd === -1) blockEnd = afterCase.length; // End of file
        
        const code = afterCase.substring(0, blockEnd);
        
        // Check params
        def.params.forEach(p => {
            // Check if p is used.
            // params.p OR params['p'] OR const p = ...
            // Also handle "ksize" vs "params.ksize"
            // Usually usage is `params.p`
            const used = code.includes(`params.${p}`) || code.includes(`params['${p}']`) || code.includes(`const ${p}`);
            
            // Special exception: some params might be "options" in UI but hardcoded/logic-derived in code (rare).
            // But if it's in `parameters` list, it implies UI input.
            if (!used) {
                // Check if it's used in syntax only? No, must be in code.
                // Weak check: just string match the param name? No, too broad.
                // Let's flag it.
                // console.error(`Warning: param ${p} not found in ${def.id}`);
                // Maybe it is optional? 
                // Let's mark as Warning, not NG, unless it's critical.
                // result.reason.push(`Missing param usage: ${p}`);
                // Actually, let's look closer. "ksize" might be `params.ksize || 5`.
                // My check `code.includes('params.ksize')` covers that.
                
                // Exclude common false positives if any.
                // For now, strict.
                 result.reason.push(`Unused param: ${p}`);
            }
        });
        
        // Check src2
        if (def.inputCount === 2) {
             if (!code.includes('src2')) {
                  result.status = 'NG';
                  result.reason.push('Missing src2 usage');
             }
        }
        
        // Check Output
        // Does it write to dst? `dst` variable usage.
        // Most generic check: `dst` appears in code.
        if (!code.includes('dst')) {
             result.status = 'NG';
             result.reason.push('No output to dst');
        }
    }
    
    if (result.reason.length > 0 && result.status === 'Pass') {
        // If we have reasons (like unused params) but status is Pass, maybe downgrade or keep as Warning.
        // User asked for "NG if problem". Unused param is a problem? Yes.
        result.status = 'NG';
    }
    
    report.push(result);
});


// Output Markdown to file
const reportFile = path.join(__dirname, '../function_verification_report.md');
let output = '# Function Verification Report\n';
output += `Generated on: ${new Date().toISOString()}\n`;
output += `Total Functions Checked: ${report.length}\n\n`;

output += '| Function ID | Status | Issues |\n';
output += '|---|---|---|\n';

report.forEach(r => {
    const issues = r.reason.length > 0 ? r.reason.join(', ') : 'OK';
    const icon = r.status === 'Pass' ? '🟢' : '🔴';
    output += `| **${r.id}** | ${icon} ${r.status} | ${issues} |\n`;
});

fs.writeFileSync(reportFile, output);
console.error(`Report written to ${reportFile}`);

