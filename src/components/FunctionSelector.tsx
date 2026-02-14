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
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Search Header */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
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
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Categories Sidebar */}
        <div className="w-24 sm:w-32 bg-gray-50 border-r border-gray-200 overflow-y-auto overflow-x-hidden border-t-0">
          <div className="px-2 py-3">
            <h3 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-3 px-2">
              {t('categories')}
            </h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`w-full group flex flex-col items-center justify-center py-3 px-1 rounded-lg transition-all ${
                    selectedCategoryId === cat.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'text-gray-600 hover:bg-white hover:text-blue-600 border border-transparent'
                  }`}
                >
                  <span className="text-xl mb-1 group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="text-[10px] leading-tight font-medium text-center break-words px-1">
                    {translate(cat.name)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Function List */}
        <div className="flex-1 overflow-y-auto bg-white scroll-smooth border-t-0">
          <div className="p-3">
            <h3 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-3 px-1 flex items-center justify-between">
              <span>{t('availableFunctions')}</span>
              <span className="bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded text-[9px] lowercase">
                {filteredFunctions.length} {t('functionsCount')}
              </span>
            </h3>
            <div className="space-y-1">
              {filteredFunctions.map((func) => {
                const isSelected = selectedFunction?.id === func.id;
                return (
                  <button
                    key={func.id}
                    onClick={() => onFunctionSelect(func)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all border group flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold ring-1 ring-blue-100 shadow-sm'
                        : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-200 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">
                        {translate(func.name)}
                      </div>
                    </div>
                    <ChevronRight size={14} className={`shrink-0 transition-transform ${isSelected ? 'translate-x-0.5 text-blue-500' : 'text-gray-300 group-hover:text-blue-400'}`} />
                  </button>
                );
              })}
              {filteredFunctions.length === 0 && (
                <div className="text-center py-10 px-4">
                  <div className="text-3xl mb-2 opacity-50">🔍</div>
                  <p className="text-xs text-gray-400">
                    {t('noFunctionsFound')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
