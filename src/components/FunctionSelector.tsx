import { Search, ChevronRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { categories, opencvFunctions } from '@/data/opencv-functions';
import { OpenCVFunction } from '@/types/opencv';
import { useLanguage } from '@/lib/i18n';

interface FunctionSelectorProps {
  selectedFunction: OpenCVFunction | null;
  onFunctionSelect: (func: OpenCVFunction) => void;
}

export const FunctionSelector: React.FC<FunctionSelectorProps> = ({
  selectedFunction,
  onFunctionSelect,
}) => {
  const { t, translate } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('color');

  // Filter functions based on search and category
  const filteredFunctions = useMemo(() => {
    return opencvFunctions.filter((func) => {
      const matchesSearch = translate(func.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
                           func.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = func.category === selectedCategoryId;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategoryId, translate]);

  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden">
      {/* Search Header - Keeping it but styling it to fit */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        {/* Categories Grid - 5(C) x 5(R) */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 shrink-0">
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                   setSelectedCategoryId(cat.id);
                   // Reset selection or auto-select first?
                   // Default: just filter the dropdown.
                }}
                className={`flex flex-col items-center justify-center p-0.5 rounded-lg transition-all aspect-square border ${
                  selectedCategoryId === cat.id
                    ? 'bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-300 shadow-sm'
                    : 'bg-white border-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900 hover:border-gray-200'
                }`}
                title={translate(cat.name)}
              >
                <span className="text-2xl sm:text-3xl mb-0.5 sm:mb-1 transform scale-110">{cat.icon}</span>
                <span className="text-[11px] sm:text-xs text-center leading-tight line-clamp-2 w-full px-0.5 font-medium">
                  {translate(cat.name)}
                </span>
                {/* Small indicator if search matches content in this category - Optional improvement */}
              </button>
            ))}
          </div>
        </div>

        {/* Function Dropdown */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm shrink-0">
          <label className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider flex items-center justify-between">
            <span>{t('availableFunctions')}</span>
            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {filteredFunctions.length} {t('functionsCount')}
            </span>
          </label>
          
          <div className="relative">
            <select
              value={filteredFunctions.some(f => f.id === selectedFunction?.id) ? selectedFunction?.id : ''}
              onChange={(e) => {
                const func = filteredFunctions.find(f => f.id === e.target.value);
                if (func) onFunctionSelect(func);
              }}
              className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 pr-8 transition-colors hover:bg-white inset-ring-blue-100"
            >
              <option value="" disabled>
                {filteredFunctions.length === 0 ? t('noFunctionsFound') : t('selectFunction')}
              </option>
              {filteredFunctions.map((func) => (
                <option key={func.id} value={func.id}>
                  {translate(func.name)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
               <ChevronRight className="rotate-90" size={16} />
            </div>
          </div>
          
          {selectedFunction && (
             <div className="mt-2 text-xs text-gray-500 px-1">
               {translate(selectedFunction.description)}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
