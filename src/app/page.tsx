'use client';

import { useEffect, useState } from 'react';
import { Play, Loader2, AlertCircle, Menu, X } from 'lucide-react';
import { ImageUploader } from '@/components/ImageUploader';
import { FunctionSelector } from '@/components/FunctionSelector';
import { ParameterInput } from '@/components/ParameterInput';
import { OutputPanel } from '@/components/OutputPanel';
import { UsagePanel } from '@/components/UsagePanel';
import { OpenCVFunction } from '@/types/opencv';
import { OpenCVProcessor } from '@/lib/opencv-processor'; // Updated import path using lib
import opencvLogo from '@/components/ui/pencv-logo.png';
export default function App() {
  // State Management
  const [isOpenCVLoaded, setIsOpenCVLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [inputCanvas, setInputCanvas] = useState<HTMLCanvasElement | null>(null);
  const [inputImage, setInputImage] = useState<string | null>(null);
  const [inputCanvas2, setInputCanvas2] = useState<HTMLCanvasElement | null>(null);
  const [inputImage2, setInputImage2] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<OpenCVFunction | null>(null);
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
      alert('이 함수는 src1과 src2 두 개의 입력이 필요합니다.');
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
      alert(`처리 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
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
              <p className="text-lg text-gray-700 mb-2">OpenCV 로드 실패</p>
              <p className="text-sm text-gray-500">{loadingError}</p>
            </>
          ) : (
            <>
              <Loader2 size={48} className="mx-auto mb-4 text-blue-500 animate-spin" />
              <p className="text-lg text-gray-700">OpenCV 라이브러리 로딩 중...</p>
              <p className="text-sm text-gray-500 mt-2">잠시만 기다려주세요</p>
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
            <img src={opencvLogo.src} alt="OpenCV Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
                OpenCV Function Testing Board
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 hidden sm:block">
                학생들을 위한 OpenCV 함수 학습 및 실습 도구
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-right">
            <div className="text-xs xl:text-sm text-blue-100 max-w-md leading-tight">
              This project needs your help! Please contribute to <span className="text-white font-medium">enhancements, bug fixes, and UI improvements</span> at:
              <a 
                href="https://github.com/MacTechIN/OpenCVTestingBoard_Framework.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-1 text-white hover:text-yellow-200 transition-colors font-semibold underline decoration-blue-300 underline-offset-4"
              >
                github.com/MacTechIN/OpenCVTestingBoard_Framework
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-2 p-2 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="메뉴"
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
            📥 입력
          </button>
          <button
            onClick={() => setActiveTab('function')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'function'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            ⚙️ 함수
          </button>
          <button
            onClick={() => setActiveTab('output')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'output'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            📤 출력
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
                <span>입력 이미지 (src1)</span>
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
                    <span>입력 이미지 (src2)</span>
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
              <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                <span className="text-xl lg:text-2xl">⚙️</span>
                <span>함수 선택 및 파라미터 설정</span>
              </h2>

              <FunctionSelector
                selectedFunction={selectedFunction}
                onFunctionSelect={handleFunctionSelect}
              />

              {selectedFunction && (
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-sm lg:text-md font-semibold mb-2 lg:mb-3">파라미터 설정</h3>
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="mb-3 lg:mb-4 pb-3 lg:pb-4 border-b border-gray-300">
                      <div className="font-medium text-sm lg:text-base">{selectedFunction.name}</div>
                      <div className="text-xs lg:text-sm text-gray-600 mt-1">{selectedFunction.description}</div>
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
                    👆 위에서 함수를 선택하여 OpenCV 기능을 테스트하세요
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
                  <span>출력 결과</span>
                </h2>
                {selectedFunction && (
                  <button
                    onClick={handleProcess}
                    disabled={!inputCanvas || isProcessing}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
                  >
                    {isProcessing ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Play size={16} />
                    )}
                    <span>함수 실행</span>
                  </button>
                )}
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
                  <span>상세 사용법</span>
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
                <span>입력 이미지 (src1)</span>
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
                    <span>입력 이미지 (src2)</span>
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
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span>
                <span>함수 선택 및 파라미터 설정</span>
              </h2>

              <FunctionSelector
                selectedFunction={selectedFunction}
                onFunctionSelect={handleFunctionSelect}
              />

              {selectedFunction && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-2">파라미터 설정</h3>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="mb-3 pb-3 border-b border-gray-300">
                      <div className="font-medium text-sm">{selectedFunction.name}</div>
                      <div className="text-xs text-gray-600 mt-1">{selectedFunction.description}</div>
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
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors active:scale-95"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        처리 중...
                      </>
                    ) : (
                      <>
                        <Play size={18} />
                        함수 실행
                      </>
                    )}
                  </button>
                </div>
              )}

              {!selectedFunction && (
                <div className="mt-4 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg text-center">
                  <p className="text-sm text-blue-700">
                    👆 위에서 함수를 선택하여 OpenCV 기능을 테스트하세요
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'output' && (
            <div className="p-4">
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">📤</span>
                <span>출력 결과</span>
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
                  <span>사용법</span>
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
