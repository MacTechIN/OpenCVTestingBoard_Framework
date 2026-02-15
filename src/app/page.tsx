'use client';

import { useEffect, useState } from 'react';
import { Play, Loader2, AlertCircle, Menu, X } from 'lucide-react';
import { ImageUploader } from '@/components/ImageUploader';
import { FunctionSelector } from '@/components/FunctionSelector';
import { ParameterInput } from '@/components/ParameterInput';
import { OutputPanel } from '@/components/OutputPanel';
import { UsagePanel } from '@/components/UsagePanel';
import { OpenCVFunction } from '@/types/opencv';
import { OpenCVProcessor } from '@/lib/opencv-processor';
import { useLanguage, LANGUAGES } from '@/lib/i18n';

export default function App() {
  const { language, setLanguage, t, translate } = useLanguage();
  // State Management
  const [isOpenCVLoaded, setIsOpenCVLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [inputCanvas, setInputCanvas] = useState<HTMLCanvasElement | null>(null);
  const [inputImage, setInputImage] = useState<string | null>(null);
  const [inputCanvas2, setInputCanvas2] = useState<HTMLCanvasElement | null>(null);
  const [inputImage2, setInputImage2] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<OpenCVFunction | null>(null); // - [x] UI Layout: Move 'Run Function' button next to 'Select Function & Parameters' title and increase its size by 1.5x
  const [parameters, setParameters] = useState<Record<string, any>>({});
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [processingInfo, setProcessingInfo] = useState('');
  const [processingTime, setProcessingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<'input' | 'function' | 'output'>('input');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // OpenCV.js 로드
  useEffect(() => {
    OpenCVProcessor.loadOpenCV()
      .then(() => {
        setIsOpenCVLoaded(true);
      })
      .catch((error) => {
        setLoadingError(error.message);
      });
  }, []);

  // Event Handlers
  const handleImageLoad = (canvas: HTMLCanvasElement) => {
    setInputCanvas(canvas);
    setInputImage(canvas.toDataURL());
    setOutputImage(null);
    setProcessingInfo('');
  };

  const handleImageLoad2 = (canvas: HTMLCanvasElement) => {
    setInputCanvas2(canvas);
    setInputImage2(canvas.toDataURL());
    setOutputImage(null);
    setProcessingInfo('');
  };

  const handleImageClear = () => {
    setInputCanvas(null);
    setInputImage(null);
    setOutputImage(null);
    setProcessingInfo('');
    setSelectedFunction(null);
    setParameters({});
  };

  const handleImageClear2 = () => {
    setInputCanvas2(null);
    setInputImage2(null);
    setOutputImage(null);
    setProcessingInfo('');
  };

  const handleFunctionSelect = (func: OpenCVFunction) => {
    setSelectedFunction(func);
    const initialParams: Record<string, any> = {};
    func.parameters.forEach((param) => {
      initialParams[param.name] = param.defaultValue;
    });
    setParameters(initialParams);
    setOutputImage(null);
    setProcessingInfo('');
  };

  const handleParameterChange = (name: string, value: any) => {
    setParameters((prev) => ({ ...prev, [name]: value }));
  };

  const handleProcess = () => {
    if (!inputCanvas || !selectedFunction) return;

    if (selectedFunction.inputCount && selectedFunction.inputCount >= 2 && !inputCanvas2) {
      alert(t('twoInputsRequired'));
      return;
    }

    setIsProcessing(true);
    const startTime = performance.now();

    try {
      const result = OpenCVProcessor.processImage(
        inputCanvas, 
        selectedFunction.id, 
        parameters,
        inputCanvas2 || undefined
      );
      const endTime = performance.now();

      setOutputImage(result.canvas.toDataURL());
      setProcessingInfo(result.info);
      setProcessingTime(endTime - startTime);
    } catch (error) {
      alert(`${t('processingError')}: ${error instanceof Error ? error.message : t('unknownError')}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSave = () => {
    if (!outputImage) return;
    const link = document.createElement('a');
    link.href = outputImage;
    link.download = `opencv-${selectedFunction?.id || 'result'}-${Date.now()}.png`;
    link.click();
  };

  // Loading State
  if (!isOpenCVLoaded) {
    return (
      <div className="size-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          {loadingError ? (
            <>
              <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
              <p className="text-lg text-gray-700 mb-2">{t('openCVLoadFailed')}</p>
              <p className="text-sm text-gray-500">{loadingError}</p>
            </>
          ) : (
            <>
              <Loader2 size={48} className="mx-auto mb-4 text-blue-500 animate-spin" />
              <p className="text-lg text-gray-700">{t('openCVLoading')}</p>
              <p className="text-sm text-gray-500 mt-2">{t('pleaseWait')}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  // Main UI
  return (
    <div className="size-full min-h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-6 py-3 sm:py-4 shadow-lg shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img src="/opencv-logo.png" alt="OpenCV Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
                {t('appName')}
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5 hidden sm:block">
                {t('appSubName')}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-blue-800/30 p-1 rounded-lg border border-blue-400/20">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                    language === lang.code
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-blue-200 hover:text-white hover:bg-blue-700/50'
                  }`}
                  title={lang.label}
                >
                  <span>{lang.flag}</span>
                  <span className="uppercase">{lang.code}</span>
                </button>
              ))}
            </div>

            <div className="text-[10px] xl:text-xs text-blue-100 max-w-[280px] leading-tight text-right border-l border-blue-400/30 pl-6">
              {t('contributionMessage')}
              <a 
                href="https://github.com/MacTechIN/OpenCVTestingBoard_Framework.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-1 text-white hover:text-yellow-200 transition-colors font-semibold underline decoration-blue-300 underline-offset-4"
              >
                GitHub Repository
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-2 p-2 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation */}
      <div className="lg:hidden bg-white border-b border-gray-300 shrink-0">
        <div className="flex">
          <button
            onClick={() => setActiveTab('input')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'input'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {t('input')}
          </button>
          <button
            onClick={() => setActiveTab('function')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'function'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {t('function')}
          </button>
          <button
            onClick={() => setActiveTab('output')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'output'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {t('output')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden min-h-0">
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full">
          {/* Left Panel - Input */}
          <div className="w-full lg:w-[30%] xl:w-[25%] border-r border-gray-300 bg-white overflow-y-auto">
            <div className="p-4 lg:p-6">
              <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                <span className="text-xl lg:text-2xl">📥</span>
                <span>{t('inputImageSrc1')}</span>
              </h2>
              <ImageUploader
                onImageLoad={handleImageLoad}
                currentImage={inputImage}
                onClear={handleImageClear}
              />

              {selectedFunction && selectedFunction.inputCount && selectedFunction.inputCount >= 2 && (
                <div className="mt-4 lg:mt-6">
                  <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                    <span className="text-xl lg:text-2xl">📥</span>
                    <span>{t('inputImageSrc2')}</span>
                  </h2>
                  <ImageUploader
                    onImageLoad={handleImageLoad2}
                    currentImage={inputImage2}
                    onClear={handleImageClear2}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Center Panel - Function Selection */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h2 className="text-lg lg:text-xl font-bold flex items-center gap-2">
                  <span className="text-xl lg:text-2xl">⚙️</span>
                  <span>{t('selectFunction')}</span>
                </h2>
                
                {selectedFunction && (
                  <button
                    onClick={handleProcess}
                    disabled={!inputCanvas || isProcessing}
                    className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md active:scale-95 ring-2 ring-blue-100"
                  >
                    {isProcessing ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <Play size={20} fill="currentColor" />
                    )}
                    <span>{isProcessing ? t('processing') : t('runFunction')}</span>
                  </button>
                )}
              </div>

              <FunctionSelector
                selectedFunction={selectedFunction}
                onFunctionSelect={handleFunctionSelect}
              />

              {selectedFunction && (
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3">{t('parameters')}</h3>
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="mb-3 lg:mb-4 pb-3 lg:pb-4 border-b border-gray-300">
                      <div className="font-medium text-sm lg:text-base">{translate(selectedFunction.name)}</div>
                      <div className="text-xs lg:text-sm text-gray-600 mt-1">{translate(selectedFunction.description)}</div>
                    </div>
                    <ParameterInput
                      selectedFunction={selectedFunction}
                      parameters={parameters}
                      onParameterChange={handleParameterChange}
                    />
                  </div>

                  {/* Moved button to Output result title */}
                </div>
              )}

              {!selectedFunction && (
                <div className="mt-4 lg:mt-6 p-6 lg:p-8 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
                  <p className="text-sm lg:text-base text-blue-700">
                    {t('noFunctionSelected')}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="w-full lg:w-[30%] xl:w-[25%] border-l border-gray-300 bg-white overflow-y-auto">
            <div className="p-4 lg:p-6">
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm py-3 flex items-center justify-between mb-4 border-b border-gray-200 -mx-4 lg:-mx-6 px-4 lg:px-6">
                <h2 className="text-base lg:text-lg font-bold flex items-center gap-2 text-slate-800">
                  <span className="text-xl lg:text-2xl">📤</span>
                  <span>{t('outputResult')}</span>
                </h2>
              </div>
              <OutputPanel
                outputImage={outputImage}
                processingInfo={processingInfo}
                processingTime={processingTime}
                onSave={handleSave}
              />
              
              <div className="mt-4 lg:mt-6">
                <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <span className="text-xl lg:text-2xl">📖</span>
                  <span>{t('usageGuide')}</span>
                </h2>
                <UsagePanel selectedFunction={selectedFunction} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden h-full overflow-y-auto">
          {activeTab === 'input' && (
            <div className="p-4">
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">📥</span>
                <span>{t('inputImageSrc1')}</span>
              </h2>
              <ImageUploader
                onImageLoad={handleImageLoad}
                currentImage={inputImage}
                onClear={handleImageClear}
              />

              {selectedFunction && selectedFunction.inputCount && selectedFunction.inputCount >= 2 && (
                <div className="mt-6">
                  <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">📥</span>
                    <span>{t('inputImageSrc2')}</span>
                  </h2>
                  <ImageUploader
                    onImageLoad={handleImageLoad2}
                    currentImage={inputImage2}
                    onClear={handleImageClear2}
                  />
                </div>
              )}
            </div>
          )}

          {activeTab === 'function' && (
            <div className="p-4">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span>
                <span>{t('selectFunction')}</span>
              </h2>

              <FunctionSelector
                selectedFunction={selectedFunction}
                onFunctionSelect={handleFunctionSelect}
              />

              {selectedFunction && (
                <div className="mt-4">
                  <h3 className="text-base font-bold mb-2">{t('parameters')}</h3>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="mb-3 pb-3 border-b border-gray-300">
                      <div className="font-medium text-sm">{translate(selectedFunction.name)}</div>
                      <div className="text-xs text-gray-600 mt-1">{translate(selectedFunction.description)}</div>
                    </div>
                    <ParameterInput
                      selectedFunction={selectedFunction}
                      parameters={parameters}
                      onParameterChange={handleParameterChange}
                    />
                  </div>

                  <button
                    onClick={handleProcess}
                    disabled={!inputCanvas || isProcessing}
                    className="mt-4 w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg ring-2 ring-blue-100"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {t('processing')}
                      </>
                    ) : (
                      <>
                        <Play size={20} fill="currentColor" />
                        {t('runFunction')}
                      </>
                    )}
                  </button>
                </div>
              )}

              {!selectedFunction && (
                <div className="mt-4 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
                  <p className="text-sm text-blue-700">
                    {t('noFunctionSelected')}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'output' && (
            <div className="p-4">
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">📤</span>
                <span>{t('outputResult')}</span>
              </h2>
              <OutputPanel
                outputImage={outputImage}
                processingInfo={processingInfo}
                processingTime={processingTime}
                onSave={handleSave}
              />
              
              <div className="mt-6">
                <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <span>{t('usageGuide')}</span>
                </h2>
                <UsagePanel selectedFunction={selectedFunction} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
