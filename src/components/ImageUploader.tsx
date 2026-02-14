import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';

interface ImageUploaderProps {
  onImageLoad: (canvas: HTMLCanvasElement) => void;
  currentImage: string | null;
  onClear: () => void;
}

export function ImageUploader({ onImageLoad, currentImage, onClear }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          onImageLoad(canvas);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {!currentImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center transition-colors ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Upload className="mx-auto mb-3 sm:mb-4 text-gray-400" size={36} />
          <p className="mb-2 text-xs sm:text-sm text-gray-600">
            이미지를 드래그하거나 클릭하여 업로드
          </p>
          <p className="text-xs text-gray-500 mb-3 sm:mb-4">PNG, JPG, JPEG 지원</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 sm:px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all"
          >
            파일 선택
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileSelect(file);
            }}
          />
        </div>
      ) : (
        <div className="relative">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <img
              src={currentImage}
              alt="업로드된 이미지"
              className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 object-contain bg-gray-50"
            />
          </div>
          <button
            onClick={onClear}
            className="absolute top-2 right-2 p-1.5 sm:p-2 bg-red-500 text-white rounded-full hover:bg-red-600 active:scale-95 transition-all shadow-lg"
            title="이미지 제거"
          >
            <X size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
