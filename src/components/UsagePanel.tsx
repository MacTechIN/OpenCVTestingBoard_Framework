import { Book, BookOpen, ExternalLink } from 'lucide-react';
import { OpenCVFunction } from '@/types/opencv';

interface UsagePanelProps {
  selectedFunction: OpenCVFunction | null;
}

export function UsagePanel({ selectedFunction }: UsagePanelProps) {
  if (!selectedFunction) {
    return (
      <div className="h-full flex flex-col justify-center items-center text-slate-400 space-y-3 p-8 border-2 border-dashed border-slate-200 rounded-xl">
        <Book className="w-10 h-10 opacity-50" />
        <p className="text-sm font-medium">함수를 선택하면 사용법이 표시됩니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Syntax Card */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
          <BookOpen className="w-5 h-5 text-slate-500" />
          <h3 className="font-semibold text-slate-700">함수 문법</h3>
        </div>
        <div className="p-4">
          <div className="bg-slate-900 rounded-lg p-5 font-mono text-sm text-green-400 overflow-x-auto">
            {selectedFunction.syntax}
          </div>
        </div>
      </div>

      {/* Parameter Card */}
      <div className="bg-blue-50/50 rounded-xl border border-blue-100 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-blue-100/50">
          <h3 className="font-bold text-blue-900">파라미터 설명</h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="text-sm text-blue-800 space-y-2">
            {!selectedFunction.customSrcLabel && !selectedFunction.hideDst && (
              <>
                <div className="flex gap-2">
                  <span className="font-bold min-w-[40px] text-blue-700">
                    {selectedFunction.inputCount === 2 ? 'src1, src2:' : 'src:'}
                  </span>
                  <span>
                    {selectedFunction.inputCount === 2 ? '입력 이미지 1, 2' : '입력 소스 이미지'}
                  </span>
                </div>
              </>
            )}
            
            {selectedFunction.customSrcLabel && (
              <div className="flex gap-2">
                <span className="font-bold min-w-[40px] text-blue-700">{selectedFunction.customSrcLabel.split(':')[0]}:</span>
                <span>{selectedFunction.customSrcLabel.split(':')[1] || '입력 이미지'}</span>
              </div>
            )}

            {!selectedFunction.hideDst && (
              <div className="flex gap-2">
                <span className="font-bold min-w-[40px] text-blue-700">
                  {selectedFunction.customDstLabel?.split(':')[0] || 'dst:'}
                </span>
                <span>
                  {selectedFunction.customDstLabel?.split(':')[1] || '출력 이미지 (목적지)'}
                </span>
              </div>
            )}
            
            {/* Dynamic Parameters */}
            {selectedFunction.parameters.map((param) => (
              <div key={param.name} className="flex gap-2">
                <span className="font-bold min-w-[40px] text-blue-700">{param.name}:</span>
                <span>{param.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Link */}
      <a
        href={selectedFunction.documentation}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-all font-bold shadow-md hover:shadow-lg transform active:scale-[0.98]"
      >
        <ExternalLink className="w-5 h-5" />
        OpenCV 공식 문서 보기
      </a>
    </div>
  );
}