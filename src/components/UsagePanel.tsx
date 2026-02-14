import { Book, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { OpenCVFunction } from '@/types/opencv';

import { useLanguage } from '@/lib/i18n';

interface UsagePanelProps {
  selectedFunction: OpenCVFunction | null;
}

export const UsagePanel: React.FC<UsagePanelProps> = ({ selectedFunction }) => {
  const { t, translate } = useLanguage();

  if (!selectedFunction) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 lg:p-10 border border-gray-100 text-center animate-pulse">
        <div className="size-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-sm">
          <Book size={20} className="text-gray-300" />
        </div>
        <p className="text-sm font-medium text-gray-400">
          {t('selectFunctionToSeeUsage')}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-gray-200">
      <div className="flex flex-col gap-6 lg:gap-10">
        {/* Function Description */}
        <div className="group">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 lg:mb-3 flex items-center gap-2">
            <span className="w-1 h-3 lg:w-1.5 lg:h-4 bg-blue-500 rounded-full"></span>
            {t('functionDescription')}
          </h3>
          <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200 shadow-sm group-hover:border-blue-300 transition-colors">
            <h4 className="text-base lg:text-lg font-bold text-slate-800 mb-2">
              {translate(selectedFunction.name)}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {translate(selectedFunction.description)}
            </p>
          </div>
        </div>

        {/* Parameters */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 lg:mb-3 flex items-center gap-2">
            <span className="w-1 h-3 lg:w-1.5 lg:h-4 bg-emerald-500 rounded-full"></span>
            {t('parametersTitle')}
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-center sm:text-left">
            {selectedFunction.parameters.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {selectedFunction.parameters.map((param) => (
                  <div key={param.name} className="p-3 lg:p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs lg:text-sm font-bold text-slate-800">{translate(param.name)}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full font-bold">
                          {param.type}
                        </span>
                      </div>
                      <p className="text-[11px] lg:text-xs text-slate-500 leading-tight">
                        {translate(param.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 lg:p-8 text-gray-400 text-xs lg:text-sm italic font-medium">
                {t('noSpecificParameters')}
              </div>
            )}
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 lg:mb-3 flex items-center gap-2">
            <span className="w-1 h-3 lg:w-1.5 lg:h-4 bg-yellow-500 rounded-full"></span>
            {t('codeExample')}
          </h3>
          <div className="bg-slate-900 p-4 lg:p-6 rounded-xl shadow-inner border border-slate-800 overflow-x-auto">
            <pre className="text-xs lg:text-sm text-blue-300 font-mono leading-relaxed">
              <code>{selectedFunction.syntax}</code>
            </pre>
          </div>
        </div>

        {/* View Documentation */}
        <a
          href={selectedFunction.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
              <ExternalLink size={20} />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-800 block">{t('viewDocumentation')}</span>
              <span className="text-[10px] text-slate-400 font-medium">OpenCV Official Library Docs</span>
            </div>
          </div>
          <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
        </a>
      </div>
    </div>
  );
}