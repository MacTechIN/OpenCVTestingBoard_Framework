import { OpenCVFunction } from '@/types/opencv';
import { Info } from 'lucide-react';

interface ParameterInputProps {
  selectedFunction: OpenCVFunction;
  parameters: Record<string, any>;
  onParameterChange: (name: string, value: any) => void;
}

export function ParameterInput({
  selectedFunction,
  parameters,
  onParameterChange,
}: ParameterInputProps) {
  if (selectedFunction.parameters.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center">
        <div className="size-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 border border-gray-100 shadow-sm">
          <Info size={16} className="text-gray-400" />
        </div>
        <p className="text-xs font-bold text-gray-500">추가 파라미터가 필요 없는 함수입니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {selectedFunction.parameters.map((param) => {
        const value = parameters[param.name] ?? param.defaultValue;

        return (
          <div key={param.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-tight flex items-center gap-1.5">
                {param.name}
                <span className="text-[10px] text-blue-500 font-mono">[{param.type}]</span>
              </label>
              <div className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {value}
              </div>
            </div>

            {param.type === 'slider' && (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-gray-400">{param.min}</span>
                  <input
                    type="range"
                    min={param.min}
                    max={param.max}
                    step={param.step || 1}
                    value={value}
                    onChange={(e) => onParameterChange(param.name, parseFloat(e.target.value))}
                    className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <span className="text-[10px] font-bold text-gray-400">{param.max}</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium italic">
                  * {param.description}
                </p>
              </div>
            )}

            {param.type === 'number' && (
              <div className="space-y-1">
                <input
                  type="number"
                  min={param.min}
                  max={param.max}
                  step={param.step || 1}
                  value={value}
                  onChange={(e) => onParameterChange(param.name, parseFloat(e.target.value))}
                  className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <p className="text-[10px] text-gray-400 font-medium italic">
                  {param.description}
                </p>
              </div>
            )}

            {param.type === 'select' && param.options && (
              <div className="space-y-1">
                <select
                  value={value}
                  onChange={(e) => onParameterChange(param.name, e.target.value)}
                  className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.5rem_center] bg-no-repeat"
                >
                  {param.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-gray-400 font-medium italic">
                  {param.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
