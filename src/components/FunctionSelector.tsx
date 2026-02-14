import { Search, ChevronRight, AlertCircle, Info } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, opencvFunctions } from '@/data/opencv-functions';
import { OpenCVFunction } from '@/types/opencv';

interface FunctionSelectorProps {
  selectedFunction: OpenCVFunction | null;
  onFunctionSelect: (func: OpenCVFunction) => void;
}

export function FunctionSelector({ selectedFunction, onFunctionSelect }: FunctionSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFunctions = useMemo(() => {
    return opencvFunctions.filter((func) => {
      const categoryMatch = selectedCategory === 'all' || func.category === selectedCategory;
      const searchMatch =
        searchTerm === '' ||
        func.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 font-mono">Categories</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 font-mono">Search Function</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or description..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
            Available ({filteredFunctions.length})
          </label>
        </div>
        
        <div className="max-h-[350px] overflow-y-auto space-y-1 pr-2">
          {filteredFunctions.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-gray-400">No functions found</p>
            </div>
          ) : (
            filteredFunctions.map((func) => {
              const isSelected = selectedFunction?.id === func.id;
              return (
                <button
                  key={func.id}
                  onClick={() => onFunctionSelect(func)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-all border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-transparent border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-100'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm truncate">
                      {func.name}
                    </div>
                  </div>
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isSelected ? 'opacity-100' : ''}`} />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
