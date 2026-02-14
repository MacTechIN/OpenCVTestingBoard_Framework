import { motion, AnimatePresence } from 'framer-motion';
import { Download, Info, CheckCircle2, Clock } from 'lucide-react';

interface OutputPanelProps {
  outputImage: string | null;
  processingInfo: string;
  processingTime: number;
  onSave: () => void;
}

import { useLanguage } from '@/lib/i18n';

interface OutputPanelProps {
  outputImage: string | null;
  processingInfo: string;
  processingTime: number;
  onSave: () => void;
}

export function OutputPanel({
  outputImage,
  processingInfo,
  processingTime,
  onSave,
}: OutputPanelProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="group relative border-2 border-dashed border-gray-200 rounded-3xl overflow-hidden bg-gray-50/50 transition-all hover:border-blue-400/50">
        <AnimatePresence mode="wait">
          {outputImage ? (
            <motion.img
              key={outputImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={outputImage}
              alt={t('processedResult')}
              className="w-full h-auto max-h-[400px] object-contain relative z-10"
            />
          ) : (
            <div className="h-80 flex items-center justify-center text-gray-400">
              <div className="text-center space-y-3">
                <div className="size-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Info size={32} className="opacity-50" />
                </div>
                <p className="font-medium text-sm">{t('resultWillBeShownHere')}</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {outputImage && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-5 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-2xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-blue-900/60 uppercase tracking-widest mb-2">{t('processingDetails')}</div>
                  <div className="text-sm text-blue-800 font-medium leading-relaxed">{processingInfo}</div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs font-bold text-blue-600">
                    <Clock size={12} />
                    {processingTime.toFixed(2)}ms
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSave}
              className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 text-white rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all"
            >
              <Download size={20} />
              {t('saveResultImage')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
