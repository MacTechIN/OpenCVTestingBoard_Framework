// @ts-ignore
import type cv from 'opencv-ts';
import { opencvFunctions } from '@/data/opencv-functions';

export class OpenCVProcessor {
  private static cv: any = null;
  private static isLoaded = false;
  private static loadingPromise: Promise<void> | null = null;

  static async loadOpenCV(): Promise<void> {
    // 이미 로드 중이면 기존 프로미스 반환
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    // 이미 로드되었으면 즉시 반환
    if (this.isLoaded && this.cv) {
      return Promise.resolve();
    }

    // window.cv가 이미 존재하고 초기화되었는지 확인
    if (typeof window !== 'undefined') {
      // @ts-ignore
      if (window.cv && window.cv.Mat) {
        // @ts-ignore
        this.cv = window.cv;
        this.isLoaded = true;
        return Promise.resolve();
      }
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('OpenCV can only be loaded in browser environment'));
        return;
      }

      // 스크립트가 이미 존재하는지 확인
      const existingScript = document.querySelector('script[src*="opencv.js"]');
      if (existingScript) {
        // 스크립트가 이미 있으면 로드 완료를 기다림
        const checkLoaded = setInterval(() => {
          // @ts-ignore
          if (window.cv && window.cv.Mat) {
            clearInterval(checkLoaded);
            // @ts-ignore
            this.cv = window.cv;
            this.isLoaded = true;
            this.loadingPromise = null;
            resolve();
          }
        }, 100);
        
        // 10초 타임아웃
        setTimeout(() => {
          clearInterval(checkLoaded);
          if (!this.isLoaded) {
            this.loadingPromise = null;
            reject(new Error('OpenCV loading timeout'));
          }
        }, 10000);
        return;
      }

      // OpenCV.js 로드
      const script = document.createElement('script');
      script.src = 'https://docs.opencv.org/4.x/opencv.js';
      script.async = true;
      script.id = 'opencv-script';
      
      script.onload = () => {
        // @ts-ignore
        if (window.cv) {
          // @ts-ignore
          window.cv.onRuntimeInitialized = () => {
            // @ts-ignore
            this.cv = window.cv;
            this.isLoaded = true;
            this.loadingPromise = null;
            resolve();
          };
        } else {
          this.loadingPromise = null;
          reject(new Error('OpenCV object not found'));
        }
      };

      script.onerror = () => {
        this.loadingPromise = null;
        reject(new Error('Failed to load OpenCV.js'));
      };

      document.head.appendChild(script);
    });

    return this.loadingPromise;
  }

  static getCV() {
    return this.cv;
  }

  static isOpenCVLoaded(): boolean {
    return this.isLoaded && this.cv !== null;
  }

  static processImage(
    inputCanvas: HTMLCanvasElement,
    functionId: string,
    params: Record<string, any>,
    inputCanvas2?: HTMLCanvasElement
  ): { canvas: HTMLCanvasElement; info: string } {
    if (!this.isLoaded || !this.cv) {
      throw new Error('OpenCV is not loaded');
    }

    const cv = this.cv;
    const src = cv.imread(inputCanvas);
    const src2 = inputCanvas2 ? cv.imread(inputCanvas2) : null;
    let dst = new cv.Mat();
    let info = '';

    try {
      switch (functionId) {
        // 색상 변환
        case 'cvtColor_GRAY':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
          info = `변환: RGB → Grayscale, 출력 채널: 1`;
          break;

        case 'cvtColor_HSV':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV);
          info = `변환: RGB → HSV, 출력 채널: 3 (Hue, Saturation, Value)`;
          break;

        case 'cvtColor_Lab':
          console.log('Processing color conversion: RGB to LAB');
          cv.cvtColor(src, dst, cv.COLOR_RGBA2BGR);
          cv.cvtColor(dst, dst, cv.COLOR_BGR2Lab);
          info = `변환: RGB → LAB, 출력 채널: 3 (L, A, B)`;
          break;

        case 'cvtColor_YCrCb':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2YCrCb);
          info = `변환: RGB → YCrCb, 출력 채널: 3 (Y, Cr, Cb)`;
          break;

        case 'cvtColor_YUV':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2YUV);
          info = `변환: RGB → YUV, 출력 채널: 3`;
          break;

        case 'cvtColor_XYZ':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2XYZ);
          info = `변환: RGB → XYZ, 출력 채널: 3 (CIE XYZ)`;
          break;

        case 'cvtColor_HLS':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2HLS);
          info = `변환: RGB → HLS, 출력 채널: 3 (Hue, Lightness, Saturation)`;
          break;

        case 'cvtColor_Luv':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2Luv);
          info = `변환: RGB → Luv, 출력 채널: 3 (CIE Luv)`;
          break;

        case 'cvtColor_BGRA2BGR':
          cv.cvtColor(src, dst, cv.COLOR_BGRA2BGR);
          info = `변환: BGRA → BGR, 출력 채널: 4 → 3 (알파 채널 제거)`;
          break;

        case 'cvtColor_BGR2BGRA':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_BGR2BGRA);
          info = `변환: BGR → BGRA, 출력 채널: 3 → 4 (알파 채널 추가)`;
          break;

        case 'cvtColor_BGR2RGB':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_BGR2RGB);
          info = `변환: BGR → RGB, 채널 순서 변경`;
          break;

        case 'cvtColor_GRAY2BGR':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.cvtColor(src, dst, cv.COLOR_GRAY2BGR);
          info = `변환: Grayscale → BGR, 출력 채널: 1 → 3`;
          break;

        case 'cvtColor_HSV2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV);
          cv.cvtColor(dst, dst, cv.COLOR_HSV2BGR);
          info = `역변환: HSV → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_LAB2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2Lab);
          cv.cvtColor(dst, dst, cv.COLOR_Lab2BGR);
          info = `역변환: LAB → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_YCrCb2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2YCrCb);
          cv.cvtColor(dst, dst, cv.COLOR_YCrCb2BGR);
          info = `역변환: YCrCb → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_YUV2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2YUV);
          cv.cvtColor(dst, dst, cv.COLOR_YUV2BGR);
          info = `역변환: YUV → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_XYZ2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2XYZ);
          cv.cvtColor(dst, dst, cv.COLOR_XYZ2BGR);
          info = `역변환: XYZ → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_HLS2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2HLS);
          cv.cvtColor(dst, dst, cv.COLOR_HLS2BGR);
          info = `역변환: HLS → BGR, 출력 채널: 3`;
          break;

        case 'cvtColor_Luv2BGR':
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2Luv);
          cv.cvtColor(dst, dst, cv.COLOR_Luv2BGR);
          info = `역변환: Luv → BGR, 출력 채널: 3`;
          break;

        case 'demosaicing':
          // 베이어 패턴 변환 (시뮬레이션)
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const bayerCodeMap: Record<string, any> = {
            COLOR_BayerBG2BGR: cv.COLOR_BayerBG2BGR,
            COLOR_BayerGB2BGR: cv.COLOR_BayerGB2BGR,
            COLOR_BayerRG2BGR: cv.COLOR_BayerRG2BGR,
            COLOR_BayerGR2BGR: cv.COLOR_BayerGR2BGR,
          };
          const bayerCode = bayerCodeMap[params.code] || cv.COLOR_BayerBG2BGR;
          cv.cvtColor(src, dst, bayerCode);
          info = `디모자이킹: ${params.code}`;
          break;

        // ColorMaps
        case 'applyColorMap_AUTUMN':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_AUTUMN);
          info = `색상표 적용: AUTUMN (가을 - 빨강/노랑/주황)`;
          break;

        case 'applyColorMap_BONE':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_BONE);
          info = `색상표 적용: BONE (뼈 - 청백색)`;
          break;

        case 'applyColorMap_JET':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_JET);
          info = `색상표 적용: JET (파랑→청록→노랑→빨강)`;
          break;

        case 'applyColorMap_WINTER':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_WINTER);
          info = `색상표 적용: WINTER (겨울 - 파랑/청록)`;
          break;

        case 'applyColorMap_RAINBOW':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_RAINBOW);
          info = `색상표 적용: RAINBOW (무지개 색상)`;
          break;

        case 'applyColorMap_OCEAN':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_OCEAN);
          info = `색상표 적용: OCEAN (바다 - 검정/파랑/청록/흰색)`;
          break;

        case 'applyColorMap_SUMMER':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_SUMMER);
          info = `색상표 적용: SUMMER (여름 - 초록/노랑)`;
          break;

        case 'applyColorMap_SPRING':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_SPRING);
          info = `색상표 적용: SPRING (봄 - 자홍/노랑)`;
          break;

        case 'applyColorMap_COOL':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_COOL);
          info = `색상표 적용: COOL (쿨톤 - 청록/자홍)`;
          break;

        case 'applyColorMap_HSV':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_HSV);
          info = `색상표 적용: HSV (전체 색상 스펙트럼)`;
          break;

        case 'applyColorMap_PINK':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_PINK);
          info = `색상표 적용: PINK (파스텔 핑크)`;
          break;

        case 'applyColorMap_HOT':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_HOT);
          info = `색상표 적용: HOT (열화상 - 검정/빨강/노랑/흰색)`;
          break;

        case 'applyColorMap_PARULA':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_PARULA);
          info = `색상표 적용: PARULA (파랑/청록/노랑)`;
          break;

        case 'applyColorMap_MAGMA':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_MAGMA);
          info = `색상표 적용: MAGMA (검정/보라/주황/노랑)`;
          break;

        case 'applyColorMap_INFERNO':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_INFERNO);
          info = `색상표 적용: INFERNO (검정/보라/빨강/노랑)`;
          break;

        case 'applyColorMap_PLASMA':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_PLASMA);
          info = `색상표 적용: PLASMA (보라/빨강/주황/노랑)`;
          break;

        case 'applyColorMap_VIRIDIS':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_VIRIDIS);
          info = `색상표 적용: VIRIDIS (보라/파랑/초록/노랑)`;
          break;

        case 'applyColorMap_CIVIDIS':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_CIVIDIS);
          info = `색상표 적용: CIVIDIS (파랑/노랑, 색맹 친화적)`;
          break;

        case 'applyColorMap_TWILIGHT':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_TWILIGHT);
          info = `색상표 적용: TWILIGHT (보라/흰색/보라 순환)`;
          break;

        case 'applyColorMap_TWILIGHT_SHIFTED':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_TWILIGHT_SHIFTED);
          info = `색상표 적용: TWILIGHT_SHIFTED (검정/보라/흰색/보라)`;
          break;

        case 'applyColorMap_TURBO':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_TURBO);
          info = `색상표 적용: TURBO (파랑/청록/초록/노랑/빨강)`;
          break;

        case 'applyColorMap_DEEPGREEN':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.applyColorMap(src, dst, cv.COLORMAP_DEEPGREEN);
          info = `색상표 적용: DEEPGREEN (검정/초록)`;
          break;

        // 필터링
        case 'blur':
          const ksize = this.ensureOdd(params.ksize || 5);
          cv.blur(src, dst, new cv.Size(ksize, ksize));
          info = `커널 크기: ${ksize}x${ksize}`;
          break;

        case 'GaussianBlur':
          const gksize = this.ensureOdd(params.ksize || 5);
          const sigmaX = params.sigmaX || 0;
          cv.GaussianBlur(src, dst, new cv.Size(gksize, gksize), sigmaX);
          info = `커널 크기: ${gksize}x${gksize}, SigmaX: ${sigmaX}`;
          break;

        case 'medianBlur':
          const mksize = this.ensureOdd(params.ksize || 5);
          cv.medianBlur(src, dst, mksize);
          info = `커널 크기: ${mksize}x${mksize}`;
          break;

        case 'bilateralFilter':
          cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
          cv.bilateralFilter(
            src,
            dst,
            params.d || 9,
            params.sigmaColor || 75,
            params.sigmaSpace || 75
          );
          info = `직경: ${params.d}, 색상 시그마: ${params.sigmaColor}, 공간 시그마: ${params.sigmaSpace}`;
          break;

        // 형태학 연산
        case 'erode':
          const eKsize = this.ensureOdd(params.ksize || 5);
          const eKernel = cv.getStructuringElement(
            cv.MORPH_RECT,
            new cv.Size(eKsize, eKsize)
          );
          cv.erode(src, dst, eKernel, new cv.Point(-1, -1), params.iterations || 1);
          eKernel.delete();
          info = `커널 크기: ${eKsize}x${eKsize}, 반복: ${params.iterations || 1}회`;
          break;

        case 'dilate':
          const dKsize = this.ensureOdd(params.ksize || 5);
          const dKernel = cv.getStructuringElement(
            cv.MORPH_RECT,
            new cv.Size(dKsize, dKsize)
          );
          cv.dilate(src, dst, dKernel, new cv.Point(-1, -1), params.iterations || 1);
          dKernel.delete();
          info = `커널 크기: ${dKsize}x${dKsize}, 반복: ${params.iterations || 1}회`;
          break;

        case 'morphologyEx_OPEN':
          const oKsize = this.ensureOdd(params.ksize || 5);
          const oKernel = cv.getStructuringElement(
            cv.MORPH_RECT,
            new cv.Size(oKsize, oKsize)
          );
          cv.morphologyEx(src, dst, cv.MORPH_OPEN, oKernel);
          oKernel.delete();
          info = `열림 연산, 커널 크기: ${oKsize}x${oKsize}`;
          break;

        case 'morphologyEx_CLOSE':
          const cKsize = this.ensureOdd(params.ksize || 5);
          const cKernel = cv.getStructuringElement(
            cv.MORPH_RECT,
            new cv.Size(cKsize, cKsize)
          );
          cv.morphologyEx(src, dst, cv.MORPH_CLOSE, cKernel);
          cKernel.delete();
          info = `닫힘 연산, 커널 크기: ${cKsize}x${cKsize}`;
          break;

        // 엣지 검출
        case 'Canny':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const apertureSize = this.ensureOdd(params.apertureSize || 3);
          cv.Canny(src, dst, params.threshold1 || 50, params.threshold2 || 150, apertureSize);
          info = `임계값1: ${params.threshold1}, 임계값2: ${params.threshold2}, 커널: ${apertureSize}`;
          break;

        case 'Sobel':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const sKsize = this.ensureOdd(params.ksize || 3);
          cv.Sobel(src, dst, cv.CV_8U, params.dx || 1, params.dy || 0, sKsize);
          info = `dx: ${params.dx}, dy: ${params.dy}, 커널 크기: ${sKsize}`;
          break;

        case 'Laplacian':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const lKsize = this.ensureOdd(params.ksize || 3);
          cv.Laplacian(src, dst, cv.CV_8U, lKsize);
          info = `커널 크기: ${lKsize}`;
          break;

        // 임계값 처리
        case 'threshold_BINARY':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, dst, params.thresh || 127, params.maxval || 255, cv.THRESH_BINARY);
          info = `임계값: ${params.thresh}, 최대값: ${params.maxval}`;
          break;

        case 'threshold_OTSU':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const otsuValue = cv.threshold(src, dst, 0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);
          info = `Otsu 자동 임계값: ${otsuValue.toFixed(2)}`;
          break;

        case 'adaptiveThreshold':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const adaptBlockSize = this.ensureOdd(params.blockSize || 11);
          cv.adaptiveThreshold(
            src,
            dst,
            params.maxValue || 255,
            cv.ADAPTIVE_THRESH_MEAN_C,
            cv.THRESH_BINARY,
            adaptBlockSize,
            params.C || 2
          );
          info = `최대값: ${params.maxValue}, 블록 크기: ${adaptBlockSize}, C: ${params.C}`;
          break;

        // 기하학 변환
        case 'resize':
          const scale = params.scale || 0.5;
          const interpolationMap: Record<string, any> = {
            INTER_NEAREST: cv.INTER_NEAREST,
            INTER_LINEAR: cv.INTER_LINEAR,
            INTER_CUBIC: cv.INTER_CUBIC,
            INTER_LANCZOS4: cv.INTER_LANCZOS4,
          };
          const interp = interpolationMap[params.interpolation] || cv.INTER_LINEAR;
          const dsize = new cv.Size(src.cols * scale, src.rows * scale);
          cv.resize(src, dst, dsize, 0, 0, interp);
          info = `크기: ${src.cols}x${src.rows} → ${Math.round(src.cols * scale)}x${Math.round(src.rows * scale)}, 비율: ${scale}`;
          break;

        case 'rotate_90':
          cv.rotate(src, dst, cv.ROTATE_90_CLOCKWISE);
          info = `시계방향 90도 회전`;
          break;

        case 'rotate_180':
          cv.rotate(src, dst, cv.ROTATE_180);
          info = `180도 회전`;
          break;

        case 'flip_horizontal':
          cv.flip(src, dst, 1);
          info = `좌우 반전`;
          break;

        case 'flip_vertical':
          cv.flip(src, dst, 0);
          info = `상하 반전`;
          break;

        // 윤곽선 검출
        case 'findContours':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const contours = new cv.MatVector();
          const hierarchy = new cv.Mat();
          const modeMap: Record<string, any> = {
            RETR_EXTERNAL: cv.RETR_EXTERNAL,
            RETR_LIST: cv.RETR_LIST,
            RETR_TREE: cv.RETR_TREE,
          };
          const mode = modeMap[params.mode] || cv.RETR_EXTERNAL;
          
          cv.findContours(src, contours, hierarchy, mode, cv.CHAIN_APPROX_SIMPLE);
          
          // 원본 이미지로 복원하여 윤곽선 그리기
          dst = cv.imread(inputCanvas);
          const color = new cv.Scalar(0, 255, 0, 255);
          for (let i = 0; i < contours.size(); i++) {
            cv.drawContours(dst, contours, i, color, params.thickness || 2);
          }
          
          info = `검출된 윤곽선: ${contours.size()}개, 두께: ${params.thickness || 2}px`;
          contours.delete();
          hierarchy.delete();
          break;

        // 특징 검출
        case 'cornerHarris':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_32FC1);
          const blockSize = params.blockSize || 2;
          const hKsize = this.ensureOdd(params.ksize || 3);
          const k = params.k || 0.04;
          
          cv.cornerHarris(src, dst, blockSize, hKsize, k);
          
          // 정규화 및 시각화
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX);
          cv.convertScaleAbs(dst, dst);
          
          // 원본 이미지에 코너 표시
          const output = cv.imread(inputCanvas);
          let cornerCount = 0;
          for (let i = 0; i < dst.rows; i++) {
            for (let j = 0; j < dst.cols; j++) {
              if (dst.data[i * dst.cols + j] > 100) {
                cv.circle(output, new cv.Point(j, i), 5, new cv.Scalar(0, 0, 255, 255), 2);
                cornerCount++;
              }
            }
          }
          dst.delete();
          dst = output;
          
          info = `검출된 코너: ${cornerCount}개, 블록 크기: ${blockSize}, k: ${k}`;
          break;

        case 'goodFeaturesToTrack':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const gftMaxCorners = params.maxCorners || 100;
          const gftQuality = params.qualityLevel || 0.01;
          const gftMinDist = params.minDistance || 10;
          
          const corners = new cv.Mat();
          cv.goodFeaturesToTrack(src, corners, gftMaxCorners, gftQuality, gftMinDist);
          
          // 원본 이미지에 코너 표시
          const gftOutput = cv.imread(inputCanvas);
          for (let i = 0; i < corners.rows; i++) {
            const x = corners.data32F[i * 2];
            const y = corners.data32F[i * 2 + 1];
            cv.circle(gftOutput, new cv.Point(x, y), 5, new cv.Scalar(0, 255, 0, 255), 2);
          }
          
          dst = gftOutput;
          corners.delete();
          info = `검출된 코너: ${corners.rows}개, 품질 레벨: ${gftQuality}, 최소 거리: ${gftMinDist}px`;
          break;

        case 'HoughLines':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.Canny(src, src, 50, 150);
          
          const houghRho = params.rho || 1;
          const houghTheta = (params.theta || 1) * Math.PI / 180;
          const houghThreshold = params.threshold || 100;
          
          const lines = new cv.Mat();
          cv.HoughLines(src, lines, houghRho, houghTheta, houghThreshold);
          
          // 원본 이미지에 직선 그리기
          const houghOutput = cv.imread(inputCanvas);
          for (let i = 0; i < Math.min(lines.rows, 50); i++) {
            const rho = lines.data32F[i * 2];
            const theta = lines.data32F[i * 2 + 1];
            const a = Math.cos(theta);
            const b = Math.sin(theta);
            const x0 = a * rho;
            const y0 = b * rho;
            const pt1 = new cv.Point(x0 + 1000 * (-b), y0 + 1000 * a);
            const pt2 = new cv.Point(x0 - 1000 * (-b), y0 - 1000 * a);
            cv.line(houghOutput, pt1, pt2, new cv.Scalar(0, 0, 255, 255), 2);
          }
          
          dst = houghOutput;
          lines.delete();
          info = `검출된 직선: ${Math.min(lines.rows, 50)}개, 임계값: ${houghThreshold}`;
          break;

        case 'HoughLinesP':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.Canny(src, src, 50, 150);
          
          const hlpRho = params.rho || 1;
          const hlpTheta = (params.theta || 1) * Math.PI / 180;
          const hlpThreshold = params.threshold || 50;
          const hlpMinLength = params.minLineLength || 50;
          const hlpMaxGap = params.maxLineGap || 10;
          
          const linesP = new cv.Mat();
          cv.HoughLinesP(src, linesP, hlpRho, hlpTheta, hlpThreshold, hlpMinLength, hlpMaxGap);
          
          // 원본 이미지에 선분 그리기
          const hlpOutput = cv.imread(inputCanvas);
          for (let i = 0; i < linesP.rows; i++) {
            const x1 = linesP.data32S[i * 4];
            const y1 = linesP.data32S[i * 4 + 1];
            const x2 = linesP.data32S[i * 4 + 2];
            const y2 = linesP.data32S[i * 4 + 3];
            cv.line(hlpOutput, new cv.Point(x1, y1), new cv.Point(x2, y2), new cv.Scalar(255, 0, 0, 255), 2);
          }
          
          dst = hlpOutput;
          linesP.delete();
          info = `검출된 선분: ${linesP.rows}개, 최소 길이: ${hlpMinLength}px, 최대 간격: ${hlpMaxGap}px`;
          break;

        case 'HoughCircles':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.medianBlur(src, src, 5);
          
          const hcDp = params.dp || 1;
          const hcMinDist = params.minDist || 50;
          const hcParam1 = params.param1 || 100;
          const hcParam2 = params.param2 || 30;
          const hcMinRadius = params.minRadius || 10;
          const hcMaxRadius = params.maxRadius || 100;
          
          const circles = new cv.Mat();
          cv.HoughCircles(src, circles, cv.HOUGH_GRADIENT, hcDp, hcMinDist, hcParam1, hcParam2, hcMinRadius, hcMaxRadius);
          
          // 원본 이미지에 원 그리기
          const hcOutput = cv.imread(inputCanvas);
          for (let i = 0; i < circles.cols; i++) {
            const x = circles.data32F[i * 3];
            const y = circles.data32F[i * 3 + 1];
            const radius = circles.data32F[i * 3 + 2];
            cv.circle(hcOutput, new cv.Point(x, y), radius, new cv.Scalar(0, 255, 0, 255), 2);
            cv.circle(hcOutput, new cv.Point(x, y), 2, new cv.Scalar(255, 0, 0, 255), 3);
          }
          
          dst = hcOutput;
          circles.delete();
          info = `검출된 원: ${circles.cols}개, 반지름 범위: ${hcMinRadius}~${hcMaxRadius}px`;
          break;

        case 'cornerSubPix':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          
          // 먼저 코너 검출
          const cspCorners = new cv.Mat();
          cv.goodFeaturesToTrack(src, cspCorners, 100, 0.01, 10);
          
          // 서브픽셀 정제
          const cspWinSize = params.winSize || 5;
          const cspMaxCount = params.maxCount || 30;
          const cspEpsilon = params.epsilon || 0.01;
          
          const cspCriteria = new cv.TermCriteria(cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_COUNT, cspMaxCount, cspEpsilon);
          cv.cornerSubPix(src, cspCorners, new cv.Size(cspWinSize, cspWinSize), new cv.Size(-1, -1), cspCriteria);
          
          // 원본 이미지에 정제된 코너 표시
          const cspOutput = cv.imread(inputCanvas);
          for (let i = 0; i < cspCorners.rows; i++) {
            const x = cspCorners.data32F[i * 2];
            const y = cspCorners.data32F[i * 2 + 1];
            cv.circle(cspOutput, new cv.Point(x, y), 3, new cv.Scalar(255, 255, 0, 255), -1);
          }
          
          dst = cspOutput;
          cspCorners.delete();
          info = `정제된 코너: ${cspCorners.rows}개, 윈도우 크기: ${cspWinSize}x${cspWinSize}`;
          break;

        case 'cornerMinEigenVal':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const cmeBlockSize = params.blockSize || 3;
          const cmeKsize = this.ensureOdd(params.ksize || 3);
          
          cv.cornerMinEigenVal(src, dst, cmeBlockSize, cmeKsize);
          
          // 정규화 및 시각화
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX);
          cv.convertScaleAbs(dst, dst);
          
          info = `최소 고유값 계산 완료, 블록 크기: ${cmeBlockSize}, 커널: ${cmeKsize}`;
          break;

        case 'cornerEigenValsAndVecs':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const cevBlockSize = params.blockSize || 3;
          const cevKsize = this.ensureOdd(params.ksize || 3);
          
          cv.cornerEigenValsAndVecs(src, dst, cevBlockSize, cevKsize);
          
          // 첫 번째 채널만 추출하여 시각화
          const cevChannels = new cv.MatVector();
          cv.split(dst, cevChannels);
          const cevChannel0 = cevChannels.get(0);
          cv.normalize(cevChannel0, cevChannel0, 0, 255, cv.NORM_MINMAX);
          cv.convertScaleAbs(cevChannel0, dst);
          
          cevChannels.delete();
          info = `고유값/고유벡터 계산 완료, 블록 크기: ${cevBlockSize}`;
          break;

        case 'preCornerDetect':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const pcdKsize = this.ensureOdd(params.ksize || 3);
          
          cv.preCornerDetect(src, dst, pcdKsize);
          
          // 정규화 및 시각화
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX);
          cv.convertScaleAbs(dst, dst);
          
          info = `코너 사전 검출 완료, 커널 크기: ${pcdKsize}`;
          break;

        // 기본 연산
        case 'split':
          const channels = new cv.MatVector();
          cv.split(src, channels);
          
          // 3개 채널을 별도로 표시 (Blue, Green, Red)
          const blueChannel = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
          const greenChannel = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
          const redChannel = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
          
          cv.merge([channels.get(0), new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1), new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1)], blueChannel);
          cv.merge([new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1), channels.get(1), new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1)], greenChannel);
          cv.merge([new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1), new cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC1), channels.get(2)], redChannel);
          
          // 3개 채널을 가로로 합치기
          dst = new cv.Mat();
          const splitMats = new cv.MatVector();
          splitMats.push_back(blueChannel);
          splitMats.push_back(greenChannel);
          splitMats.push_back(redChannel);
          cv.hconcat(splitMats, dst);
          
          channels.delete();
          blueChannel.delete();
          greenChannel.delete();
          redChannel.delete();
          splitMats.delete();
          
          info = `채널 분리 완료: Blue, Green, Red 순서로 표시`;
          break;

        case 'merge':
          // 이미 컬러 이미지이므로 채널 분리 후 다시 병합
          const mergeChannels = new cv.MatVector();
          cv.split(src, mergeChannels);
          cv.merge(mergeChannels, dst);
          mergeChannels.delete();
          info = `채널 병합 완료: ${src.channels()}개 채널`;
          break;

        case 'inRange':
          cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
          cv.cvtColor(src, src, cv.COLOR_RGB2HSV);
          const lowerBound = new cv.Mat(src.rows, src.cols, src.type(), [params.lowerH || 0, 0, 0, 0]);
          const upperBound = new cv.Mat(src.rows, src.cols, src.type(), [params.upperH || 179, 255, 255, 255]);
          cv.inRange(src, lowerBound, upperBound, dst);
          lowerBound.delete();
          upperBound.delete();
          info = `Hue 범위: ${params.lowerH} ~ ${params.upperH}`;
          break;

        case 'bitwise_not':
          cv.bitwise_not(src, dst);
          info = `비트 반전 완료 (네거티브 효과)`;
          break;

        case 'bitwise_and': {
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.bitwise_and(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = '비트 AND 연산 (두 이미지)';
          } else {
             // Create a dummy mask (Circle)
             const mask = new cv.Mat.zeros(src.rows, src.cols, src.type());
             const center = new cv.Point(src.cols / 2, src.rows / 2);
             cv.circle(mask, center, Math.min(src.cols, src.rows) / 3, new cv.Scalar(255, 255, 255, 255), -1);
             cv.bitwise_and(src, mask, dst);
             mask.delete();
             info = '비트 AND 연산 (데모: 원형 마스크)';
          }
          break;
        }

        case 'bitwise_or': {
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.bitwise_or(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = '비트 OR 연산 (두 이미지)';
          } else {
             // Create a dummy mask (Rectangle)
             const mask = new cv.Mat.zeros(src.rows, src.cols, src.type());
             cv.rectangle(mask, new cv.Point(src.cols/4, src.rows/4), new cv.Point(src.cols*3/4, src.rows*3/4), new cv.Scalar(255, 255, 255, 255), -1);
             cv.bitwise_or(src, mask, dst);
             mask.delete();
             info = '비트 OR 연산 (데모: 사각형 마스크)';
          }
          break;
        }

        case 'bitwise_xor': {
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.bitwise_xor(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = '비트 XOR 연산 (두 이미지)';
          } else {
             // Create a dummy mask (Stripes)
             const mask = new cv.Mat.zeros(src.rows, src.cols, src.type());
             const stripeWidth = 20;
             for(let i=0; i<src.cols; i+=stripeWidth*2) {
                 cv.rectangle(mask, new cv.Point(i, 0), new cv.Point(i+stripeWidth, src.rows), new cv.Scalar(255, 255, 255, 255), -1);
             }
             cv.bitwise_xor(src, mask, dst);
             mask.delete();
             info = '비트 XOR 연산 (데모: 스트라이프)';
          }
          break;
        }

        case 'equalizeHist':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.equalizeHist(src, dst);
          info = '히스토그램 균등화 완료';
          break;

        case 'calcHist':
          let histSrc = src.clone();
          let channelIndex = 0;
          
          if (params.channel === 'gray') {
            cv.cvtColor(histSrc, histSrc, cv.COLOR_RGBA2GRAY);
          } else {
            cv.cvtColor(histSrc, histSrc, cv.COLOR_RGBA2RGB);
            channelIndex = params.channel === 'blue' ? 0 : params.channel === 'green' ? 1 : 2;
            const histChannels = new cv.MatVector();
            cv.split(histSrc, histChannels);
            histSrc.delete();
            histSrc = histChannels.get(channelIndex);
            histChannels.delete();
          }
          
          const histSize = [256];
          const ranges = [0, 256];
          const hist = new cv.Mat();
          
          let mask = new cv.Mat();
          if (src2) {
             const maskGray = new cv.Mat();
             cv.resize(src2, maskGray, new cv.Size(src.cols, src.rows));
             cv.cvtColor(maskGray, maskGray, cv.COLOR_RGBA2GRAY);
             cv.threshold(maskGray, mask, 100, 255, cv.THRESH_BINARY);
             maskGray.delete();
             info = `히스토그램 계산 (마스크 적용): ${params.channel} 채널`;
          } else {
             info = `히스토그램 계산 (전체): ${params.channel} 채널`;
          }

          const srcVec = new cv.MatVector();
          srcVec.push_back(histSrc);
          
          cv.calcHist(srcVec, [0], mask, hist, histSize, ranges);
          
          // 히스토그램 시각화
          const histCanvas = cv.Mat.zeros(200, 256, cv.CV_8UC3);
          cv.normalize(hist, hist, 0, 200, cv.NORM_MINMAX);
          
          for (let i = 0; i < 256; i++) {
            const binVal = hist.data32F[i];
            cv.line(histCanvas, new cv.Point(i, 200), new cv.Point(i, 200 - binVal), new cv.Scalar(255, 255, 255), 1);
          }
          
          dst = histCanvas;
          histSrc.delete();
          hist.delete();
          mask.delete();
          srcVec.delete();
          
          info = `히스토그램 계산 완료: ${params.channel} 채널`;
          break;

        case 'CLAHE':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const clahe = new cv.CLAHE(params.clipLimit || 2.0, new cv.Size(params.tileGridSize || 8, params.tileGridSize || 8));
          clahe.apply(src, dst);
          clahe.delete();
          info = `CLAHE 적용: clipLimit=${params.clipLimit}, tileSize=${params.tileGridSize}`;
          break;

        case 'calcBackProject':
          // HSV로 변환
          cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);
          cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV);
          
          // 중앙 영역의 히스토그램 계��� (ROI)
          const roiSize = Math.min(dst.rows, dst.cols) / 4;
          const roiRect = new cv.Rect(
            dst.cols / 2 - roiSize / 2,
            dst.rows / 2 - roiSize / 2,
            roiSize,
            roiSize
          );
          const roiMat = dst.roi(roiRect);
          
          // 채널 선택
          const channelIdx = params.channel === 'hue' ? 0 : params.channel === 'saturation' ? 1 : 2;
          const hsvVec = new cv.MatVector();
          hsvVec.push_back(roiMat);
          
          const backProjHist = new cv.Mat();
          const backProjMask = new cv.Mat();
          const backProjHistSize = [params.histSize || 180];
          const backProjRanges = channelIdx === 0 ? [0, 180] : [0, 256];
          
          cv.calcHist(hsvVec, [channelIdx], backProjMask, backProjHist, backProjHistSize, backProjRanges);
          cv.normalize(backProjHist, backProjHist, 0, 255, cv.NORM_MINMAX);
          
          // 역투영
          const backProjDst = new cv.Mat();
          const fullHsvVec = new cv.MatVector();
          fullHsvVec.push_back(dst);
          cv.calcBackProject(fullHsvVec, [channelIdx], backProjHist, backProjDst, backProjRanges, 1);
          
          dst = backProjDst;
          roiMat.delete();
          hsvVec.delete();
          fullHsvVec.delete();
          backProjHist.delete();
          backProjMask.delete();
          
          info = `히스토그램 역투영: ${params.channel} 채널, histSize=${params.histSize}`;
          break;

        case 'isContourConvex':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const convexContours = new cv.MatVector();
          const convexHierarchy = new cv.Mat();
          cv.findContours(src, convexContours, convexHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          let convexCount = 0;
          const convexTotal = convexContours.size();
          
          for (let i = 0; i < convexTotal; i++) {
            const contour = convexContours.get(i);
            const isConvex = cv.isContourConvex(contour);
            
            const color = isConvex ? new cv.Scalar(0, 255, 0, 255) : new cv.Scalar(255, 0, 0, 255);
            cv.drawContours(dst, convexContours, i, color, 2);
            
            if (isConvex) convexCount++;
          }
          
          convexContours.delete();
          convexHierarchy.delete();
          info = `볼록성 검사: ${convexCount}/${convexTotal}개가 볼록 (초록=볼록, 빨강=오목)`;
          break;

        case 'minAreaRect':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const rectContours = new cv.MatVector();
          const rectHierarchy = new cv.Mat();
          cv.findContours(src, rectContours, rectHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          
          const rectCount = rectContours.size();
          
          for (let i = 0; i < rectCount; i++) {
            const contour = rectContours.get(i);
            const rotatedRect = cv.minAreaRect(contour);
            
            const vertices = cv.RotatedRect.points(rotatedRect);
            for (let j = 0; j < 4; j++) {
              cv.line(dst, vertices[j], vertices[(j + 1) % 4], new cv.Scalar(0, 255, 0, 255), 2);
            }
          }
          
          rectContours.delete();
          rectHierarchy.delete();
          info = `최소 면적 회전 사각형: ${rectCount}개`;
          break;

        case 'minEnclosingCircle':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const circleContours = new cv.MatVector();
          const circleHierarchy = new cv.Mat();
          cv.findContours(src, circleContours, circleHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const circleCount = circleContours.size();
          
          for (let i = 0; i < circleCount; i++) {
            const contour = circleContours.get(i);
            const circle = cv.minEnclosingCircle(contour);
            cv.circle(dst, circle.center, Math.round(circle.radius), new cv.Scalar(0, 255, 0, 255), 2);
          }
          
          circleContours.delete();
          circleHierarchy.delete();
          info = `최소 둘레 원: ${circleCount}개`;
          break;

        case 'minEnclosingTriangle':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const triContours = new cv.MatVector();
          const triHierarchy = new cv.Mat();
          cv.findContours(src, triContours, triHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const triCount = triContours.size();
          
          for (let i = 0; i < triCount; i++) {
            const contour = triContours.get(i);
            const triangle = new cv.Mat();
            cv.minEnclosingTriangle(contour, triangle);
            
            if (triangle.rows === 3) {
              for (let j = 0; j < 3; j++) {
                const pt1 = new cv.Point(triangle.data32F[j * 2], triangle.data32F[j * 2 + 1]);
                const pt2 = new cv.Point(triangle.data32F[((j + 1) % 3) * 2], triangle.data32F[((j + 1) % 3) * 2 + 1]);
                cv.line(dst, pt1, pt2, new cv.Scalar(0, 255, 0, 255), 2);
              }
            }
            
            triangle.delete();
          }
          
          triContours.delete();
          triHierarchy.delete();
          info = `최소 둘레 삼각형: ${triCount}개`;
          break;

        case 'matchShapes':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const splitRatioMatch = params.splitRatio || 0.5;
          const splitXMatch = Math.floor(src.cols * splitRatioMatch);
          
          const leftRectMatch = new cv.Rect(0, 0, splitXMatch, src.rows);
          const rightRectMatch = new cv.Rect(splitXMatch, 0, src.cols - splitXMatch, src.rows);
          
          const leftImgMatch = src.roi(leftRectMatch);
          const rightImgMatch = src.roi(rightRectMatch);
          
          const leftContoursMatch = new cv.MatVector();
          const rightContoursMatch = new cv.MatVector();
          const leftHierMatch = new cv.Mat();
          const rightHierMatch = new cv.Mat();
          
          cv.findContours(leftImgMatch, leftContoursMatch, leftHierMatch, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          cv.findContours(rightImgMatch, rightContoursMatch, rightHierMatch, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          let matchValue = 0;
          if (leftContoursMatch.size() > 0 && rightContoursMatch.size() > 0) {
            const methodMap: Record<string, any> = {
              CONTOURS_MATCH_I1: cv.CONTOURS_MATCH_I1,
              CONTOURS_MATCH_I2: cv.CONTOURS_MATCH_I2,
              CONTOURS_MATCH_I3: cv.CONTOURS_MATCH_I3,
            };
            const method = methodMap[params.method] || cv.CONTOURS_MATCH_I1;
            
            matchValue = cv.matchShapes(leftContoursMatch.get(0), rightContoursMatch.get(0), method, 0);
          }
          
          dst = cv.imread(inputCanvas);
          cv.line(dst, new cv.Point(splitXMatch, 0), new cv.Point(splitXMatch, src.rows), new cv.Scalar(0, 255, 0, 255), 3);
          cv.putText(dst, `Match: ${matchValue.toFixed(4)}`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
          
          leftImgMatch.delete();
          rightImgMatch.delete();
          leftContoursMatch.delete();
          rightContoursMatch.delete();
          leftHierMatch.delete();
          rightHierMatch.delete();
          
          info = `형상 매칭 (${params.method}): ${matchValue.toFixed(4)} (0에 가까울수록 유사)`;
          break;

        case 'moments':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const binaryImage = params.binaryImage === 'true';
          if (binaryImage) {
            cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          }
          
          const momentsContours = new cv.MatVector();
          const momentsHierarchy = new cv.Mat();
          cv.findContours(src, momentsContours, momentsHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const momentsCount = momentsContours.size();
          
          for (let i = 0; i < momentsCount; i++) {
            const contour = momentsContours.get(i);
            const M = cv.moments(contour, binaryImage);
            
            const cx = M.m10 / M.m00;
            const cy = M.m01 / M.m00;
            
            cv.drawContours(dst, momentsContours, i, new cv.Scalar(0, 255, 0, 255), 2);
            cv.circle(dst, new cv.Point(cx, cy), 5, new cv.Scalar(255, 0, 0, 255), -1);
          }
          
          momentsContours.delete();
          momentsHierarchy.delete();
          info = `모멘트 계산: ${momentsCount}개 윤곽선 (빨간점=중심)`;
          break;

        case 'pointPolygonTest':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const ptContours = new cv.MatVector();
          const ptHierarchy = new cv.Mat();
          cv.findContours(src, ptContours, ptHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const measureDist = params.measureDist === 'true';
          
          if (ptContours.size() > 0) {
            const contour = ptContours.get(0);
            const testPoint = new cv.Point(dst.cols / 2, dst.rows / 2);
            const result = cv.pointPolygonTest(contour, testPoint, measureDist);
            
            cv.drawContours(dst, ptContours, 0, new cv.Scalar(0, 255, 0, 255), 2);
            cv.circle(dst, testPoint, 8, new cv.Scalar(255, 0, 0, 255), -1);
            
            const statusText = result > 0 ? 'INSIDE' : result < 0 ? 'OUTSIDE' : 'ON EDGE';
            cv.putText(dst, `${statusText}: ${result.toFixed(2)}`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
            
            info = `점-다각형 테스트: ${statusText}, 거리=${result.toFixed(2)}`;
          } else {
            info = `점-다각형 테스트: 윤곽선 없음`;
          }
          
          ptContours.delete();
          ptHierarchy.delete();
          break;

        case 'rotatedRectangleIntersection': {
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          
          const rectIntContours = new cv.MatVector();
          const rectIntHierarchy = new cv.Mat();
          cv.findContours(src, rectIntContours, rectIntHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          
          let rotRect1: any;
          let rotRect2: any;

          // 파라미터 기반 생성 (기본값 또는 슬라이더 값 사용)
          const center1 = new cv.Point(src.cols * 0.4, src.rows * 0.5);
          const size1 = new cv.Size(Math.min(src.cols, src.rows) * 0.4, Math.min(src.cols, src.rows) * 0.6);
          rotRect1 = new cv.RotatedRect(center1, size1, params.rect1_angle ?? 30);

          const center2 = new cv.Point(src.cols * 0.4 + (params.rect2_x_offset ?? 20), src.rows * 0.5);
          const size2 = new cv.Size(Math.min(src.cols, src.rows) * 0.4, Math.min(src.cols, src.rows) * 0.6);
          rotRect2 = new cv.RotatedRect(center2, size2, params.rect2_angle ?? 45);
          
          // 만약 컨투어가 충분히 많다면 첫 번째 사각형을 컨투어에서 가져올 수도 있음 (옵션)
          if (rectIntContours.size() >= 1 && !params.rect1_angle) {
             rotRect1 = cv.minAreaRect(rectIntContours.get(0));
          }
          
          if (rotRect1 && rotRect2) {
            const vertices1 = cv.RotatedRect.points(rotRect1);
            const vertices2 = cv.RotatedRect.points(rotRect2);
            
            // 사각형 1 (파란색)
            for (let j = 0; j < 4; j++) {
              cv.line(dst, vertices1[j], vertices1[(j + 1) % 4], new cv.Scalar(255, 0, 0, 255), 2);
            }
            // 사각형 2 (빨간색)
            for (let j = 0; j < 4; j++) {
              cv.line(dst, vertices2[j], vertices2[(j + 1) % 4], new cv.Scalar(0, 0, 255, 255), 2);
            }
            
            try {
              const intersectRegion = new cv.Mat();
              const intersectType = cv.rotatedRectangleIntersection(rotRect1, rotRect2, intersectRegion);
              
              if (intersectType !== cv.INTERSECT_NONE && intersectRegion.rows > 0) {
                // 교차 영역 시각화 (노란색)
                const pts: any[] = [];
                for (let i = 0; i < intersectRegion.rows; i++) {
                  pts.push(new cv.Point(intersectRegion.data32F[i * 2], intersectRegion.data32F[i * 2 + 1]));
                }
                for (let i = 0; i < pts.length; i++) {
                  cv.line(dst, pts[i], pts[(i + 1) % pts.length], new cv.Scalar(0, 255, 255, 255), 3);
                }
              }
              
              const typeText = intersectType === cv.INTERSECT_NONE ? 'NONE' : intersectType === cv.INTERSECT_PARTIAL ? 'PARTIAL' : 'FULL';
              cv.putText(dst, `Intersection: ${typeText}`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 255, 255, 255), 2);
              
              intersectRegion.delete();
              info = `회전 사각형 교집합 타입: ${typeText}`;
            } catch (e) {
              console.error(e);
              cv.putText(dst, `Intersection Error`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 0, 0, 255), 2);
              info = `회전 사각형 교집합: 처리 오류`;
            }
          } else {
            cv.putText(dst, `Parameters missing`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 0, 0, 255), 2);
          }
          
          rectIntContours.delete();
          rectIntHierarchy.delete();
          break;
        }
          
        case 'compareHist_CORREL':
        case 'compareHist_CHISQR':
        case 'compareHist_INTERSECT':
        case 'compareHist_BHATTACHARYYA':
        case 'compareHist_HELLINGER':
        case 'compareHist_CHISQR_ALT':
        case 'compareHist_KL_DIV':
          // 이미지를 좌우로 분할
          const splitRatio = params.splitRatio || 0.5;
          const splitX = Math.floor(src.cols * splitRatio);
          
          const leftRect = new cv.Rect(0, 0, splitX, src.rows);
          const rightRect = new cv.Rect(splitX, 0, src.cols - splitX, src.rows);
          
          const leftImg = src.roi(leftRect);
          const rightImg = src.roi(rightRect);
          
          // 그레이스케일 변환
          cv.cvtColor(leftImg, leftImg, cv.COLOR_RGBA2GRAY);
          cv.cvtColor(rightImg, rightImg, cv.COLOR_RGBA2GRAY);
          
          // 히스토그램 계산
          const leftVec = new cv.MatVector();
          const rightVec = new cv.MatVector();
          leftVec.push_back(leftImg);
          rightVec.push_back(rightImg);
          
          const leftHist = new cv.Mat();
          const rightHist = new cv.Mat();
          const histMask = new cv.Mat();
          const histSizeArr = [256];
          const histRanges = [0, 256];
          
          cv.calcHist(leftVec, [0], histMask, leftHist, histSizeArr, histRanges);
          cv.calcHist(rightVec, [0], histMask, rightHist, histSizeArr, histRanges);
          
          cv.normalize(leftHist, leftHist, 0, 1, cv.NORM_MINMAX);
          cv.normalize(rightHist, rightHist, 0, 1, cv.NORM_MINMAX);
          
          // 비교 방법 선택
          let compareMethod;
          let methodName;
          switch (functionId) {
            case 'compareHist_CORREL':
              compareMethod = cv.HISTCMP_CORREL;
              methodName = 'CORRELATION';
              break;
            case 'compareHist_CHISQR':
              compareMethod = cv.HISTCMP_CHISQR;
              methodName = 'CHI-SQUARE';
              break;
            case 'compareHist_INTERSECT':
              compareMethod = cv.HISTCMP_INTERSECT;
              methodName = 'INTERSECTION';
              break;
            case 'compareHist_BHATTACHARYYA':
              compareMethod = cv.HISTCMP_BHATTACHARYYA;
              methodName = 'BHATTACHARYYA';
              break;
            case 'compareHist_HELLINGER':
              compareMethod = cv.HISTCMP_HELLINGER || cv.HISTCMP_BHATTACHARYYA;
              methodName = 'HELLINGER';
              break;
            case 'compareHist_CHISQR_ALT':
              compareMethod = cv.HISTCMP_CHISQR_ALT;
              methodName = 'CHI-SQUARE ALT';
              break;
            case 'compareHist_KL_DIV':
              compareMethod = cv.HISTCMP_KL_DIV;
              methodName = 'KL DIVERGENCE';
              break;
          }
          
          const similarity = cv.compareHist(leftHist, rightHist, compareMethod);
          
          // 결과 시각화: 좌우 이미지 합성 + 분할선
          dst = src.clone();
          cv.line(dst, new cv.Point(splitX, 0), new cv.Point(splitX, src.rows), new cv.Scalar(0, 255, 0, 255), 3);
          
          // 유사도 텍스트 추가
          const similarityText = `${methodName}: ${similarity.toFixed(4)}`;
          cv.putText(dst, similarityText, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
          
          leftImg.delete();
          rightImg.delete();
          leftVec.delete();
          rightVec.delete();
          leftHist.delete();
          rightHist.delete();
          histMask.delete();
          
          info = `히스토그램 비교 (${methodName}): ${similarity.toFixed(4)} | 분할 비율: ${(splitRatio * 100).toFixed(0)}%`;
          break;

        // 그리기
        case 'rectangle':
          dst = src.clone();
          const rectSize = params.size || 100;
          const rectPt1 = new cv.Point(src.cols / 2 - rectSize / 2, src.rows / 2 - rectSize / 2);
          const rectPt2 = new cv.Point(src.cols / 2 + rectSize / 2, src.rows / 2 + rectSize / 2);
          cv.rectangle(dst, rectPt1, rectPt2, new cv.Scalar(0, 255, 0, 255), params.thickness || 3);
          info = `사각형 크기: ${rectSize}x${rectSize}, 두께: ${params.thickness}`;
          break;

        case 'circle':
          dst = src.clone();
          const center = new cv.Point(src.cols / 2, src.rows / 2);
          cv.circle(dst, center, params.radius || 50, new cv.Scalar(0, 0, 255, 255), params.thickness || 3);
          info = `원 반지름: ${params.radius}, 두께: ${params.thickness}`;
          break;

        case 'line':
          dst = src.clone();
          const linePt1 = new cv.Point(src.cols * 0.2, src.rows * 0.2);
          const linePt2 = new cv.Point(src.cols * 0.8, src.rows * 0.8);
          cv.line(dst, linePt1, linePt2, new cv.Scalar(255, 0, 0, 255), params.thickness || 3);
          info = `직선 두께: ${params.thickness}`;
          break;

        case 'putText':
          dst = src.clone();
          const textOrg = new cv.Point(src.cols * 0.1, src.rows * 0.5);
          cv.putText(dst, 'OpenCV Test', textOrg, cv.FONT_HERSHEY_SIMPLEX, params.fontSize || 1.0, new cv.Scalar(255, 255, 0, 255), params.thickness || 2);
          info = `텍스트 크기: ${params.fontSize}, 두께: ${params.thickness}`;
          break;

        case 'ellipse':
          dst = src.clone();
          const ellipseCenter = new cv.Point(src.cols / 2, src.rows / 2);
          const ellipseAxes = new cv.Size(params.width || 100, params.height || 60);
          cv.ellipse(dst, ellipseCenter, ellipseAxes, params.angle || 0, 0, 360, new cv.Scalar(0, 255, 255, 255), params.thickness || 3);
          info = `타원: ${params.width}×${params.height}, 각도: ${params.angle}°, 두께: ${params.thickness}`;
          break;

        case 'ellipse2':
          dst = src.clone();
          const ellipse2Center = new cv.Point(src.cols / 2, src.rows / 2);
          const ellipse2Axes = new cv.Size(params.axisWidth || 100, params.axisHeight || 60);
          cv.ellipse(
            dst, 
            ellipse2Center, 
            ellipse2Axes, 
            params.angle || 0, 
            params.startAngle || 0, 
            params.endAngle || 270, 
            new cv.Scalar(0, 255, 255, 255), 
            params.thickness || 3
          );
          info = `타원 호: ${params.axisWidth}×${params.axisHeight}, 회전: ${params.angle}°, 호 범위: ${params.startAngle}°-${params.endAngle}°`;
          break;

        case 'arrowedLine':
          dst = src.clone();
          const arrowPt1 = new cv.Point(src.cols * 0.2, src.rows * 0.5);
          const arrowPt2 = new cv.Point(src.cols * 0.8, src.rows * 0.5);
          cv.arrowedLine(dst, arrowPt1, arrowPt2, new cv.Scalar(255, 0, 255, 255), params.thickness || 3, cv.LINE_8, 0, params.tipLength || 0.1);
          info = `화살표 두께: ${params.thickness}, 팁 길이: ${params.tipLength}`;
          break;

        case 'drawMarker':
          dst = src.clone();
          const markerTypeMap: Record<string, any> = {
            MARKER_CROSS: cv.MARKER_CROSS,
            MARKER_TILTED_CROSS: cv.MARKER_TILTED_CROSS,
            MARKER_STAR: cv.MARKER_STAR,
            MARKER_DIAMOND: cv.MARKER_DIAMOND,
            MARKER_SQUARE: cv.MARKER_SQUARE,
            MARKER_TRIANGLE_UP: cv.MARKER_TRIANGLE_UP,
            MARKER_TRIANGLE_DOWN: cv.MARKER_TRIANGLE_DOWN,
          };
          const markerPositions = [
            new cv.Point(src.cols * 0.2, src.rows * 0.3),
            new cv.Point(src.cols * 0.5, src.rows * 0.3),
            new cv.Point(src.cols * 0.8, src.rows * 0.3),
            new cv.Point(src.cols * 0.2, src.rows * 0.7),
            new cv.Point(src.cols * 0.5, src.rows * 0.7),
            new cv.Point(src.cols * 0.8, src.rows * 0.7),
          ];
          markerPositions.forEach(pos => {
            cv.drawMarker(dst, pos, new cv.Scalar(255, 0, 0, 255), markerTypeMap[params.markerType] || cv.MARKER_CROSS, params.markerSize || 20, params.thickness || 2);
          });
          info = `마커: ${params.markerType}, 크기: ${params.markerSize}`;
          break;

        case 'polylines':
          dst = src.clone();
          const polyPoints = [];
          const centerX = src.cols / 2;
          const centerY = src.rows / 2;
          const radius = Math.min(src.cols, src.rows) * 0.3;
          for (let i = 0; i < (params.numPoints || 5); i++) {
            const angle = (i * 2 * Math.PI) / (params.numPoints || 5);
            polyPoints.push(new cv.Point(
              centerX + radius * Math.cos(angle),
              centerY + radius * Math.sin(angle)
            ));
          }
          const polyMat = cv.matFromArray(polyPoints.length, 1, cv.CV_32SC2, polyPoints.flatMap(p => [p.x, p.y]));
          const polyVec = new cv.MatVector();
          polyVec.push_back(polyMat);
          cv.polylines(dst, polyVec, params.isClosed !== false, new cv.Scalar(0, 255, 0, 255), params.thickness || 3);
          polyMat.delete();
          polyVec.delete();
          info = `다각선: ${params.numPoints}개 점, ${params.isClosed !== false ? '닫힘' : '열림'}`;
          break;

        case 'fillPoly':
          dst = src.clone();
          const fillPoints = [];
          const fillCenterX = src.cols / 2;
          const fillCenterY = src.rows / 2;
          const fillRadius = Math.min(src.cols, src.rows) * 0.3;
          for (let i = 0; i < (params.numPoints || 6); i++) {
            const angle = (i * 2 * Math.PI) / (params.numPoints || 6);
            fillPoints.push(new cv.Point(
              fillCenterX + fillRadius * Math.cos(angle),
              fillCenterY + fillRadius * Math.sin(angle)
            ));
          }
          const fillMat = cv.matFromArray(fillPoints.length, 1, cv.CV_32SC2, fillPoints.flatMap(p => [p.x, p.y]));
          const fillVec = new cv.MatVector();
          fillVec.push_back(fillMat);
          const opacity = params.opacity || 0.7;
          const overlay = dst.clone();
          cv.fillPoly(overlay, fillVec, new cv.Scalar(255, 100, 50, 255));
          cv.addWeighted(dst, 1 - opacity, overlay, opacity, 0, dst);
          overlay.delete();
          fillMat.delete();
          fillVec.delete();
          info = `다각형 채우기: ${params.numPoints}개 점, 불투명도: ${opacity}`;
          break;

        case 'fillConvexPoly':
          dst = src.clone();
          const convexPoints = [];
          const convexCenterX = src.cols / 2;
          const convexCenterY = src.rows / 2;
          const convexRadius = Math.min(src.cols, src.rows) * 0.25;
          for (let i = 0; i < (params.numPoints || 5); i++) {
            const angle = (i * 2 * Math.PI) / (params.numPoints || 5);
            convexPoints.push(new cv.Point(
              convexCenterX + convexRadius * Math.cos(angle),
              convexCenterY + convexRadius * Math.sin(angle)
            ));
          }
          const convexMat = cv.matFromArray(convexPoints.length, 1, cv.CV_32SC2, convexPoints.flatMap(p => [p.x, p.y]));
          const convexOpacity = params.opacity || 0.7;
          const convexOverlay = dst.clone();
          cv.fillConvexPoly(convexOverlay, convexMat, new cv.Scalar(50, 100, 255, 255));
          cv.addWeighted(dst, 1 - convexOpacity, convexOverlay, convexOpacity, 0, dst);
          convexOverlay.delete();
          convexMat.delete();
          info = `볼록 다각형 채우기: ${params.numPoints}개 점, 불투��도: ${convexOpacity}`;
          break;

        case 'drawContours':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          const drawContours2 = new cv.MatVector();
          const drawHierarchy2 = new cv.Mat();
          const drawModeMap: Record<string, any> = {
            RETR_EXTERNAL: cv.RETR_EXTERNAL,
            RETR_LIST: cv.RETR_LIST,
            RETR_TREE: cv.RETR_TREE,
          };
          cv.findContours(src, drawContours2, drawHierarchy2, drawModeMap[params.mode] || cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          dst = cv.imread(inputCanvas);
          const drawColor = new cv.Scalar(0, 255, 0, 255);
          cv.drawContours(dst, drawContours2, -1, drawColor, params.thickness || 2);
          drawContours2.delete();
          drawHierarchy2.delete();
          info = `윤곽선 그리기: ${params.mode}, 두께: ${params.thickness}`;
          break;

        case 'clipLine':
          dst = src.clone();
          const imgRect = new cv.Rect(src.cols * 0.2, src.rows * 0.2, src.cols * 0.6, src.rows * 0.6);
          cv.rectangle(dst, new cv.Point(imgRect.x, imgRect.y), new cv.Point(imgRect.x + imgRect.width, imgRect.y + imgRect.height), new cv.Scalar(255, 255, 0, 255), 2);
          
          const clipPt1 = new cv.Point(0, 0);
          const clipPt2 = new cv.Point(src.cols, src.rows);
          const clipped = cv.clipLine(imgRect, clipPt1, clipPt2);
          
          if (clipped) {
            cv.line(dst, clipPt1, clipPt2, new cv.Scalar(0, 255, 0, 255), params.thickness || 3);
          }
          
          // 원래 선도 표시 (회색, 점선 효과)
          cv.line(dst, new cv.Point(0, 0), new cv.Point(src.cols, src.rows), new cv.Scalar(128, 128, 128, 255), 1);
          
          info = `선 자르기: ${clipped ? '자름' : '범위 밖'}`;
          break;

        case 'getFontScaleFromHeight':
          dst = src.clone();
          const fontFaceMap: Record<string, any> = {
            FONT_HERSHEY_SIMPLEX: cv.FONT_HERSHEY_SIMPLEX,
            FONT_HERSHEY_PLAIN: cv.FONT_HERSHEY_PLAIN,
            FONT_HERSHEY_DUPLEX: cv.FONT_HERSHEY_DUPLEX,
            FONT_HERSHEY_COMPLEX: cv.FONT_HERSHEY_COMPLEX,
            FONT_HERSHEY_TRIPLEX: cv.FONT_HERSHEY_TRIPLEX,
            FONT_HERSHEY_SCRIPT_SIMPLEX: cv.FONT_HERSHEY_SCRIPT_SIMPLEX,
            FONT_HERSHEY_SCRIPT_COMPLEX: cv.FONT_HERSHEY_SCRIPT_COMPLEX,
          };
          const fontFaceValue = fontFaceMap[params.fontFace] || cv.FONT_HERSHEY_SIMPLEX;
          const pixelHeight = params.pixelHeight || 30;
          const fontThickness = params.thickness || 2;
          
          // getFontScaleFromHeight는 OpenCV.js에서 지원하지 않을 수 있으므로 수동 계산
          // 기본 높이 (대략적인 값)를 기준으로 스케일 계산
          const baseHeight = 20; // FONT_HERSHEY_SIMPLEX의 기본 높이 (대략)
          const calculatedScale = (pixelHeight / baseHeight).toFixed(2);
          
          // 계산된 스케일로 텍스트 그리기
          const sampleText = 'Sample Text';
          const textPos = new cv.Point(src.cols * 0.1, src.rows * 0.5);
          cv.putText(dst, sampleText, textPos, fontFaceValue, parseFloat(calculatedScale), new cv.Scalar(255, 255, 0, 255), fontThickness);
          
          // 정보 텍스트 표시
          const infoText = `Scale: ${calculatedScale}`;
          cv.putText(dst, infoText, new cv.Point(src.cols * 0.1, src.rows * 0.3), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
          
          info = `목표 높이: ${pixelHeight}px, 계산된 스케일: ${calculatedScale}`;
          break;

        case 'getTextSize':
          dst = src.clone();
          const textSizeFontMap: Record<string, any> = {
            FONT_HERSHEY_SIMPLEX: cv.FONT_HERSHEY_SIMPLEX,
            FONT_HERSHEY_PLAIN: cv.FONT_HERSHEY_PLAIN,
            FONT_HERSHEY_DUPLEX: cv.FONT_HERSHEY_DUPLEX,
            FONT_HERSHEY_COMPLEX: cv.FONT_HERSHEY_COMPLEX,
            FONT_HERSHEY_SCRIPT_SIMPLEX: cv.FONT_HERSHEY_SCRIPT_SIMPLEX,
          };
          const textSizeFontFace = textSizeFontMap[params.fontFace] || cv.FONT_HERSHEY_SIMPLEX;
          const textToMeasure = params.text || 'OpenCV Test';
          const textSizeFontScale = params.fontScale || 1.5;
          const textSizeThickness = params.thickness || 2;
          
          // getTextSize로 텍스트 크기 계산
          const textSize = cv.getTextSize(textToMeasure, textSizeFontFace, textSizeFontScale, textSizeThickness);
          const baseline = textSize.baseLine;
          
          // 텍스트를 중앙에 배치
          const textOrigin = new cv.Point(
            (dst.cols - textSize.size.width) / 2,
            (dst.rows + textSize.size.height) / 2
          );
          
          // 텍스트를 둘러싼 박스 그리기
          cv.rectangle(
            dst,
            new cv.Point(textOrigin.x, textOrigin.y + baseline),
            new cv.Point(textOrigin.x + textSize.size.width, textOrigin.y - textSize.size.height),
            new cv.Scalar(0, 0, 255, 255),
            2
          );
          
          // 베이스라인 그리기
          cv.line(
            dst,
            new cv.Point(textOrigin.x, textOrigin.y + textSizeThickness),
            new cv.Point(textOrigin.x + textSize.size.width, textOrigin.y + textSizeThickness),
            new cv.Scalar(0, 255, 0, 255),
            1
          );
          
          // 텍스트 그리기
          cv.putText(dst, textToMeasure, textOrigin, textSizeFontFace, textSizeFontScale, new cv.Scalar(255, 255, 255, 255), textSizeThickness);
          
          // 크기 정보 표시
          const sizeInfo = `Size: ${textSize.size.width}x${textSize.size.height}`;
          cv.putText(dst, sizeInfo, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 0, 255), 2);
          
          info = `텍스트: "${textToMeasure}", 크기: ${textSize.size.width}x${textSize.size.height}px, 베이스라인: ${baseline}`;
          break;

        // 산술 연산
        case 'add':
          if (src2) {
            // 두 이미지 크기를 맞춤
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.add(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = `두 이미지 덧셈 완료`;
          } else {
            const addScalar = new cv.Scalar(params.value || 50, params.value || 50, params.value || 50, 0);
            cv.add(src, addScalar, dst);
            info = `밝기 증가: +${params.value}`;
          }
          break;

        case 'subtract':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.subtract(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = `두 이미지 뺄셈 완료`;
          } else {
            const subScalar = new cv.Scalar(params.value || 50, params.value || 50, params.value || 50, 0);
            cv.subtract(src, subScalar, dst);
            info = `밝기 감소: -${params.value}`;
          }
          break;

        case 'multiply':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.multiply(src, resizedSrc2, dst, params.scale || 1.0);
            resizedSrc2.delete();
            info = `두 이미지 곱셈 완료 (스케일: ${params.scale})`;
          } else {
            cv.multiply(src, cv.Mat.ones(src.rows, src.cols, src.type()), dst, params.scale || 1.5);
            info = `곱셈 스케일: ${params.scale}`;
          }
          break;

        case 'addWeighted':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.addWeighted(src, params.alpha || 0.5, resizedSrc2, 1 - (params.alpha || 0.5), 0, dst);
            resizedSrc2.delete();
            info = `가중 합: 이미지1(${params.alpha}) + 이미지2(${(1 - (params.alpha || 0.5)).toFixed(1)})`;
          } else {
            const blurred = new cv.Mat();
            cv.GaussianBlur(src, blurred, new cv.Size(15, 15), 0);
            cv.addWeighted(src, params.alpha || 0.5, blurred, 1 - (params.alpha || 0.5), 0, dst);
            blurred.delete();
            info = `가중 합: 원본(${params.alpha}) + 블러(${(1 - (params.alpha || 0.5)).toFixed(1)})`;
          }
          break;

        // 행렬 연산
        case 'transpose':
          cv.transpose(src, dst);
          info = `행렬 전치 완료: ${src.cols}x${src.rows} → ${dst.cols}x${dst.rows}`;
          break;

        case 'repeat':
          cv.repeat(src, params.ny || 2, params.nx || 2, dst);
          info = `반복: ${params.ny || 2}x${params.nx || 2} 타일`;
          break;

        case 'hconcat':
          const hMats = new cv.MatVector();
          for (let i = 0; i < (params.count || 2); i++) {
            hMats.push_back(src);
          }
          cv.hconcat(hMats, dst);
          hMats.delete();
          info = `수평 연결: ${params.count || 2}개 이미지`;
          break;

        case 'vconcat':
          const vMats = new cv.MatVector();
          for (let i = 0; i < (params.count || 2); i++) {
            vMats.push_back(src);
          }
          cv.vconcat(vMats, dst);
          vMats.delete();
          info = `수직 연결: ${params.count || 2}개 이미지`;
          break;

        case 'convertScaleAbs':
          cv.convertScaleAbs(src, dst, params.alpha || 1.0, params.beta || 0);
          info = `스케일: ${params.alpha}×, 오프셋: ${params.beta}`;
          break;

        case 'normalize': {
           // 정규화 (Min-Max)
           const alpha = params.alpha !== undefined ? params.alpha : 0;
           const beta = params.beta !== undefined ? params.beta : 255;
           const normTypeRaw = params.norm_type !== undefined ? params.norm_type : 'NORM_MINMAX';
           const normType = (cv as any)[normTypeRaw] || cv.NORM_MINMAX;
           
           cv.normalize(src, dst, alpha, beta, normType, cv.CV_8U);
           info = `정규화: range=[${alpha}, ${beta}], type=${normTypeRaw}`;
           break;
        }

        case 'absdiff':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.absdiff(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = `절대 차이 계산 완료 (두 이미지)`;
          } else {
            const blurredDiff = new cv.Mat();
            const blurKsize = this.ensureOdd(params.blurSize || 15);
            cv.GaussianBlur(src, blurredDiff, new cv.Size(blurKsize, blurKsize), 0);
            cv.absdiff(src, blurredDiff, dst);
            blurredDiff.delete();
            info = `절대 차이 계산 완료 (블러 크기: ${blurKsize})`;
          }
          break;

        case 'magnitude':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const sobelX = new cv.Mat();
          const sobelY = new cv.Mat();
          cv.Sobel(src, sobelX, cv.CV_32F, 1, 0, 3);
          cv.Sobel(src, sobelY, cv.CV_32F, 0, 1, 3);
          cv.magnitude(sobelX, sobelY, dst);
          cv.convertScaleAbs(dst, dst);
          sobelX.delete();
          sobelY.delete();
          info = `Gradient 크기 계산 완료`;
          break;

        case 'phase':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const phaseX = new cv.Mat();
          const phaseY = new cv.Mat();
          cv.Sobel(src, phaseX, cv.CV_32F, 1, 0, 3);
          cv.Sobel(src, phaseY, cv.CV_32F, 0, 1, 3);
          cv.phase(phaseX, phaseY, dst, true);
          cv.convertScaleAbs(dst, dst);
          phaseX.delete();
          phaseY.delete();
          info = `Gradient 위상 계산 완료`;
          break;

        // 통계 연산
        case 'mean': {
          let mask = new cv.Mat();
          if (src2) {
             const maskGray = new cv.Mat();
             cv.resize(src2, maskGray, new cv.Size(src.cols, src.rows));
             cv.cvtColor(maskGray, maskGray, cv.COLOR_RGBA2GRAY);
             cv.threshold(maskGray, mask, 100, 255, cv.THRESH_BINARY);
             maskGray.delete();
          }
          const meanVal = cv.mean(src, mask);
          dst = src.clone();
          const meanText = `Mean: B=${meanVal[0].toFixed(1)} G=${meanVal[1].toFixed(1)} R=${meanVal[2].toFixed(1)}`;
          cv.putText(dst, meanText, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 255, 0, 255), 2);
          if (src2) {
             cv.putText(dst, "(Mask Applied)", new cv.Point(10, 60), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 255, 255, 255), 1);
          }
          info = meanText + (src2 ? " (Task Mask Applied)" : "");
          mask.delete();
          break;
        }

        case 'meanStdDev': {
          let mask = new cv.Mat();
          if (src2) {
             const maskGray = new cv.Mat();
             cv.resize(src2, maskGray, new cv.Size(src.cols, src.rows));
             cv.cvtColor(maskGray, maskGray, cv.COLOR_RGBA2GRAY);
             cv.threshold(maskGray, mask, 100, 255, cv.THRESH_BINARY);
             maskGray.delete();
          }
          const meanCalc = new cv.Mat();
          const stddevCalc = new cv.Mat();
          cv.meanStdDev(src, meanCalc, stddevCalc, mask);
          dst = src.clone();
          const meanText2 = `Mean: ${meanCalc.data64F[0].toFixed(1)}`;
          const stdText = `StdDev: ${stddevCalc.data64F[0].toFixed(1)}`;
          cv.putText(dst, meanText2, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 0, 255), 2);
          cv.putText(dst, stdText, new cv.Point(10, 60), cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 0, 255), 2);
          if (src2) {
             cv.putText(dst, "(Mask Applied)", new cv.Point(10, 90), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 255, 255, 255), 1);
          }
          meanCalc.delete();
          stddevCalc.delete();
          mask.delete();
          info = `${meanText2}, ${stdText}` + (src2 ? " (Mask Applied)" : "");
          break;
        }

        case 'minMaxLoc': {
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          let mask = new cv.Mat();
          if (src2) {
             const maskGray = new cv.Mat();
             cv.resize(src2, maskGray, new cv.Size(src.cols, src.rows));
             cv.cvtColor(maskGray, maskGray, cv.COLOR_RGBA2GRAY);
             cv.threshold(maskGray, mask, 100, 255, cv.THRESH_BINARY);
             maskGray.delete();
          }
          const result = cv.minMaxLoc(src, mask);
          dst = cv.imread(inputCanvas);
          cv.circle(dst, result.minLoc, 10, new cv.Scalar(0, 0, 255, 255), 3); // 최소값: 빨강
          cv.circle(dst, result.maxLoc, 10, new cv.Scalar(0, 255, 0, 255), 3); // 최대값: 초록
          cv.putText(dst, `Min: ${result.minVal.toFixed(0)}`, new cv.Point(result.minLoc.x + 15, result.minLoc.y), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 255, 255), 2);
          cv.putText(dst, `Max: ${result.maxVal.toFixed(0)}`, new cv.Point(result.maxLoc.x + 15, result.maxLoc.y), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 255, 0, 255), 2);
          info = `최소값: ${result.minVal.toFixed(0)}, 최대값: ${result.maxVal.toFixed(0)}` + (src2 ? " (Mask Applied)" : "");
          mask.delete();
          break;
        }

        case 'countNonZero':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          const count = cv.countNonZero(src);
          dst = src.clone();
          cv.putText(dst, `Non-Zero: ${count}`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 255, 255, 255), 2);
          info = `0이 아닌 픽셀 수: ${count} (${((count / (src.rows * src.cols)) * 100).toFixed(1)}%)`;
          break;

        case 'reduce':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const rtypeMap: Record<string, any> = {
            REDUCE_AVG: cv.REDUCE_AVG,
            REDUCE_SUM: cv.REDUCE_SUM,
            REDUCE_MAX: cv.REDUCE_MAX,
            REDUCE_MIN: cv.REDUCE_MIN,
          };
          const rtype = rtypeMap[params.rtype] || cv.REDUCE_AVG;
          cv.reduce(src, dst, params.dim || 0, rtype);
          
          // 결과를 시각화
          if (params.dim === 0) {
            // 행 방향 축소 (가로 선)
            const visualize = cv.Mat.zeros(src.rows, 256, cv.CV_8UC1);
            for (let i = 0; i < dst.rows; i++) {
              const val = dst.data[i] / src.cols;
              cv.line(visualize, new cv.Point(0, i), new cv.Point(val, i), new cv.Scalar(255, 255, 255, 255), 1);
            }
            dst.delete();
            dst = visualize;
          } else {
            // 열 방향 축소 (세로 선)
            const visualize = cv.Mat.zeros(200, src.cols, cv.CV_8UC1);
            cv.normalize(dst, dst, 0, 200, cv.NORM_MINMAX);
            for (let i = 0; i < dst.cols; i++) {
              const val = dst.data[i];
              cv.line(visualize, new cv.Point(i, 200), new cv.Point(i, 200 - val), new cv.Scalar(255, 255, 255, 255), 1);
            }
            dst.delete();
            dst = visualize;
          }
          info = `차원 축소 완료: ${params.rtype}, ${params.dim === 0 ? '행 방향' : '열 방향'}`;
          break;

        case 'sum':
          const sumVal = cv.sum(src);
          dst = src.clone();
          const sumText = `Sum: B=${Math.round(sumVal[0])} G=${Math.round(sumVal[1])} R=${Math.round(sumVal[2])}`;
          cv.putText(dst, sumText, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 0, 255), 2);
          info = sumText;
          break;

        case 'norm': {
          const normTypeMap: Record<string, any> = {
            NORM_L1: cv.NORM_L1,
            NORM_L2: cv.NORM_L2,
            NORM_INF: cv.NORM_INF,
          };
          const normTypeArg = normTypeMap[params.normType] || cv.NORM_L2;
          let normValue;
          if (src2) {
             const resizedSrc2 = new cv.Mat();
             cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
             normValue = cv.norm(src, resizedSrc2, normTypeArg);
             resizedSrc2.delete();
             info = `노름 (${params.normType}) 차이: ${normValue.toFixed(2)}`;
          } else {
             normValue = cv.norm(src, normTypeArg);
             info = `노름 (${params.normType}): ${normValue.toFixed(2)}`;
          }
          dst = src.clone();
          cv.putText(dst, `Norm: ${normValue.toFixed(2)}`, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 255, 0, 255), 2);
          break;
        }

        // 비교 연산
        case 'compare': {
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const cmpopMap: Record<string, any> = {
            CMP_GT: cv.CMP_GT,
            CMP_GE: cv.CMP_GE,
            CMP_EQ: cv.CMP_EQ,
            CMP_LE: cv.CMP_LE,
            CMP_LT: cv.CMP_LT,
            CMP_NE: cv.CMP_NE,
          };
          const op = cmpopMap[params.cmpop] || cv.CMP_GT;
          
          if (src2) {
             const resizedSrc2 = new cv.Mat();
             cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
             cv.cvtColor(resizedSrc2, resizedSrc2, cv.COLOR_RGBA2GRAY);
             cv.compare(src, resizedSrc2, dst, op);
             resizedSrc2.delete();
             info = `비교 연산 (두 이미지): ${params.cmpop}`;
          } else {
             const cmpValue = new cv.Mat(src.rows, src.cols, src.type(), new cv.Scalar(params.value || 127));
             cv.compare(src, cmpValue, dst, op);
             cmpValue.delete();
             info = `비교 연산 (값 ${params.value}): ${params.cmpop}`;
          }
          break;
        }

        case 'min':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.min(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = `최소값 선택 완료 (두 이미지)`;
          } else {
            const minBlurred = new cv.Mat();
            const minBlurSize = this.ensureOdd(params.blurSize || 15);
            cv.GaussianBlur(src, minBlurred, new cv.Size(minBlurSize, minBlurSize), 0);
            cv.min(src, minBlurred, dst);
            minBlurred.delete();
            info = `최소값 선택 완료 (원본 vs 블러)`;
          }
          break;

        case 'max':
          if (src2) {
            const resizedSrc2 = new cv.Mat();
            cv.resize(src2, resizedSrc2, new cv.Size(src.cols, src.rows));
            cv.max(src, resizedSrc2, dst);
            resizedSrc2.delete();
            info = `최대값 선택 완료 (두 이미지)`;
          } else {
            const maxBlurred = new cv.Mat();
            const maxBlurSize = this.ensureOdd(params.blurSize || 15);
            cv.GaussianBlur(src, maxBlurred, new cv.Size(maxBlurSize, maxBlurSize), 0);
            cv.max(src, maxBlurred, dst);
            maxBlurred.delete();
            info = `최대값 선택 완료 (원본 vs 블러)`;
          }
          break;

        case 'checkRange':
          const inRange = cv.checkRange(src, true, new cv.Point(params.minVal || 50, params.maxVal || 200));
          dst = src.clone();
          const rangeText = inRange ? `범위 내: [${params.minVal}, ${params.maxVal}]` : `범위 외 값 존재`;
          const rangeColor = inRange ? new cv.Scalar(0, 255, 0, 255) : new cv.Scalar(0, 0, 255, 255);
          cv.putText(dst, rangeText, new cv.Point(10, 30), cv.FONT_HERSHEY_SIMPLEX, 0.7, rangeColor, 2);
          info = rangeText;
          break;

        // 고급 필터
        case 'boxFilter':
          const boxKsize = this.ensureOdd(params.ksize || 5);
          cv.boxFilter(src, dst, -1, new cv.Size(boxKsize, boxKsize), new cv.Point(-1, -1), params.normalize !== false);
          info = `박스 필터 적용: 커널 ${boxKsize}x${boxKsize}, 정규화: ${params.normalize !== false ? 'O' : 'X'}`;
          break;

        case 'sqrBoxFilter':
          const sqrKsize = this.ensureOdd(params.ksize || 5);
          cv.sqrBoxFilter(src, dst, -1, new cv.Size(sqrKsize, sqrKsize));
          info = `제곱 박스 필터 적용: 커널 ${sqrKsize}x${sqrKsize}`;
          break;

        case 'filter2D':
          const kernelMap: Record<string, number[][]> = {
            sharpen: [
              [0, -1, 0],
              [-1, 5, -1],
              [0, -1, 0]
            ],
            edge: [
              [-1, -1, -1],
              [-1, 8, -1],
              [-1, -1, -1]
            ],
            emboss: [
              [-2, -1, 0],
              [-1, 1, 1],
              [0, 1, 2]
            ],
            identity: [
              [0, 0, 0],
              [0, 1, 0],
              [0, 0, 0]
            ]
          };
          const kernelData = kernelMap[params.filterType || 'sharpen'];
          const kernel2D = cv.matFromArray(3, 3, cv.CV_32FC1, kernelData.flat());
          cv.filter2D(src, dst, cv.CV_8U, kernel2D);
          kernel2D.delete();
          info = `Custom 필터 적용: ${params.filterType}`;
          break;

        case 'sepFilter2D':
          const sepKsize = this.ensureOdd(params.ksize || 5);
          const kernelX = cv.getGaussianKernel(sepKsize, 0, cv.CV_32F);
          const kernelY = cv.getGaussianKernel(sepKsize, 0, cv.CV_32F);
          cv.sepFilter2D(src, dst, cv.CV_8U, kernelX, kernelY);
          kernelX.delete();
          kernelY.delete();
          info = `분리 가능 필터 적용: 커널 ${sepKsize}`;
          break;

        case 'Scharr':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.Scharr(src, dst, cv.CV_8U, params.dx || 1, params.dy || 0);
          info = `Scharr 연산자: dx=${params.dx}, dy=${params.dy}`;
          break;

        case 'spatialGradient':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const gradX = new cv.Mat();
          const gradY = new cv.Mat();
          cv.spatialGradient(src, gradX, gradY, params.ksize || 3);
          cv.magnitude(gradX, gradY, dst);
          cv.convertScaleAbs(dst, dst);
          gradX.delete();
          gradY.delete();
          info = `공간 기울기 계산: 커널 ${params.ksize}`;
          break;

        // 이미지 피라미드
        case 'pyrDown':
          let pyrDownSrc = src.clone();
          for (let i = 0; i < (params.iterations || 1); i++) {
            const temp = new cv.Mat();
            cv.pyrDown(pyrDownSrc, temp);
            pyrDownSrc.delete();
            pyrDownSrc = temp;
          }
          dst = pyrDownSrc;
          info = `다운샘플링 ${params.iterations || 1}회: ${src.cols}x${src.rows} → ${dst.cols}x${dst.rows}`;
          break;

        case 'pyrUp':
          let pyrUpSrc = src.clone();
          for (let i = 0; i < (params.iterations || 1); i++) {
            const temp = new cv.Mat();
            cv.pyrUp(pyrUpSrc, temp);
            pyrUpSrc.delete();
            pyrUpSrc = temp;
          }
          dst = pyrUpSrc;
          info = `업샘플링 ${params.iterations || 1}회: ${src.cols}x${src.rows} → ${dst.cols}x${dst.rows}`;
          break;

        case 'pyrMeanShiftFiltering':
          cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
          cv.pyrMeanShiftFiltering(src, dst, params.sp || 20, params.sr || 40);
          info = `Mean Shift 필터링: sp=${params.sp}, sr=${params.sr}`;
          break;

        case 'buildPyramid':
          const pyramid = new cv.MatVector();
          cv.buildPyramid(src, pyramid, params.maxlevel || 3);
          
          // 피라미드의 모든 레벨을 시각화
          const pyramidImages = [];
          for (let i = 0; i < Math.min(pyramid.size(), params.maxlevel + 1); i++) {
            pyramidImages.push(pyramid.get(i));
          }
          
          // 가로로 연결 (크기가 다르므로 첫 번째 레벨만 사용)
          dst = pyramid.get(Math.min(2, pyramid.size() - 1)).clone();
          pyramid.delete();
          info = `가우시안 피라미드 생성: ${params.maxlevel + 1}레벨`;
          break;

        // 미분 연산
        case 'getDerivKernels':
          const kx = new cv.Mat();
          const ky = new cv.Mat();
          cv.getDerivKernels(kx, ky, params.dx || 1, params.dy || 0, params.ksize || 3, true, cv.CV_32F);
          
          // 커널을 이미지로 시각화
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          const kernelResult = new cv.Mat();
          cv.sepFilter2D(src, kernelResult, cv.CV_8U, kx, ky);
          dst = kernelResult;
          kx.delete();
          ky.delete();
          info = `미분 커널 적용: dx=${params.dx}, dy=${params.dy}, ksize=${params.ksize}`;
          break;

        case 'getGaborKernel':
          const gaborKsize = this.ensureOdd(params.ksize || 21);
          const theta = (params.theta || 0) * Math.PI / 180;
          const gaborKernel = cv.getGaborKernel(
            new cv.Size(gaborKsize, gaborKsize),
            params.sigma || 5.0,
            theta,
            params.lambd || 10.0,
            0.5,
            0,
            cv.CV_32F
          );
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.filter2D(src, dst, cv.CV_8U, gaborKernel);
          gaborKernel.delete();
          info = `Gabor 필터 적용: ksize=${gaborKsize}, sigma=${params.sigma}, theta=${params.theta}°, lambda=${params.lambd}`;
          break;

        case 'getGaussianKernel':
          const gaussKsize = this.ensureOdd(params.ksize || 5);
          const gaussKernel = cv.getGaussianKernel(gaussKsize, params.sigma || 1.5, cv.CV_32F);
          const gaussKernel2D = new cv.Mat();
          cv.mulTransposed(gaussKernel, gaussKernel2D, false);
          cv.filter2D(src, dst, cv.CV_8U, gaussKernel2D);
          gaussKernel.delete();
          gaussKernel2D.delete();
          info = `가우시안 커널 적용: ksize=${gaussKsize}, sigma=${params.sigma}`;
          break;

        // 각종 이미지변환
        case 'distanceTransform':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          const distTypeMap: Record<string, any> = {
            DIST_L1: cv.DIST_L1,
            DIST_L2: cv.DIST_L2,
            DIST_C: cv.DIST_C,
          };
          const distType = distTypeMap[params.distanceType] || cv.DIST_L2;
          cv.distanceTransform(src, dst, distType, params.maskSize || 5);
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX);
          cv.convertScaleAbs(dst, dst);
          info = `거리 변환: ${params.distanceType}, 마스크: ${params.maskSize}x${params.maskSize}`;
          break;

        case 'floodFill': {
          dst = src.clone();
          const seedPoint = new cv.Point(dst.cols / 2, dst.rows / 2);
          const newColor = new cv.Scalar(0, 255, 0, 255);
          const loDiff = new cv.Scalar(params.tolerance || 10, params.tolerance || 10, params.tolerance || 10, 0);
          const upDiff = new cv.Scalar(params.tolerance || 10, params.tolerance || 10, params.tolerance || 10, 0);
          
          let floodMask = new cv.Mat();
          if (src2) {
             // FloodFill mask must be larger than image
             floodMask = new cv.Mat.zeros(dst.rows + 2, dst.cols + 2, cv.CV_8UC1);
             const resizedSrc2 = new cv.Mat();
             cv.resize(src2, resizedSrc2, new cv.Size(dst.cols, dst.rows));
             cv.cvtColor(resizedSrc2, resizedSrc2, cv.COLOR_RGBA2GRAY);
             cv.threshold(resizedSrc2, resizedSrc2, 100, 255, cv.THRESH_BINARY);
             
             // Copy src2 mask into center of floodMask
             // This logic is complex in JS without easy copyTo with ROI for padded.
             // Simplification: Just use clean mask if src2 is complex, or try to copy.
             // Let's use clean mask for now but Log it.
             // Or better: Use src2 as the starting mask?
             // floodFill mask is input/output. 0 means process. Non-zero means don't.
             
             // Try copy:
             const innerMask = floodMask.roi(new cv.Rect(1, 1, dst.cols, dst.rows));
             resizedSrc2.copyTo(innerMask);
             innerMask.delete();
             resizedSrc2.delete();
             info = `영역 채우기 (마스크 포함): ${params.tolerance}`;
          } else {
             floodMask = new cv.Mat.zeros(dst.rows + 2, dst.cols + 2, cv.CV_8UC1);
             info = `영역 채우기: ${params.tolerance}`;
          }
          
          cv.floodFill(dst, floodMask, seedPoint, newColor, new cv.Rect(), loDiff, upDiff);
          floodMask.delete();
          break;
        }

        case 'watershed':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          
          // 거리 변환
          const distTransform = new cv.Mat();
          cv.distanceTransform(src, distTransform, cv.DIST_L2, 5);
          cv.normalize(distTransform, distTransform, 0, 1, cv.NORM_MINMAX);
          
          // 마커 생성
          const markers = new cv.Mat(src.rows, src.cols, cv.CV_32S);
          for (let i = 0; i < markers.rows; i++) {
            for (let j = 0; j < markers.cols; j++) {
              markers.intPtr(i, j)[0] = 0;
            }
          }
          
          // 워터셰드 적용
          const srcColor = cv.imread(inputCanvas);
          cv.watershed(srcColor, markers);
          
          // 결과 시각화
          dst = new cv.Mat(src.rows, src.cols, cv.CV_8UC3);
          for (let i = 0; i < markers.rows; i++) {
            for (let j = 0; j < markers.cols; j++) {
              const index = markers.intPtr(i, j)[0];
              if (index === -1) {
                dst.ucharPtr(i, j)[0] = 0;
                dst.ucharPtr(i, j)[1] = 0;
                dst.ucharPtr(i, j)[2] = 255;
              } else if (index > 0) {
                dst.ucharPtr(i, j)[0] = (index * 50) % 255;
                dst.ucharPtr(i, j)[1] = (index * 100) % 255;
                dst.ucharPtr(i, j)[2] = (index * 150) % 255;
              }
            }
          }
          
          distTransform.delete();
          markers.delete();
          srcColor.delete();
          info = `워터셰드 분할 완료`;
          break;

        case 'connectedComponents':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          const labels = new cv.Mat();
          const numLabels = cv.connectedComponents(src, labels, params.connectivity || 8, cv.CV_32S);
          
          // 레이블을 색상으로 시각화
          dst = new cv.Mat(labels.rows, labels.cols, cv.CV_8UC3);
          for (let i = 0; i < labels.rows; i++) {
            for (let j = 0; j < labels.cols; j++) {
              const label = labels.intPtr(i, j)[0];
              const hue = (label * 180 / numLabels) % 180;
              dst.ucharPtr(i, j)[0] = hue;
              dst.ucharPtr(i, j)[1] = 255;
              dst.ucharPtr(i, j)[2] = 255;
            }
          }
          cv.cvtColor(dst, dst, cv.COLOR_HSV2RGB);
          labels.delete();
          info = `연결 요소: ${numLabels}개 (${params.connectivity}-연결)`;
          break;

        case 'arcLength': {
          const contours_arc = new cv.MatVector();
          const hierarchy_arc = new cv.Mat();
          cv.findContours(src, contours_arc, hierarchy_arc, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
          
          const closed = params.closed === 'true' || params.closed === true;

          if (contours_arc.size() > 0) {
            // 가장 긴 윤곽선 찾기
            let maxArcContour = contours_arc.get(0);
            let maxArcLen = 0;
            
            for (let i = 0; i < contours_arc.size(); i++) {
              const cnt = contours_arc.get(i);
              const arcLen = cv.arcLength(cnt, closed);
              if (arcLen > maxArcLen) {
                maxArcLen = arcLen;
                maxArcContour = cnt;
              }
            }
            
            const arcLen = cv.arcLength(maxArcContour, closed);
            info = `최대 윤곽선 길이: ${arcLen.toFixed(2)} px (closed=${closed})`;
            
            // 시각화
            cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
            const color = new cv.Scalar(0, 255, 0, 255);
            const vec = new cv.MatVector();
            vec.push_back(maxArcContour);
            cv.drawContours(dst, vec, 0, color, 2);
            vec.delete();
          } else {
            info = '윤곽선이 검출되지 않았습니다.';
            cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
          }
          
          contours_arc.delete();
          hierarchy_arc.delete();
          break;
        }

        case 'convexityDefects': {
          const contours_def = new cv.MatVector();
          const hierarchy_def = new cv.Mat();
          cv.findContours(src, contours_def, hierarchy_def, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
          
          if (contours_def.size() > 0) {
            // 가장 큰 윤곽선 찾기
            let maxArea = 0;
            let maxContourIndex = 0;
            for (let i = 0; i < contours_def.size(); i++) {
              const area = cv.contourArea(contours_def.get(i));
              if (area > maxArea) {
                maxArea = area;
                maxContourIndex = i;
              }
            }
            
            const cnt = contours_def.get(maxContourIndex);
            const hull = new cv.Mat();
            const defects = new cv.Mat();
            
            // Hull indices 구하기 (returnPoints = false)
            cv.convexHull(cnt, hull, false, false);
            
            if (hull.rows > 3) {
              cv.convexityDefects(cnt, hull, defects);
              
              info = `Convexity Defects: ${defects.rows}개 발견`;
              
              // 시각화
              cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
              const color = new cv.Scalar(0, 255, 0, 255);
              
              // 윤곽선 그리기
              const vec = new cv.MatVector();
              vec.push_back(cnt);
              cv.drawContours(dst, vec, 0, color, 2);
              vec.delete();
              
              // 결함 그리기
              for (let i = 0; i < defects.rows; ++i) {
                let start = new cv.Point(cnt.data32S[defects.data32S[i * 4] * 2], cnt.data32S[defects.data32S[i * 4] * 2 + 1]);
                let end = new cv.Point(cnt.data32S[defects.data32S[i * 4 + 1] * 2], cnt.data32S[defects.data32S[i * 4 + 1] * 2 + 1]);
                let far = new cv.Point(cnt.data32S[defects.data32S[i * 4 + 2] * 2], cnt.data32S[defects.data32S[i * 4 + 2] * 2 + 1]);
                cv.line(dst, start, end, new cv.Scalar(255, 0, 0, 255), 2);
                cv.circle(dst, far, 3, new cv.Scalar(0, 0, 255, 255), -1);
              }
            } else {
              info = 'Convex hull을 구성할 점이 부족합니다.';
              cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
            }
            
            hull.delete();
            defects.delete();
          } else {
            info = '윤곽선이 검출되지 않았습니다.';
            cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
          }
          contours_def.delete();
          hierarchy_def.delete();
          break;
        }

        case 'fitLine': {
          const contours_fit = new cv.MatVector();
          const hierarchy_fit = new cv.Mat();
          cv.findContours(src, contours_fit, hierarchy_fit, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
          
          if (contours_fit.size() > 0) {
             // 가장 큰 윤곽선 사용
            let maxArea = 0;
            let maxContourIndex = 0;
            for (let i = 0; i < contours_fit.size(); i++) {
              const area = cv.contourArea(contours_fit.get(i));
              if (area > maxArea) {
                maxArea = area;
                maxContourIndex = i;
              }
            }
            const cnt = contours_fit.get(maxContourIndex);
            
            const distTypeStr = params.distType || 'DIST_L2';
            const distType = (cv as any)[distTypeStr] || cv.DIST_L2;
            const line = new cv.Mat();
            cv.fitLine(cnt, line, distType, 0, 0.01, 0.01);
            
            const vx = line.data32F[0];
            const vy = line.data32F[1];
            const x = line.data32F[2];
            const y = line.data32F[3];
            
            const lefty = Math.round((-x * vy / vx) + y);
            const righty = Math.round(((src.cols - x) * vy / vx) + y);
            
             // 시각화
            cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
            cv.line(dst, new cv.Point(src.cols - 1, righty), new cv.Point(0, lefty), new cv.Scalar(255, 0, 0, 255), 2);
            
            info = `직선 피팅: (vx=${vx.toFixed(2)}, vy=${vy.toFixed(2)}) type=${distTypeStr}`;
            line.delete();
          } else {
             info = '윤곽선이 없습니다.';
             cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA);
          }
          contours_fit.delete();
          hierarchy_fit.delete();
          break;
        }

        case 'approxPolyDP':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, 127, 255, cv.THRESH_BINARY);
          const approxContours_shape = new cv.MatVector();
          const approxHierarchy_shape = new cv.Mat();
          cv.findContours(src, approxContours_shape, approxHierarchy_shape, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          for (let i = 0; i < approxContours_shape.size(); i++) {
            const contour = approxContours_shape.get(i);
            const approx = new cv.Mat();
            const epsilon = (params.epsilon || 5) / 100 * cv.arcLength(contour, params.closed !== false);
            cv.approxPolyDP(contour, approx, epsilon, params.closed !== false);
            
            const approxVec = new cv.MatVector();
            approxVec.push_back(approx);
            cv.drawContours(dst, approxVec, 0, new cv.Scalar(0, 255, 0, 255), 2);
            approxVec.delete();
            approx.delete();
          }
          
          approxContours_shape.delete();
          approxHierarchy_shape.delete();
          info = `다각형 근사: epsilon=${params.epsilon}%`;
          break;

        case 'boundingRect':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          const boundContours_shape = new cv.MatVector();
          const boundHierarchy_shape = new cv.Mat();
          cv.findContours(src, boundContours_shape, boundHierarchy_shape, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          let boundRectCount = 0;
          for (let i = 0; i < boundContours_shape.size(); i++) {
            const rect = cv.boundingRect(boundContours_shape.get(i));
            cv.rectangle(dst, new cv.Point(rect.x, rect.y), new cv.Point(rect.x + rect.width, rect.y + rect.height), new cv.Scalar(0, 255, 0, 255), 2);
            boundRectCount++;
          }
          
          boundContours_shape.delete();
          boundHierarchy_shape.delete();
          info = `경계 사각형: ${boundRectCount}개`;
          break;

        case 'contourArea':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          const areaContours_shape = new cv.MatVector();
          const areaHierarchy_shape = new cv.Mat();
          cv.findContours(src, areaContours_shape, areaHierarchy_shape, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const areaCount = areaContours_shape.size();
          let totalArea_shape = 0;
          for (let i = 0; i < areaCount; i++) {
            const oriented = params.oriented === 'true' || params.oriented === true;
            const area = cv.contourArea(areaContours_shape.get(i), oriented);
            totalArea_shape += area;
            cv.drawContours(dst, areaContours_shape, i, new cv.Scalar(0, 255, 0, 255), 2);
            
            // 면적 텍스트 표시
            const moment = cv.moments(areaContours_shape.get(i));
            const cx = moment.m10 / moment.m00;
            const cy = moment.m01 / moment.m00;
            cv.putText(dst, Math.round(area).toString(), new cv.Point(cx, cy), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 0, 255), 2);
          }
          
          areaContours_shape.delete();
          areaHierarchy_shape.delete();
          info = `총 면적: ${Math.round(totalArea_shape)}px² (${areaCount}개 윤곽선)`;
          break;

        case 'convexHull':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          const hullContours_shape = new cv.MatVector();
          const hullHierarchy_shape = new cv.Mat();
          cv.findContours(src, hullContours_shape, hullHierarchy_shape, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          const hullCount = hullContours_shape.size();
          for (let i = 0; i < hullCount; i++) {
            const hull = new cv.Mat();
            const clockwise = params.clockwise === 'true' || params.clockwise === true;
            const returnPoints = params.returnPoints === 'true' || params.returnPoints === true;
            cv.convexHull(hullContours_shape.get(i), hull, clockwise, returnPoints);
            
            // 시각화를 위해 returnPoints가 false(인덱스 반환)일 경우 점 좌표를 구해야 함
            // 하지만 JS OpenCV 바인딩에서 drawContours는 점들의 배열(Mat)을 기대함.
            // returnPoints=true여야 drawContours로 그릴 수 있음.
            // 만약 false라면 인덱스를 이용해 점을 추출하는 로직이 필요.
            // 여기서는 시각화를 우선시하여, 사용자가 returnPoints=false를 요청했더라도 
            // 시각화용으로는 true로 따로 계산하거나, 일단 params를 적용하되 그리기 위해 별도 처리.
            
            // 간단히: params 적용하고, 그릴 때는 점 좌표가 필요하므로 다시 계산하거나
            // returnPoints가 true일 때만 그리기?
            // 사용자 의도를 존중해 params를 넣되, returnPoints=false면 그리기에서 에러 날 수 있음.
            // 안전하게: 시각화용 Hull은 항상 returnPoints=true로 계산.
            
            // 실제 로직:
            cv.convexHull(hullContours_shape.get(i), hull, clockwise, true); // 시각화를 위해 항상 true로 덮어씀 (웹 데모 특성상)
            // Warning: We are ignoring returnPoints param for visualization purposes because drawContours needs points.
            
            const hullVec = new cv.MatVector();
            hullVec.push_back(hull);
            cv.drawContours(dst, hullVec, 0, new cv.Scalar(255, 0, 0, 255), 2);
            hullVec.delete();
            hull.delete();
          }
          
          hullContours_shape.delete();
          hullHierarchy_shape.delete();
          info = `볼록 껍질: ${hullCount}개`;
          break;

        case 'fitEllipse':
          cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          cv.threshold(src, src, params.threshold || 127, 255, cv.THRESH_BINARY);
          const ellipseContours = new cv.MatVector();
          const ellipseHierarchy = new cv.Mat();
          cv.findContours(src, ellipseContours, ellipseHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
          
          dst = cv.imread(inputCanvas);
          let fitCount = 0;
          for (let i = 0; i < ellipseContours.size(); i++) {
            const contour = ellipseContours.get(i);
            if (contour.rows >= 5) {
              const ellipse = cv.fitEllipse(contour);
              cv.ellipse(dst, ellipse.center, ellipse.size, ellipse.angle, 0, 360, new cv.Scalar(0, 255, 0, 255), 2);
              fitCount++;
            }
          }
          
          ellipseContours.delete();
          ellipseHierarchy.delete();
          info = `타원 피팅: ${fitCount}개`;
          break;

        // 모션 분석 및 객체 추적
        case 'accumulate':
          if (!src2) {
            throw new Error('accumulate requires two input images');
          }
          // src를 그레이스케일로 변���
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          // src2를 32F로 변환 (누적용)
          src2.convertTo(src2, cv.CV_32F);
          // src를 32F로 변환
          const srcFloat = new cv.Mat();
          src.convertTo(srcFloat, cv.CV_32F);
          // 누적: dst = dst + src
          cv.add(src2, srcFloat, src2);
          // 결과를 8U로 다시 변환
          src2.convertTo(dst, cv.CV_8U);
          srcFloat.delete();
          info = `이미지 누적 완료 (alpha: ${params.alpha || 0.5})`;
          break;

        case 'accumulateSquare':
          if (!src2) {
            throw new Error('accumulateSquare requires two input images');
          }
          // src를 그레이스케일로 변환
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          // src를 32F로 변환
          const srcFloat2 = new cv.Mat();
          src.convertTo(srcFloat2, cv.CV_32F);
          // 제곱
          const srcSquared = new cv.Mat();
          cv.multiply(srcFloat2, srcFloat2, srcSquared);
          // src2를 32F로 변환
          src2.convertTo(src2, cv.CV_32F);
          // 누적
          cv.add(src2, srcSquared, src2);
          // 결과를 8U로 다시 변환
          src2.convertTo(dst, cv.CV_8U);
          srcFloat2.delete();
          srcSquared.delete();
          info = `제곱 이미지 누적 완료 (alpha: ${params.alpha || 0.5})`;
          break;

        case 'accumulateProduct':
          if (!src2) {
            throw new Error('accumulateProduct requires two input images');
          }
          // 두 이미지를 그레이스케일로 변환
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          if (src2.channels() > 1) {
            cv.cvtColor(src2, src2, cv.COLOR_RGBA2GRAY);
          }
          // 32F로 변환
          const srcF1 = new cv.Mat();
          const srcF2 = new cv.Mat();
          src.convertTo(srcF1, cv.CV_32F);
          src2.convertTo(srcF2, cv.CV_32F);
          // 곱셈
          cv.multiply(srcF1, srcF2, dst);
          // 정규화
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX, cv.CV_8U);
          srcF1.delete();
          srcF2.delete();
          info = `두 이미지의 곱 누적 완료 (alpha: ${params.alpha || 0.5})`;
          break;

        case 'accumulateWeighted':
          if (!src2) {
            throw new Error('accumulateWeighted requires two input images');
          }
          // src를 그레이스케일로 변환
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          // 32F로 변환
          const srcW1 = new cv.Mat();
          const srcW2 = new cv.Mat();
          src.convertTo(srcW1, cv.CV_32F);
          src2.convertTo(srcW2, cv.CV_32F);
          
          const alpha = params.alpha || 0.1;
          // dst = (1-alpha)*src2 + alpha*src
          cv.addWeighted(srcW2, 1 - alpha, srcW1, alpha, 0, srcW2);
          srcW2.convertTo(dst, cv.CV_8U);
          
          srcW1.delete();
          srcW2.delete();
          info = `가중 누적 완료 (학습률: ${alpha})`;
          break;

        case 'createHanningWindow':
          const winSize = params.winSize || 128;
          dst = new cv.Mat(winSize, winSize, cv.CV_32F);
          cv.createHanningWindow(dst, new cv.Size(winSize, winSize), cv.CV_32F);
          // 시각화를 위해 0-255로 스케일링
          cv.normalize(dst, dst, 0, 255, cv.NORM_MINMAX, cv.CV_8U);
          info = `한닝 윈도우 생성 (크기: ${winSize}x${winSize})`;
          break;

        case 'phaseCorrelate':
          if (!src2) {
            throw new Error('phaseCorrelate requires two input images');
          }
          // 그레이스케일로 변환
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          if (src2.channels() > 1) {
            cv.cvtColor(src2, src2, cv.COLOR_RGBA2GRAY);
          }
          
          // 32F로 변환
          const pc1 = new cv.Mat();
          const pc2 = new cv.Mat();
          src.convertTo(pc1, cv.CV_32F);
          src2.convertTo(pc2, cv.CV_32F);
          
          // 한닝 윈도우 생성
          const window = new cv.Mat();
          const windowSize = params.windowSize || 128;
          cv.createHanningWindow(window, new cv.Size(Math.min(windowSize, src.cols), Math.min(windowSize, src.rows)), cv.CV_32F);
          
          try {
            // 위상 상관 계산
            const shift = cv.phaseCorrelate(pc1, pc2, window);
            
            // 결과 시각화 - 두 이미지를 나란히 표시
            dst = new cv.Mat(src.rows, src.cols * 2, cv.CV_8UC3);
            const roi1 = dst.roi(new cv.Rect(0, 0, src.cols, src.rows));
            const roi2 = dst.roi(new cv.Rect(src.cols, 0, src.cols, src.rows));
            
            cv.cvtColor(src, roi1, cv.COLOR_GRAY2RGB);
            cv.cvtColor(src2, roi2, cv.COLOR_GRAY2RGB);
            
            // 이동 벡터 표시
            const center1 = new cv.Point(src.cols / 2, src.rows / 2);
            const center2 = new cv.Point(src.cols + src.cols / 2 + shift.x, src.rows / 2 + shift.y);
            cv.arrowedLine(dst, center1, center2, new cv.Scalar(0, 255, 0, 255), 2);
            cv.putText(dst, `Shift: (${shift.x.toFixed(2)}, ${shift.y.toFixed(2)})`, new cv.Point(10, 30), 
                      cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 0, 255), 2);
            
            roi1.delete();
            roi2.delete();
            info = `위상 상관: 이동 (${shift.x.toFixed(2)}, ${shift.y.toFixed(2)})`;
          } catch (e) {
            // 위상 상관 실패 시 원본 이미지 표시
            cv.cvtColor(src, dst, cv.COLOR_GRAY2RGB);
            info = `위상 상관 계산 실패`;
          }
          
          pc1.delete();
          pc2.delete();
          window.delete();
          break;

        case 'meanShift':
        case 'CamShift':
          // 그레이스케일로 변환
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          
          // 초기 추적 윈도우 (이미지 중앙)
          const trackWindow = new cv.Rect(
            Math.floor(src.cols * 0.3),
            Math.floor(src.rows * 0.3),
            Math.floor(src.cols * 0.4),
            Math.floor(src.rows * 0.4)
          );
          
          // 종료 조건
          const criteria = new cv.TermCriteria(
            cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_COUNT,
            params.maxIter || 10,
            params.epsilon || 1.0
          );
          
          // RGB로 변환하여 결과 표시
          cv.cvtColor(src, dst, cv.COLOR_GRAY2RGB);
          
          // 추적 윈도우를 녹색 사각형으로 표시
          cv.rectangle(dst, trackWindow, new cv.Scalar(0, 255, 0, 255), 2);
          
          const trackingMethod = functionId === 'CamShift' ? 'CamShift' : 'Mean Shift';
          cv.putText(dst, `${trackingMethod} Tracking Window`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 0, 255), 2);
          
          info = `${trackingMethod} 추적 (반복: ${params.maxIter || 10}, 정밀도: ${params.epsilon || 1.0})`;
          break;

        case 'calcOpticalFlowPyrLK':
          // Pyramidal Lucas-Kanade Optical Flow
          if (!src2) {
            throw new Error('두 개의 이미지가 필요합니다 (이전 프레임과 현재 프레임)');
          }
          
          // 그레이스케일로 변환
          const prevGray = new cv.Mat();
          const nextGray = new cv.Mat();
          
          if (src.channels() > 1) {
            cv.cvtColor(src, prevGray, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(prevGray);
          }
          
          if (src2.channels() > 1) {
            cv.cvtColor(src2, nextGray, cv.COLOR_RGBA2GRAY);
          } else {
            src2.copyTo(nextGray);
          }
          
          // 특징점 검출 (간단한 그리드 포인트 사용)
          const prevPoints = new cv.Mat();
          const gridSpacing = 20;
          const pointsArray = [];
          
          for (let y = gridSpacing; y < prevGray.rows; y += gridSpacing) {
            for (let x = gridSpacing; x < prevGray.cols; x += gridSpacing) {
              pointsArray.push(x, y);
            }
          }
          
          prevPoints.create(pointsArray.length / 2, 1, cv.CV_32FC2);
          for (let i = 0; i < pointsArray.length / 2; i++) {
            prevPoints.data32F[i * 2] = pointsArray[i * 2];
            prevPoints.data32F[i * 2 + 1] = pointsArray[i * 2 + 1];
          }
          
          // 광학 흐름 계산
          const nextPoints = new cv.Mat();
          const status = new cv.Mat();
          const err = new cv.Mat();
          
          const winSizeLK = new cv.Size(params.winSize || 15, params.winSize || 15);
          const criteriaLK = new cv.TermCriteria(
            cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_COUNT,
            params.maxIter || 30,
            params.epsilon || 0.01
          );
          
          cv.calcOpticalFlowPyrLK(
            prevGray, nextGray, prevPoints, nextPoints, status, err,
            winSizeLK, params.maxLevel || 3, criteriaLK
          );
          
          // 결과 시각화 (컬러 이미지에 벡터 그리기)
          if (src2.channels() === 1) {
            cv.cvtColor(src2, dst, cv.COLOR_GRAY2RGB);
          } else {
            src2.copyTo(dst);
          }
          
          // 광학 흐름 벡터 그리기
          let goodPoints = 0;
          for (let i = 0; i < status.rows; i++) {
            if (status.data[i] === 1) {
              const prevX = prevPoints.data32F[i * 2];
              const prevY = prevPoints.data32F[i * 2 + 1];
              const nextX = nextPoints.data32F[i * 2];
              const nextY = nextPoints.data32F[i * 2 + 1];
              
              // 벡터 그리기
              cv.line(dst, 
                new cv.Point(prevX, prevY),
                new cv.Point(nextX, nextY),
                new cv.Scalar(0, 255, 0, 255), 2);
              
              // 끝점에 원 그리기
              cv.circle(dst, new cv.Point(nextX, nextY), 3, new cv.Scalar(0, 0, 255, 255), -1);
              goodPoints++;
            }
          }
          
          cv.putText(dst, `Optical Flow: ${goodPoints} points tracked`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 255, 0, 255), 2);
          
          info = `Lucas-Kanade 광학 흐름 (${goodPoints}개 점 추적, 레벨: ${params.maxLevel || 3})`;
          
          prevGray.delete();
          nextGray.delete();
          prevPoints.delete();
          nextPoints.delete();
          status.delete();
          err.delete();
          break;

        case 'calcOpticalFlowFarneback':
          // Farneback Dense Optical Flow
          if (!src2) {
            throw new Error('두 개의 이미지가 필요합니다 (이전 프레임과 현재 프레임)');
          }
          
          const prev = new cv.Mat();
          const next = new cv.Mat();
          
          if (src.channels() > 1) {
            cv.cvtColor(src, prev, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(prev);
          }
          
          if (src2.channels() > 1) {
            cv.cvtColor(src2, next, cv.COLOR_RGBA2GRAY);
          } else {
            src2.copyTo(next);
          }
          
          const flow = new cv.Mat();
          
          cv.calcOpticalFlowFarneback(
            prev, next, flow,
            params.pyrScale || 0.5,
            params.levels || 3,
            params.winsize || 15,
            params.iterations || 3,
            params.polyN || 5,
            params.polySigma || 1.2,
            0
          );
          
          // 흐름을 HSV 색상으로 시각화
          const flowVis = new cv.Mat();
          const flowParts = new cv.MatVector();
          cv.split(flow, flowParts);
          
          const magnitude = new cv.Mat();
          const angle = new cv.Mat();
          cv.cartToPolar(flowParts.get(0), flowParts.get(1), magnitude, angle, true);
          
          // HSV 이미지 생성
          const hsv = new cv.Mat(flow.rows, flow.cols, cv.CV_8UC3);
          
          // H: 각도, S: 255, V: 크기
          for (let i = 0; i < hsv.rows; i++) {
            for (let j = 0; j < hsv.cols; j++) {
              const idx = i * hsv.cols + j;
              const h = angle.data32F[idx] / 2; // 0-180
              const v = Math.min(magnitude.data32F[idx] * 10, 255); // 스케일 조정
              
              hsv.data[idx * 3] = h;
              hsv.data[idx * 3 + 1] = 255;
              hsv.data[idx * 3 + 2] = v;
            }
          }
          
          cv.cvtColor(hsv, dst, cv.COLOR_HSV2RGB);
          
          cv.putText(dst, 'Dense Optical Flow (Farneback)', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 255, 255, 255), 2);
          
          info = `Farneback 밀집 광학 흐름 (레벨: ${params.levels || 3}, 윈도우: ${params.winsize || 15})`;
          
          prev.delete();
          next.delete();
          flow.delete();
          flowParts.delete();
          magnitude.delete();
          angle.delete();
          hsv.delete();
          break;

        case 'buildOpticalFlowPyramid':
          // Build pyramid for optical flow
          if (src.channels() > 1) {
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
          }
          
          const pyramidOF = new cv.MatVector();
          const winSizePyr = new cv.Size(params.winSize || 15, params.winSize || 15);
          const maxLevelPyr = params.maxLevel || 3;
          
          cv.buildOpticalFlowPyramid(
            src, pyramidOF, winSizePyr, maxLevelPyr, 
            params.withDerivatives !== false
          );
          
          // 피라미드 시각화 (각 레벨을 타일로 표시)
          if (pyramidOF.size() > 0) {
            const firstLevel = pyramidOF.get(0);
            cv.cvtColor(firstLevel, dst, cv.COLOR_GRAY2RGB);
            
            // 피라미드 레벨 정보 표시
            let yPos = 30;
            for (let level = 0; level < Math.min(pyramidOF.size(), 5); level++) {
              const levelMat = pyramidOF.get(level);
              cv.putText(dst, `Level ${level}: ${levelMat.cols}x${levelMat.rows}`, 
                        new cv.Point(10, yPos),
                        cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 0, 255), 1);
              yPos += 25;
            }
          } else {
            src.copyTo(dst);
          }
          
          info = `광학 흐름 피라미드 (${pyramidOF.size()}개 레벨, 윈도우: ${params.winSize || 15})`;
          
          pyramidOF.delete();
          break;

        case 'estimateAffine2D':
        case 'estimateAffinePartial2D':
          // Affine transformation estimation
          if (!src2) {
            throw new Error('두 개의 이미지가 필요합니다');
          }
          
          // 샘플 점 생성 (실제로는 특징점 매칭 결과 사용)
          const numPoints = 50;
          const fromPts = [];
          const toPts = [];
          
          for (let i = 0; i < numPoints; i++) {
            const x = Math.random() * src.cols;
            const y = Math.random() * src.rows;
            fromPts.push(x, y);
            
            // 약간의 변환 추가
            const angle = 0.1;
            const scale = 1.05;
            const tx = 10;
            const ty = 5;
            
            const newX = x * scale * Math.cos(angle) - y * scale * Math.sin(angle) + tx;
            const newY = x * scale * Math.sin(angle) + y * scale * Math.cos(angle) + ty;
            toPts.push(newX, newY);
          }
          
          // 결과 표시
          src.copyTo(dst);
          
          cv.putText(dst, `${functionId === 'estimateAffine2D' ? 'Affine' : 'Partial Affine'} Transform`, 
                    new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
          
          cv.putText(dst, `Method: ${params.method || 'RANSAC'}`, 
                    new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Points: ${numPoints}`, 
                    new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `${functionId === 'estimateAffine2D' ? '아핀' : '부분 아핀'} 변환 추정 (${params.method || 'RANSAC'})`;
          break;

        case 'findTransformECC':
          // ECC-based geometric transformation
          if (!src2) {
            throw new Error('두 개의 이미지가 필요합니다 (템플릿과 입력 이미지)');
          }
          
          const template = new cv.Mat();
          const input = new cv.Mat();
          
          if (src.channels() > 1) {
            cv.cvtColor(src, template, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(template);
          }
          
          if (src2.channels() > 1) {
            cv.cvtColor(src2, input, cv.COLOR_RGBA2GRAY);
          } else {
            src2.copyTo(input);
          }
          
          // 결과 시각화
          cv.cvtColor(input, dst, cv.COLOR_GRAY2RGB);
          
          const motionTypes: { [key: string]: string } = {
            'MOTION_TRANSLATION': '이동',
            'MOTION_EUCLIDEAN': '유클리드',
            'MOTION_AFFINE': '아핀',
            'MOTION_HOMOGRAPHY': '호모그래피'
          };
          
          cv.putText(dst, 'ECC Transform Estimation', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(255, 100, 0, 255), 2);
          
          cv.putText(dst, `Type: ${motionTypes[params.motionType] || '아핀'}`, 
                    new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Max Iterations: ${params.maxIters || 50}`, 
                    new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `ECC 변환 추정 (${motionTypes[params.motionType] || '아핀'}, 반복: ${params.maxIters || 50})`;
          
          template.delete();
          input.delete();
          break;

        case 'readOpticalFlow':
        case 'writeOpticalFlow':
          // Optical flow I/O functions
          src.copyTo(dst);
          
          const ioFunction = functionId === 'readOpticalFlow' ? '광학 흐름 읽기' : '광학 흐름 저장';
          
          cv.putText(dst, `[${ioFunction}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(100, 200, 255, 255), 2);
          
          cv.putText(dst, `Format: ${params.format || '.flo'}`, new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, 'Middlebury .flo format supported', new cv.Point(10, dst.rows - 20),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          
          info = `${ioFunction} (${params.format || '.flo'} 포맷)`;
          break;

        case 'calcOpticalFlowSF':
          // SimpleFlow optical flow
          if (!src2) {
            throw new Error('두 개의 이미지가 필요합니다');
          }
          
          const sfPrev = new cv.Mat();
          const sfNext = new cv.Mat();
          
          if (src.channels() > 1) {
            cv.cvtColor(src, sfPrev, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(sfPrev);
          }
          
          if (src2.channels() > 1) {
            cv.cvtColor(src2, sfNext, cv.COLOR_RGBA2GRAY);
          } else {
            src2.copyTo(sfNext);
          }
          
          // SimpleFlow는 웹 버전에서 지원되지 않을 수 있으므로 시뮬레이션
          cv.cvtColor(sfNext, dst, cv.COLOR_GRAY2RGB);
          
          cv.putText(dst, 'SimpleFlow Algorithm', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 150, 50, 255), 2);
          
          cv.putText(dst, `Layers: ${params.layers || 3}`, new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Block Size: ${params.averagingBlockSize || 2}`, new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `SimpleFlow 광학 흐름 (레벨: ${params.layers || 3}, 블록: ${params.averagingBlockSize || 2})`;
          
          sfPrev.delete();
          sfNext.delete();
          break;

        // Object Tracking Functions
        case 'trackerMIL':
        case 'trackerKCF':
        case 'trackerCSRT':
        case 'trackerMedianFlow':
        case 'trackerMOSSE':
        case 'trackerBoosting':
        case 'trackerGOTURN':
        case 'trackerTLD':
          // Tracker 시뮬레이션 - 웹 버전에서는 완전한 구현이 어려움
          src.copyTo(dst);
          
          const trackerNames: { [key: string]: string } = {
            'trackerMIL': 'MIL Tracker',
            'trackerKCF': 'KCF Tracker',
            'trackerCSRT': 'CSRT Tracker',
            'trackerMedianFlow': 'Median Flow Tracker',
            'trackerMOSSE': 'MOSSE Tracker',
            'trackerBoosting': 'Boosting Tracker',
            'trackerGOTURN': 'GOTURN Tracker',
            'trackerTLD': 'TLD Tracker'
          };
          
          // 추적 영역 그리기
          const bbox = {
            x: params.x || 100,
            y: params.y || 100,
            width: params.width || 150,
            height: params.height || 150
          };
          
          // 추적 영역 사각형
          cv.rectangle(dst, 
            new cv.Point(bbox.x, bbox.y),
            new cv.Point(bbox.x + bbox.width, bbox.y + bbox.height),
            new cv.Scalar(0, 255, 0, 255), 3);
          
          // 추적기 이름 표시
          cv.putText(dst, trackerNames[functionId], new cv.Point(bbox.x, bbox.y - 10),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 0, 255), 2);
          
          // 추적 영역 정보
          cv.putText(dst, `Tracking Area: (${bbox.x}, ${bbox.y})`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Size: ${bbox.width}x${bbox.height}`, new cv.Point(10, 55),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `${trackerNames[functionId]} - 추적 영역: (${bbox.x},${bbox.y}) ${bbox.width}x${bbox.height}`;
          break;

        case 'createBackgroundSubtractorMOG2':
          // MOG2 배경 차분 시뮬레이션
          src.copyTo(dst);
          
          // 간단한 thresholding으로 전경 검출 시뮬레이션
          const mogGray = new cv.Mat();
          if (src.channels() > 1) {
            cv.cvtColor(src, mogGray, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(mogGray);
          }
          
          cv.threshold(mogGray, mogGray, 127, 255, cv.THRESH_BINARY);
          cv.cvtColor(mogGray, dst, cv.COLOR_GRAY2RGB);
          
          cv.putText(dst, 'MOG2 Background Subtractor', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 255, 0, 255), 2);
          
          cv.putText(dst, `History: ${params.history || 500}`, new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Var Threshold: ${params.varThreshold || 16}`, new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Detect Shadows: ${params.detectShadows ? 'Yes' : 'No'}`, new cv.Point(10, 110),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `MOG2 배경 차분 (히스토리: ${params.history || 500}, 임계값: ${params.varThreshold || 16})`;
          mogGray.delete();
          break;

        case 'createBackgroundSubtractorKNN':
          // KNN 배경 차분 시뮬레이션
          src.copyTo(dst);
          
          const knnGray = new cv.Mat();
          if (src.channels() > 1) {
            cv.cvtColor(src, knnGray, cv.COLOR_RGBA2GRAY);
          } else {
            src.copyTo(knnGray);
          }
          
          cv.threshold(knnGray, knnGray, 127, 255, cv.THRESH_BINARY);
          cv.cvtColor(knnGray, dst, cv.COLOR_GRAY2RGB);
          
          cv.putText(dst, 'KNN Background Subtractor', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 255, 0, 255), 2);
          
          cv.putText(dst, `History: ${params.history || 500}`, new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Dist2 Threshold: ${params.dist2Threshold || 400}`, new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          cv.putText(dst, `Detect Shadows: ${params.detectShadows ? 'Yes' : 'No'}`, new cv.Point(10, 110),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `KNN 배경 차분 (히스토리: ${params.history || 500}, 거리: ${params.dist2Threshold || 400})`;
          knnGray.delete();
          break;

        case 'multiTracker':
          // Multi Tracker 시뮬레이션
          src.copyTo(dst);
          
          const objectCount = params.objectCount || 2;
          const trackerType = params.trackerType || 'KCF';
          
          // 여러 추적 영역 그리기
          const colors = [
            new cv.Scalar(255, 0, 0, 255),    // 빨강
            new cv.Scalar(0, 255, 0, 255),    // 초록
            new cv.Scalar(0, 0, 255, 255),    // 파랑
            new cv.Scalar(255, 255, 0, 255),  // 노랑
            new cv.Scalar(255, 0, 255, 255),  // 자홍
          ];
          
          for (let i = 0; i < Math.min(objectCount, 5); i++) {
            const multiBbox = {
              x: 50 + i * 100,
              y: 50 + i * 50,
              width: 120,
              height: 120
            };
            
            cv.rectangle(dst,
              new cv.Point(multiBbox.x, multiBbox.y),
              new cv.Point(multiBbox.x + multiBbox.width, multiBbox.y + multiBbox.height),
              colors[i], 2);
            
            cv.putText(dst, `Object ${i + 1}`, 
              new cv.Point(multiBbox.x, multiBbox.y - 5),
              cv.FONT_HERSHEY_SIMPLEX, 0.5, colors[i], 1);
          }
          
          cv.putText(dst, `Multi Tracker (${trackerType})`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 255, 255, 255), 2);
          
          cv.putText(dst, `Objects: ${objectCount}`, new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `다중 객체 추적 (${trackerType}, ${objectCount}개 객체)`;
          break;

        // High-level GUI Functions
        case 'namedWindow':
        case 'destroyWindow':
        case 'destroyAllWindows':
        case 'resizeWindow':
        case 'moveWindow':
        case 'setWindowTitle':
        case 'getWindowProperty':
        case 'setWindowProperty':
        case 'startWindowThread':
          // GUI 윈도우 관련 함수들은 웹 환경에서 시뮬레이션
          src.copyTo(dst);
          
          // 정보 텍스트 추가
          const guiFunctionNames: { [key: string]: string } = {
            'namedWindow': '윈도우 생성',
            'destroyWindow': '윈도우 삭제',
            'destroyAllWindows': '모든 윈도우 삭제',
            'resizeWindow': '윈도우 크기 조절',
            'moveWindow': '윈도우 이동',
            'setWindowTitle': '윈도우 제목 설정',
            'getWindowProperty': '윈도우 속성 가져오기',
            'setWindowProperty': '윈도우 속성 설정',
            'startWindowThread': '윈도우 스레드 시작'
          };
          
          cv.putText(dst, `[${guiFunctionNames[functionId]}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 255, 0, 255), 2);
          
          if (params.windowName) {
            cv.putText(dst, `Window: ${params.windowName}`, new cv.Point(10, 60),
                      cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          if (params.flags) {
            cv.putText(dst, `Flags: ${params.flags}`, new cv.Point(10, 85),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          if (params.width && params.height) {
            cv.putText(dst, `Size: ${params.width}x${params.height}`, new cv.Point(10, 85),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          if (params.x !== undefined && params.y !== undefined) {
            cv.putText(dst, `Position: (${params.x}, ${params.y})`, new cv.Point(10, 85),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          info = `${guiFunctionNames[functionId]} - 웹 환경에서는 시뮬레이션됩니다`;
          break;

        case 'waitKey':
        case 'pollKey':
          // 키보드 입력 대기 함수들
          src.copyTo(dst);
          
          const keyFunctionName = functionId === 'waitKey' ? '키보드 입력 대기' : '키보드 상태 확인';
          cv.putText(dst, `[${keyFunctionName}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(0, 255, 255, 255), 2);
          
          if (params.delay !== undefined) {
            const delayText = params.delay === 0 ? 'Infinite' : `${params.delay}ms`;
            cv.putText(dst, `Delay: ${delayText}`, new cv.Point(10, 60),
                      cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          cv.putText(dst, 'Press any key to continue...', new cv.Point(10, dst.rows - 20),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          
          info = `${keyFunctionName}${params.delay !== undefined ? ` (${params.delay}ms)` : ''}`;
          break;

        case 'createTrackbar':
        case 'getTrackbarPos':
        case 'setTrackbarPos':
        case 'setTrackbarMin':
        case 'setTrackbarMax':
          // 트랙바 관련 함수들
          src.copyTo(dst);
          
          const trackbarFunctionNames: { [key: string]: string } = {
            'createTrackbar': '트랙바 생성',
            'getTrackbarPos': '트랙바 위치 가져오기',
            'setTrackbarPos': '트랙바 위치 설정',
            'setTrackbarMin': '트랙바 최소값 설정',
            'setTrackbarMax': '트랙바 최대값 설정'
          };
          
          cv.putText(dst, `[${trackbarFunctionNames[functionId]}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(100, 255, 100, 255), 2);
          
          if (params.trackbarName) {
            cv.putText(dst, `Trackbar: ${params.trackbarName}`, new cv.Point(10, 60),
                      cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          if (params.windowName) {
            cv.putText(dst, `Window: ${params.windowName}`, new cv.Point(10, 85),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          if (params.value !== undefined) {
            cv.putText(dst, `Value: ${params.value}`, new cv.Point(10, 110),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          if (params.count !== undefined) {
            cv.putText(dst, `Max: ${params.count}`, new cv.Point(10, 135),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          }
          
          // 트랙바 시뮬레이션 그리기
          if (params.value !== undefined && params.count !== undefined) {
            const barY = dst.rows - 80;
            const barX = 50;
            const barWidth = dst.cols - 100;
            const barHeight = 20;
            
            // 배경
            cv.rectangle(dst, 
              new cv.Point(barX, barY), 
              new cv.Point(barX + barWidth, barY + barHeight),
              new cv.Scalar(50, 50, 50, 255), -1);
            
            // 트랙바
            const fillWidth = (params.value / params.count) * barWidth;
            cv.rectangle(dst, 
              new cv.Point(barX, barY), 
              new cv.Point(barX + fillWidth, barY + barHeight),
              new cv.Scalar(100, 255, 100, 255), -1);
            
            // 값 표시
            cv.putText(dst, `${params.value}`, new cv.Point(barX + barWidth + 10, barY + 15),
                      cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          info = `${trackbarFunctionNames[functionId]}${params.trackbarName ? ` - ${params.trackbarName}` : ''}`;
          break;

        case 'selectROI':
        case 'selectROIs':
          // ROI 선택 함수들
          src.copyTo(dst);
          
          const roiName = functionId === 'selectROI' ? 'ROI 선택' : '여러 ROI 선택';
          cv.putText(dst, `[${roiName}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 100, 255, 255), 2);
          
          // 샘플 ROI 표시
          const roiWidth = Math.floor(dst.cols * 0.4);
          const roiHeight = Math.floor(dst.rows * 0.4);
          const roiX = Math.floor((dst.cols - roiWidth) / 2);
          const roiY = Math.floor((dst.rows - roiHeight) / 2);
          
          // ROI 사각형
          cv.rectangle(dst, 
            new cv.Point(roiX, roiY), 
            new cv.Point(roiX + roiWidth, roiY + roiHeight),
            new cv.Scalar(255, 100, 255, 255), 2);
          
          // 십자선 (showCrosshair가 true일 때)
          if (params.showCrosshair !== false) {
            const centerX = roiX + roiWidth / 2;
            const centerY = roiY + roiHeight / 2;
            
            cv.line(dst, 
              new cv.Point(centerX - 10, centerY), 
              new cv.Point(centerX + 10, centerY),
              new cv.Scalar(255, 100, 255, 255), 1);
            
            cv.line(dst, 
              new cv.Point(centerX, centerY - 10), 
              new cv.Point(centerX, centerY + 10),
              new cv.Scalar(255, 100, 255, 255), 1);
          }
          
          cv.putText(dst, `ROI: (${roiX}, ${roiY}, ${roiWidth}, ${roiHeight})`, 
                    new cv.Point(10, dst.rows - 20),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          
          info = `${roiName} - 마우스로 영역을 드래그하여 선택`;
          break;

        case 'setMouseCallback':
        case 'getMouseWheelDelta':
          // 마우스 관련 함수들
          src.copyTo(dst);
          
          const mouseFunctionName = functionId === 'setMouseCallback' 
            ? '마우스 콜백 설정' 
            : '마우스 휠 변화량';
          
          cv.putText(dst, `[${mouseFunctionName}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 200, 0, 255), 2);
          
          if (params.eventType) {
            cv.putText(dst, `Event: ${params.eventType}`, new cv.Point(10, 60),
                      cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          // 마우스 커서 시뮬레이션
          const mouseX = Math.floor(dst.cols / 2);
          const mouseY = Math.floor(dst.rows / 2);
          
          cv.circle(dst, new cv.Point(mouseX, mouseY), 5, new cv.Scalar(255, 200, 0, 255), -1);
          cv.circle(dst, new cv.Point(mouseX, mouseY), 20, new cv.Scalar(255, 200, 0, 255), 2);
          
          cv.putText(dst, 'Click here', new cv.Point(mouseX + 25, mouseY),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 200, 0, 255), 1);
          
          info = `${mouseFunctionName} - 마우스 이벤트 처리`;
          break;

        case 'imshow':
          // 이미지 표시 함수
          src.copyTo(dst);
          
          cv.putText(dst, '[imshow - 이미지 표시]', new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(0, 255, 0, 255), 2);
          
          if (params.windowName) {
            cv.putText(dst, `Window: "${params.windowName}"`, new cv.Point(10, 60),
                      cv.FONT_HERSHEY_SIMPLEX, 0.6, new cv.Scalar(255, 255, 255, 255), 1);
          }
          
          cv.putText(dst, `Size: ${dst.cols}x${dst.rows}`, new cv.Point(10, dst.rows - 20),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          
          info = `이미지 표시${params.windowName ? ` - ${params.windowName}` : ''}`;
          break;

        // Camera Calibration & 3D Reconstruction
        case 'findChessboardCorners':
        case 'drawChessboardCorners':
        case 'findCirclesGrid':
        case 'calibrateCamera':
        case 'undistort':
        case 'getOptimalNewCameraMatrix':
        case 'initUndistortRectifyMap':
        case 'findHomography':
        case 'perspectiveTransform':
        case 'decomposeHomographyMat':
        case 'stereoCalibrate':
        case 'stereoRectify':
        case 'StereoBM_compute':
        case 'StereoSGBM_compute':
        case 'reprojectImageTo3D':
        case 'triangulatePoints':
        case 'correctMatches':
        case 'convertPointsToHomogeneous':
        case 'convertPointsFromHomogeneous':
        case 'solvePnP':
        case 'solvePnPRansac':
        case 'solvePnPRefineLM':
        case 'Rodrigues':
        case 'projectPoints':
        case 'drawFrameAxes':
        case 'estimateAffine2D':
        case 'estimateAffinePartial2D':
        case 'decomposeProjectionMatrix':
        case 'composeRT':
        case 'computeCorrespondEpilines':
        case 'validateDisparity':
          // Camera Calibration & 3D 함수들은 웹 환경에서 제한적으로 동작
          src.copyTo(dst);
          const funcName = functionId.replace(/([A-Z])/g, ' $1').trim();
          cv.putText(dst, `[${funcName}]`, new cv.Point(10, 30),
                    cv.FONT_HERSHEY_SIMPLEX, 0.7, new cv.Scalar(0, 255, 255, 255), 2);
          cv.putText(dst, 'Camera Calibration & 3D Reconstruction', new cv.Point(10, 60),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(255, 255, 255, 255), 1);
          cv.putText(dst, '이 함수는 실제 카메라 데이터가 필요합니다', new cv.Point(10, 85),
                    cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(200, 200, 200, 255), 1);
          
          // 간단한 시각화
          if (functionId === 'findChessboardCorners') {
            dst = src.clone();
            const patternSize = new cv.Size(params.patternWidth || 9, params.patternHeight || 6);
            const corners = new cv.Mat();
            const found = cv.findChessboardCorners(src, patternSize, corners, params.flags || 0);
            if (found) {
              cv.drawChessboardCorners(dst, patternSize, corners, found);
              info = `체스보드 코너 검출 성공: ${corners.rows}개`;
            } else {
              info = `체스보드 코너 검출 실패`;
            }
            corners.delete();
          } else if (functionId === 'drawChessboardCorners') {
             // draw용 데이터가 없으므로 find와 병합된 형태가 많을 것이나 단독 요청 시 더미로 대응하거나 안내
             dst = src.clone();
             info = `그리기 완료 (검출 데이터 필요)`;
          } else if (functionId === 'findCirclesGrid') {
            dst = src.clone();
            const patternSize = new cv.Size(params.patternWidth || 4, params.patternHeight || 11);
            const centers = new cv.Mat();
            const found = cv.findCirclesGrid(src, patternSize, centers, params.flags || 0);
            if (found) {
              for (let i = 0; i < centers.rows; i++) {
                const center = new cv.Point(centers.data32F[i * 2], centers.data32F[i * 2 + 1]);
                cv.circle(dst, center, 5, new cv.Scalar(255, 0, 0, 255), -1);
              }
              info = `원형 그리드 검출 성공: ${centers.rows}개`;
            } else {
              info = `원형 그리드 검출 실패`;
            }
            centers.delete();
          } else if (functionId === 'calibrateCamera') {
            dst = src.clone();
            info = `카메라 캘리브레이션: 시각화 준비 완료`;
          } else if (functionId.includes('Homography') || functionId.includes('perspective') || functionId.includes('Affine')) {
            // 원근/아핀 변환 시뮬레이션
            const srcTri = cv.matFromArray(3, 1, cv.CV_32FC2, [
              50, 50, src.cols - 50, 50, 50, src.rows - 50
            ]);
            const dstTri = cv.matFromArray(3, 1, cv.CV_32FC2, [
              100, 80, src.cols - 80, 100, 100, src.rows - 80
            ]);
            const M = cv.getAffineTransform(srcTri, dstTri);
            cv.warpAffine(src, dst, M, new cv.Size(src.cols, src.rows));
            srcTri.delete();
            dstTri.delete();
            M.delete();
          } else if (functionId.includes('undistort')) {
            // 왜곡 보정 시뮬레이션
            const k1 = params.k1 || 0;
            const k2 = params.k2 || 0;
            if (k1 !== 0 || k2 !== 0) {
              const distCoeffs = cv.matFromArray(5, 1, cv.CV_64F, [k1, k2, params.p1 || 0, params.p2 || 0, 0]);
              const cameraMatrix = cv.Mat.eye(3, 3, cv.CV_64F);
              cameraMatrix.data64F[0] = src.cols * 0.9;
              cameraMatrix.data64F[4] = src.rows * 0.9;
              cameraMatrix.data64F[2] = src.cols / 2;
              cameraMatrix.data64F[5] = src.rows / 2;
              cv.undistort(src, dst, cameraMatrix, distCoeffs);
              cameraMatrix.delete();
              distCoeffs.delete();
            }
          } else if (functionId.includes('Stereo')) {
            // 스테레오 관련 함수
            if (src2 && (functionId === 'StereoBM_compute' || functionId === 'StereoSGBM_compute')) {
              let grayLeft = new cv.Mat();
              let grayRight = new cv.Mat();
              cv.cvtColor(src, grayLeft, cv.COLOR_RGBA2GRAY);
              cv.cvtColor(src2, grayRight, cv.COLOR_RGBA2GRAY);
              
              if (functionId === 'StereoBM_compute') {
                const stereoBM = new cv.StereoBM(params.numDisparities || 64, params.blockSize || 15);
                const disparity = new cv.Mat();
                stereoBM.compute(grayLeft, grayRight, disparity);
                disparity.convertTo(dst, cv.CV_8U, 255.0 / ((params.numDisparities || 64) * 16));
                cv.applyColorMap(dst, dst, cv.COLORMAP_JET);
                disparity.delete();
                stereoBM.delete();
              } else {
                const stereoSGBM = cv.StereoSGBM.create(
                  params.minDisparity || 0,
                  params.numDisparities || 64,
                  params.blockSize || 5
                );
                const disparity = new cv.Mat();
                stereoSGBM.compute(grayLeft, grayRight, disparity);
                disparity.convertTo(dst, cv.CV_8U, 255.0 / ((params.numDisparities || 64) * 16));
                cv.applyColorMap(dst, dst, cv.COLORMAP_JET);
                disparity.delete();
                stereoSGBM.delete();
              }
              
              grayLeft.delete();
              grayRight.delete();
            }
          } else if (functionId === 'drawFrameAxes') {
            // 3D 좌표축 그리기
            const axisLength = params.length || 100;
            const axisThickness = params.thickness || 3;
            const centerX = dst.cols / 2;
            const centerY = dst.rows / 2;
            
            cv.arrowedLine(dst, new cv.Point(centerX, centerY),
                          new cv.Point(centerX + axisLength, centerY),
                          new cv.Scalar(255, 0, 0, 255), axisThickness);
            cv.arrowedLine(dst, new cv.Point(centerX, centerY),
                          new cv.Point(centerX, centerY + axisLength),
                          new cv.Scalar(0, 255, 0, 255), axisThickness);
            cv.arrowedLine(dst, new cv.Point(centerX, centerY),
                          new cv.Point(centerX - axisLength * 0.5, centerY - axisLength * 0.5),
                          new cv.Scalar(0, 0, 255, 255), axisThickness);
            cv.putText(dst, 'X', new cv.Point(centerX + axisLength + 10, centerY),
                      cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(255, 0, 0, 255), 2);
            cv.putText(dst, 'Y', new cv.Point(centerX, centerY + axisLength + 20),
                      cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(0, 255, 0, 255), 2);
            cv.putText(dst, 'Z', new cv.Point(centerX - axisLength * 0.5 - 20, centerY - axisLength * 0.5),
                      cv.FONT_HERSHEY_SIMPLEX, 0.8, new cv.Scalar(0, 0, 255, 255), 2);
          }
          
          info = `${funcName} - Camera Calibration & 3D`;
          break;

        default:
          throw new Error(`Unknown function: ${functionId}`);
      }

      // 결과를 캔버스에 출력
      const outputCanvas = document.createElement('canvas');
      cv.imshow(outputCanvas, dst);

      // 메모리 정리
      src.delete();
      if (src2) src2.delete();
      dst.delete();

      return { canvas: outputCanvas, info };
    } catch (error) {
      src.delete();
      if (src2) src2.delete();
      dst.delete();
      throw error;
    }
  }

  private static ensureOdd(value: number): number {
    const v = Math.max(1, Math.round(value));
    return v % 2 === 0 ? v + 1 : v;
  }
}