import React from 'react';
import { OpenCVFunction } from '@/types/opencv';
import { Info } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface ParameterInputProps {
  selectedFunction: OpenCVFunction;
  parameters: Record<string, any>;
  onParameterChange: (name: string, value: any) => void;
}

export const ParameterInput: React.FC<ParameterInputProps> = ({
  selectedFunction,
  parameters,
  onParameterChange,
}) => {
  const { t, translate } = useLanguage();

  if (selectedFunction.parameters.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center">
        <div className="size-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 border border-gray-100 shadow-sm">
          <Info size={16} className="text-gray-400" />
        </div>
        <p className="text-xs font-bold text-gray-500">{t('noParametersRequired')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {selectedFunction.parameters.map((param) => (
        <div key={param.name} className="space-y-2 group">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs lg:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              {translate(param.name)}
              <span className="text-[10px] lg:text-xs font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">
                {param.type}
              </span>
            </label>
            <span className="text-[10px] lg:text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full self-start sm:self-auto">
              {t('currentValue')}: {parameters[param.name]}
            </span>
          </div>
          
          {param.description && (
            <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed pl-3 border-l-2 border-slate-200 group-hover:border-blue-300 transition-colors">
              {translate(param.description)}
            </p>
          )}

          <div className="pl-3 py-1">
            {param.type === 'slider' || param.type === 'number' ? (
              <div className="flex items-center gap-3 lg:gap-4 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
                <input
                  type="range"
                  min={param.min}
                  max={param.max}
                  step={param.step || 1}
                  value={parameters[param.name] ?? param.defaultValue}
                  onChange={(e) => onParameterChange(param.name, Number(e.target.value))}
                  className="flex-1 accent-blue-600 h-1.5 lg:h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={param.min}
                    max={param.max}
                    step={param.step || 1}
                    value={parameters[param.name] ?? param.defaultValue}
                    onChange={(e) => onParameterChange(param.name, Number(e.target.value))}
                    className="w-12 lg:w-16 px-1.5 lg:px-2 py-1 text-xs lg:text-sm border border-slate-200 rounded text-center font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <div className="flex flex-col text-[8px] lg:text-[10px] text-slate-400 font-mono leading-none">
                    <span>MAX: {param.max}</span>
                    <span>MIN: {param.min}</span>
                  </div>
                </div>
              </div>
            ) : param.type === 'select' && param.options ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {param.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onParameterChange(param.name, option.value)}
                    className={`px-3 py-2 text-xs lg:text-sm rounded-lg border text-left transition-all ${
                      parameters[param.name] === option.value
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200 ring-2 ring-blue-100'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    <div className="font-semibold">{translate(option.label)}</div>
                    <div className={`text-[9px] lg:text-[10px] mt-0.5 ${
                      parameters[param.name] === option.value ? 'text-blue-100' : 'text-slate-400 font-mono'
                    }`}>
                      {option.value}
                    </div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
