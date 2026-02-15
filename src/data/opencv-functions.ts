import { OpenCVFunction, Category, FunctionParameter } from '@/types/opencv';

export const categories = [
  { 
    id: 'advanced_filter', 
    name: {
      en: 'Advanced Filters',
      ko: '고급 필터',
      zh: '高级过滤器',
      ja: '高度なフィルター',
      de: 'Erweiterte Filter',
      es: 'Filtros Avanzados',
      fr: 'Filtres avancés'
    }, 
    icon: '🔬', 
    parent: 'imgproc' 
  },
  { 
    id: 'arithmetic', 
    name: {
      en: 'Arithmetic Operations',
      ko: '산술 연산',
      zh: '算术运算',
      ja: '算術演算',
      de: 'Arithmetische Operationen',
      es: 'Operaciones Aritméticas',
      fr: 'Opérations arithmétiques'
    }, 
    icon: '🔢', 
    parent: 'core' 
  },
  { 
    id: 'filter', 
    name: {
      en: 'Basic Filters',
      ko: '기본 필터',
      zh: '基本过滤器',
      ja: '基本フィルター',
      de: 'Basisfilter',
      es: 'Filtros Básicos',
      fr: 'Filtres de base'
    }, 
    icon: '🔍', 
    parent: 'imgproc' 
  },
  { 
    id: 'basic', 
    name: {
      en: 'Basic Operations',
      ko: '기본 연산',
      zh: '基本运算',
      ja: '基本操作',
      de: 'Grundlegende Operationen',
      es: 'Operaciones Básicas',
      fr: 'Opérations de base'
    }, 
    icon: '➕', 
    parent: 'core' 
  },
  { 
    id: 'calib3d', 
    name: {
      en: 'Camera Calibration & 3D',
      ko: '카메라 캘리브레이션 & 3D',
      zh: '相机标定与 3D',
      ja: 'カメラキャリブレーションと 3D',
      de: 'Kamerakalibrierung & 3D',
      es: 'Calibración de Cámara y 3D',
      fr: 'Calibrage de caméra et 3D'
    }, 
    icon: '📷', 
    parent: 'calib3d' 
  },
  { 
    id: 'color', 
    name: {
      en: 'Color Conversions',
      ko: '색상 변환',
      zh: '颜色转换',
      ja: '色変換',
      de: 'Farbkonvertierungen',
      es: 'Conversiones de Color',
      fr: 'Conversions de couleur'
    }, 
    icon: '🎨', 
    parent: 'imgproc' 
  },
  { 
    id: 'colormap', 
    name: {
      en: 'ColorMaps',
      ko: '컬러맵',
      zh: '颜色映射',
      ja: 'カラーマップ',
      de: 'Farbtabellen',
      es: 'Mapas de Color',
      fr: 'Cartes de couleurs'
    }, 
    icon: '🌈', 
    parent: 'imgproc' 
  },
  { 
    id: 'comparison', 
    name: {
      en: 'Comparison Operations',
      ko: '비교 연산',
      zh: '比较运算',
      ja: '比較演算',
      de: 'Vergleichsoperationen',
      es: 'Operaciones de Comparación',
      fr: 'Opérations de comparaison'
    }, 
    icon: '⚖️', 
    parent: 'core' 
  },
  { 
    id: 'contour', 
    name: {
      en: 'Contours',
      ko: '윤곽선(컨투어)',
      zh: '轮廓',
      ja: '輪郭',
      de: 'Konturen',
      es: 'Contornos',
      fr: 'Contours'
    }, 
    icon: '🔶', 
    parent: 'imgproc' 
  },
  { 
    id: 'derivative', 
    name: {
      en: 'Derivatives',
      ko: '미분 연산',
      zh: '导数',
      ja: '微分演算',
      de: 'Ableitungen',
      es: 'Derivadas',
      fr: 'Dérivées'
    }, 
    icon: '📊', 
    parent: 'imgproc' 
  },
  { 
    id: 'drawing', 
    name: {
      en: 'Drawing Functions',
      ko: '그리기 함수',
      zh: '绘图函数',
      ja: '描画関数',
      de: 'Zeichenfunktionen',
      es: 'Funciones de Dibujo',
      fr: 'Fonctions de dessin'
    }, 
    icon: '✏️', 
    parent: 'imgproc' 
  },
  { 
    id: 'edge', 
    name: {
      en: 'Edge Detection',
      ko: '엣지 검출',
      zh: '边缘检测',
      ja: 'エッジ検出',
      de: 'Kantenerkennung',
      es: 'Detección de Bordes',
      fr: 'Détection de contours'
    }, 
    icon: '📐', 
    parent: 'imgproc' 
  },
  { 
    id: 'feature', 
    name: {
      en: 'Feature Detection',
      ko: '특징 검출',
      zh: '特征检测',
      ja: '特徴検出',
      de: 'Merkmalserkennung',
      es: 'Detección de Características',
      fr: 'Détection de caractéristiques'
    }, 
    icon: '⭐', 
    parent: 'imgproc' 
  },
  { 
    id: 'transform', 
    name: {
      en: 'Geometric Transforms',
      ko: '기하학적 변환',
      zh: '几何变换',
      ja: '幾何学的変換',
      de: 'Geometrische Transformationen',
      es: 'Transformaciones Geométricas',
      fr: 'Transformations géométriques'
    }, 
    icon: '🔄', 
    parent: 'imgproc' 
  },
  { 
    id: 'highgui', 
    name: {
      en: 'High-level GUI',
      ko: '하이레벨 GUI',
      zh: '高级 GUI',
      ja: 'ハイレベル GUI',
      de: 'High-level-GUI',
      es: 'GUI de Alto Nivel',
      fr: 'IHM de haut niveau'
    }, 
    icon: '🖥️', 
    parent: 'highgui' 
  },
  { 
    id: 'histogram', 
    name: {
      en: 'Histograms',
      ko: '히스토그램',
      zh: '直方图',
      ja: 'ヒストグラム',
      de: 'Histogramme',
      es: 'Histogramas',
      fr: 'Histogrammes'
    }, 
    icon: '📈', 
    parent: 'imgproc' 
  },
  { 
    id: 'pyramid', 
    name: {
      en: 'Image Pyramids',
      ko: '이미지 피라미드',
      zh: '图像金字塔',
      ja: '画像ピラミッド',
      de: 'Bildpyramiden',
      es: 'Pirámides de Imágenes',
      fr: 'Pyramides d\'images'
    }, 
    icon: '🔺', 
    parent: 'imgproc' 
  },
  { 
    id: 'matrix', 
    name: {
      en: 'Matrix Operations',
      ko: '행렬 연산',
      zh: '矩阵运算',
      ja: '行列演算',
      de: 'Matrixoperationen',
      es: 'Operaciones de Matriz',
      fr: 'Opérations matricielles'
    }, 
    icon: '🔲', 
    parent: 'core' 
  },
  { 
    id: 'misc', 
    name: {
      en: 'Miscellaneous',
      ko: '기타 함수',
      zh: '杂项',
      ja: 'その他',
      de: 'Verschiedenes',
      es: 'Miscelánea',
      fr: 'Divers'
    }, 
    icon: '🔧', 
    parent: 'imgproc' 
  },
  { 
    id: 'morphology', 
    name: {
      en: 'Morphological Operations',
      ko: '모폴로지 연산',
      zh: '形态学运算',
      ja: '形態学的演算',
      de: 'Morphologische Operationen',
      es: 'Operaciones Morfológicas',
      fr: 'Opérations morphologiques'
    }, 
    icon: '⚫', 
    parent: 'imgproc' 
  },
  { 
    id: 'motion', 
    name: {
      en: 'Motion Analysis',
      ko: '모션 분석',
      zh: '运动分析',
      ja: '動きの分析',
      de: 'Bewegungsanalyse',
      es: 'Análisis de Movimiento',
      fr: 'Analyse de mouvement'
    }, 
    icon: '🎬', 
    parent: 'imgproc' 
  },
  { 
    id: 'tracking', 
    name: {
      en: 'Object Tracking',
      ko: '객체 추적',
      zh: '对象跟踪',
      ja: 'オブジェクト追跡',
      de: 'Objektverfolgung',
      es: 'Seguimiento de Objetos',
      fr: 'Suivi d\'objet'
    }, 
    icon: '🎯', 
    parent: 'video' 
  },
  { 
    id: 'shape', 
    name: {
      en: 'Shape Analysis',
      ko: '도형 분석',
      zh: '形状分析',
      ja: '形状分析',
      de: 'Formanalyse',
      es: 'Análisis de Formas',
      fr: 'Analyse de forme'
    }, 
    icon: '📏', 
    parent: 'imgproc' 
  },
  { 
    id: 'statistical', 
    name: {
      en: 'Statistical Operations',
      ko: '통계 연산',
      zh: '统计运算',
      ja: '統計演算',
      de: 'Statistische Operationen',
      es: 'Operaciones Estadísticas',
      fr: 'Opérations statistiques'
    }, 
    icon: '📊', 
    parent: 'core' 
  },
  { 
    id: 'threshold', 
    name: {
      en: 'Thresholding',
      ko: '임계값 처리',
      zh: '阈值处理',
      ja: 'しきい値処理',
      de: 'Schwellenwertverfahren',
      es: 'Segmentación por Umbral',
      fr: 'Seuillage'
    }, 
    icon: '🎯', 
    parent: 'imgproc' 
  },
];

export const opencvFunctions: OpenCVFunction[] = [
  // 색상 변환
  {
    id: 'cvtColor_GRAY',
    name: {
      en: 'Grayscale',
      ko: '그레이스케일',
      zh: '灰度化',
      ja: 'グレースケール',
      de: 'Graustufen',
      es: 'Escala de Grises',
      fr: 'Niveaux de gris'
    },
    category: 'color',
    description: {
      en: 'Converts an RGB image to a grayscale image.',
      ko: 'RGB 이미지를 흑백 이미지로 변환합니다.',
      zh: '将 RGB 图像转换为灰度图像。',
      ja: 'RGB 画像をグレースケール画像に変換します。',
      de: 'Konvertiert ein RGB-Bild in ein Graustufenbild.',
      es: 'Convierte una imagen RGB en una imagen en escala de grises.',
      fr: 'Convertit une image RGB en une image en niveaux de gris.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2GRAY)',
    documentation: 'https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_HSV',
    name: {
      en: 'RGB to HSV',
      ko: 'RGB를 HSV로',
      zh: 'RGB 转 HSV',
      ja: 'RGB から HSV への変換',
      de: 'RGB nach HSV',
      es: 'RGB a HSV',
      fr: 'RGB vers HSV'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to HSV (Hue, Saturation, Value) color space.',
      ko: 'RGB 색공간을 HSV(색상, 채도, 명도) 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 HSV（色调、饱和度、值）颜色空间。',
      ja: 'RGB 色空間を HSV (色相、彩度、明度) 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den HSV-Farbraum (Farbwert, Sättigung, Dunkelstufe).',
      es: 'Convierte el espacio de color RGB al espacio de color HSV (Tono, Saturación, Valor).',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique HSV (Teinte, Saturation, Valeur).'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2HSV)',
    documentation: 'https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html#ga4e0972be5de079fed4e3a10e24f5ef6b5',
  },
  {
    id: 'cvtColor_Lab',
    name: {
      en: 'RGB to LAB',
      ko: 'RGB를 LAB로',
      zh: 'RGB 转 LAB',
      ja: 'RGB から LAB への変換',
      de: 'RGB nach LAB',
      es: 'RGB a LAB',
      fr: 'RGB vers LAB'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to CIE Lab color space.',
      ko: 'RGB 색공간을 CIE Lab 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 CIE Lab 颜色空间。',
      ja: 'RGB 色空間を CIE Lab 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den CIE-Lab-Farbraum.',
      es: 'Convierte el espacio de color RGB al espacio de color CIE Lab.',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique CIE Lab.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2Lab)',
    documentation: 'https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html#ga40788a05450313c2365710860997524c',
  },
  {
    id: 'cvtColor_YCrCb',
    name: {
      en: 'RGB to YCrCb',
      ko: 'RGB를 YCrCb로',
      zh: 'RGB 转 YCrCb',
      ja: 'RGB から YCrCb への変換',
      de: 'RGB nach YCrCb',
      es: 'RGB a YCrCb',
      fr: 'RGB vers YCrCb'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to YCrCb color space.',
      ko: 'RGB 색공간을 YCrCb 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 YCrCb 颜色空间。',
      ja: 'RGB 色空間を YCrCb 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den YCrCb-Farbraum.',
      es: 'Convierte el espacio de color RGB al espacio de color YCrCb.',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique YCrCb.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2YCrCb)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_YUV',
    name: {
      en: 'RGB to YUV',
      ko: 'RGB를 YUV로',
      zh: 'RGB 转 YUV',
      ja: 'RGB から YUV への変換',
      de: 'RGB nach YUV',
      es: 'RGB a YUV',
      fr: 'RGB vers YUV'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to YUV color space.',
      ko: 'RGB 색공간을 YUV 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 YUV 颜色空间。',
      ja: 'RGB 色空間を YUV 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den YUV-Farbraum.',
      es: 'Convierte el espacio de color RGB al espacio de color YUV.',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique YUV.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2YUV)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_XYZ',
    name: {
      en: 'RGB to XYZ',
      ko: 'RGB를 XYZ로',
      zh: 'RGB 转 XYZ',
      ja: 'RGB から XYZ への変換',
      de: 'RGB nach XYZ',
      es: 'RGB a XYZ',
      fr: 'RGB vers XYZ'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to CIE XYZ color space.',
      ko: 'RGB 색공간을 CIE XYZ 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 CIE XYZ 颜色空间。',
      ja: 'RGB 色空間を CIE XYZ 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den CIE-XYZ-Farbraum.',
      es: 'Convierte el espacio de color RGB al espacio de color CIE XYZ.',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique CIE XYZ.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2XYZ)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_HLS',
    name: {
      en: 'RGB to HLS',
      ko: 'RGB를 HLS로',
      zh: 'RGB 转 HLS',
      ja: 'RGB から HLS への変換',
      de: 'RGB nach HLS',
      es: 'RGB a HLS',
      fr: 'RGB vers HLS'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to HLS (Hue, Lightness, Saturation) color space.',
      ko: 'RGB 색공간을 HLS(색상, 밝기, 채도) 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 HLS（色调、亮度、饱和度）颜色空间。',
      ja: 'RGB 色空間を HLS (色相、明度、彩度) 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den HLS-Farbraum (Farbwert, Helligkeit, Sättigung).',
      es: 'Convierte el espacio de color RGB al espacio de color HLS (Tono, Luminosidad, Saturación).',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique HLS (Teinte, Luminosité, Saturation).'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2HLS)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_Luv',
    name: {
      en: 'RGB to Luv',
      ko: 'RGB를 Luv로',
      zh: 'RGB 转 Luv',
      ja: 'RGB から Luv への変換',
      de: 'RGB nach Luv',
      es: 'RGB a Luv',
      fr: 'RGB vers Luv'
    },
    category: 'color',
    description: {
      en: 'Converts RGB color space to CIE Luv color space.',
      ko: 'RGB 색공간을 CIE Luv 색공간으로 변환합니다.',
      zh: '将 RGB 颜色空间转换为 CIE Luv 颜色空间。',
      ja: 'RGB 色空間を CIE Luv 色空間に変換します。',
      de: 'Konvertiert den RGB-Farbraum in den CIE-Luv-Farbraum.',
      es: 'Convierte el espacio de color RGB al espacio de color CIE Luv.',
      fr: 'Convertit l\'espace colorimétrique RGB en espace colorimétrique CIE Luv.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2Luv)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_BGRA2BGR',
    name: {
      en: 'BGRA to BGR (Remove Alpha)',
      ko: 'BGRA to BGR (알파 채널 제거)',
      zh: 'BGRA 转 BGR (删除 Alpha)',
      ja: 'BGRA から BGR (アルファチャネル削除)',
      de: 'BGRA nach BGR (Alpha entfernen)',
      es: 'BGRA a BGR (Eliminar Alfa)',
      fr: 'BGRA vers BGR (Supprimer Alpha)'
    },
    category: 'color',
    description: {
      en: 'Converts a 4-channel BGRA image to a 3-channel BGR image (removes alpha channel).',
      ko: '4채널 BGRA 이미지를 3채널 BGR 이미지로 변환합니다 (알파 채널 제거).',
      zh: '将 4 通道 BGRA 图像转换为 3 通道 BGR 图像（删除 alpha 通道）。',
      ja: '4チャネル BGRA 画像を 3チャネル BGR 画像に変換します（アルファチャネル削除）。',
      de: 'Konvertiert ein 4-Kanal-BGRA-Bild in ein 3-Kanal-BGR-Bild (entfernt den Alpha-Kanal).',
      es: 'Convierte una imagen BGRA de 4 canales en una imagen BGR de 3 canales (elimina el canal alfa).',
      fr: 'Convertit une image BGRA à 4 canaux en une image BGR à 3 canaux (supprime le canal alpha).'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGRA2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_BGR2BGRA',
    name: {
      en: 'BGR to BGRA (Add Alpha)',
      ko: 'BGR to BGRA (알파 채널 추가)',
      zh: 'BGR 转 BGRA (添加 Alpha)',
      ja: 'BGR から BGRA (アルファチャネル追加)',
      de: 'BGR nach BGRA (Alpha hinzufügen)',
      es: 'BGR a BGRA (Agregar Alfa)',
      fr: 'BGR vers BGRA (Ajouter Alpha)'
    },
    category: 'color',
    description: {
      en: 'Converts a 3-channel BGR image to a 4-channel BGRA image (adds alpha channel).',
      ko: '3채널 BGR 이미지를 4채널 BGRA 이미지로 변환합니다 (알파 채널 추가).',
      zh: '将 3 通道 BGR 图像转换为 4 通道 BGRA 图像（添加 alpha 通道）。',
      ja: '3チャネル BGR 画像を 4チャネル BGRA 画像に変換します（アルファチャネル追加）。',
      de: 'Konvertiert ein 3-Kanal-BGR-Bild in ein 4-Kanal-BGRA-Bild (fügt einen Alpha-Kanal hinzu).',
      es: 'Convierte una imagen BGR de 3 canales en una imagen BGRA de 4 canales (agrega un canal alfa).',
      fr: 'Convertit une image BGR à 3 canaux en une image BGRA à 4 canaux (ajoute un canal alpha).'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2BGRA)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_BGR2RGB',
    name: {
      en: 'BGR to RGB (Change Channel Order)',
      ko: 'BGR to RGB (채널 순서 변경)',
      zh: 'BGR 转 RGB (更改通道顺序)',
      ja: 'BGR から RGB (チャネル順序変更)',
      de: 'BGR nach RGB (Kanalreihenfolge ändern)',
      es: 'BGR a RGB (Cambiar orden de canales)',
      fr: 'BGR vers RGB (Changer l\'ordre des canaux)'
    },
    category: 'color',
    description: {
      en: 'Changes the channel order from BGR to RGB.',
      ko: 'BGR 채널 순서를 RGB로 변경합니다.',
      zh: '将通道顺序从 BGR 更改为 RGB。',
      ja: 'チャネル順序を BGR から RGB に変更します。',
      de: 'Ändert die Kanalreihenfolge von BGR nach RGB.',
      es: 'Cambia el orden de los canales de BGR a RGB.',
      fr: 'Modifie l\'ordre des canaux de BGR à RGB.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_BGR2RGB)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_GRAY2BGR',
    name: {
      en: 'Grayscale to BGR (BW → Color)',
      ko: 'Grayscale to BGR (흑백→컬러)',
      zh: '灰度转 BGR (黑白→彩色)',
      ja: 'グレースケールから BGR (白黒→カラー)',
      de: 'Graustufen nach BGR (SW → Farbe)',
      es: 'Escala de Grises a BGR (BN → Color)',
      fr: 'Niveaux de gris vers BGR (NB → Couleur)'
    },
    category: 'color',
    description: {
      en: 'Converts a single-channel grayscale image to a 3-channel BGR image.',
      ko: '단일 채널 그레이스케일 이미지를 3채널 BGR 이미지로 변환합니다.',
      zh: '将单通道灰度图像转换为三通道 BGR 图像。',
      ja: 'シングルチャネルのグレースケール画像を3チャネルの BGR 画像に変換します。',
      de: 'Konvertiert ein Einkanal-Graustufenbild in ein Dreikanal-BGR-Bild.',
      es: 'Convierte una imagen en escala de grises de un solo canal en una imagen BGR de 3 canales.',
      fr: 'Convertit une image en niveaux de gris à un seul canal en une image BGR à 3 canaux.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_GRAY2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_HSV2BGR',
    name: {
      en: 'HSV to BGR (Inverse)',
      ko: 'HSV를 BGR로 (역변환)',
      zh: 'HSV 转 BGR (逆转换)',
      ja: 'HSV から BGR への変換 (逆変換)',
      de: 'HSV nach BGR (Invers)',
      es: 'HSV a BGR (Inversa)',
      fr: 'HSV vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts HSV color space to BGR color space.',
      ko: 'HSV 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 HSV 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'HSV 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den HSV-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color HSV al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique HSV en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_HSV2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_LAB2BGR',
    name: {
      en: 'LAB to BGR (Inverse)',
      ko: 'LAB를 BGR로 (역변환)',
      zh: 'LAB 转 BGR (逆转换)',
      ja: 'LAB から BGR への変換 (逆変換)',
      de: 'LAB nach BGR (Invers)',
      es: 'LAB a BGR (Inversa)',
      fr: 'LAB vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts LAB color space to BGR color space.',
      ko: 'LAB 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 LAB 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'LAB 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den LAB-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color LAB al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique LAB en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_LAB2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_YCrCb2BGR',
    name: {
      en: 'YCrCb to BGR (Inverse)',
      ko: 'YCrCb를 BGR로 (역변환)',
      zh: 'YCrCb 转 BGR (逆转换)',
      ja: 'YCrCb から BGR への変換 (逆変換)',
      de: 'YCrCb nach BGR (Invers)',
      es: 'YCrCb a BGR (Inversa)',
      fr: 'YCrCb vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts YCrCb color space to BGR color space.',
      ko: 'YCrCb 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 YCrCb 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'YCrCb 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den YCrCb-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color YCrCb al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique YCrCb en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_YCrCb2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_YUV2BGR',
    name: {
      en: 'YUV to BGR (Inverse)',
      ko: 'YUV를 BGR로 (역변환)',
      zh: 'YUV 转 BGR (逆转换)',
      ja: 'YUV から BGR への変換 (逆変換)',
      de: 'YUV nach BGR (Invers)',
      es: 'YUV a BGR (Inversa)',
      fr: 'YUV vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts YUV color space to BGR color space.',
      ko: 'YUV 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 YUV 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'YUV 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den YUV-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color YUV al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique YUV en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_YUV2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_XYZ2BGR',
    name: {
      en: 'XYZ to BGR (Inverse)',
      ko: 'XYZ를 BGR로 (역변환)',
      zh: 'XYZ 转 BGR (逆转换)',
      ja: 'XYZ から BGR への変換 (逆変換)',
      de: 'XYZ nach BGR (Invers)',
      es: 'XYZ a BGR (Inversa)',
      fr: 'XYZ vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts CIE XYZ color space to BGR color space.',
      ko: 'CIE XYZ 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 CIE XYZ 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'CIE XYZ 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den CIE-XYZ-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color CIE XYZ al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique CIE XYZ en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_XYZ2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_HLS2BGR',
    name: {
      en: 'HLS to BGR (Inverse)',
      ko: 'HLS를 BGR로 (역변환)',
      zh: 'HLS 转 BGR (逆转换)',
      ja: 'HLS から BGR への変換 (逆変換)',
      de: 'HLS nach BGR (Invers)',
      es: 'HLS a BGR (Inversa)',
      fr: 'HLS vers BGR (Inverse)'
    },
    category: 'color',
    description: {
      en: 'Inversely converts HLS color space to BGR color space.',
      ko: 'HLS 색공간을 BGR 색공간으로 역변환합니다.',
      zh: '将 HLS 颜色空间逆转换为 BGR 颜色空间。',
      ja: 'HLS 色空間を BGR 色空間に逆変換します。',
      de: 'Konvertiert den HLS-Farbraum invers in den BGR-Farbraum.',
      es: 'Convierte inversamente el espacio de color HLS al espacio de color BGR.',
      fr: 'Convertit inversement l\'espace colorimétrique HLS en espace colorimétrique BGR.'
    },
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_HLS2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'cvtColor_Luv2BGR',
    name: 'Luv to BGR (역변환)',
    category: 'color',
    description: 'CIE Luv 색공간을 BGR 색공간으로 역변환합니다.',
    parameters: [],
    syntax: 'cvtColor(src, dst, COLOR_Luv2BGR)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },
  {
    id: 'demosaicing',
    name: 'Demosaicing (베이어 패턴 디모자이킹)',
    category: 'color',
    description: '베이어 패턴 RAW 이미지를 RGB 이미지로 변환합니다.',
    parameters: [
      {
        name: 'code',
        type: 'select',
        defaultValue: 'COLOR_BayerBG2BGR',
        options: [
          { label: 'BayerBG → BGR', value: 'COLOR_BayerBG2BGR' },
          { label: 'BayerGB → BGR', value: 'COLOR_BayerGB2BGR' },
          { label: 'BayerRG → BGR', value: 'COLOR_BayerRG2BGR' },
          { label: 'BayerGR → BGR', value: 'COLOR_BayerGR2BGR' },
        ],
        description: '베이어 패턴 타입',
      },
    ],
    syntax: 'cvtColor(src, dst, code)',
    documentation: 'https://docs.opencv.org/4.12.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab',
  },

  // ColorMaps
  {
    id: 'applyColorMap_AUTUMN',
    name: 'COLORMAP_AUTUMN',
    category: 'colormap',
    description: '가을 색상표를 적용합니다 (빨강-노랑-주황 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_AUTUMN)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aa68e96a5d992e963c1a78b8f493f6c6f',
  },
  {
    id: 'applyColorMap_BONE',
    name: 'COLORMAP_BONE',
    category: 'colormap',
    description: '뼈 색상표를 적용합니다 (청백색 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_BONE)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a41fa2cfc340d7d5c0d1c6b0ac3ee4562',
  },
  {
    id: 'applyColorMap_JET',
    name: 'COLORMAP_JET',
    category: 'colormap',
    description: 'Jet 색상표를 적용합니다 (파랑-청록-노랑-빨강).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_JET)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a1c35702c1c5285c5d6e7f3c4e7f1e9',
  },
  {
    id: 'applyColorMap_WINTER',
    name: 'COLORMAP_WINTER',
    category: 'colormap',
    description: '겨울 색상표를 적용합니다 (파랑-청록 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_WINTER)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aa4e143d29c41ecc636c804c0a5027a76',
  },
  {
    id: 'applyColorMap_RAINBOW',
    name: 'COLORMAP_RAINBOW',
    category: 'colormap',
    description: '무지개 색상표를 적용합니다 (보라-파랑-초록-노랑-빨강).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_RAINBOW)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a0a68573c4c0c5c659e3770c6e0c18a',
  },
  {
    id: 'applyColorMap_OCEAN',
    name: 'COLORMAP_OCEAN',
    category: 'colormap',
    description: '바다 색상표를 적용합니다 (검정-파랑-청록-흰색).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_OCEAN)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a22e5e563b1e7c91e0b4c9f1f8c6f4b4e',
  },
  {
    id: 'applyColorMap_SUMMER',
    name: 'COLORMAP_SUMMER',
    category: 'colormap',
    description: '여름 색상표를 적용합니다 (초록-노랑 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_SUMMER)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a63ca0a2991e44663b0c0fc4f2d9d6a7e',
  },
  {
    id: 'applyColorMap_SPRING',
    name: 'COLORMAP_SPRING',
    category: 'colormap',
    description: '봄 색상표를 적용합니다 (자홍-노랑 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_SPRING)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aadc56641991aa7e2f480064c6e93022b',
  },
  {
    id: 'applyColorMap_COOL',
    name: 'COLORMAP_COOL',
    category: 'colormap',
    description: '쿨톤 색상표를 적용합니다 (청록-자홍 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_COOL)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a2298fbce7d90a5f1f184c27f1d3f6ec0',
  },
  {
    id: 'applyColorMap_HSV',
    name: 'COLORMAP_HSV',
    category: 'colormap',
    description: 'HSV 색상표를 적용합니다 (전체 색상 스펙트럼).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_HSV)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aa375d2a5e2f8d5e5e6f5e1e6f5e5e5e5',
  },
  {
    id: 'applyColorMap_PINK',
    name: 'COLORMAP_PINK',
    category: 'colormap',
    description: '핑크 색상표를 적용합니다 (파스텔 핑크 그라데이션).',
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_PINK)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a6b1b0e5e8f4f9e0d9c6c9e5d9e6f0f',
  },
  {
    id: 'applyColorMap_HOT',
    name: 'COLORMAP_HOT',
    category: 'colormap',
    description: {
      en: 'Applies the Hot color map (black-red-yellow-white).',
      ko: '열화상 색상표를 적용합니다 (검정-빨강-노랑-흰색).',
      zh: '应用 Hot 颜色映射 (黑-红-黄-白)。',
      ja: 'Hot カラーマップ (黒-赤-黄-白) を適用します。',
      de: 'Wendet die Hot-Farbtabelle an (schwarz-rot-gelb-weiß).',
      es: 'Aplica el mapa de color Hot (negro-rojo-amarillo-blanco).',
      fr: 'Applique la carte de couleurs Hot (noir-rouge-jaune-blanc).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_HOT)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a85d5e4c2e5c1e1e1e5e5e5e5e5e5e5e5',
  },
  {
    id: 'applyColorMap_PARULA',
    name: 'COLORMAP_PARULA',
    category: 'colormap',
    description: {
      en: 'Applies the Parula color map (blue-cyan-yellow).',
      ko: 'Parula 색상표를 적용합니다 (파랑-청록-노랑).',
      zh: '应用 Parula 颜色映射 (蓝-青-黄)。',
      ja: 'Parula カラーマップ (青-シアン-黄) を適用します。',
      de: 'Wendet die Parula-Farbtabelle an (blau-cyan-gelb).',
      es: 'Aplica el mapa de color Parula (azul-cian-amarillo).',
      fr: 'Applique la carte de couleurs Parula (bleu-cyan-jaune).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_PARULA)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aa4e143d29c41ecc636c804c0a5027a76',
  },
  {
    id: 'applyColorMap_MAGMA',
    name: 'COLORMAP_MAGMA',
    category: 'colormap',
    description: {
      en: 'Applies the Magma color map (black-purple-orange-yellow).',
      ko: 'Magma 색상표를 적용합니다 (검정-보라-주황-노랑).',
      zh: '应用 Magma 颜色映射 (黑-紫-橙-黄)。',
      ja: 'Magma カラーマップ (黒-紫-橙-黄) を適用します。',
      de: 'Wendet die Magma-Farbtabelle an (schwarz-violett-orange-gelb).',
      es: 'Aplica el mapa de color Magma (negro-púrpura-naranja-amarillo).',
      fr: 'Applique la carte de couleurs Magma (noir-violet-orange-jaune).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_MAGMA)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a1c35702c1c5285c5d6e7f3c4e7f1e9',
  },
  {
    id: 'applyColorMap_INFERNO',
    name: 'COLORMAP_INFERNO',
    category: 'colormap',
    description: {
      en: 'Applies the Inferno color map (black-purple-red-yellow).',
      ko: 'Inferno 색상표를 적용합니다 (검정-보라-빨강-노랑).',
      zh: '应用 Inferno 颜色映射 (黑-紫-红-黄)。',
      ja: 'Inferno カラーマップ (黒-紫-赤-黄) を適用します。',
      de: 'Wendet die Inferno-Farbtabelle an (schwarz-violett-rot-gelb).',
      es: 'Aplica el mapa de color Inferno (negro-púrpura-rojo-amarillo).',
      fr: 'Applique la carte de couleurs Inferno (noir-violet-rouge-jaune).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_INFERNO)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a6b1b0e5e8f4f9e0d9c6c9e5d9e6f0f',
  },
  {
    id: 'applyColorMap_PLASMA',
    name: 'COLORMAP_PLASMA',
    category: 'colormap',
    description: {
      en: 'Applies the Plasma color map (purple-red-orange-yellow).',
      ko: 'Plasma 색상표를 적용합니다 (보라-빨강-주황-노랑).',
      zh: '应用 Plasma 颜色映射 (紫-红-橙-黄)。',
      ja: 'Plasma カラーマップ (紫-赤-橙-黄) を適用します。',
      de: 'Wendet die Plasma-Farbtabelle an (violett-rot-orange-gelb).',
      es: 'Aplica el mapa de color Plasma (púrpura-rojo-naranja-amarillo).',
      fr: 'Applique la carte de couleurs Plasma (violet-rouge-orange-jaune).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_PLASMA)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a85d5e4c2e5c1e1e1e5e5e5e5e5e5e5e5',
  },
  {
    id: 'applyColorMap_VIRIDIS',
    name: 'COLORMAP_VIRIDIS',
    category: 'colormap',
    description: {
      en: 'Applies the Viridis color map (purple-blue-green-yellow).',
      ko: 'Viridis 색상표를 적용합니다 (보라-파랑-초록-노랑).',
      zh: '应用 Viridis 颜色映射 (紫-蓝-绿-黄)。',
      ja: 'Viridis カラーマップ (紫-青-緑-黄) を適用します。',
      de: 'Wendet die Viridis-Farbtabelle an (violett-blau-grün-gelb).',
      es: 'Aplica el mapa de color Viridis (púrpura-azul-verde-amarillo).',
      fr: 'Applique la carte de couleurs Viridis (violet-bleu-vert-jaune).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_VIRIDIS)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a2298fbce7d90a5f1f184c27f1d3f6ec0',
  },
  {
    id: 'applyColorMap_CIVIDIS',
    name: 'COLORMAP_CIVIDIS',
    category: 'colormap',
    description: {
      en: 'Applies the Cividis color map (blue-yellow, color-vision-deficiency friendly).',
      ko: 'Cividis 색상표를 적용합니다 (파랑-노랑, 색맹 친화적).',
      zh: '应用 Cividis 颜色映射 (蓝-黄，色觉障碍友好)。',
      ja: 'Cividis カラーマップ (青-黄、色覚特性に配慮) を適用します。',
      de: 'Wendet die Cividis-Farbtabelle an (blau-gelb, farbenfehlsichtigkeitsfreundlich).',
      es: 'Aplica el mapa de color Cividis (azul-amarillo, apto para daltonismo).',
      fr: 'Applique la carte de couleurs Cividis (bleu-jaune, adapté aux daltoniens).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_CIVIDIS)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65aa375d2a5e2f8d5e5e6f5e1e6f5e5e5e5',
  },
  {
    id: 'applyColorMap_TWILIGHT',
    name: 'COLORMAP_TWILIGHT',
    category: 'colormap',
    description: {
      en: 'Applies the Twilight color map (purple-white-purple cyclic).',
      ko: 'Twilight 색상표를 적용합니다 (보라-흰색-보라 순환형).',
      zh: '应用 Twilight 颜色映射 (紫-白-紫 循环)。',
      ja: 'Twilight カラーマップ (紫-白-紫 循環型) を適用します。',
      de: 'Wendet die Twilight-Farbtabelle an (violett-weiß-violett zyklisch).',
      es: 'Aplica el mapa de color Twilight (morado-blanco-morado cíclico).',
      fr: 'Applique la carte de couleurs Twilight (violet-blanc-violet cyclique).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_TWILIGHT)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a5a0a68573c4c0c5c659e3770c6e0c18a',
  },
  {
    id: 'applyColorMap_TWILIGHT_SHIFTED',
    name: 'COLORMAP_TWILIGHT_SHIFTED',
    category: 'colormap',
    description: {
      en: 'Applies the Twilight Shifted color map.',
      ko: 'Twilight Shifted 색상표를 적용합니다 (검정-보라-흰색-보라).',
      zh: '应用 Twilight Shifted 颜色映射。',
      ja: 'Twilight Shifted カラーマップを適用します。',
      de: 'Wendet die Twilight-Shifted-Farbtabelle an.',
      es: 'Aplica el mapa de color Twilight Shifted.',
      fr: 'Applique la carte de couleurs Twilight Shifted.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_TWILIGHT_SHIFTED)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a22e5e563b1e7c91e0b4c9f1f8c6f4b4e',
  },
  {
    id: 'applyColorMap_TURBO',
    name: 'COLORMAP_TURBO',
    category: 'colormap',
    description: {
      en: 'Applies the Turbo color map (blue-green-red, perceptually uniform).',
      ko: 'Turbo 색상표를 적용합니다 (파랑-초록-빨강, 시각적으로 균일).',
      zh: '应用 Turbo 颜色映射 (蓝-绿-红，感知均匀)。',
      ja: 'Turbo カラーマップ (青-緑-赤、知覚的に均一) を適用します。',
      de: 'Wendet die Turbo-Farbtabelle an (blau-grün-rot, wahrnehmungsmäßig gleichmäßig).',
      es: 'Aplica el mapa de color Turbo (azul-verde-rojo, perceptualmente uniforme).',
      fr: 'Applique la carte de couleurs Turbo (blue-vert-rouge, uniformément perceptible).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_TURBO)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a2d646738911c7590885f81e7d82cc78a',
  },
  {
    id: 'applyColorMap_DEEPGREEN',
    name: 'COLORMAP_DEEPGREEN',
    category: 'colormap',
    description: {
      en: 'Applies the DeepGreen color map (black-dark green-light green).',
      ko: 'DeepGreen 색상표를 적용합니다 (검정-어두운 초록-밝은 초록).',
      zh: '应用 DeepGreen 颜色映射 (黑-深绿-浅绿)。',
      ja: 'DeepGreen カラーマップ (黒-深緑-薄緑) を適用します。',
      de: 'Wendet die DeepGreen-Farbtabelle an (schwarz-dunkelgrün-hellgrün).',
      es: 'Aplica el mapa de color DeepGreen (negro-verde oscuro-verde claro).',
      fr: 'Applique la carte de couleurs DeepGreen (noir-vert foncé-vert clair).'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'applyColorMap(src, dst, COLORMAP_DEEPGREEN)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/d50/group__imgproc__colormap.html#gga9a805d8262bcbe273f16be9ea2055a65a3c6131f4a47a7b8e1e7914f6b0f0b0f0',
  },

  // 필터링
  {
    id: 'blur',
    name: {
      en: 'Blur (Averaging)',
      ko: '블러 (평균값 블러)',
      zh: '均值滤波',
      ja: '平均化ブラー',
      de: 'Weichzeichnen (Mittelwert)',
      es: 'Desenfoque (Promedio)',
      fr: 'Flou (Moyenne)'
    },
    category: 'filter',
    description: {
      en: 'Smooths the image by averaging pixels in a kernel.',
      ko: '커널 내 픽셀의 평균을 구하여 이미지를 부드럽게 만듭니다.',
      zh: '通过计算内核中像素的平均值来平滑图像。',
      ja: 'カーネル内のピクセルの平均を取ることで画像を滑らかにします。',
      de: 'Glättet das Bild durch Mittelung der Pixel in einem Kernel.',
      es: 'Suaviza la imagen promediando los píxeles en un núcleo.',
      fr: 'Lisse l\'image en faisant la moyenne des pixels dans un noyau.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Kernel size (odd)',
          ko: '커널 크기 (홀수)',
          zh: '内核大小 (奇数)',
          ja: 'カーネルサイズ (奇数)',
          de: 'Kernelgröße (ungerade)',
          es: 'Tamaño del núcleo (impar)',
          fr: 'Taille du noyau (impair)'
        },
      },
    ],
    syntax: 'blur(src, dst, ksize)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193fb0b11ac52cf1a',
  },
  {
    id: 'GaussianBlur',
    name: {
      en: 'Gaussian Blur',
      ko: '가우시안 블러',
      zh: '高斯滤波',
      ja: 'ガウスぼかし',
      de: 'Gaußsches Weichzeichnen',
      es: 'Desenfoque Gaussiano',
      fr: 'Flou gaussien'
    },
    category: 'filter',
    description: {
      en: 'Smooths the image using a Gaussian function (effective for noise reduction).',
      ko: '가우시안 함수를 사용하여 이미지를 부드럽게 만들며, 노이즈 제거에 효과적입니다.',
      zh: '使用高斯函数平滑图像（有效减少噪声）。',
      ja: 'ガウス関数を使用して画像を滑らかにします (ノイズ低減に効果的です)。',
      de: 'Glättet das Bild mittels einer Gauß-Funktion (effektiv zur Rauschunterdrückung).',
      es: 'Suaviza la imagen mediante una función gaussiana (eficaz para la reducción de ruido).',
      fr: 'Lisse l\'image à l\'aide d\'une fonction gaussienne (efficace pour la réduction du bruit).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Kernel size (odd)',
          ko: '커널 크기 (홀수)',
          zh: '内核大小 (奇数)',
          ja: 'カーネルサイズ (奇数)',
          de: 'Kernelgröße (ungerade)',
          es: 'Tamaño del núcleo (impar)',
          fr: 'Taille du noyau (impair)'
        },
      },
      {
        name: 'sigmaX',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 10,
        step: 0.5,
        description: {
          en: 'Sigma X',
          ko: 'X 방향 표준 편차(Sigma X)',
          zh: 'X 方向标准差',
          ja: 'X 方向の標準偏差',
          de: 'Standardabweichung X',
          es: 'Desviación estándar X',
          fr: 'Écart-type X'
        },
      },
    ],
    syntax: 'GaussianBlur(src, dst, ksize, sigmaX)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193fb0b11ac52cf1a',
  },
  {
    id: 'medianBlur',
    name: {
      en: 'Median Blur',
      ko: '중간값 블러',
      zh: '中值滤波',
      ja: 'メディアンフィルタ',
      de: 'Median-Filter',
      es: 'Desenfoque de mediana',
      fr: 'Flou médian'
    },
    category: 'filter',
    description: {
      en: 'Replaces each pixel with the median of its neighbors (effective for salt-and-pepper noise).',
      ko: '각 픽셀을 주변 픽셀의 중간값으로 대체합니다 (소금-후추 노이즈 제거에 탁월).',
      zh: '将每个像素替换为其邻域的中值（有效去除椒盐噪声）。',
      ja: '各ピクセルをその近傍の中央値で置き換えます (ごま塩ノイズの除去に効果的です)。',
      de: 'Ersetzt jedes Pixel durch den Median seiner Nachbarn (effektiv gegen Salz-und-Pfeffer-Rauschen).',
      es: 'Reemplaza cada píxel con la mediana de sus vecinos (eficaz para el ruido de sal y pimienta).',
      fr: 'Remplace chaque pixel par la médiane de ses voisins (efficace pour le bruit de type poivre et sel).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Kernel size (odd)',
          ko: '커널 크기 (홀수)',
          zh: '内核大小 (奇数)',
          ja: 'カーネルサイズ (奇数)',
          de: 'Kernelgröße (ungerade)',
          es: 'Tamaño del núcleo (impar)',
          fr: 'Taille du noyau (impair)'
        },
      },
    ],
    syntax: 'medianBlur(src, dst, ksize)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga564869aa33e58769b4469101aac458f9',
  },
  {
    id: 'bilateralFilter',
    name: {
      en: 'Bilateral Filter',
      ko: '양방향 필터',
      zh: '双边滤波',
      ja: 'バイラテラルフィルタ',
      de: 'Bilateraler Filter',
      es: 'Filtro Bilateral',
      fr: 'Filtre bilatéral'
    },
    category: 'filter',
    description: {
      en: 'Smooths the image while preserving edges (non-linear filter).',
      ko: '엣지를 보존하면서 이미지를 부드럽게 만드는 필터입니다.',
      zh: '在保留边缘的同时平滑图像。',
      ja: 'エッジを保持しながら画像を滑らかにします。',
      de: 'Glättet das Bild unter Beibehaltung der Kanten.',
      es: 'Suaviza la imagen conservando los bordes.',
      fr: 'Lisse l\'image tout en préservant les bords.'
    },
    parameters: [
      {
        name: 'd',
        type: 'slider',
        defaultValue: 9,
        min: 1,
        max: 20,
        step: 1,
        description: {
          en: 'Filter diameter',
          ko: '필터 직경(Diameter)',
          zh: '滤波器直径',
          ja: 'フィルタの直径',
          de: 'Filterdurchmesser',
          es: 'Diámetro del filtro',
          fr: 'Diamètre du filtre'
        },
      },
      {
        name: 'sigmaColor',
        type: 'slider',
        defaultValue: 75,
        min: 10,
        max: 150,
        step: 5,
        description: {
          en: 'Sigma Color',
          ko: '색상 공간 시그마(Sigma Color)',
          zh: '颜色空间标准差',
          ja: '色空間の標準偏差',
          de: 'Sigma-Farbe',
          es: 'Sigma de color',
          fr: 'Sigma couleur'
        },
      },
      {
        name: 'sigmaSpace',
        type: 'slider',
        defaultValue: 75,
        min: 10,
        max: 150,
        step: 5,
        description: {
          en: 'Sigma Space',
          ko: '좌표 공간 시그마(Sigma Space)',
          zh: '坐标空间标准差',
          ja: '座標空間の標準偏差',
          de: 'Sigma-Raum',
          es: 'Sigma de espacio',
          fr: 'Sigma espace'
        },
      },
    ],
    syntax: 'bilateralFilter(src, dst, d, sigmaColor, sigmaSpace)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga9d7064d478c95d60003cf839430737ed',
  },

  // 형태학 연산
  {
    id: 'erode',
    name: {
      en: 'Erode',
      ko: '침식 (Erode)',
      zh: '腐蚀',
      ja: '収縮',
      de: 'Erodieren',
      es: 'Erosión',
      fr: 'Érosion'
    },
    category: 'morphology',
    description: {
      en: 'Erodes away the boundaries of foreground objects (makes objects smaller).',
      ko: '이미지 전경 객체의 경계를 침식시킵니다 (객체를 작게 만듦).',
      zh: '腐蚀前景对象的边界（使对象变小）。',
      ja: '前面のオブジェクトの境界を侵食します (オブジェクトを小さくします)。',
      de: 'Trägt die Grenzen von Vordergrundobjekten ab (macht Objekte kleiner).',
      es: 'Erosiona los límites de los objetos en primer plano (hace los objetos más pequeños).',
      fr: 'Érode les limites des objets au premier plan (rend les objets plus petits).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 21,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
      {
        name: 'iterations',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Iterations',
          ko: '반복 횟수',
          zh: '迭代次数',
          ja: '反復回数',
          de: 'Iterationen',
          es: 'Iteraciones',
          fr: 'Itérations'
        },
      },
    ],
    syntax: 'erode(src, dst, kernel, iterations)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaeb1e0c1033e3f6b891a25d0511362a19',
  },
  {
    id: 'dilate',
    name: {
      en: 'Dilate',
      ko: '팽창 (Dilate)',
      zh: '膨胀',
      ja: '膨張',
      de: 'Dilatieren',
      es: 'Dilatación',
      fr: 'Dilatation'
    },
    category: 'morphology',
    description: {
      en: 'Adds pixels to the boundaries of objects in an image (makes objects larger).',
      ko: '이미지 내 객체의 경계에 픽셀을 추가하여 객체를 팽창시킵니다 (객체를 크게 만듦).',
      zh: '增加图像中对象边界的像素（使对象变大）。',
      ja: '画像内のオブジェクトの境界にピクセルを追加します (オブジェクトを大きくします)。',
      de: 'Fügt Pixel an den Grenzen von Objekten in einem Bild hinzu (macht Objekte größer).',
      es: 'Añade píxeles a los límites de los objetos en una imagen (hace los objetos más grandes).',
      fr: 'Ajoute des pixels aux limites des objets dans une image (rend les objets plus grands).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 21,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
      {
        name: 'iterations',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Iterations',
          ko: '반복 횟수',
          zh: '迭代次数',
          ja: '反復回数',
          de: 'Iterationen',
          es: 'Iteraciones',
          fr: 'Itérations'
        },
      },
    ],
    syntax: 'dilate(src, dst, kernel, iterations)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga4ff0f331895252f13404f99c80541986',
  },
  {
    id: 'morphologyEx_OPEN',
    name: {
      en: 'Opening',
      ko: '열기 (Opening)',
      zh: '开运算',
      ja: 'オープニング',
      de: 'Öffnen',
      es: 'Apertura',
      fr: 'Ouverture'
    },
    category: 'morphology',
    description: {
      en: 'Erosion followed by dilation (useful for removing small noise).',
      ko: '침식 연산 후 팽창 연산을 수행하여 작은 노이즈를 제거합니다.',
      zh: '先腐蚀后膨胀（用于去除小噪声）。',
      ja: '収縮の後に膨張を行います (小さなノイズの除去に役立ちます)。',
      de: 'Erosion gefolgt von Dilatation (nützlich zum Entfernen von kleinem Rauschen).',
      es: 'Erosión seguida de dilatación (útil para eliminar ruidos pequeños).',
      fr: 'Érosion suivie d\'une dilatation (utile pour éliminer les petits bruits).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 21,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
    ],
    syntax: 'morphologyEx(src, dst, MORPH_OPEN, kernel)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga67493776e3ad1a39630a76965999421a',
  },
  {
    id: 'morphologyEx_CLOSE',
    name: {
      en: 'Closing',
      ko: '닫기 (Closing)',
      zh: '闭运算',
      ja: 'クロージング',
      de: 'Schließen',
      es: 'Cierre',
      fr: 'Fermeture'
    },
    category: 'morphology',
    description: {
      en: 'Dilation followed by erosion (useful for closing small holes inside objects).',
      ko: '팽창 연산 후 침식 연산을 수행하여 객체 내부의 작은 구멍을 메웁니다.',
      zh: '先膨胀后腐蚀（用于填充对象内部的小孔）。',
      ja: '膨張の後に収縮を行います (オブジェクト内部の小さな穴を埋めるのに役立ちます)。',
      de: 'Dilatation gefolgt von Erosion (nützlich zum Schließen kleiner Löcher in Objekten).',
      es: 'Dilatación seguida de erosión (útil para cerrar pequeños agujeros dentro de los objetos).',
      fr: 'Dilatation suivie d\'une érosion (utile pour fermer de petits trous à l\'intérieur des objets).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 21,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
    ],
    syntax: 'morphologyEx(src, dst, MORPH_CLOSE, kernel)',
    documentation: 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga67493776e3ad1a39630a76965999421a',
  },

  // 엣지 검출
  {
    id: 'Canny',
    name: {
      en: 'Canny Edge Detection',
      ko: '캐니 엣지 검출 (Canny)',
      zh: 'Canny 边缘检测',
      ja: 'Canny エッジ検出',
      de: 'Canny-Kantenerkennung',
      es: 'Detección de bordes Canny',
      fr: 'Détection de contours Canny'
    },
    category: 'edge',
    description: {
      en: 'Detects edges using the Canny algorithm.',
      ko: 'Canny 알고리즘을 사용하여 이미지에서 엣지를 검출합니다.',
      zh: '使用 Canny 算法检测边缘。',
      ja: 'Canny アルゴリズムを使用してエッジを検出します。',
      de: 'Erkennt Kanten mittels des Canny-Algorithmus.',
      es: 'Detecta bordes utilizando el algoritmo Canny.',
      fr: 'Détecte les contours à l\'aide de l\'algorithme Canny.'
    },
    parameters: [
      {
        name: 'threshold1',
        type: 'slider',
        defaultValue: 50,
        min: 0,
        max: 300,
        step: 10,
        description: {
          en: 'Low threshold',
          ko: '낮은 임계값 (Threshold 1)',
          zh: '低阈值',
          ja: '低い閾値',
          de: 'Niedrige Schwelle',
          es: 'Umbral bajo',
          fr: 'Seuil bas'
        },
      },
      {
        name: 'threshold2',
        type: 'slider',
        defaultValue: 150,
        min: 0,
        max: 300,
        step: 10,
        description: {
          en: 'High threshold',
          ko: '높은 임계값 (Threshold 2)',
          zh: '高阈值',
          ja: '高い閾値',
          de: 'Hohe Schwelle',
          es: 'Umbral alto',
          fr: 'Seuil haut'
        },
      },
      {
        name: 'apertureSize',
        type: 'slider',
        defaultValue: 3,
        min: 3,
        max: 7,
        step: 2,
        description: {
          en: 'Sobel kernel size',
          ko: 'Sobel 커널 크기 (Aperture Size)',
          zh: 'Sobel 内核大小',
          ja: 'Sobel カーネルサイズ',
          de: 'Sobel-Kernelgröße',
          es: 'Tamaño del núcleo Sobel',
          fr: 'Taille du noyau Sobel'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'Canny(src, edges, threshold1, threshold2, apertureSize)',
    documentation: 'https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html',
  },
  {
    id: 'Sobel',
    name: {
      en: 'Sobel Edge Detection',
      ko: '소벨 엣지 검출 (Sobel)',
      zh: 'Sobel 边缘检测',
      ja: 'Sobel エッジ検出',
      de: 'Sobel-Kantenerkennung',
      es: 'Detección de bordes Sobel',
      fr: 'Détection de contours Sobel'
    },
    category: 'edge',
    description: {
      en: 'Detects edges using the Sobel operator (calculates derivatives).',
      ko: 'Sobel 연산자를 사용하여 이미지의 미분값을 계산하고 엣지를 검출합니다.',
      zh: '使用 Sobel 算子检测边缘（计算导数）。',
      ja: 'Sobel オペレータを使用してエッジを検出します (微分の計算)。',
      de: 'Erkennt Kanten mittels des Sobel-Operators (berechnet Ableitungen).',
      es: 'Detecta bordes utilizando el operador Sobel (calcula derivadas).',
      fr: 'Détecte les contours à l\'aide de l\'opérateur Sobel (calcule les dérivées).'
    },
    parameters: [
      {
        name: 'dx',
        type: 'slider',
        defaultValue: 1,
        min: 0,
        max: 2,
        step: 1,
        description: {
          en: 'Derivative order X',
          ko: 'X 방향 미분 차수(dx)',
          zh: 'X 方向导数阶数',
          ja: 'X 方向の微分階数',
          de: 'X-Ableitungsordnung',
          es: 'Orden de la derivada X',
          fr: 'Ordre de la dérivée X'
        },
      },
      {
        name: 'dy',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 2,
        step: 1,
        description: {
          en: 'Derivative order Y',
          ko: 'Y 방향 미분 차수(dy)',
          zh: 'Y 方向导数阶数',
          ja: 'Y 方向の微分階数',
          de: 'Y-Ableitungsordnung',
          es: 'Orden de la derivada Y',
          fr: 'Ordre de la dérivée Y'
        },
      },
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기 (ksize)',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille del núcleo'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'Sobel(src, dst, ddepth, dx, dy, ksize)',
    documentation: 'https://docs.opencv.org/4.x/d2/d2c/tutorial_sobel_derivatives.html',
  },
  {
    id: 'Laplacian',
    name: {
      en: 'Laplacian Edge Detection',
      ko: '라플라시안 엣지 검출 (Laplacian)',
      zh: 'Laplacian 边缘检测',
      ja: 'ラプラシアン エッジ検出',
      de: 'Laplace-Kantenerkennung',
      es: 'Detección de bordes Laplaciana',
      fr: 'Détection de contours laplaciens'
    },
    category: 'edge',
    description: {
      en: 'Detects edges using the Laplacian operator (second derivative).',
      ko: '라플라시안 연산자를 사용하여 2차 미분값 기반의 엣지를 검출합니다.',
      zh: '使用二阶导数算子检测边缘。',
      ja: 'ラプラシアン オペレータを使用してエッジを検出します (2 次微分)。',
      de: 'Erkennt Kanten mittels des Laplace-Operators (zweite Ableitung).',
      es: 'Detecta bordes utilizando el operador Laplaciano (segunda derivada).',
      fr: 'Détecte les contours à l\'aide de l\'opérateur laplacien (dérivée seconde).'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기 (ksize)',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernelgröße',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'Laplacian(src, dst, ddepth, ksize)',
    documentation: 'https://docs.opencv.org/4.x/d5/db5/tutorial_laplace_operator.html',
  },

  // 임계값 처리
  {
    id: 'threshold_BINARY',
    name: {
      en: 'Binary Threshold',
      ko: '이진 임계값 처리 (Binary Threshold)',
      zh: '二值化阈值',
      ja: '2 値化',
      de: 'Binärer Schwellenwert',
      es: 'Umbral binario',
      fr: 'Seuil binaire'
    },
    category: 'threshold',
    description: {
      en: 'Simple thresholding that converts an image to black and white.',
      ko: '픽셀 값이 임계값보다 크면 최대값으로, 아니면 0으로 변환합니다.',
      zh: '将图像转换为黑白的简单阈值处理。',
      ja: '画像を白黒に変換する単純な閾値処理です。',
      de: 'Einfache Schwellenwertbildung, die ein Bild in Schwarzweiß umwandelt.',
      es: 'Umbralización simple que convierte una imagen a blanco y negro.',
      fr: 'Seuillage simple qui convertit une image en noir et blanc.'
    },
    parameters: [
      {
        name: 'thresh',
        type: 'slider',
        defaultValue: 127,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Threshold value',
          ko: '임계값 (thresh)',
          zh: '阈值',
          ja: '閾値',
          de: 'Schwellenwert',
          es: 'Valor de umbral',
          fr: 'Valeur du seuil'
        },
      },
      {
        name: 'maxval',
        type: 'slider',
        defaultValue: 255,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Maximum value',
          ko: '최대값 (maxval)',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'threshold(src, dst, thresh, maxval, THRESH_BINARY)',
    documentation: 'https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#gae9e0e09943f1495f590809c2f69c777c',
  },
  {
    id: 'threshold_OTSU',
    name: {
      en: 'Otsu Threshold',
      ko: '오츠 임계값 처리 (Otsu Threshold)',
      zh: 'Otsu 自适应阈值',
      ja: '大津の 2 値化',
      de: 'Otsu-Schwellenwert',
      es: 'Umbral de Otsu',
      fr: 'Seuil d\'Otsu'
    },
    category: 'threshold',
    description: {
      en: 'Automatically calculates the optimal threshold value using Otsu\'s method.',
      ko: '오츠(Otsu) 알고리즘을 사용하여 이미지 전체에 최적의 임계값을 자동으로 계산합니다.',
      zh: '使用 Otsu 方法自动计算最佳阈值。',
      ja: '大津の手法を使用して、最適な閾値を自動的に計算します。',
      de: 'Berechnet automatisch den optimalen Schwellenwert mittels der Otsu-Methode.',
      es: 'Calcula automáticamente el valor de umbral óptimo utilizando el método de Otsu.',
      fr: 'Calcule automatiquement la valeur de seuil optimale à l\'aide de la méthode d\'Otsu.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'threshold(src, dst, 0, 255, THRESH_BINARY + THRESH_OTSU)',
    documentation: 'https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#gae9e0e09943f1495f590809c2f69c777c',
  },
  {
    id: 'adaptiveThreshold',
    name: {
      en: 'Adaptive Threshold',
      ko: '적응형 임계값 처리 (Adaptive Threshold)',
      zh: '自适应阈值',
      ja: '適応的 2 値化',
      de: 'Adaptiver Schwellenwert',
      es: 'Umbral adaptativo',
      fr: 'Seuillage adaptatif'
    },
    category: 'threshold',
    description: {
      en: 'Calculates thresholds for small regions (ideal for uneven lighting).',
      ko: '이미지 내 국소 영역별로 임계값을 계산하여 조명이 불균일한 경우 유용합니다.',
      zh: '为小区域计算阈值（非常适合光照不均）。',
      ja: '小さな領域の閾値を計算します (照明が不均一な場合に理想的です)。',
      de: 'Berechnet Schwellenwerte für kleine Regionen (ideal für ungleichmäßige Beleuchtung).',
      es: 'Calcula umbrales para regiones pequeñas (ideal para iluminación desigual).',
      fr: 'Calcule des seuils pour de petites régions (idéal pour un éclairage irrégulier).'
    },
    parameters: [
      {
        name: 'maxValue',
        type: 'slider',
        defaultValue: 255,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Maximum value',
          ko: '최대값 (maxValue)',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 11,
        min: 3,
        max: 51,
        step: 2,
        description: {
          en: 'Block size (odd)',
          ko: '블록 크기 (blockSize)',
          zh: '块大小 (奇数)',
          ja: 'ブロックサイズ (奇数)',
          de: 'Blockgröße (ungerade)',
          es: 'Tamaño del bloque (impar)',
          fr: 'Taille du bloc (impair)'
        },
      },
      {
        name: 'C',
        type: 'slider',
        defaultValue: 2,
        min: -10,
        max: 10,
        step: 1,
        description: {
          en: 'Constant C',
          ko: '상수 C',
          zh: '常量 C',
          ja: '定数 C',
          de: 'Konstante C',
          es: 'Constante C',
          fr: 'Constante C'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'adaptiveThreshold(src, dst, maxValue, ADAPTIVE_THRESH_MEAN_C, THRESH_BINARY, blockSize, C)',
    documentation: 'https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#ga72b913f352e8a1b7dc2806545c803419',
  },

  // 기하학 변환
  {
    id: 'resize',
    name: 'Resize (크기 조정)',
    category: 'transform',
    description: '이미지 크기를 조정합니다.',
    parameters: [
      {
        name: 'scale',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 2.0,
        step: 0.1,
        description: '크기 비율',
      },
      {
        name: 'interpolation',
        type: 'select',
        defaultValue: 'INTER_LINEAR',
        options: [
          { label: 'Nearest', value: 'INTER_NEAREST' },
          { label: 'Linear', value: 'INTER_LINEAR' },
          { label: 'Cubic', value: 'INTER_CUBIC' },
          { label: 'Lanczos', value: 'INTER_LANCZOS4' },
        ],
        description: '보간 방법',
      },
    ],
    syntax: 'resize(src, dst, size, fx, fy, interpolation)',
    documentation: 'https://docs.opencv.org/4.x/da7/df3/group__imgproc__geometric.html#ga47a974309e9102f5f0823156ec18d23c',
  },
  {
    id: 'rotate_90',
    name: {
      en: 'Rotate 90° CW',
      ko: '90도 시계방향 회전 (Rotate 90° CW)',
      zh: '顺时针旋转 90°',
      ja: '時計回りに 90 度回転',
      de: '90° im Uhrzeigersinn drehen',
      es: 'Girar 90° a la derecha',
      fr: 'Rotation 90° horaire'
    },
    category: 'transform',
    description: {
      en: 'Rotates the image 90 degrees clockwise.',
      ko: '이미지를 시계방향으로 90도 회전합니다.',
      zh: '顺时针旋转图像 90 度。',
      ja: '画像を時計回りに 90 度回転させます。',
      de: 'Dreht das Bild um 90 Grad im Uhrzeigersinn.',
      es: 'Gira la imagen 90 grados a la derecha.',
      fr: 'Fait pivoter l\'image de 90 degrees dans le sens des aiguilles d\'une montre.'
    },
    parameters: [],
    syntax: 'rotate(src, dst, ROTATE_90_CLOCKWISE)',
    documentation: 'https://docs.opencv.org/4.x/d2/d6e/group__imgproc__geometric.html#ga453d42fe4cb60853119369081544076c',
  },
  {
    id: 'rotate_180',
    name: {
      en: 'Rotate 180°',
      ko: '180도 회전 (Rotate 180°)',
      zh: '旋转 180°',
      ja: '180 度回転',
      de: '180° drehen',
      es: 'Girar 180°',
      fr: 'Rotation 180°'
    },
    category: 'transform',
    description: {
      en: 'Rotates the image 180 degrees.',
      ko: '이미지를 180도 회전합니다.',
      zh: '旋转图像 180 度。',
      ja: '画像を 180 度回転させます。',
      de: 'Dreht das Bild um 180 Grad.',
      es: 'Gira la imagen 180 grados.',
      fr: 'Fait pivoter l\'image de 180 degrees.'
    },
    parameters: [],
    syntax: 'rotate(src, dst, ROTATE_180)',
    documentation: 'https://docs.opencv.org/4.x/d2/d6e/group__imgproc__geometric.html#ga453d42fe4cb60853119369081544076c',
  },
  {
    id: 'flip_horizontal',
    name: {
      en: 'Flip Horizontal',
      ko: '좌우 반전 (Flip Horizontal)',
      zh: '水平翻转',
      ja: '左右反転',
      de: 'Horizontal spiegeln',
      es: 'Volteo horizontal',
      fr: 'Retournement horizontal'
    },
    category: 'transform',
    description: {
      en: 'Flips the image horizontally (y-axis).',
      ko: '이미지를 좌우(Y축 중심)로 반전합니다.',
      zh: '水平（沿 y 轴）翻转图像。',
      ja: '画像を左右 (y 軸) に反転します。',
      de: 'Spiegelt das Bild horizontal (y-Achse).',
      es: 'Voltea la imagen horizontalmente (eje y).',
      fr: 'Retourne l\'image horizontalement (axe y).'
    },
    parameters: [],
    syntax: 'flip(src, dst, 1)',
    documentation: 'https://docs.opencv.org/4.x/d2/d6e/group__imgproc__geometric.html#ga90491c1ac55e0029f33c8952a4323670',
  },
  {
    id: 'flip_vertical',
    name: {
      en: 'Flip Vertical',
      ko: '상하 반전 (Flip Vertical)',
      zh: '垂直翻转',
      ja: '上下反転',
      de: 'Vertikal spiegeln',
      es: 'Volteo vertical',
      fr: 'Retournement vertical'
    },
    category: 'transform',
    description: {
      en: 'Flips the image vertically (x-axis).',
      ko: '이미지를 상하(X축 중심)로 반전합니다.',
      zh: '垂直（沿 x 轴）翻转图像。',
      ja: '画像を上下 (x 軸) に反転します。',
      de: 'Spiegelt das Bild vertikal (x-Achse).',
      es: 'Voltea la imagen verticalmente (eje x).',
      fr: 'Retourne l\'image verticalement (axe x).'
    },
    parameters: [],
    syntax: 'flip(src, dst, 0)',
    documentation: 'https://docs.opencv.org/4.x/d2/d6e/group__imgproc__geometric.html#ga90491c1ac55e0029f33c8952a4323670',
  },

  // 윤곽선 검출
  {
    id: 'findContours',
    name: {
      en: 'Find Contours',
      ko: '윤곽선 찾기 (Find Contours)',
      zh: '查找轮廓',
      ja: '輪郭抽出',
      de: 'Konturen finden',
      es: 'Buscar contornos',
      fr: 'Trouver des contours'
    },
    category: 'contour',
    description: {
      en: 'Detects and draws object boundaries in a binary image.',
      ko: '이진 이미지에서 객체의 경계선(윤곽선)을 검출하고 그립니다.',
      zh: '在二值图像中检测并绘制对象边界。',
      ja: '2 値画像内のオブジェクトの境界 (輪郭) を検出し、描画します。',
      de: 'Erkennt und zeichnet Objektgrenzen in einem Binärbild.',
      es: 'Detecta y dibuja los límites de los objetos en una imagen binaria.',
      fr: 'Détecte et trace les limites des objets dans une image binaire.'
    },
    parameters: [
      {
        name: 'mode',
        type: 'select',
        defaultValue: 'RETR_EXTERNAL',
        options: [
          { label: 'External (외곽만)', value: 'RETR_EXTERNAL' },
          { label: 'List (모든 윤곽선)', value: 'RETR_LIST' },
          { label: 'Tree (계층 구조)', value: 'RETR_TREE' },
        ],
        description: {
          en: 'Contour retrieval mode',
          ko: '윤곽선 검색 모드 (Mode)',
          zh: '轮廓检索模式',
          ja: '輪郭検索モード',
          de: 'Kontur-Abru fmodus',
          es: 'Modo de recuperación de contorno',
          fr: 'Mode de récupération des contours'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Drawing thickness',
          ko: '그리기 두께 (Thickness)',
          zh: '绘制厚度',
          ja: '描画の太さ',
          de: 'Zeichenstärke',
          es: 'Grosor del dibujo',
          fr: 'Épaisseur du tracé'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'findContours(image, contours, hierarchy, mode, method)',
    documentation: 'https://docs.opencv.org/4.x/d4/d73/tutorial_py_contours_begin.html',
  },

  // 형상 분석
  {
    id: 'approxPolyDP',
    name: {
      en: 'Polygon Approximation',
      ko: '다각형 근사 (approxPolyDP)',
      zh: '多边形近似',
      ja: '多角形近似',
      de: 'Polygon-Approximation',
      es: 'Aproximación de polígonos',
      fr: 'Approximation de polygone'
    },
    category: 'shape',
    description: {
      en: 'Simplifies a contour with fewer vertices within a specified precision.',
      ko: '검출된 윤곽선을 지정된 정확도 내에서 더 적은 수의 꼭짓점을 가진 다각형으로 단순화합니다.',
      zh: '在指定精度内以较少的顶点简化轮廓。',
      ja: '指定された精度内で、より少ない頂点数で輪郭を単純化します。',
      de: 'Vereinfacht eine Kontur mit weniger Eckpunkten innerhalb einer spezifizierten Genauigkeit.',
      es: 'Simplifica un contorno con menos vértices dentro de una precisión especificada.',
      fr: 'Simplifie un contour avec moins de sommets dans une précision spécifiée.'
    },
    parameters: [
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 0.02,
        min: 0.001,
        max: 0.1,
        step: 0.005,
        description: {
          en: 'Precision factor',
          ko: '근사 정확도 비례 상수 (Epsilon)',
          zh: '精度因子',
          ja: '精度因子',
          de: 'Präzisionsfaktor',
          es: 'Factor de precisión',
          fr: 'Facteur de precisión'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'approxPolyDP(curve, approxCurve, epsilon, closed)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga0012a5fdaea70b8a9970165d98722b4c',
  },
  {
    id: 'arcLength',
    name: {
      en: 'Contour Length',
      ko: '윤곽선 길이 (arcLength)',
      zh: '轮廓长度',
      ja: '弧の長さ',
      de: 'Bogenlänge',
      es: 'Longitud de arco',
      fr: 'Longueur d\'arc'
    },
    category: 'shape',
    description: {
      en: 'Calculates the perimeter of a contour or a curve length.',
      ko: '검출된 윤곽선의 전체 둘레 길이를 계산합니다.',
      zh: '计算轮廓的周长或曲线长度。',
      ja: '輪郭の周囲の長さ、または曲線の長さを計算します。',
      de: 'Berechnet den Umfang einer Kontur oder die Länge einer Kurve.',
      es: 'Calcula el perímetro de un contorno o la longitud de una curva.',
      fr: 'Calcule le périmètre d\'un contour ou la longueur d\'une courbe.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'arcLength(curve, closed)',
    documentation: 'https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html#ga8d84330290ca24204e3230b200b217e2',
  },
  {
    id: 'boundingRect',
    name: {
      en: 'Bounding Rectangle',
      ko: '경계 사각형 (boundingRect)',
      zh: '边界矩形',
      ja: '外接矩形',
      de: 'Begrenzungsrechteck',
      es: 'Rectángulo delimitador',
      fr: 'Rectangle englobant'
    },
    category: 'shape',
    description: {
      en: 'Calculates the minimal upright bounding rectangle for a contour.',
      ko: '윤곽선을 포함하는 최소 직립 사각형을 계산합니다.',
      zh: '计算轮廓的最小直立边界矩形。',
      ja: '輪郭の最小直立外接矩形を計算します。',
      de: 'Berechnet das minimale aufrechte Begrenzungsrechteck für eine Kontur.',
      es: 'Calcula el rectángulo delimitador vertical mínimo para un contorno.',
      fr: 'Calcule le rectangle englobant vertical minimal pour un contour.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'boundingRect(array)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga103fcbda2f540f3ef1c042d6a9b35ac7',
  },
  {
    id: 'contourArea',
    name: {
      en: 'Contour Area',
      ko: '윤곽선 면적 (contourArea)',
      zh: '轮廓面积',
      ja: '輪郭面積',
      de: 'Konturfläche',
      es: 'Área del contorno',
      fr: 'Aire du contour'
    },
    category: 'shape',
    description: {
      en: 'Calculates the area of a contour.',
      ko: '윤곽선의 면적을 계산합니다.',
      zh: '计算轮廓的面积。',
      ja: '輪郭の面積を計算します。',
      de: 'Berechnet die Fläche einer Kontur.',
      es: 'Calcula el área de un contorno.',
      fr: 'Calcule l\'aire d\'un contour.'
    },
    parameters: [
      {
        name: 'oriented',
        type: 'select',
        defaultValue: 'false',
        options: [
          { label: '절대값 면적', value: 'false' },
          { label: '방향성 면적', value: 'true' },
        ],
        description: {
          en: 'Oriented area flag',
          ko: '면적 계산 방식',
          zh: '有向面积标志',
          ja: '有向面積フラグ',
          de: 'Orientierungsflagge der Fläche',
          es: 'Bandera de área orientada',
          fr: 'Drapeau de zone orientée'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'contourArea(contour, oriented)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga2c759ed9f497d4a618048a2f56dc97f1',
  },
  {
    id: 'convexHull',
    name: {
      en: 'Convex Hull',
      ko: '볼록 껍질 (convexHull)',
      zh: '凸包',
      ja: '凸包',
      de: 'Konvexe Hülle',
      es: 'Envolvente convexa',
      fr: 'Enveloppe convexe'
    },
    category: 'shape',
    description: {
      en: 'Finds the convex hull of a point set.',
      ko: '윤곽선의 볼록 껍질(Convex Hull)을 계산합니다.',
      zh: '查找点集的凸包。',
      ja: '点集合の凸包を検索します。',
      de: 'Findet die konvexe Hülle einer Punktmenge.',
      es: 'Encuentra la envolvente convexa de un conjunto de puntos.',
      fr: 'Trouve l\'enveloppe convexe d\'un ensemble de points.'
    },
    parameters: [
      {
        name: 'clockwise',
        type: 'select',
        defaultValue: 'false',
        options: [
          { label: '반시계방향', value: 'false' },
          { label: '시계방향', value: 'true' },
        ],
        description: {
          en: 'Orientation flag',
          ko: '방향',
          zh: '方向标志',
          ja: '方向フラグ',
          de: 'Orientierungsflagge',
          es: 'Bandera de orientación',
          fr: 'Drapeau d\'orientation'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'convexHull(points, hull, clockwise, returnPoints)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga014b28e56cb8854c0de4a211cb2be656',
  },
  {
    id: 'convexityDefects',
    name: {
      en: 'Convexity Defects',
      ko: '볼록성 결함 (convexityDefects)',
      zh: '凸性缺陷',
      ja: '凸性欠陥',
      de: 'Konvexitätsdefekte',
      es: 'Defectos de convexidad',
      fr: 'Défauts de convexité'
    },
    category: 'shape',
    description: {
      en: 'Finds the convexity defects of a contour.',
      ko: '윤곽선과 볼록 껍질 사이의 결함을 찾습니다.',
      zh: '查找轮廓的凸性缺陷。',
      ja: '輪郭の凸性欠陥を検索します。',
      de: 'Findet die Konvexitätsdefekte einer Kontur.',
      es: 'Encuentra los defectos de convexidad de un contorno.',
      fr: 'Trouve les défauts de convexité d\'un contour.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'convexityDefects(contour, convexhull, convexityDefects)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#gada4437098113fd8683c932e0567f47ba',
  },
  {
    id: 'fitEllipse',
    name: {
      en: 'Fit Ellipse',
      ko: '타원 피팅 (fitEllipse)',
      zh: '拟合椭圆',
      ja: '楕円フィッティング',
      de: 'Ellipse anpassen',
      es: 'Ajustar elipse',
      fr: 'Ajuster une ellipse'
    },
    category: 'shape',
    description: {
      en: 'Fits an ellipse to a 2D point set.',
      ko: '점 집합에 가장 잘 맞는 타원을 계산합니다.',
      zh: '将椭圆拟合到 2D 点集。',
      ja: '2D 点集合に楕円をフィッティングします。',
      de: 'Passt eine Ellipse an eine 2D-Punktmenge an.',
      es: 'Ajusta una elipse a un conjunto de puntos 2D.',
      fr: 'Ajuste une ellipse à un ensemble de points 2D.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'fitEllipse(points)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#gaf259efaad93098103d6c27b9e4900ffa',
  },
  {
    id: 'fitLine',
    name: {
      en: 'Fit Line',
      ko: '직선 피팅 (fitLine)',
      zh: '拟合直线',
      ja: '直線フィッティング',
      de: 'Linie anpassen',
      es: 'Ajustar línea',
      fr: 'Ajuster une ligne'
    },
    category: 'shape',
    description: {
      en: 'Fits a line to a 2D or 3D point set.',
      ko: '2D 또는 3D 점 집합에 직선을 피팅합니다.',
      zh: '将直线拟合到 2D 或 3D 点集。',
      ja: '2D または 3D 点集合に直線をフィッティングします。',
      de: 'Passt eine Linie an eine 2D- oder 3D-Punktmenge an.',
      es: 'Ajusta una línea a un conjunto de puntos 2D o 3D.',
      fr: 'Ajuste une ligne à un ensemble de points 2D ou 3D.'
    },
    parameters: [
      {
        name: 'distType',
        type: 'select',
        defaultValue: 'DIST_L2',
        options: [
          { label: 'L2 (유클리드)', value: 'DIST_L2' },
          { label: 'L1', value: 'DIST_L1' },
          { label: 'L12', value: 'DIST_L12' },
          { label: 'FAIR', value: 'DIST_FAIR' },
          { label: 'WELSCH', value: 'DIST_WELSCH' },
          { label: 'HUBER', value: 'DIST_HUBER' },
        ],
        description: {
          en: 'Distance type',
          ko: '거리 타입',
          zh: '距离类型',
          ja: '距離タイプ',
          de: 'Distanztyp',
          es: 'Tipo de distancia',
          fr: 'Type de distance'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'fitLine(points, line, distType, param, reps, aeps)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#gaf849da1fdafa67ee84b1e9a23b93f91f',
  },
  {
    id: 'isContourConvex',
    name: {
      en: 'Is Contour Convex',
      ko: '볼록성 검사 (isContourConvex)',
      zh: '轮廓是否凸出',
      ja: '輪郭が凸であるか',
      de: 'Ist Kontur konvex',
      es: 'Es contorno convexo',
      fr: 'Le contour est-il convexe'
    },
    category: 'shape',
    description: {
      en: 'Tests a contour for convexity.',
      ko: '윤곽선이 볼록한지 검사합니다.',
      zh: '测试轮廓的凸性。',
      ja: '輪郭の凸性をテストします。',
      de: 'Testet eine Kontur auf Konvexität.',
      es: 'Prueba un contorno para ver si es convexo.',
      fr: 'Teste un contour pour la convexité.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'isContourConvex(contour)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga8abf8010377b58cbc0ce20aa4428b5e7',
  },
  {
    id: 'minAreaRect',
    name: {
      en: 'Min Area Rect',
      ko: '최소 면적 회전 사각형 (minAreaRect)',
      zh: '最小面积矩形',
      ja: '最小面積矩形',
      de: 'Minimales Flächenrechteck',
      es: 'Rectángulo de área mínima',
      fr: 'Rectangle d\'aire minimale'
    },
    category: 'shape',
    description: {
      en: 'Finds a rotated rectangle of the minimum area enclosing the input 2D point set.',
      ko: '점 집합을 포함하는 최소 면적의 회전된 사각형을 계산합니다.',
      zh: '查找包含输入 2D 点集的最小面积旋转矩形。',
      ja: '入力 2D 点集合を囲む最小面積の回転矩形を検索します。',
      de: 'Findet ein rotiertes Rechteck der minimalen Fläche, das die eingegebene 2D-Punktmenge umschließt.',
      es: 'Encuentra un rectángulo rotado de área mínima que encierra el conjunto de puntos 2D de entrada.',
      fr: 'Trouve un rectangle tourné d\'aire minimale englobant l\'ensemble de points 2D d\'entrée.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'minAreaRect(points)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga3d476a3417130ae5154aea421ca7ead9',
  },
  {
    id: 'minEnclosingCircle',
    name: {
      en: 'Min Enclosing Circle',
      ko: '최소 둘레 원 (minEnclosingCircle)',
      zh: '最小外接圆',
      ja: '最小外接円',
      de: 'Minimaler umschließender Kreis',
      es: 'Círculo mínimo envolvente',
      fr: 'Cercle englobant minimal'
    },
    category: 'shape',
    description: {
      en: 'Finds a circle of the minimum area enclosing a 2D point set.',
      ko: '점 집합을 포함하는 최소 둘레의 원을 계산합니다.',
      zh: '查找包含 2D 点集的最小面积圆。',
      ja: '2D 点集合を囲む最小面積の円を検索します。',
      de: 'Findet einen Kreis der minimalen Fläche, der eine 2D-Punktmenge umschließt.',
      es: 'Encuentra un círculo de área mínima que encierra un conjunto de puntos 2D.',
      fr: 'Trouve un cercle d\'aire minimale englobant un ensemble de points 2D.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'minEnclosingCircle(points, center, radius)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga8ce13c24081bbc7151e9326f412190f1',
  },
  {
    id: 'minEnclosingTriangle',
    name: {
      en: 'Min Enclosing Triangle',
      ko: '최소 둘레 삼각형 (minEnclosingTriangle)',
      zh: '最小外接三角形',
      ja: '最小外接三角形',
      de: 'Minimales umschließendes Dreieck',
      es: 'Triángulo mínimo envolvente',
      fr: 'Triangle englobant minimal'
    },
    category: 'shape',
    description: {
      en: 'Finds a triangle of the minimum area enclosing a 2D point set.',
      ko: '점 집합을 포함하는 최소 둘레의 삼각형을 계산합니다.',
      zh: '查找包含 2D 点集的最小面积三角形。',
      ja: '2D 点集合を囲む最小面積の三角形を検索します。',
      de: 'Findet ein Dreieck der minimalen Fläche, das eine 2D-Punktmenge umschließt.',
      es: 'Encuentra un triángulo de área mínima que encierra un conjunto de puntos 2D.',
      fr: 'Trouve un triangle d\'aire minimale englobant un ensemble de points 2D.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'minEnclosingTriangle(points, triangle)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga68482d2b78b09b1de15e530015086e24',
  },
  {
    id: 'matchShapes',
    name: {
      en: 'Match Shapes',
      ko: '형상 매칭 (matchShapes)',
      zh: '形状匹配',
      ja: '形状マッチング',
      de: 'Formen abgleichen',
      es: 'Coincidencia de formas',
      fr: 'Correspondance de formes'
    },
    category: 'shape',
    description: {
      en: 'Compares two shapes.',
      ko: '두 윤곽선 또는 그레이스케일 이미지를 비교합니다.',
      zh: '比较两个形状。',
      ja: '2つの形状を比較します。',
      de: 'Vergleicht zwei Formen.',
      es: 'Compara dos formas.',
      fr: 'Compare deux formes.'
    },
    parameters: [
      {
        name: 'method',
        type: 'select',
        defaultValue: 'CONTOURS_MATCH_I1',
        options: [
          { label: 'I1 (Hu Moment)', value: 'CONTOURS_MATCH_I1' },
          { label: 'I2', value: 'CONTOURS_MATCH_I2' },
          { label: 'I3', value: 'CONTOURS_MATCH_I3' },
        ],
        description: {
          en: 'Comparison method',
          ko: '비교 방법',
          zh: '比较方法',
          ja: '比較方法',
          de: 'Vergleichsmethode',
          es: 'Método de comparación',
          fr: 'Méthode de comparaison'
        },
      },
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'matchShapes(contour1, contour2, method, parameter)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#gaadc90cb16e2362c9bd6e7363e6e4c317',
  },
  {
    id: 'moments',
    name: {
      en: 'Moments',
      ko: '모멘트 계산 (moments)',
      zh: '矩',
      ja: 'モーメント',
      de: 'Momente',
      es: 'Momentos',
      fr: 'Moments'
    },
    category: 'shape',
    description: {
      en: 'Calculates all of the moments up to the 3rd order of a polygon or rasterized shape.',
      ko: '이미지 또는 윤곽선의 모든 모멘트(최대 3차)를 계산합니다.',
      zh: '计算多边形或栅格化形状的所有三阶矩。',
      ja: '多角形またはラスタライズされた形状の3次までのすべてのモーメントを計算します。',
      de: 'Berechnet alle Momente bis zur 3. Ordnung eines Polygons oder einer rasterisierten Form.',
      es: 'Calcula todos los momentos hasta el tercer orden de un polígono o forma rasterizada.',
      fr: 'Calcule tous les moments jusqu\'au 3ème ordre d\'un polygone ou d\'une forme rastérisée.'
    },
    parameters: [
      {
        name: 'binaryImage',
        type: 'select',
        defaultValue: 'false',
        options: [
          { label: '그레이스케일', value: 'false' },
          { label: '이진 이미지', value: 'true' },
        ],
        description: {
          en: 'Binary image flag',
          ko: '이미지 타입',
          zh: '二值图像标志',
          ja: '二値画像フラグ',
          de: 'Binärbild-Flag',
          es: 'Bandera de imagen binaria',
          fr: 'Drapeau d\'image binaire'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'moments(array, binaryImage)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga556a180f43cab22649c23ada36a8a139',
  },
  {
    id: 'pointPolygonTest',
    name: {
      en: 'Point Polygon Test',
      ko: '점-다각형 테스트 (pointPolygonTest)',
      zh: '点多边形测试',
      ja: '点多角形テスト',
      de: 'Punkt-Polygon-Test',
      es: 'Prueba de punto-polígono',
      fr: 'Test point-polygone'
    },
    category: 'shape',
    description: {
      en: 'Performs a point-in-polygon test to check if a point is inside, outside, or on the edge of a polygon.',
      ko: '점과 윤곽선 사이의 관계를 테스트합니다.',
      zh: '执行点在多边形内的测试，检查点是在多边形内部、外部还是边缘上。',
      ja: '点と多角形の関係をテストします。点が多角形の内部、外部、または境界上にあるかを確認します。',
      de: 'Führt einen Punkt-in-Polygon-Test durch, um zu prüfen, ob ein Punkt innerhalb, außerhalb oder auf der Kante eines Polygons liegt.',
      es: 'Realiza una prueba de punto en polígono para verificar si un punto está dentro, fuera o en el borde de un polígono.',
      fr: 'Effectue un test point-dans-polygone pour vérifier si un point est à l\'intérieur, à l\'extérieur ou sur le bord d\'un polygone.'
    },
    parameters: [
      {
        name: 'measureDist',
        type: 'select',
        defaultValue: 'true',
        options: [
          { label: '거리 측정', value: 'true' },
          { label: '위치만 판단', value: 'false' },
        ],
        description: {
          en: 'Measure distance flag',
          ko: '측정 모드',
          zh: '测量距离标志',
          ja: '距離測定フラグ',
          de: 'Entfernungsmaß-Flag',
          es: 'Bandera de medida de distancia',
          fr: 'Drapeau de mesure de distance'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'pointPolygonTest(contour, pt, measureDist)',
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga1a539e8db2135af2566103705d7a5722',
  },
  {
    id: 'rotatedRectangleIntersection',
    name: {
      en: 'Rotated Rectangle Intersection',
      ko: '회전 사각형 교집합 (rotatedRectangleIntersection)',
      zh: '旋转矩形交集',
      ja: '回転矩形交差',
      de: 'Rotierte Rechteck-Schnittmenge',
      es: 'Intersección de rectángulo rotado',
      fr: 'Intersection de rectangles tournés'
    },
    category: 'shape',
    description: {
      en: 'Finds the intersection of two rotated rectangles. Angles can be adjusted in the list.',
      ko: '두 회전된 사각형의 교집합 영역을 계산합니다. 각도는 리스트에서 조정 가능합니다.',
      zh: '查找两个旋转矩形的交集。角度可以在列表中调整。',
      ja: '2つの回転矩形の交差を検索します。角度はリストで調整できます。',
      de: 'Findet die Schnittmenge zweier rotierter Rechtecke. Winkel können in der Liste angepasst werden.',
      es: 'Encuentra la intersección de dos rectángulos rotados. Los ángulos se pueden ajustar en la lista.',
      fr: 'Trouve l\'intersection de deux rectangles tournés. Les angles peuvent être ajustés dans la liste.'
    },
    parameters: [
      {
        name: 'rect1_angle',
        type: 'slider',
        defaultValue: 30,
        min: 0,
        max: 360,
        step: 1,
        description: {
          en: 'First rectangle angle',
          ko: '첫 번째 사각형 각도',
          zh: '第一个矩形角度',
          ja: '最初の矩形の角度',
          de: 'Winkel des ersten Rechtecks',
          es: 'Ángulo del primer rectángulo',
          fr: 'Angle du premier rectangle'
        },
      },
      {
        name: 'rect2_angle',
        type: 'slider',
        defaultValue: 45,
        min: 0,
        max: 360,
        step: 1,
        description: {
          en: 'Second rectangle angle',
          ko: '두 번째 사각형 각도',
          zh: '第二个矩形角度',
          ja: '2番目の矩形の角度',
          de: 'Winkel des zweiten Rechtecks',
          es: 'Ángulo del segundo rectángulo',
          fr: 'Angle du deuxième rectangle'
        },
      },
      {
        name: 'rect2_x_offset',
        type: 'slider',
        defaultValue: 20,
        min: -100,
        max: 100,
        step: 1,
        description: {
          en: 'Second rectangle X offset',
          ko: '두 번째 사각형 X 오프셋',
          zh: '第二个矩形 X 偏移',
          ja: '2番目の矩形 X オフセット',
          de: 'X-Offset des zweiten Rechtecks',
          es: 'Desplazamiento X del segundo rectángulo',
          fr: 'Décalage X du deuxième rectangle'
        },
      },
    ],
    syntax: 'rotatedRectangleIntersection(rect1, rect2, intersectingRegion)',
    customSrcLabel: 'src: 컨투어 추출용 이미지',
    hideDst: false,
    documentation: 'https://docs.opencv.org/4.12.0/d3/dc0/group__imgproc__shape.html#ga4f2c0e7d7a61d3c71c19e8d27d031a88',
  },

  // 특징 검출
  {
    id: 'cornerHarris',
    name: {
      en: 'Harris Corner Detection',
      ko: '해리스 코너 검출 (Harris Corner Detection)',
      zh: 'Harris 角点检测',
      ja: 'Harris コーナー検出',
      de: 'Harris-Eckendetektion',
      es: 'Detección de esquinas de Harris',
      fr: 'Détection de coins de Harris'
    },
    category: 'feature',
    description: {
      en: 'Implements the Harris corner detector.',
      ko: 'Harris 알고리즘을 사용한 코너 검출입니다.',
      zh: '实现 Harris 角点检测器。',
      ja: 'Harris コーナー検出器を実装します。',
      de: 'Implementiert den Harris-Eckendetektor.',
      es: 'Implementa el detector de esquinas de Harris.',
      fr: 'Implémente le détecteur de coins de Harris.'
    },
    parameters: [
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 2,
        min: 2,
        max: 10,
        step: 1,
        description: {
          en: 'Neighborhood size',
          ko: '블록 크기',
          zh: '邻域大小',
          ja: '近傍サイズ',
          de: 'Nachbarschaftsgröße',
          es: 'Tamaño del vecindario',
          fr: 'Taille du voisinage'
        },
      },
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Aperture parameter for the Sobel operator',
          ko: 'Sobel 커널 크기',
          zh: 'Sobel 算子的孔径参数',
          ja: 'Sobel オペレータの開口パラメータ',
          de: 'Aperturparameter für den Sobel-Operator',
          es: 'Parámetro de apertura para el operador Sobel',
          fr: 'Paramètre d\'ouverture pour l\'opérateur de Sobel'
        },
      },
      {
        name: 'k',
        type: 'slider',
        defaultValue: 0.04,
        min: 0.01,
        max: 0.1,
        step: 0.01,
        description: {
          en: 'Harris detector free parameter',
          ko: 'Harris 감지 파라미터',
          zh: 'Harris 检测器自由参数',
          ja: 'Harris 検出器の自由パラメータ',
          de: 'Freier Parameter des Harris-Detektors',
          es: 'Parámetro libre del detector de Harris',
          fr: 'Paramètre libre du détecteur de Harris'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'cornerHarris(src, dst, blockSize, ksize, k)',
    documentation: 'https://docs.opencv.org/4.x/d4/d7d/tutorial_harris_detector.html',
  },
  {
    id: 'goodFeaturesToTrack',
    name: {
      en: 'Good Features to Track (Shi-Tomasi)',
      ko: '추적할 좋은 특징 (Shi-Tomasi)',
      zh: '要跟踪的良好特征 (Shi-Tomasi)',
      ja: '追跡に適した特徴 (Shi-Tomasi)',
      de: 'Gute Merkmale zum Verfolgen (Shi-Tomasi)',
      es: 'Buenas características para rastrear (Shi-Tomasi)',
      fr: 'Bonnes caractéristiques à suivre (Shi-Tomasi)'
    },
    category: 'feature',
    description: {
      en: 'Determines strong corners on an image.',
      ko: 'Shi-Tomasi 알고리즘을 사용하여 추적하기 좋은 코너를 검출합니다.',
      zh: '确定图像上的强角点。',
      ja: '画像上の強いコーナーを決定します。',
      de: 'Bestimmt starke Ecken auf einem Bild.',
      es: 'Determina esquinas fuertes en una imagen.',
      fr: 'Détermine les coins forts sur une image.'
    },
    parameters: [
      {
        name: 'maxCorners',
        type: 'slider',
        defaultValue: 100,
        min: 10,
        max: 500,
        step: 10,
        description: {
          en: 'Maximum number of corners to return',
          ko: '검출할 최대 코너 개수',
          zh: '要返回的最大角点数',
          ja: '返すコーナーの最大数',
          de: 'Maximale Anzahl der zurückzugebenden Ecken',
          es: 'Número máximo de esquinas a devolver',
          fr: 'Nombre maximal de coins à retourner'
        },
      },
      {
        name: 'qualityLevel',
        type: 'slider',
        defaultValue: 0.01,
        min: 0.001,
        max: 0.1,
        step: 0.001,
        description: {
          en: 'Parameter characterizing the minimal accepted quality of image corners',
          ko: '코너 품질 레벨 (0~1)',
          zh: '表征图像角点最小可接受质量的参数',
          ja: '画像コーナーの最小許容品質を特徴付けるパラメータ',
          de: 'Parameter, der die minimal akzeptierte Qualität der Bildecken charakterisiert',
          es: 'Parámetro que caracteriza la calidad mínima aceptada de las esquinas de la imagen',
          fr: 'Paramètre caractérisant la qualité minimale acceptée des coins de l\'image'
        },
      },
      {
        name: 'minDistance',
        type: 'slider',
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
        description: {
          en: 'Minimum possible Euclidean distance between the returned corners',
          ko: '코너 간 최소 거리',
          zh: '返回角点之间的最小欧几里得距离',
          ja: '返されるコーナー間の最小ユークリッド距離',
          de: 'Minimal möglicher euklidischer Abstand zwischen den zurückgegebenen Ecken',
          es: 'Distancia euclidiana mínima posible entre las esquinas devueltas',
          fr: 'Distance euclidienne minimale possible entre les coins retournés'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'goodFeaturesToTrack(src, maxCorners, qualityLevel, minDistance)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga1d6bb77486c8f92d79c8793ad995d541',
  },
  {
    id: 'HoughLines',
    name: {
      en: 'Hough Line Transform',
      ko: '허프 선 변환 (HoughLines)',
      zh: 'Hough 直线变换',
      ja: 'ハフ変換による直線検出',
      de: 'Hough-Linientransformation',
      es: 'Transformada de línea de Hough',
      fr: 'Transformée de ligne de Hough'
    },
    category: 'feature',
    description: {
      en: 'Detects straight lines in an image using the Hough transform.',
      ko: '허프 변환을 사용하여 이미지에서 직선을 검출합니다.',
      zh: '使用 Hough 变换检测图像中的直线。',
      ja: 'ハフ変換を使用して画像内の直線を検出します。',
      de: 'Erkennt gerade Linien in einem Bild mittels der Hough-Transformation.',
      es: 'Detecta líneas rectas en una imagen utilizando la transformada de Hough.',
      fr: 'Détecte les lignes droites dans une image à l\'aide de la transformée de Hough.'
    },
    parameters: [
      {
        name: 'rho',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Distance resolution (pixels)',
          ko: '거리 해상도 (픽셀)',
          zh: '距离分辨率 (像素)',
          ja: '距離解像度 (ピクセル)',
          de: 'Abstandsauflösung (Pixel)',
          es: 'Resolución de distancia (píxeles)',
          fr: 'Résolution de distance (pixels)'
        },
      },
      {
        name: 'theta',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 5,
        step: 1,
        description: {
          en: 'Angle resolution (degrees)',
          ko: '각도 해상도 (도)',
          zh: '角度分辨率 (度)',
          ja: '角度解像度 (ピクセル)',
          de: 'Winkelauflösung (Grad)',
          es: 'Resolución de ángulo (grados)',
          fr: 'Résolution d\'angle (degrés)'
        },
      },
      {
        name: 'threshold',
        type: 'slider',
        defaultValue: 100,
        min: 50,
        max: 300,
        step: 10,
        description: {
          en: 'Accumulator threshold',
          ko: '누산기 임계값 (Threshold)',
          zh: '累加器阈值',
          ja: 'アキュムレータの閾値',
          de: 'Akkumulator-Schwellenwert',
          es: 'Umbral del acumulador',
          fr: 'Seuil de l\'accumulateur'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'HoughLines(src, rho, theta, threshold)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga46b4e588934f6c8dfd509cc6e0e4545a',
  },
  {
    id: 'HoughLinesP',
    name: {
      en: 'Probabilistic Hough Line Transform',
      ko: '확률적 허프 선 변환 (HoughLinesP)',
      zh: '概率 Hough 直线变换',
      ja: '確率的ハフ変換による線分検出',
      de: 'Wahrscheinlichkeits-Hough-Linientransformation',
      es: 'Transformada de línea de Hough probabilística',
      fr: 'Transformée de ligne de Hough probabiliste'
    },
    category: 'feature',
    description: {
      en: 'More efficient line detection that finds line segments.',
      ko: '확률적 허프 변환을 사용하여 이미지에서 선분을 검출합니다 (HoughLines보다 효율적).',
      zh: '更高效的直线检测，用于查找线段。',
      ja: '線分を検出する、より効率的な直線検出です。',
      de: 'Effizientere Linien-Erkennung, die Liniensegmente findet.',
      es: 'Detección de líneas más eficiente que encuentra segmentos de línea.',
      fr: 'Détecte les lignes plus efficacement en trouvant des segments de ligne.'
    },
    parameters: [
      {
        name: 'rho',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Distance resolution (pixels)',
          ko: '거리 해상도 (픽셀)',
          zh: '距离分辨率 (像素)',
          ja: '距離解像度 (ピクセル)',
          de: 'Abstandsauflösung (Pixel)',
          es: 'Resolución de distancia (píxeles)',
          fr: 'Résolution de distance (pixels)'
        },
      },
      {
        name: 'theta',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 5,
        step: 1,
        description: {
          en: 'Angle resolution (degrees)',
          ko: '각도 해상도 (도)',
          zh: '角度分辨率 (度)',
          ja: '角度解像度 (度)',
          de: 'Winkelauflösung (Grad)',
          es: 'Resolución de ángulo (grados)',
          fr: 'Résolution d\'angle (degrés)'
        },
      },
      {
        name: 'threshold',
        type: 'slider',
        defaultValue: 50,
        min: 20,
        max: 200,
        step: 10,
        description: {
          en: 'Accumulator threshold',
          ko: '누산기 임계값 (Threshold)',
          zh: '累加器阈值',
          ja: 'アキュムレータの閾値',
          de: 'Akkumulator-Schwellenwert',
          es: 'Umbral del acumulador',
          fr: 'Seuil de l\'accumulateur'
        },
      },
      {
        name: 'minLineLength',
        type: 'slider',
        defaultValue: 50,
        min: 10,
        max: 200,
        step: 10,
        description: {
          en: 'Min line length',
          ko: '최소 선분 길이 (Min Line Length)',
          zh: '最小线轴长度',
          ja: '最小の線分長',
          de: 'Minimale Linienlänge',
          es: 'Longitud mínima de línea',
          fr: 'Longueur minimale de ligne'
        },
      },
      {
        name: 'maxLineGap',
        type: 'slider',
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
        description: {
          en: 'Max line gap',
          ko: '최대 선분 간격 (Max Line Gap)',
          zh: '最大线轴间隙',
          ja: '最大の線分間隔',
          de: 'Maximaler Linienabstand',
          es: 'Brecha máxima de línea',
          fr: 'Écart maximal entre les lignes'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'HoughLinesP(src, rho, theta, threshold, minLineLength, maxLineGap)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga8618180a5948286384e3b7ca02f6feeb',
  },
  {
    id: 'HoughCircles',
    name: {
      en: 'Hough Circle Transform',
      ko: '허프 원 변환 (HoughCircles)',
      zh: 'Hough 圆变换',
      ja: 'ハフ変換による円検出',
      de: 'Hough-Kreistransformation',
      es: 'Transformada de círculo de Hough',
      fr: 'Transformée de cercle de Hough'
    },
    category: 'feature',
    description: {
      en: 'Detects circles in an image using the Hough transform.',
      ko: '허프 변환을 사용하여 이미지에서 원을 검출합니다.',
      zh: '使用 Hough 变换检测图像中的圆。',
      ja: 'ハフ変換を使用して画像内の円を検出します。',
      de: 'Erkennt Kreise in einem Bild mittels der Hough-Transformation.',
      es: 'Detecta círculos en una imagen utilizando la transformada de Hough.',
      fr: 'Détecte les cercles dans une image à l\'aide de la transformée de Hough.'
    },
    parameters: [
      {
        name: 'dp',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 3,
        step: 0.5,
        description: {
          en: 'Accumulator resolution factor',
          ko: '누산기 해상도 비율 (dp)',
          zh: '累加器分辨率因子',
          ja: 'アキュムレータ解像度の因子',
          de: 'Akkumulator-Auflösungsfaktor',
          es: 'Factor de resolución del acumulador',
          fr: 'Facteur de résolution de l\'accumulateur'
        },
      },
      {
        name: 'minDist',
        type: 'slider',
        defaultValue: 50,
        min: 10,
        max: 200,
        step: 10,
        description: {
          en: 'Min distance between centers',
          ko: '원 중심 간 최소 거리 (minDist)',
          zh: '圆心之间的最小距离',
          ja: '中心間の最小距離',
          de: 'Minimaler Abstand zwischen Zentren',
          es: 'Distancia mínima entre centros',
          fr: 'Distance minimale entre les centres'
        },
      },
      {
        name: 'param1',
        type: 'slider',
        defaultValue: 100,
        min: 50,
        max: 300,
        step: 10,
        description: {
          en: 'Canny edge threshold',
          ko: 'Canny 엣지 임계값 (param1)',
          zh: 'Canny 边缘阈值',
          ja: 'Canny エッジの閾値',
          de: 'Canny-Kanten-Schwellenwert',
          es: 'Umbral de borde Canny',
          fr: 'Seuil de contour Canny'
        },
      },
      {
        name: 'param2',
        type: 'slider',
        defaultValue: 30,
        min: 10,
        max: 100,
        step: 5,
        description: {
          en: 'Accumulator threshold',
          ko: '원 검출 임계값 (param2)',
          zh: '累加器阈值',
          ja: 'アキュムレータの閾値',
          de: 'Akkumulator-Schwellenwert',
          es: 'Umbral del acumulador',
          fr: 'Seuil de l\'accumulateur'
        },
      },
      {
        name: 'minRadius',
        type: 'slider',
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 5,
        description: {
          en: 'Min radius',
          ko: '최소 반지름 (minRadius)',
          zh: '最小半径',
          ja: '最小半径',
          de: 'Minimaler Radius',
          es: 'Radio mínimo',
          fr: 'Rayon minimal'
        },
      },
      {
        name: 'maxRadius',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 500,
        step: 10,
        description: {
          en: 'Max radius',
          ko: '최대 반지름 (maxRadius)',
          zh: '最大半径',
          ja: '最大半径',
          de: 'Maximaler Radius',
          es: 'Radio máximo',
          fr: 'Rayon maximal'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'HoughCircles(src, circles, HOUGH_GRADIENT, dp, minDist, param1, param2, minRadius, maxRadius)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga47840c36142248267dc5946a4695eb78',
  },
  {
    id: 'cornerSubPix',
    name: {
      en: 'Corner Sub-pixel Refinement',
      ko: '코너 서브픽셀 정제 (cornerSubPix)',
      zh: '角点亚像素细化',
      ja: 'コーナーサブピクセル精製',
      de: 'Ecken-Subpixel-Verfeinerung',
      es: 'Refinamiento de subpíxeles de esquina',
      fr: 'Affinement sub-pixel des coins'
    },
    category: 'feature',
    description: {
      en: 'Refines the corner locations to sub-pixel accuracy.',
      ko: '코너 위치를 서브픽셀 정확도로 정제합니다.',
      zh: '将角点位置细化到亚像素精度。',
      ja: 'コーナー位置をサブピクセル精度に精製します。',
      de: 'Verfeinert die Eckpositionen auf Subpixel-Genauigkeit.',
      es: 'Refina las ubicaciones de las esquinas con precisión de subpíxeles.',
      fr: 'Affine les emplacements des coins avec une précision sub-pixel.'
    },
    parameters: [
      {
        name: 'winSize',
        type: 'slider',
        defaultValue: 5,
        min: 3,
        max: 15,
        step: 2,
        description: {
          en: 'Half of the side length of the search window',
          ko: '검색 윈도우 크기',
          zh: '搜索窗口边长的一半',
          ja: '検索ウィンドウの辺長の半分',
          de: 'Halbe Seitenlänge des Suchfensters',
          es: 'Mitad de la longitud del lado de la ventana de búsqueda',
          fr: 'Moitié de la longueur du côté de la fenêtre de recherche'
        },
      },
      {
        name: 'maxCount',
        type: 'slider',
        defaultValue: 30,
        min: 10,
        max: 100,
        step: 10,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大反復回数',
          de: 'Maximale Anzahl von Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximal d\'itérations'
        },
      },
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 0.01,
        min: 0.001,
        max: 0.1,
        step: 0.001,
        description: {
          en: 'Termination criteria epsilon',
          ko: '정확도 기준',
          zh: '终止准则 epsilon',
          ja: '終了基準イプシロン',
          de: 'Abbruchkriterium Epsilon',
          es: 'Criterio de terminación épsilon',
          fr: 'Critère de terminaison epsilon'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'cornerSubPix(src, corners, winSize, zeroZone, criteria)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga354e0d7c86d0d9da75de9b9701a9a87e',
  },
  {
    id: 'cornerMinEigenVal',
    name: {
      en: 'Corner Min Eigen Value',
      ko: '코너 최소 고유값 (cornerMinEigenVal)',
      zh: '角点最小特征值',
      ja: 'コーナー最小固有値',
      de: 'Ecken-Minimal-Eigenwert',
      es: 'Valor propio mínimo de esquina',
      fr: 'Valeur propre minimale de coin'
    },
    category: 'feature',
    description: {
      en: 'Calculates the minimum eigenvalue of a 2x2 gradient covariance matrix for each pixel.',
      ko: '각 픽셀의 최소 고유값을 계산하여 코너를 검출합니다.',
      zh: '计算每个像素的 2x2 梯度协方差矩阵的最小特征值。',
      ja: '各ピクセルの 2x2 勾配共分散行列の最小固有値を計算します。',
      de: 'Berechnet den minimalen Eigenwert einer 2x2 Gradienten-Kovarianzmatrix für jedes Pixel.',
      es: 'Calcula el valor propio mínimo de una matriz de covarianza de gradiente de 2x2 para cada píxel.',
      fr: 'Calcule la valeur propre minimale d\'une matrice de covariance de gradient 2x2 pour chaque pixel.'
    },
    parameters: [
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 3,
        min: 3,
        max: 11,
        step: 2,
        description: {
          en: 'Neighborhood size',
          ko: '블록 크기',
          zh: '邻域大小',
          ja: '近傍サイズ',
          de: 'Nachbarschaftsgröße',
          es: 'Tamaño del vecindario',
          fr: 'Taille du voisinage'
        },
      },
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Aperture parameter for the Sobel operator',
          ko: 'Sobel 커널 크기',
          zh: 'Sobel 算子的孔径参数',
          ja: 'Sobel オペレータの開口パラメータ',
          de: 'Aperturparameter für den Sobel-Operator',
          es: 'Parámetro de apertura para el operador Sobel',
          fr: 'Paramètre d\'ouverture pour l\'opérateur de Sobel'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'cornerMinEigenVal(src, dst, blockSize, ksize)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga9e5f28b3e5c1e2e86c6b1a8eb1d1c22d',
  },
  {
    id: 'cornerEigenValsAndVecs',
    name: {
      en: 'Corner Eigen Values and Vectors',
      ko: '코너 고유값 및 고유벡터 (cornerEigenValsAndVecs)',
      zh: '角点特征值和特征向量',
      ja: 'コーナー固有値と固有ベクトル',
      de: 'Ecken-Eigenwerte und -Vektoren',
      es: 'Valores y vectores propios de esquina',
      fr: 'Valeurs et vecteurs propres de coin'
    },
    category: 'feature',
    description: {
      en: 'Calculates the eigenvalues and eigenvectors of the 2x2 gradient covariance matrix for every pixel.',
      ko: '각 픽셀의 고유값과 고유벡터를 계산합니다.',
      zh: '计算每个像素的 2x2 梯度协方差矩阵的特征值和特征向量。',
      ja: '各ピクセルの 2x2 勾配共分散行列の固有値と固有ベクトルを計算します。',
      de: 'Berechnet die Eigenwerte und Eigenvektoren der 2x2 Gradienten-Kovarianzmatrix für jedes Pixel.',
      es: 'Calcula los valores y vectores propios de la matriz de covarianza de gradiente de 2x2 para cada píxel.',
      fr: 'Calcule les valeurs et vecteurs propres de la matrice de covariance de gradient 2x2 pour chaque pixel.'
    },
    parameters: [
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 3,
        min: 3,
        max: 11,
        step: 2,
        description: {
          en: 'Neighborhood size',
          ko: '블록 크기',
          zh: '邻域大小',
          ja: '近傍サイズ',
          de: 'Nachbarschaftsgröße',
          es: 'Tamaño del vecindario',
          fr: 'Taille du voisinage'
        },
      },
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Aperture parameter for the Sobel operator',
          ko: 'Sobel 커널 크기',
          zh: 'Sobel 算子的孔径参数',
          ja: 'Sobel オペレータの開口パラメータ',
          de: 'Aperturparameter für den Sobel-Operator',
          es: 'Parámetro de apertura para el operador Sobel',
          fr: 'Paramètre d\'ouverture pour l\'opérateur de Sobel'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'cornerEigenValsAndVecs(src, dst, blockSize, ksize)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#ga4e146f0c66c1c58e3e419b0dc3a8c0e7',
  },
  {
    id: 'preCornerDetect',
    name: {
      en: 'Pre-Corner Detection',
      ko: '사전 코너 검출 (preCornerDetect)',
      zh: '预角点检测',
      ja: '事前コーナー検出',
      de: 'Vorecken-Erkennung',
      es: 'Detección previa de esquinas',
      fr: 'Pré-détection de coins'
    },
    category: 'feature',
    description: {
      en: 'Calculates the feature map for the corner detector.',
      ko: '코너 검출을 위한 사전 처리를 수행합니다.',
      zh: '计算角点检测器的特征图。',
      ja: 'コーナー検出器のフィーチャマップを計算します。',
      de: 'Berechnet die Feature-Map für den Eckendetektor.',
      es: 'Calcula el mapa de características para el detector de esquinas.',
      fr: 'Calcule la carte de caractéristiques pour le détecteur de coins.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Aperture parameter for the Sobel operator',
          ko: 'Sobel 커널 크기',
          zh: 'Sobel 算子的孔径参数',
          ja: 'Sobel オペレータの開口パラメータ',
          de: 'Aperturparameter für den Sobel-Operator',
          es: 'Parámetro de apertura para el operador Sobel',
          fr: 'Paramètre d\'ouverture pour l\'opérateur de Sobel'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'preCornerDetect(src, dst, ksize)',
    documentation: 'https://docs.opencv.org/4.12.0/dd/d1a/group__imgproc__feature.html#gac7fd48d2b5e7a3bf2f06cf89f0b0a051',
  },

  // 기본 연산
  {
    id: 'split',
    name: {
      en: 'Split Channels',
      ko: '채널 분리',
      zh: '拆分通道',
      ja: 'チャネル分離',
      de: 'Kanäle aufteilen',
      es: 'Dividir canales',
      fr: 'Diviser les canaux'
    },
    category: 'basic',
    description: {
      en: 'Splits a color image into individual channels (e.g., B, G, R).',
      ko: '컬러 이미지를 개별 채널(B, G, R 등)로 분리합니다.',
      zh: '将彩色图像拆分为单个通道（例如 B、G、R）。',
      ja: 'カラー画像を個々のチャネル (B、G、R など) に分離します。',
      de: 'Teilt ein Farbbild in einzelne Kanäle auf (z. B. B, G, R).',
      es: 'Divide una imagen en color en canales individuales (por ejemplo, B, G, R).',
      fr: 'Divise une image en couleur en canaux individuels (par exemple, B, G, R).'
    },
    parameters: [],
    syntax: 'split(src, mv)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga0547c7fed86152d7e9d0096029c8518a',
  },
  {
    id: 'merge',
    name: {
      en: 'Merge Channels',
      ko: '채널 병합',
      zh: '合并通道',
      ja: 'チャネル結合',
      de: 'Kanäle zusammenführen',
      es: 'Combinar canales',
      fr: 'Fusionner les canales'
    },
    category: 'basic',
    description: {
      en: 'Merges individual channels into a single color image.',
      ko: '개별 채널을 하나의 컬러 이미지로 병합합니다.',
      zh: '将单个通道合并为单个彩色图像。',
      ja: '個々のチャネルをひとつのカラー画像に結合します。',
      de: 'Führt einzelne Kanäle zu einem einzigen Farbbild zusammen.',
      es: 'Combina canales individuales en una sola imagen en color.',
      fr: 'Fusionne les canaux individuels en une seule image en couleur.'
    },
    parameters: [],
    syntax: 'merge(mv, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga7d7b4d6c6ee504b30a20b1680029c7b4',
  },
  {
    id: 'inRange',
    name: {
      en: 'In Range (Thresholding)',
      ko: '범위 내 추출',
      zh: '范围内提取',
      ja: '範囲内抽出',
      de: 'Im Bereich extrahieren',
      es: 'En rango (Extracción)',
      fr: 'Dans la plage (Extraction)'
    },
    category: 'basic',
    description: {
      en: 'Extracts pixels that fall within a specific color range (thresholding).',
      ko: '특정 색상 범위 내의 픽셀을 추출합니다 (이진화).',
      zh: '提取落在特定颜色范围内的像素。',
      ja: '特定の色範囲内にあるピクセルを抽出します。',
      de: 'Extrahiert Pixel, die in einen bestimmten Farbbereich fallen.',
      es: 'Extrae píxeles que caen dentro de un rango de color específico.',
      fr: 'Extrait les pixels qui tombent dans une plage de couleurs spécifique.'
    },
    parameters: [
      {
        name: 'lowerH',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 179,
        step: 1,
        description: {
          en: 'Lower Hue',
          ko: '하한 Hue',
          zh: '下限色调',
          ja: '下限色相',
          de: 'Unterer Farbwert',
          es: 'Tono inferior',
          fr: 'Teinte inférieure'
        },
      },
      {
        name: 'upperH',
        type: 'slider',
        defaultValue: 179,
        min: 0,
        max: 179,
        step: 1,
        description: {
          en: 'Upper Hue',
          ko: '상한 Hue',
          zh: '上限色调',
          ja: '上限色相',
          de: 'Oberer Farbwert',
          es: 'Tono superior',
          fr: 'Teinte supérieure'
        },
      },
    ],
    syntax: 'inRange(src, lowerb, upperb, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga48af0ab51e36436c5d04340e036ce981',
  },
  {
    id: 'bitwise_not',
    name: {
      en: 'Bitwise NOT (Inverse)',
      ko: '비트 NOT (부정/반전)',
      zh: '位非 (取反)',
      ja: 'ビット単位の NOT (反転)',
      de: 'Bitweises NOT (Negativ)',
      es: 'NOT bit a bit (Inverso)',
      fr: 'NOT bit à bit (Inverse)'
    },
    category: 'basic',
    description: {
      en: 'Inverts all bits of the image (negative effect).',
      ko: '이미지의 모든 비트를 반전시킵니다 (네거티브 효과).',
      zh: '反转图像的所有位（负片效果）。',
      ja: '画像のすべてのビットを反転させます (ネガ効果)。',
      de: 'Invertiert alle Bits des Bildes (Negativeffekt).',
      es: 'Invierte todos los bits de la imagen (efecto negativo).',
      fr: 'NOT bit à bit (Inverse)'
    },
    parameters: [],
    syntax: 'bitwise_not(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga4cec43ddc377f5a0c6f3c96e6e2a5af9',
  },
  {
    id: 'normalize',
    name: {
      en: 'Normalize',
      ko: '정규화',
      zh: '归一化',
      ja: '正規化',
      de: 'Normalisieren',
      es: 'Normalizar',
      fr: 'Normaliser'
    },
    category: 'basic',
    description: {
      en: 'Normalizes pixel values of the image to a specific range.',
      ko: '이미지의 픽셀 값을 특정 범위로 정규화합니다.',
      zh: '将图像的像素值归一化到特定范围。',
      ja: '画像のピクセル値を特定の範囲に正規化します。',
      de: 'Normalisiert die Pixelwerte des Bildes auf einen bestimmten Bereich.',
      es: 'Normaliza los valores de píxel de la imagen a un rango específico.',
      fr: 'Normalise les valeurs de pixel de l\'image dans une plage spécifique.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Minimum value',
          ko: '정규화 하한(최소값)',
          zh: '最小值',
          ja: '最小値',
          de: 'Minimalwert',
          es: 'Valor mínimo',
          fr: 'Valeur minimale'
        },
      },
      {
        name: 'beta',
        type: 'slider',
        defaultValue: 255,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Maximum value',
          ko: '정규화 상한(최대값)',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
    ],
    syntax: 'normalize(src, dst, alpha, beta, norm_type)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga87eef7ee3970f86906d69a92cbf064bd',
  },

  // 히스토그램
  {
    id: 'equalizeHist',
    name: {
      en: 'Histogram Equalization',
      ko: '히스토그램 평활화',
      zh: '直方图均衡化',
      ja: 'ヒストグラム均一化',
      de: 'Histogramm-Entzerrung',
      es: 'Ecualización de histograma',
      fr: 'Égalisation d\'histogramme'
    },
    category: 'histogram',
    description: {
      en: 'Improves image contrast by stretching the histogram.',
      ko: '히스토그램 평활화로 이미지 대비를 개선합니다.',
      zh: '通过拉伸直方图来提高图像对比度。',
      ja: 'ヒストグラムを伸ばすことで画像のコントラストを改善します。',
      de: 'Verbessert den Bildkontrast durch Dehnen des Histogramms.',
      es: 'Mejora el contraste de la imagen estirando el histograma.',
      fr: 'Améliore le contraste de l\'image en étirant l\'histogramme.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'equalizeHist(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html#ga7e54091f0c937d49bf84152a8049d2a8',
  },
  {
    id: 'calcHist',
    name: {
      en: 'Calculate Histogram',
      ko: '히스토그램 계산 (calcHist)',
      zh: '计算直方图',
      ja: 'ヒストグラム計算',
      de: 'Histogramm berechnen',
      es: 'Calcular histograma',
      fr: 'Calculer l\'histogramme'
    },
    category: 'histogram',
    description: {
      en: 'Calculates the histogram of an image and visualizes it.',
      ko: '이미지의 히스토그램을 계산하고 시각화합니다.',
      zh: '计算并可视化图像的直方图。',
      ja: '画像のヒストグラムを計算し、視覚化します。',
      de: 'Berechnet und visualisiert das Histogramm eines Bildes.',
      es: 'Calcula y visualiza el histograma de una imagen.',
      fr: 'Calcule et visualise l\'histogramme d\'une image.'
    },
    parameters: [
      {
        name: 'channel',
        type: 'select',
        defaultValue: 'gray',
        options: [
          { label: 'Grayscale', value: 'gray' },
          { label: 'Blue', value: 'blue' },
          { label: 'Green', value: 'green' },
          { label: 'Red', value: 'red' },
        ],
        description: {
          en: 'Channel to analyze',
          ko: '분석할 채널',
          zh: '要分析的通道',
          ja: '分析するチャネル',
          de: 'Zu analysierender Kanal',
          es: 'Canal a analizar',
          fr: 'Canal à analyser'
        },
      },
    ],
    syntax: 'calcHist(images, channels, mask, histSize, ranges)',
    documentation: 'https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html#ga4b2b5fd75503ff9e6844cc4dcdaed35d',
  },
  {
    id: 'CLAHE',
    name: {
      en: 'CLAHE (Adaptive Histogram Equalization)',
      ko: 'CLAHE (적응형 히스토그램 균등화)',
      zh: 'CLAHE (自适应直方图均衡化)',
      ja: 'CLAHE (適応的ヒストグラム均一化)',
      de: 'CLAHE (Adaptive Histogramm-Entzerrung)',
      es: 'CLAHE (Ecualización adaptativa del histograma)',
      fr: 'CLAHE (Égalisation adaptative de l\'histogramme)'
    },
    category: 'histogram',
    description: {
      en: 'Improves local contrast using Contrast Limited Adaptive Histogram Equalization.',
      ko: 'Contrast Limited Adaptive Histogram Equalization으로 지역적 대비를 개선합니다.',
      zh: '使用对比度受限自适应直方图均衡化改善局部对比度。',
      ja: 'コントラスト制限付き適応的ヒストグラム均一化を使用して局所コントラストを改善します。',
      de: 'Verbessert den lokalen Kontrast mittels Contrast Limited Adaptive Histogram Equalization.',
      es: 'Mejora el contraste local utilizando la ecualización adaptativa del histograma con límite de contraste.',
      fr: 'Améliore le contraste local en utilisant l\'égalisation adaptative de l\'histogramme avec limitation de contraste.'
    },
    parameters: [
      {
        name: 'clipLimit',
        type: 'slider',
        defaultValue: 2.0,
        min: 1.0,
        max: 10.0,
        step: 0.5,
        description: {
          en: 'Clipping limit',
          ko: '클립 제한값',
          zh: '裁剪限制',
          ja: 'クリッピング制限',
          de: 'Clipping-Grenze',
          es: 'Límite de recorte',
          fr: 'Limite de découpage'
        },
      },
      {
        name: 'tileGridSize',
        type: 'slider',
        defaultValue: 8,
        min: 2,
        max: 16,
        step: 2,
        description: {
          en: 'Size of the grid for histogram equalization',
          ko: '타일 그리드 크기',
          zh: '直方图均衡化的网格大小',
          ja: 'ヒストグラム均一化のためのグリッドサイズ',
          de: 'Größe des Gitters für die Histogramm-Entzerrung',
          es: 'Tamaño de la cuadrícula para la ecualización del histograma',
          fr: 'Taille de la grille pour l\'égalisation de l\'histogramme'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'createCLAHE(clipLimit, tileGridSize).apply(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html#gad689d2607b7b3889453804f414ab1018',
  },
  {
    id: 'calcBackProject',
    name: {
      en: 'Calculate Back Projection',
      ko: '히스토그램 역투영 (calcBackProject)',
      zh: '计算反向投影',
      ja: 'バックプロジェクション計算',
      de: 'Rückprojektion berechnen',
      es: 'Calcular retroproyección',
      fr: 'Calculer la rétroprojection'
    },
    category: 'histogram',
    description: {
      en: 'Calculates the back projection of a histogram.',
      ko: '히스토그램을 사용하여 이미지에서 특정 객체를 찾습니다.',
      zh: '计算直方图的反向投影。',
      ja: 'ヒストグラムのバックプロジェクションを計算します。',
      de: 'Berechnet die Rückprojektion eines Histogramms.',
      es: 'Calcula la retroproyección de un histograma.',
      fr: 'Calcule la rétroprojection d\'un histogramme.'
    },
    parameters: [
      {
        name: 'channel',
        type: 'select',
        defaultValue: 'hue',
        options: [
          { label: 'Hue (색상)', value: 'hue' },
          { label: 'Saturation (채도)', value: 'saturation' },
          { label: 'Value (명도)', value: 'value' },
        ],
        description: {
          en: 'Channel to analyze',
          ko: '분석할 채널',
          zh: '要分析的通道',
          ja: '分析するチャネル',
          de: 'Zu analysierender Kanal',
          es: 'Canal a analizar',
          fr: 'Canal à analyser'
        },
      },
      {
        name: 'histSize',
        type: 'slider',
        defaultValue: 180,
        min: 16,
        max: 256,
        step: 16,
        description: {
          en: 'Number of histogram bins',
          ko: '히스토그램 빈 개수',
          zh: '直方图 bin 数量',
          ja: 'ヒストグラムビン数',
          de: 'Anzahl der Histogramm-Bins',
          es: 'Número de bins del histograma',
          fr: 'Nombre de bins de l\'histogramme'
        },
      },
    ],
    syntax: 'calcBackProject(images, channels, hist, dst, ranges, scale)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga3a0af640716b456c3d14af8aee12e3ca',
  },
  {
    id: 'compareHist_CORREL',
    name: {
      en: 'Compare Hist - CORRELATION',
      ko: '히스토그램 비교 - 상관관계 (CORRELATION)',
      zh: '比较直方图 - 相关性',
      ja: 'ヒストグラム比較 - 相関',
      de: 'Histogramm vergleichen - Korrelation',
      es: 'Comparar Hist - CORRELACIÓN',
      fr: 'Comparer Hist - CORRÉLATION'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the correlation method (1.0 for perfect match).',
      ko: '두 히스토그램의 상관관계를 계산합니다 (1.0이 완전 일치).',
      zh: '使用相关性方法比较两个直方图（1.0 表示完美匹配）。',
      ja: '相関法を使用して2つのヒストグラムを比較します (1.0で完全一致)。',
      de: 'Vergleicht zwei Histogramme mittels der Korrelationsmethode (1.0 für perfekte Übereinstimmung).',
      es: 'Compara dos histogramas utilizando el método de correlación (1.0 para coincidencia perfecta).',
      fr: 'Compare deux histogrammes en utilisant la méthode de corrélation (1.0 pour une correspondance parfaite).'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio (left region)',
          ko: '이미지 분할 비율 (좌측 영역)',
          zh: '图像分割比例（左侧区域）',
          ja: '画像分割比率 (左領域)',
          de: 'Bildteilungsverhältnis (linker Bereich)',
          es: 'Relación de división de imagen (región izquierda)',
          fr: 'Rapport de division d\'image (région gauche)'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_CORREL)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_CHISQR',
    name: {
      en: 'Compare Hist - CHI-SQUARE',
      ko: '히스토그램 비교 - 카이제곱 (CHI-SQUARE)',
      zh: '比较直方图 - 卡方',
      ja: 'ヒストグラム比較 - カイ二乗',
      de: 'Histogramm vergleichen - Chi-Quadrat',
      es: 'Comparar Hist - CHI-CUADRADO',
      fr: 'Comparer Hist - CHI-CARRÉ'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the Chi-Square method (0 for perfect match).',
      ko: '두 히스토그램의 카이제곱 거리를 계산합니다 (0이 완전 일치).',
      zh: '使用卡方方法比较两个直方图（0 表示完美匹配）。',
      ja: 'カイ二乗法を使用して2つのヒストグラムを比較します (0で完全一致)。',
      de: 'Vergleicht zwei Histogramme mittels der Chi-Quadrat-Methode (0 für perfekte Übereinstimmung).',
      es: 'Compara dos histogramas utilizando el método de Chi-Cuadrado (0 para coincidencia perfecta).',
      fr: 'Compare deux histogrammes en utilisant la méthode du Chi-Carré (0 pour une correspondance parfaite).'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_CHISQR)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_INTERSECT',
    name: {
      en: 'Compare Hist - INTERSECTION',
      ko: '히스토그램 비교 - 교집합 (INTERSECTION)',
      zh: '比较直方图 - 交集',
      ja: 'ヒストグラム比較 - 交差',
      de: 'Histogramm vergleichen - Schnittmenge',
      es: 'Comparar Hist - INTERSECCIÓN',
      fr: 'Comparer Hist - INTERSECTION'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the intersection method (larger value for more similarity).',
      ko: '두 히스토그램의 교집합을 계산합니다 (값이 클수록 유사).',
      zh: '使用交集方法比较两个直方图（值越大越相似）。',
      ja: '交差法を使用して2つのヒストグラムを比較します (値が大きいほど類似)。',
      de: 'Vergleicht zwei Histogramme mittels der Schnittmengenmethode (größerer Wert für mehr Ähnlichkeit).',
      es: 'Compara dos histogramas utilizando el método de intersección (valor mayor para mayor similitud).',
      fr: 'Compare deux histogrammes en utilisant la méthode d\'intersection (valeur plus grande pour plus de similarité).'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_INTERSECT)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_BHATTACHARYYA',
    name: {
      en: 'Compare Hist - BHATTACHARYYA',
      ko: '히스토그램 비교 - 바타차야 (BHATTACHARYYA)',
      zh: '比较直方图 - Bhattacharyya',
      ja: 'ヒストグラム比較 - Bhattacharyya',
      de: 'Histogramm vergleichen - Bhattacharyya',
      es: 'Comparar Hist - BHATTACHARYYA',
      fr: 'Comparer Hist - BHATTACHARYYA'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the Bhattacharyya distance (0 for perfect match).',
      ko: '두 히스토그램의 바타차야 거리를 계산합니다 (0이 완전 일치).',
      zh: '使用 Bhattacharyya 距离比较两个直方图（0 表示完美匹配）。',
      ja: 'Bhattacharyya 距離を使用して2つのヒストグラムを比較します (0で完全一致)。',
      de: 'Vergleicht zwei Histogramme mittels der Bhattacharyya-Distanz (0 für perfekte Übereinstimmung).',
      es: 'Compara dos histogramas utilizando la distancia de Bhattacharyya (0 para coincidencia perfecta).',
      fr: 'Compare deux histogrammes en utilisant la distance de Bhattacharyya (0 pour une correspondance parfaite).'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_BHATTACHARYYA)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_HELLINGER',
    name: {
      en: 'Compare Hist - HELLINGER',
      ko: '히스토그램 비교 - 헬링거 (HELLINGER)',
      zh: '比较直方图 - Hellinger',
      ja: 'ヒストグラム比較 - Hellinger',
      de: 'Histogramm vergleichen - Hellinger',
      es: 'Comparar Hist - HELLINGER',
      fr: 'Comparer Hist - HELLINGER'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the Hellinger distance (same as BHATTACHARYYA).',
      ko: '두 히스토그램의 헬링거 거리를 계산합니다 (BHATTACHARYYA와 동일).',
      zh: '使用 Hellinger 距离比较两个直方图（与 BHATTACHARYYA 相同）。',
      ja: 'Hellinger 距離を使用して2つのヒストグラムを比較します (BHATTACHARYYA と同じ)。',
      de: 'Vergleicht zwei Histogramme mittels der Hellinger-Distanz (identisch mit BHATTACHARYYA).',
      es: 'Compara dos histogramas utilizando la distancia de Hellinger (igual que BHATTACHARYYA).',
      fr: 'Compare deux histogrammes en utilisant la distance de Hellinger (identique à BHATTACHARYYA).'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_HELLINGER)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_CHISQR_ALT',
    name: {
      en: 'Compare Hist - CHI-SQUARE ALT',
      ko: '히스토그램 비교 - 대체 카이제곱 (CHI-SQUARE ALT)',
      zh: '比较直方图 - 替代卡方',
      ja: 'ヒストグラム比較 - 代替カイ二乗',
      de: 'Histogramm vergleichen - Chi-Quadrat Alt',
      es: 'Comparar Hist - CHI-CUADRADO ALT',
      fr: 'Comparer Hist - CHI-CARRÉ ALT'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the alternative Chi-Square method.',
      ko: '두 히스토그램의 대체 카이제곱 거리를 계산합니다.',
      zh: '使用替代卡方方法比较两个直方图。',
      ja: '代替カイ二乗法を使用して2つのヒストグラムを比較します。',
      de: 'Vergleicht zwei Histogramme mittels der alternativen Chi-Quadrat-Methode.',
      es: 'Compara dos histogramas utilizando el método alternativo de Chi-Cuadrado.',
      fr: 'Compare deux histogrammes en utilisant la méthode alternative du Chi-Carré.'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_CHISQR_ALT)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },
  {
    id: 'compareHist_KL_DIV',
    name: {
      en: 'Compare Hist - KL DIVERGENCE',
      ko: '히스토그램 비교 - 쿨백-라이블러 (KL DIVERGENCE)',
      zh: '比较直方图 - KL 散度',
      ja: 'ヒストグラム比較 - KL ダイバージェンス',
      de: 'Histogramm vergleichen - KL-Divergenz',
      es: 'Comparar Hist - DIVERGENCIA KL',
      fr: 'Comparer Hist - DIVERGENCE KL'
    },
    category: 'histogram',
    description: {
      en: 'Compares two histograms using the Kullback-Leibler divergence.',
      ko: '두 히스토그램의 쿨백-라이블러 발산을 계산합니다.',
      zh: '使用 Kullback-Leibler 散度比较两个直方图。',
      ja: 'Kullback-Leibler ダイバージェンスを使用して2つのヒストグラムを比較します。',
      de: 'Vergleicht zwei Histogramme mittels der Kullback-Leibler-Divergenz.',
      es: 'Compara dos histogramas utilizando la divergencia de Kullback-Leibler.',
      fr: 'Compare deux histogrammes en utilisant la divergence de Kullback-Leibler.'
    },
    parameters: [
      {
        name: 'splitRatio',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Image split ratio',
          ko: '이미지 분할 비율',
          zh: '图像分割比例',
          ja: '画像分割比率',
          de: 'Bildteilungsverhältnis',
          es: 'Relación de división de imagen',
          fr: 'Rapport de division d\'image'
        },
      },
    ],
    syntax: 'compareHist(H1, H2, HISTCMP_KL_DIV)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/dc7/group__imgproc__hist.html#ga994f53817d621e2e4228fc646342d386',
  },

  // 그리기
  {
    id: 'rectangle',
    name: {
      en: 'Draw Rectangle',
      ko: '사각형 그리기 (rectangle)',
      zh: '绘制矩形',
      ja: '長方形を描画',
      de: 'Rechteck zeichnen',
      es: 'Dibujar rectángulo',
      fr: 'Dessiner un rectangle'
    },
    category: 'drawing',
    description: {
      en: 'Draws a simple, thick, or filled rectangle.',
      ko: '이미지에 직선 또는 채워진 사각형을 그립니다.',
      zh: '绘制简单的、粗的或填充的矩形。',
      ja: '単純な、太い、または塗りつぶされた長方形を描画します。',
      de: 'Zeichnet ein einfaches, dickes oder ausgefülltes Rechteck.',
      es: 'Dibuja un rectángulo simple, grueso o relleno.',
      fr: 'Dessine un rectangle simple, épais ou rempli.'
    },
    parameters: [
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: -1,
        max: 20,
        step: 1,
        description: {
          en: 'Line thickness (-1 to fill)',
          ko: '선 두께 (-1은 채우기)',
          zh: '线厚度 (-1 表示填充)',
          ja: '線の太さ (-1 は塗りつぶし)',
          de: 'Linienstärke (-1 zum Ausfüllen)',
          es: 'Grosor de línea (-1 para rellenar)',
          fr: 'Épaisseur de ligne (-1 pour remplir)'
        },
      },
      {
        name: 'size',
        type: 'slider',
        defaultValue: 100,
        min: 20,
        max: 300,
        step: 10,
        description: {
          en: 'Rectangle size',
          ko: '사각형 크기 (Size)',
          zh: '矩形大小',
          ja: '長方形のサイズ',
          de: 'Rechteckgröße',
          es: 'Tamaño del rectángulo',
          fr: 'Taille du rectangle'
        },
      },
    ],
    syntax: 'rectangle(img, pt1, pt2, color, thickness)',
    documentation: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#ga07d2f74ca0103262325946028b24da1c',
  },
  {
    id: 'circle',
    name: {
      en: 'Draw Circle',
      ko: '원 그리기 (circle)',
      zh: '绘制圆',
      ja: '円を描画',
      de: 'Kreis zeichnen',
      es: 'Dibujar círculo',
      fr: 'Dessiner un cercle'
    },
    category: 'drawing',
    description: {
      en: 'Draws a simple or filled circle.',
      ko: '이미지에 직선 또는 채워진 원을 그립니다.',
      zh: '绘制简单的或填充的圆。',
      ja: '単純な、または塗りつぶされた円を描画します。',
      de: 'Zeichnet einen einfachen oder ausgefüllten Kreis.',
      es: 'Dibuja un círculo simple o relleno.',
      fr: 'Dessine un cercle simple ou rempli.'
    },
    parameters: [
      {
        name: 'radius',
        type: 'slider',
        defaultValue: 50,
        min: 10,
        max: 200,
        step: 5,
        description: {
          en: 'Circle radius',
          ko: '원 반지름 (Radius)',
          zh: '圆半径',
          ja: '円の半径',
          de: 'Kreisradius',
          es: 'Radio del círculo',
          fr: 'Rayon du cercle'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: -1,
        max: 20,
        step: 1,
        description: {
          en: 'Line thickness (-1 to fill)',
          ko: '선 두께 (-1은 채우기)',
          zh: '线厚度 (-1 表示填充)',
          ja: '線の太さ (-1 は塗りつぶし)',
          de: 'Linienstärke (-1 zum Ausfüllen)',
          es: 'Grosor de línea (-1 para rellenar)',
          fr: 'Épaisseur de ligne (-1 pour remplir)'
        },
      },
    ],
    syntax: 'circle(img, center, radius, color, thickness)',
    documentation: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#gaf10604b069374903dbd0f0488cb43670',
  },
  {
    id: 'line',
    name: {
      en: 'Draw Line',
      ko: '직선 그리기 (line)',
      zh: '绘制直线',
      ja: '直線を描画',
      de: 'Linie zeichnen',
      es: 'Dibujar línea',
      fr: 'Dessiner une ligne'
    },
    category: 'drawing',
    description: {
      en: 'Draws a line segment connecting two points.',
      ko: '두 지점을 연결하는 직선을 그립니다.',
      zh: '绘制连接两点的线段。',
      ja: '2 点を結ぶ線分を描画します。',
      de: 'Zeichnet ein Liniensegment, das zwei Punkte verbindet.',
      es: 'Dibuja un segmento de línea que conecta dos puntos.',
      fr: 'Dessine un segment de ligne reliant deux points.'
    },
    parameters: [
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 20,
        step: 1,
        description: {
          en: 'Line thickness',
          ko: '선 두께 (Thickness)',
          zh: '线厚度',
          ja: '線の太さ',
          de: 'Linienstärke',
          es: 'Grosor de línea',
          fr: 'Épaisseur de ligne'
        },
      },
    ],
    syntax: 'line(img, pt1, pt2, color, thickness)',
    documentation: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#ga7078a9fae8c7e7d13d24dac2520ae4a2',
  },
  {
    id: 'putText',
    name: {
      en: 'Put Text',
      ko: '텍스트 추가 (putText)',
      zh: '绘制文本',
      ja: 'テキストを描画',
      de: 'Text hinzufügen',
      es: 'Insertar texto',
      fr: 'Insérer du texte'
    },
    category: 'drawing',
    description: {
      en: 'Draws a text string on the image.',
      ko: '이미지에 지정된 텍스트를 그립니다.',
      zh: '在图像上绘制文本字符串。',
      ja: '画像上にテキスト文字列を描画します。',
      de: 'Zeichnet eine Zeichenfolge auf das Bild.',
      es: 'Dibuja una cadena de texto en la imagen.',
      fr: 'Insère une chaîne de texte sur l\'image.'
    },
    parameters: [
      {
        name: 'fontSize',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.5,
        max: 3.0,
        step: 0.1,
        description: {
          en: 'Font scale factor',
          ko: '폰트 크기 비율 (Font Scale)',
          zh: '字体缩放因子',
          ja: 'フォントスケール因子',
          de: 'Schrift-Skalierungsfaktor',
          es: 'Factor de escala de fuente',
          fr: 'Facteur d\'échelle de police'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Text thickness',
          ko: '글자 선 두께 (Thickness)',
          zh: '文本厚度',
          ja: 'テキストの太さ',
          de: 'Textstärke',
          es: 'Grosor del texto',
          fr: 'Épaisseur del texto'
        },
      },
    ],
    syntax: 'putText(img, text, org, fontFace, fontScale, color, thickness)',
    documentation: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#ga5126f47f883d730f633d74f07456c576',
  },
  {
    id: 'ellipse',
    name: {
      en: 'Draw Ellipse',
      ko: '타원 그리기 (ellipse)',
      zh: '绘制椭圆',
      ja: '楕円を描画',
      de: 'Ellipse zeichnen',
      es: 'Dibujar elipse',
      fr: 'Dessiner une ellipse'
    },
    category: 'drawing',
    description: {
      en: 'Draws a simple or filled elliptic arc or an entire ellipse.',
      ko: '이미지에 직선 또는 채워진 타원을 그립니다.',
      zh: '绘制简单的或填充的椭圆弧或整个椭圆。',
      ja: '単純な、または塗りつぶされた楕円弧、または楕円全体を描画します。',
      de: 'Zeichnet einen einfachen oder ausgefüllten elliptischen Bogen oder eine ganze Ellipse.',
      es: 'Dibuja un arco elíptico simple o relleno o una elipse completa.',
      fr: 'Dessine un arc elliptique simple ou rempli ou une ellipse entière.'
    },
    parameters: [
      {
        name: 'width',
        type: 'slider',
        defaultValue: 100,
        min: 20,
        max: 200,
        step: 10,
        description: {
          en: 'Half-width of the ellipse',
          ko: '가로 반지름 (Width)',
          zh: '椭圆的半宽',
          ja: '楕円の幅の半分',
          de: 'Halbe Breite der Ellipse',
          es: 'Semiancho de la elipse',
          fr: 'Demi-largeur de l\'ellipse'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 60,
        min: 20,
        max: 200,
        step: 10,
        description: {
          en: 'Half-height of the ellipse',
          ko: '세로 반지름 (Height)',
          zh: '椭圆的半高',
          ja: '楕円の高さの半分',
          de: 'Halbe Höhe der Ellipse',
          es: 'Semialto de la elipse',
          fr: 'Demi-hauteur de l\'ellipse'
        },
      },
      {
        name: 'angle',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 360,
        step: 15,
        description: {
          en: 'Rotation angle (degrees)',
          ko: '회전 각도 (Angle)',
          zh: '旋转角度 (度)',
          ja: '回転角 (度)',
          de: 'Rotationswinkel (Grad)',
          es: 'Ángulo de rotación (grados)',
          fr: 'Angle de rotation (degrés)'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: -1,
        max: 10,
        step: 1,
        description: {
          en: 'Line thickness (-1 to fill)',
          ko: '선 두께 (-1은 채우기)',
          zh: '线厚度 (-1 表示填充)',
          ja: '線の太さ (-1 は塗りつぶし)',
          de: 'Linienstärke (-1 zum Ausfüllen)',
          es: 'Grosor de línea (-1 para rellenar)',
          fr: 'Épaisseur de ligne (-1 pour remplir)'
        },
      },
    ],
    syntax: 'ellipse(img, center, axes, angle, startAngle, endAngle, color, thickness)',
    documentation: 'https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html#ga28b239733516447c223c6cd823528892',
  },
  {
    id: 'arrowedLine',
    name: {
      en: 'Draw Arrowed Line',
      ko: '화살표 그리기 (arrowedLine)',
      zh: '绘制箭头直线',
      ja: '矢印を描画',
      de: 'Pfeillinie zeichnen',
      es: 'Dibujar línea con flecha',
      fr: 'Dessiner une ligne fléchée'
    },
    category: 'drawing',
    description: {
      en: 'Draws an arrowed line segment connecting two points.',
      ko: '두 지점을 연결하는 화살표가 있는 직선을 그립니다.',
      zh: '绘制连接两点的箭头线段。',
      ja: '2 点を結ぶ矢印付きの線分を描画します。',
      de: 'Zeichnet ein Pfeilliniensegment, das zwei Punkte verbindet.',
      es: 'Dibuja un segmento de línea con flecha que conecta dos puntos.',
      fr: 'Dessine un segment de ligne fléché reliant deux points.'
    },
    parameters: [
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 20,
        step: 1,
        description: {
          en: 'Line thickness',
          ko: '선 두께 (Thickness)',
          zh: '线厚度',
          ja: '線の太さ',
          de: 'Linienstärke',
          es: 'Grosor de línea',
          fr: 'Épaisseur de ligne'
        },
      },
      {
        name: 'tipLength',
        type: 'slider',
        defaultValue: 0.1,
        min: 0.1,
        max: 0.5,
        step: 0.05,
        description: {
          en: 'Arrow tip length factor',
          ko: '화살표 촉 길이 비율 (Tip Length)',
          zh: '箭头尖端长度因子',
          ja: '矢印の先端の長さの因子',
          de: 'Pfeilspitzen-Längenfaktor',
          es: 'Factor de longitud de la punta de la flecha',
          fr: 'Facteur de longueur de la pointe de la flèche'
        },
      },
    ],
    syntax: 'arrowedLine(img, pt1, pt2, color, thickness, line_type, shift, tipLength)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga0a165a3ca093fd488ac709fdf10c05b2',
  },
  {
    id: 'drawMarker',
    name: {
      en: 'Draw Marker',
      ko: '마커 그리기 (drawMarker)',
      zh: '绘制标记',
      ja: 'マーカーを描画',
      de: 'Marker zeichnen',
      es: 'Dibujar marcador',
      fr: 'Dessiner un marqueur'
    },
    category: 'drawing',
    description: {
      en: 'Draws a marker on a predefined position in an image.',
      ko: '이미지의 특정 위치에 마커를 그립니다.',
      zh: '在图像的预定义位置绘制标记。',
      ja: '画像内のあらかじめ定義された位置にマーカーを描画します。',
      de: 'Zeichnet einen Marker an einer vordefinierten Position in einem Bild.',
      es: 'Dibuja un marcador en una posición predefinida en una imagen.',
      fr: 'Dessine un marqueur à une position prédéfinie dans une image.'
    },
    parameters: [
      {
        name: 'markerType',
        type: 'select',
        defaultValue: 'MARKER_CROSS',
        options: [
          { label: { en: 'Cross (+)', ko: '십자가 (+)', zh: '十字 (+)', ja: '十字 (+)', de: 'Kreuz (+)', es: 'Cruz (+)', fr: 'Croix (+)' }, value: 'MARKER_CROSS' },
          { label: { en: 'Tilted Cross (x)', ko: 'X자 (x)', zh: '倾斜十字 (x)', ja: '斜め十字 (x)', de: 'Gekipptes Kreuz (x)', es: 'Cruz inclinada (x)', fr: 'Croix inclinée (x)' }, value: 'MARKER_TILTED_CROSS' },
          { label: { en: 'Star (*)', ko: '별 (*)', zh: '星形 (*)', ja: '星 (*)', de: 'Stern (*)', es: 'Estrella (*)', fr: 'Étoile (*)' }, value: 'MARKER_STAR' },
          { label: { en: 'Diamond (u)', ko: '다이아몬드 (u)', zh: '菱形 (u)', ja: '菱形 (u)', de: 'Diamant (u)', es: 'Diamante (u)', fr: 'Diamant (u)' }, value: 'MARKER_DIAMOND' },
          { label: { en: 'Square (s)', ko: '정사각형 (s)', zh: '正方形 (s)', ja: '正方形 (s)', de: 'Quadrat (s)', es: 'Cuadrado (s)', fr: 'Carré (s)' }, value: 'MARKER_SQUARE' },
          { label: { en: 'Triangle Up (^)', ko: '상향 삼각형 (^)', zh: '向上三角形 (^)', ja: '上向き三角形 (^)', de: 'Dreieck oben (^)', es: 'Triángulo arriba (^)', fr: 'Triangle haut (^)' }, value: 'MARKER_TRIANGLE_UP' },
          { label: { en: 'Triangle Down (v)', ko: '하향 삼각형 (v)', zh: '向下三角形 (v)', ja: '下向き三角形 (v)', de: 'Dreieck unten (v)', es: 'Triángulo abajo (v)', fr: 'Triangle bas (v)' }, value: 'MARKER_TRIANGLE_DOWN' },
        ],
        description: {
          en: 'Type of the marker',
          ko: '마커 종류 (Marker Type)',
          zh: '标记类型',
          ja: 'マーカーの種類',
          de: 'Marker-Typ',
          es: 'Tipo de marcador',
          fr: 'Type de marqueur'
        },
      },
      {
        name: 'markerSize',
        type: 'slider',
        defaultValue: 20,
        min: 5,
        max: 100,
        step: 5,
        description: {
          en: 'Marker size',
          ko: '마커 크기 (Marker Size)',
          zh: '标记大小',
          ja: 'マーカーのサイズ',
          de: 'Marker-Größe',
          es: 'Tamaño del marcador',
          fr: 'Taille du marqueur'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Marker line thickness',
          ko: '마커 선 두께 (Thickness)',
          zh: '标记线厚度',
          ja: 'マーカーの線の太さ',
          de: 'Marker-Linienstärke',
          es: 'Grosor de línea del marcador',
          fr: 'Épaisseur de ligne del marcador'
        },
      },
    ],
    syntax: 'drawMarker(img, position, color, markerType, markerSize, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga482fa7b0f578fcdd8a174904592a6250',
  },
  {
    id: 'polylines',
    name: {
      en: 'Draw Polylines',
      ko: '다각선 그리기 (polylines)',
      zh: '绘制多边线',
      ja: '多角形を描画',
      de: 'Polylinien zeichnen',
      es: 'Dibujar polilíneas',
      fr: 'Dessiner des polylignes'
    },
    category: 'drawing',
    description: {
      en: 'Draws several polygonal curves.',
      ko: '여러 점을 연결한 다각형 곡선을 그립니다.',
      zh: '绘制多条多边形曲线。',
      ja: '複数の多角形の曲線を描画します。',
      de: 'Zeichnet mehrere polygonale Kurven.',
      es: 'Dibuja varias curvas poligonales.',
      fr: 'Dessine plusieurs courbes polygonales.'
    },
    parameters: [
      {
        name: 'numPoints',
        type: 'slider',
        defaultValue: 5,
        min: 3,
        max: 10,
        step: 1,
        description: {
          en: 'Number of points',
          ko: '점 개수 (Points)',
          zh: '点数',
          ja: '点の数',
          de: 'Anzahl der Punkte',
          es: 'Número de puntos',
          fr: 'Nombre de points'
        },
      },
      {
        name: 'isClosed',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'Open', ko: '열린 선', zh: '开放', ja: '開いた線', de: 'Offen', es: 'Abierta', fr: 'Ouverte' }, value: false },
          { label: { en: 'Closed', ko: '닫힌 선', zh: '闭合', ja: '閉じだ線', de: 'Geschlossen', es: 'Cerrada', fr: 'Fermée' }, value: true },
        ],
        description: {
          en: 'Closed or open polyline',
          ko: '폐곡선 여부 (Closed)',
          zh: '闭合或开放的多边线',
          ja: '閉じた多角形か開いた多角形か',
          de: 'Geschlossene oder offene Polylinie',
          es: 'Polilínea cerrada o abierta',
          fr: 'Polyligne fermée ou ouverte'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Line thickness',
          ko: '선 두께 (Thickness)',
          zh: '线宽',
          ja: '線の太さ',
          de: 'Linienstärke',
          es: 'Grosor de línea',
          fr: 'Épaisseur de ligne'
        },
      },
    ],
    syntax: 'polylines(img, pts, isClosed, color, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga1ea2856d9ba6cfa62506292503ed7ae6',
  },
  {
    id: 'fillPoly',
    name: {
      en: 'Fill Polygon',
      ko: '다각형 채우기 (fillPoly)',
      zh: '填充多边形',
      ja: '多角形を塗りつぶし',
      de: 'Polygon füllen',
      es: 'Rellenar polígono',
      fr: 'Remplir un polygone'
    },
    category: 'drawing',
    description: {
      en: 'Fills the area bounded by several polygonal contours.',
      ko: '이미지의 다각형 영역을 지정된 색으로 채웁니다.',
      zh: '填充由多个多边形轮廓界定的区域。',
      ja: 'いくつかの多角形の輪郭で囲まれた領域を塗りつぶします。',
      de: 'Füllt den von mehreren polygonalen Konturen begrenzten Bereich aus.',
      es: 'Rellena el área delimitada por varios contornos poligonales.',
      fr: 'Remplit la zone délimitée par plusieurs contours polygonaux.'
    },
    parameters: [
      {
        name: 'numPoints',
        type: 'slider',
        defaultValue: 6,
        min: 3,
        max: 12,
        step: 1,
        description: {
          en: 'Number of points',
          ko: '점 개수 (Points)',
          zh: '点数',
          ja: '点の数',
          de: 'Anzahl der Punkte',
          es: 'Número de puntos',
          fr: 'Nombre de points'
        },
      },
    ],
    syntax: 'fillPoly(img, pts, color)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga311160e71d376c70a53e4622153a059c',
  },
  {
    id: 'fillConvexPoly',
    name: {
      en: 'Fill Convex Polygon',
      ko: '볼록 다각형 채우기 (fillConvexPoly)',
      zh: '填充凸多边形',
      ja: '凸多角形を塗りつぶし',
      de: 'Konvexes Polygon füllen',
      es: 'Rellenar polígono convexo',
      fr: 'Remplir un polygone convexe'
    },
    category: 'drawing',
    description: {
      en: 'Fills a convex polygon (faster than fillPoly).',
      ko: '볼록 다각형 영역을 색으로 채웁니다 (더 빠름).',
      zh: '填充一个凸多边形（比 fillPoly 快）。',
      ja: '凸多角形を塗りつぶします (fillPoly より高速)。',
      de: 'Füllt ein konvexes Polygon (schneller als fillPoly).',
      es: 'Rellena un polígono convexo (más rápido que fillPoly).',
      fr: 'Remplit un polygone convexe (plus rapide que fillPoly).'
    },
    parameters: [
      {
        name: 'numPoints',
        type: 'slider',
        defaultValue: 5,
        min: 3,
        max: 8,
        step: 1,
        description: {
          en: 'Number of points',
          ko: '점 개수',
          zh: '点数',
          ja: '点の数',
          de: 'Anzahl der Punkte',
          es: 'Número de puntos',
          fr: 'Nombre de points'
        },
      },
      {
        name: 'opacity',
        type: 'slider',
        defaultValue: 0.7,
        min: 0.1,
        max: 1.0,
        step: 0.1,
        description: {
          en: 'Opacity',
          ko: '불투명도',
          zh: '不透明度',
          ja: '不透明度',
          de: 'Deckkraft',
          es: 'Opacidad',
          fr: 'Opacité'
        },
      },
    ],
    syntax: 'fillConvexPoly(img, points, color)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga84f83f39db7e7e0e0c5b4b8b8c4f7b8f',
  },
  {
    id: 'drawContours',
    name: {
      en: 'Draw Contours',
      ko: '윤곽선 그리기 (drawContours)',
      zh: '绘制轮廓',
      ja: '輪郭を描画',
      de: 'Konturen zeichnen',
      es: 'Dibujar contornos',
      fr: 'Dessiner des contours'
    },
    category: 'drawing',
    description: {
      en: 'Draws contours outlines or fills them.',
      ko: '검출된 윤곽선을 그립니다.',
      zh: '绘制轮廓线或填充它们。',
      ja: '輪郭線を描画するか、塗りつぶします。',
      de: 'Zeichnet Konturumrisse oder füllt sie aus.',
      es: 'Dibuja los contornos o los rellena.',
      fr: 'Dessine les contours ou les remplit.'
    },
    parameters: [
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: -1,
        max: 10,
        step: 1,
        description: {
          en: 'Line thickness (-1: fill)',
          ko: '선 두께 (-1: 채우기)',
          zh: '线厚度 (-1: 填充)',
          ja: '線の太さ (-1: 塗りつぶし)',
          de: 'Linienstärke (-1: Füllung)',
          es: 'Grosor de línea (-1: rellenar)',
          fr: 'Épaisseur de ligne (-1: remplir)'
        },
      },
      {
        name: 'mode',
        type: 'select',
        defaultValue: 'RETR_EXTERNAL',
        options: [
          { label: 'External (외곽만)', value: 'RETR_EXTERNAL' },
          { label: 'List (모든 윤곽선)', value: 'RETR_LIST' },
          { label: 'Tree (계층 구조)', value: 'RETR_TREE' },
        ],
        description: {
          en: 'Contour retrieval mode',
          ko: '윤곽선 검색 모드',
          zh: '轮廓检索模式',
          ja: '輪郭検索モード',
          de: 'Kontur-Abrufmodus',
          es: 'Modo de recuperación de contorno',
          fr: 'Mode de récupération des contours'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'drawContours(image, contours, contourIdx, color, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga746c0625f1781f1ffc9056259103edbc',
  },
  {
    id: 'ellipse2',
    name: {
      en: 'Draw Elliptic Arc',
      ko: '타원 호 그리기 (ellipse)',
      zh: '绘制椭圆弧',
      ja: '楕円弧を描画',
      de: 'Elliptischen Bogen zeichnen',
      es: 'Dibujar arco elíptico',
      fr: 'Dessiner un arc elliptique'
    },
    category: 'drawing',
    description: {
      en: 'Draws an elliptic arc or fills an ellipse sector. Start/end angles can be specified.',
      ko: '타원 호를 그리거나 타원 섹터를 채웁니다. 시작/끝 각도를 지정할 수 있습니다.',
      zh: '绘制椭圆弧或填充椭圆扇区。可以指定起始/结束角度。',
      ja: '楕円弧を描画するか、楕円セクターを塗りつぶします。開始/終了角度を指定できます。',
      de: 'Zeichnet einen elliptischen Bogen oder füllt einen Ellipsensektor. Start-/Endwinkel können angegeben werden.',
      es: 'Dibuja un arco elíptico o rellena un sector elíptico. Se pueden especificar los ángulos de inicio/fin.',
      fr: 'Dessine un arc elliptique ou remplit un secteur d\'ellipse. Les angles de début/fin peuvent être spécifiés.'
    },
    parameters: [
      {
        name: 'axisWidth',
        type: 'slider',
        defaultValue: 100,
        min: 20,
        max: 200,
        step: 10,
        description: {
          en: 'Half-width of the ellipse',
          ko: '가로 반지름',
          zh: '椭圆的半宽',
          ja: '楕円の幅の半分',
          de: 'Halbe Breite der Ellipse',
          es: 'Semiancho de la elipse',
          fr: 'Demi-largeur de l\'ellipse'
        },
      },
      {
        name: 'axisHeight',
        type: 'slider',
        defaultValue: 60,
        min: 20,
        max: 200,
        step: 10,
        description: {
          en: 'Half-height of the ellipse',
          ko: '세로 반지름',
          zh: '椭圆的半高',
          ja: '楕円の高さの半分',
          de: 'Halbe Höhe der Ellipse',
          es: 'Semialto de la elipse',
          fr: 'Demi-hauteur de l\'ellipse'
        },
      },
      {
        name: 'angle',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 360,
        step: 15,
        description: {
          en: 'Rotation angle (degrees)',
          ko: '타원 회전 각도',
          zh: '旋转角度 (度)',
          ja: '回転角 (度)',
          de: 'Rotationswinkel (Grad)',
          es: 'Ángulo de rotación (grados)',
          fr: 'Angle de rotation (degrés)'
        },
      },
      {
        name: 'startAngle',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 360,
        step: 15,
        description: {
          en: 'Start angle of the elliptic arc (degrees)',
          ko: '호 시작 각도',
          zh: '椭圆弧的起始角度 (度)',
          ja: '楕円弧の開始角度 (度)',
          de: 'Startwinkel des elliptischen Bogens (Grad)',
          es: 'Ángulo de inicio del arco elíptico (grados)',
          fr: 'Angle de début de l\'arc elliptique (degrés)'
        },
      },
      {
        name: 'endAngle',
        type: 'slider',
        defaultValue: 270,
        min: 0,
        max: 360,
        step: 15,
        description: {
          en: 'End angle of the elliptic arc (degrees)',
          ko: '호 끝 각도',
          zh: '椭圆弧的结束角度 (度)',
          ja: '楕円弧の終了角度 (度)',
          de: 'Endwinkel des elliptischen Bogens (Grad)',
          es: 'Ángulo final del arco elíptico (grados)',
          fr: 'Angle de fin de l\'arc elliptique (degrés)'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: -1,
        max: 20,
        step: 1,
        description: {
          en: 'Line thickness (-1: fill)',
          ko: '선 두께 (-1: 채우기)',
          zh: '线厚度 (-1: 填充)',
          ja: '線の太さ (-1: 塗りつぶし)',
          de: 'Linienstärke (-1: Füllung)',
          es: 'Grosor de línea (-1: rellenar)',
          fr: 'Épaisseur de ligne (-1: remplir)'
        },
      },
    ],
    syntax: 'ellipse(img, center, axes, angle, startAngle, endAngle, color, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga28b2267d35786f5f890ca167236cbc69',
  },
  {
    id: 'clipLine',
    name: {
      en: 'Clip Line',
      ko: '선 자르기 (clipLine)',
      zh: '裁剪直线',
      ja: '線をクリップ',
      de: 'Linie beschneiden',
      es: 'Recortar línea',
      fr: 'Couper une ligne'
    },
    category: 'drawing',
    description: {
      en: 'Clips the line against a rectangle.',
      ko: '사각형 영역 내에서 선을 자릅니다.',
      zh: '根据矩形裁剪直线。',
      ja: '矩形に対して線をクリップします。',
      de: 'Beschneidet die Linie an einem Rechteck.',
      es: 'Recorta la línea contra un rectángulo.',
      fr: 'Coupe la ligne par rapport à un rectangle.'
    },
    parameters: [
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Line thickness',
          ko: '선 두께',
          zh: '线厚度',
          ja: '線の太さ',
          de: 'Linienstärke',
          es: 'Grosor de línea',
          fr: 'Épaisseur de ligne'
        },
      },
    ],
    syntax: 'clipLine(imgRect, pt1, pt2)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga8e3e6e2f64e8a4fd6b4d1e5dce8f6e6a',
  },
  {
    id: 'getFontScaleFromHeight',
    name: {
      en: 'Get Font Scale from Height',
      ko: '높이 기반 폰트 스케일 계산',
      zh: '从高度获取字体缩放',
      ja: '高さからフォントスケールを取得',
      de: 'Schriftgröße aus Höhe berechnen',
      es: 'Obtener escala de fuente de la altura',
      fr: 'Obtenir l\'échelle de police à partir de la hauteur'
    },
    category: 'drawing',
    description: {
      en: 'Calculates the font scale to achieve a specified pixel height.',
      ko: '지정된 픽셀 높이를 달성하기 위한 폰트 스케일을 계산합니다.',
      zh: '计算达到指定像素高度的字体缩放比例。',
      ja: '指定されたピクセルの高さを達成するためのフォントスケールを計算します。',
      de: 'Berechnet die Schriftgröße, um eine bestimmte Pixelhöhe zu erreichen.',
      es: 'Calcula la escala de la fuente para lograr una altura de píxel especificada.',
      fr: 'Calcule l\'échelle de la police pour obtenir une hauteur de pixel spécifiée.'
    },
    parameters: [
      {
        name: 'fontFace',
        type: 'select',
        defaultValue: 'FONT_HERSHEY_SIMPLEX',
        options: [
          { label: 'Simplex', value: 'FONT_HERSHEY_SIMPLEX' },
          { label: 'Plain', value: 'FONT_HERSHEY_PLAIN' },
          { label: 'Duplex', value: 'FONT_HERSHEY_DUPLEX' },
          { label: 'Complex', value: 'FONT_HERSHEY_COMPLEX' },
          { label: 'Triplex', value: 'FONT_HERSHEY_TRIPLEX' },
          { label: 'Script Simplex', value: 'FONT_HERSHEY_SCRIPT_SIMPLEX' },
          { label: 'Script Complex', value: 'FONT_HERSHEY_SCRIPT_COMPLEX' },
        ],
        description: {
          en: 'Font type',
          ko: '폰트 타입',
          zh: '字体类型',
          ja: 'フォントタイプ',
          de: 'Schrifttyp',
          es: 'Tipo de fuente',
          fr: 'Type de police'
        },
      },
      {
        name: 'pixelHeight',
        type: 'slider',
        defaultValue: 30,
        min: 10,
        max: 100,
        step: 5,
        description: {
          en: 'Target pixel height',
          ko: '목표 픽셀 높이',
          zh: '目标像素高度',
          ja: '目標ピクセル高',
          de: 'Ziel-Pixelhöhe',
          es: 'Altura de píxel de destino',
          fr: 'Hauteur de pixel cible'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Font thickness',
          ko: '폰트 두께',
          zh: '字体厚度',
          ja: 'フォントの太さ',
          de: 'Schriftdicke',
          es: 'Grosor de fuente',
          fr: 'Épaisseur de police'
        },
      },
    ],
    syntax: 'getFontScaleFromHeight(fontFace, pixelHeight, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#gaac514bf855e971d6248386f68c784775',
  },
  {
    id: 'getTextSize',
    name: 'Get Text Size (텍스트 크기 계산)',
    category: 'drawing',
    description: '텍스트 문자열의 폭과 높이를 계산하고, 텍스트를 둘러싼 박스를 그립니다.',
    parameters: [
      {
        name: 'text',
        type: 'select',
        defaultValue: 'OpenCV Test',
        options: [
          { label: 'OpenCV Test', value: 'OpenCV Test' },
          { label: 'Hello World', value: 'Hello World' },
          { label: 'Computer Vision', value: 'Computer Vision' },
          { label: '한글 테스트', value: '한글 테스트' },
        ],
        description: '표시할 텍스트',
      },
      {
        name: 'fontFace',
        type: 'select',
        defaultValue: 'FONT_HERSHEY_SIMPLEX',
        options: [
          { label: 'Simplex', value: 'FONT_HERSHEY_SIMPLEX' },
          { label: 'Plain', value: 'FONT_HERSHEY_PLAIN' },
          { label: 'Duplex', value: 'FONT_HERSHEY_DUPLEX' },
          { label: 'Complex', value: 'FONT_HERSHEY_COMPLEX' },
          { label: 'Script Simplex', value: 'FONT_HERSHEY_SCRIPT_SIMPLEX' },
        ],
        description: '폰트 타입',
      },
      {
        name: 'fontScale',
        type: 'slider',
        defaultValue: 1.5,
        min: 0.5,
        max: 3.0,
        step: 0.1,
        description: '폰트 스케일',
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: '선 두께',
      },
    ],
    syntax: 'getTextSize(text, fontFace, fontScale, thickness)',
    documentation: 'https://docs.opencv.org/4.12.0/d6/d6e/group__imgproc__draw.html#ga3d2abfcb995fd2db908c8288199dba82',
  },

  // 산술 연산
  {
    id: 'add',
    name: {
      en: 'Addition',
      ko: '더하기 (합)',
      zh: '加法',
      ja: '加算',
      de: 'Addition',
      es: 'Suma',
      fr: 'Addition'
    },
    category: 'arithmetic',
    description: {
      en: 'Adds two images or a value to an image (increases brightness).',
      ko: '두 이미지를 더하거나 이미지에 값을 더합니다 (밝기 증가).',
      zh: '将两张图像或一个值相加（增加亮度）。',
      ja: '2つの画像または画像に値を加算します (明るさが増加します)。',
      de: 'Addiert zwei Bilder oder einen Wert zu einem Bild (erhöht die Helligkeit).',
      es: 'Suma dos imágenes o un valor a una imagen (aumenta el brillo).',
      fr: 'Ajoute deux images ou une valeur à une image (augmente la luminosité).'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'value',
        type: 'slider',
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 5,
        description: {
          en: 'Value to add',
          ko: '더할 값',
          zh: '加值',
          ja: '加算する値',
          de: 'Zu addierender Wert',
          es: 'Valor a sumar',
          fr: 'Valeur à ajouter'
        },
      },
    ],
    syntax: 'add(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga10ac1bfb180e2cfda1701d06c24fdbd6',
  },
  {
    id: 'subtract',
    name: {
      en: 'Subtraction',
      ko: '빼기 (차)',
      zh: '减法',
      ja: '減算',
      de: 'Subtraktion',
      es: 'Resta',
      fr: 'Soustraction'
    },
    category: 'arithmetic',
    description: {
      en: 'Subtracts two images or a value from an image (decreases brightness).',
      ko: '두 이미지를 빼거나 이미지에서 값을 뺍니다 (밝기 감소).',
      zh: '将两张图像或一个值相减（降低亮度）。',
      ja: '2つの画像または画像から値を減算します (明るさが減少します)。',
      de: 'Subtrahiert zwei Bilder oder einen Wert von einem Bild (verringert die Helligkeit).',
      es: 'Resta dos imágenes o un valor a una imagen (disminuye el brillo).',
      fr: 'Soustrait deux images ou une valeur d\'une image (diminue la luminosité).'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'value',
        type: 'slider',
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 5,
        description: {
          en: 'Value to subtract',
          ko: '뺄 값',
          zh: '减值',
          ja: '減算する値',
          de: 'Zu subtrahierender Wert',
          es: 'Valor a restar',
          fr: 'Valeur à soustraire'
        },
      },
    ],
    syntax: 'subtract(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gaa0f00d98b4b5edeaeb7b8333b2de353b',
  },
  {
    id: 'multiply',
    name: {
      en: 'Multiplication',
      ko: '곱하기 (적)',
      zh: '乘法',
      ja: '乗算',
      de: 'Multiplikation',
      es: 'Multiplicación',
      fr: 'Multiplication'
    },
    category: 'arithmetic',
    description: {
      en: 'Multiplies image pixel values by a scalar value.',
      ko: '이미지 픽셀 값에 스칼라 값을 곱합니다.',
      zh: '将图像像素值乘以一个标量。',
      ja: '画像のピクセル値にスカラー値を乗算します。',
      de: 'Multipliziert Bildpixelwerte mit einem Skalarwert.',
      es: 'Multiplica los valores de píxel de la imagen por un valor escalar.',
      fr: 'Multiplie les valeurs des pixels de l\'image par une valeur scalaire.'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'scale',
        type: 'slider',
        defaultValue: 1.5,
        min: 0.1,
        max: 3.0,
        step: 0.1,
        description: {
          en: 'Scale factor',
          ko: '배율 (곱할 값)',
          zh: '缩放因子',
          ja: 'スケール因子',
          de: 'Skalierungsfaktor',
          es: 'Factor de escala',
          fr: 'Facteur d\'échelle'
        },
      },
    ],
    syntax: 'multiply(src1, src2, dst, scale)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga979d898a58d7f61c53003e162e7ad89f',
  },
  {
    id: 'addWeighted',
    name: {
      en: 'Weighted Add (Blending)',
      ko: '가중치 합 (블렌딩)',
      zh: '加权和 (融合)',
      ja: '加重加算 (ブレンディング)',
      de: 'Gewichtete Addition (Mischen)',
      es: 'Adición ponderada (Mezcla)',
      fr: 'Addition pondérée (Mélange)'
    },
    category: 'arithmetic',
    description: {
      en: 'Calculates the weighted sum of two images (blending effect).',
      ko: '두 이미지의 가중치 합을 계산합니다 (블렌딩 효과).',
      zh: '计算两张图像的加权和（融合效果）。',
      ja: '2つの画像の加重和を計算します (ブレンディング効果)。',
      de: 'Berechnet die gewichtete Summe zweier Bilder (Mischeffekt).',
      es: 'Calcula la suma ponderada de dos imágenes (efecto de mezcla).',
      fr: 'Calcule la somme pondérée de deux images (effet de mélange).'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.0,
        max: 1.0,
        step: 0.1,
        description: {
          en: 'Alpha (Weight 1)',
          ko: '알파 (첫 번째 이미지 가중치)',
          zh: 'Alpha (权重 1)',
          ja: 'アルファ (重み 1)',
          de: 'Alpha (Gewichtung 1)',
          es: 'Alfa (Peso 1)',
          fr: 'Alpha (Poids 1)'
        },
      },
    ],
    syntax: 'addWeighted(src1, alpha, src2, beta, gamma, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gafafb2513349db3bcff51f54ee5592a19',
  },
  {
    id: 'bitwise_and',
    name: {
      en: 'Bitwise AND',
      ko: '비트 AND',
      zh: '位与',
      ja: 'ビット単位の AND',
      de: 'Bitweises AND',
      es: 'AND bit a bit',
      fr: 'AND bit à bit'
    },
    category: 'arithmetic',
    description: {
      en: 'Performs bitwise AND operation between two images.',
      ko: '두 이미지의 비트 AND 연산을 수행합니다.',
      zh: '在两张图像之间执行位与运算。',
      ja: '2つの画像間でビット単位の AND 演算を実行します。',
      de: 'Führt eine bitweise AND-Operation zwischen zwei Bildern durch.',
      es: 'Realiza la operación AND bit a bit entre dos imágenes.',
      fr: 'Effectue une opération AND bit à bit entre deux images.'
    },
    inputCount: 2,
    parameters: [],
    syntax: 'bitwise_and(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga60b4d04b251ba5eb1392c34425497e14',
  },
  {
    id: 'bitwise_or',
    name: {
      en: 'Bitwise OR',
      ko: '비트 OR',
      zh: '位或',
      ja: 'ビット単位の OR',
      de: 'Bitweises OR',
      es: 'OR bit a bit',
      fr: 'OR bit à bit'
    },
    category: 'arithmetic',
    description: {
      en: 'Performs bitwise OR operation between two images.',
      ko: '두 이미지의 비트 OR 연산을 수행합니다.',
      zh: '在两张图像之间执行位或运算。',
      ja: '2つの画像間でビット単位の OR 演算を実行します。',
      de: 'Führt eine bitweise OR-Operation zwischen zwei Bildern durch.',
      es: 'Realiza la operación OR bit a bit entre dos imágenes.',
      fr: 'Effectue une opération OR bit à bit entre deux images.'
    },
    inputCount: 2,
    parameters: [],
    syntax: 'bitwise_or(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gab85523db362a4e26ff0c703793a719b4',
  },
  {
    id: 'bitwise_xor',
    name: {
      en: 'Bitwise XOR',
      ko: '비트 XOR',
      zh: '位异或',
      ja: 'ビット単位の XOR',
      de: 'Bitweises XOR',
      es: 'XOR bit a bit',
      fr: 'XOR bit à bit'
    },
    category: 'arithmetic',
    description: {
      en: 'Performs bitwise XOR operation between two images.',
      ko: '두 이미지의 비트 XOR 연산을 수행합니다.',
      zh: '在两张图像之间执行位异或运算。',
      ja: '2つの画像間でビット単位の XOR 演算を実行します。',
      de: 'Führt eine bitweise XOR-Operation zwischen zwei Bildern durch.',
      es: 'Realiza la operación XOR bit a bit entre dos imágenes.',
      fr: 'Effectue une opération XOR bit à bit entre deux images.'
    },
    inputCount: 2,
    parameters: [],
    syntax: 'bitwise_xor(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga84b2d8188ce506593dcc3f8cd00e8e2c',
  },

  // 행렬 연산
  {
    id: 'transpose',
    name: {
      en: 'Transpose',
      ko: '치환 (Transpose)',
      zh: '转置',
      ja: '転置',
      de: 'Transponieren',
      es: 'Transponer',
      fr: 'Transposer'
    },
    category: 'matrix',
    description: {
      en: 'Transposes a matrix (flips it over its diagonal).',
      ko: '행렬을 전치합니다 (행과 열을 바꿈).',
      zh: '转置矩阵（将其沿主对角线翻转）。',
      ja: '行列を転置します (行と列を入れ替えます)。',
      de: 'Transponiert eine Matrix (vertauscht Zeilen und Spalten).',
      es: 'Transpone una matriz (la voltea sobre su diagonal).',
      fr: 'Transpose une matrice (la retourne sur sa diagonale).'
    },
    parameters: [],
    syntax: 'transpose(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga46630ed6c0ea6254a35f447289bd7404',
  },
  {
    id: 'repeat',
    name: {
      en: 'Repeat',
      ko: '반복 (Repeat)',
      zh: '重复',
      ja: '反復',
      de: 'Wiederholen',
      es: 'Repetir',
      fr: 'Répéter'
    },
    category: 'matrix',
    description: {
      en: 'Repeats an image as a tile.',
      ko: '이미지를 바둑판 모양으로 반복하여 배치합니다.',
      zh: '将图像作为平铺重复。',
      ja: '画像をタイルとして繰り返します。',
      de: 'Wiederholt ein Bild als Kachel.',
      es: 'Repite una imagen como un mosaico.',
      fr: 'Répète une image sous forme de tuile.'
    },
    parameters: [
      {
        name: 'ny',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 4,
        step: 1,
        description: {
          en: 'Vertical repeat count',
          ko: '세로 반복 횟수',
          zh: '垂直重复次数',
          ja: '垂直方向の繰り返し回数',
          de: 'Vertikale Wiederholungsanzahl',
          es: 'Número de repeticiones verticales',
          fr: 'Nombre de répétitions verticales'
        },
      },
      {
        name: 'nx',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 4,
        step: 1,
        description: {
          en: 'Horizontal repeat count',
          ko: '가로 반복 횟수',
          zh: '水平重复次数',
          ja: '水平方向の繰り返し回数',
          de: 'Horizontale Wiederholungsanzahl',
          es: 'Número de repeticiones horizontales',
          fr: 'Nombre de répétitions horizontales'
        },
      },
    ],
    syntax: 'cv2.repeat(src, ny, nx, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga496ba74e2e63cf7a7a02b7fddec00f06',
  },
  {
    id: 'hconcat',
    name: {
      en: 'Horizontal Concatenate',
      ko: '수평 연결 (Horizontal Concatenate)',
      zh: '水平拼接',
      ja: '水平結合',
      de: 'Horizontales Verkettung',
      es: 'Concatenar horizontalmente',
      fr: 'Concaténation horizontale'
    },
    category: 'matrix',
    description: {
      en: 'Concatenates images horizontally.',
      ko: '여러 이미지를 가로 방향으로 나란히 연결합니다.',
      zh: '水平拼接图像。',
      ja: '画像を水平方向に結合します。',
      de: 'Verkettet Bilder horizontal.',
      es: 'Concatena imágenes horizontalmente.',
      fr: 'Concatène les images horizontalement.'
    },
    parameters: [
      {
        name: 'count',
        type: 'slider',
        defaultValue: 2,
        min: 2,
        max: 4,
        step: 1,
        description: {
          en: 'Number of concatenations',
          ko: '연결할 이미지 수',
          zh: '拼接次数',
          ja: '結合回数',
          de: 'Anzahl der Verkettungen',
          es: 'Número de concatenaciones',
          fr: 'Nombre de concaténations'
        },
      },
    ],
    syntax: 'cv2.hconcat(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gaab5cecc0c84eea5d2f41f53e7f333e4b',
  },
  {
    id: 'vconcat',
    name: {
      en: 'Vertical Concatenate',
      ko: '수직 연결 (Vertical Concatenate)',
      zh: '垂直拼接',
      ja: '垂直結合',
      de: 'Vertikale Verkettung',
      es: 'Concatenar verticalmente',
      fr: 'Concaténation verticale'
    },
    category: 'matrix',
    description: {
      en: 'Concatenates images vertically.',
      ko: '여러 이미지를 세로 방향으로 나란히 연결합니다.',
      zh: '垂直拼接图像。',
      ja: '画像を垂直方向に結合します Correntement.',
      de: 'Verkettet Bilder vertikal.',
      es: 'Concatena imágenes verticalmente.',
      fr: 'Concatène les images verticalement.'
    },
    parameters: [
      {
        name: 'count',
        type: 'slider',
        defaultValue: 2,
        min: 2,
        max: 4,
        step: 1,
        description: {
          en: 'Number of concatenations',
          ko: '연결할 이미지 수',
          zh: '拼接次数',
          ja: '結合回数',
          de: 'Anzahl der Verkettungen',
          es: 'Número de concatenaciones',
          fr: 'Nombre de concaténations'
        },
      },
    ],
    syntax: 'cv2.vconcat(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga7c1f2efc34f3ab3f70d6b0d29d4e5ca9',
  },
  {
    id: 'convertScaleAbs',
    name: {
      en: 'Convert Scale Abs',
      ko: '스케일 변환 및 절대값 (Convert Scale Abs)',
      zh: '比例变换并取绝对值',
      ja: 'スケール変換と絶対値',
      de: 'Skalierung konvertieren und Absolutwert',
      es: 'Convertir escala y valor absoluto',
      fr: 'Convertir l\'échelle et la valeur absolue'
    },
    category: 'matrix',
    description: {
      en: 'Scales, calculates absolute values, and converts the result to 8-bit.',
      ko: '행렬의 각 원소에 특정 계수를 곱하고 오프셋을 더한 후, 결과값의 절댓값을 취하여 8비트 부호 없는 정수형으로 변환합니다.',
      zh: '缩放、计算绝对值并将结果转换为 8 位。',
      ja: 'スケーリングし、絶対値を計算して、結果を 8 ビットに変換します。',
      de: 'Skaliert, berechnet Absolutwerte und konvertiert das Ergebnis in 8-Bit.',
      es: 'Escala, calcula valores absolutos y convierte el resultado a 8 bits.',
      fr: 'Met à l\'échelle, calcule les valeurs absolues et convertit le résultat en 8 bits.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.1,
        max: 3.0,
        step: 0.1,
        description: {
          en: 'Scale factor',
          ko: '스케일 계수 (계수 곱)',
          zh: '缩放因子',
          ja: 'スケール要因',
          de: 'Skalierungsfaktor',
          es: 'Factor de escala',
          fr: 'Facteur d\'échelle'
        },
      },
      {
        name: 'beta',
        type: 'slider',
        defaultValue: 0,
        min: -100,
        max: 100,
        step: 10,
        description: {
          en: 'Offset value',
          ko: '오프셋 값 (더하기)',
          zh: '偏移值',
          ja: 'オフセット値',
          de: 'Offset-Wert',
          es: 'Valor de desplazamiento',
          fr: 'Valeur de décalage'
        },
      },
    ],
    syntax: 'cv2.convertScaleAbs(src, dst, alpha, beta)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga3460e9c9f37b563ab9dd550c4d8c4e7d',
  },
  {
    id: 'absdiff',
    name: {
      en: 'Absolute Difference',
      ko: '절대 차분 (Absolute Difference)',
      zh: '绝对差值',
      ja: '絶対差分',
      de: 'Absolute Differenz',
      es: 'Diferencia absoluta',
      fr: 'Différence absolue'
    },
    category: 'matrix',
    description: {
      en: 'Calculates the per-element absolute difference between two arrays.',
      ko: '두 이미지 또는 행렬의 요소별 절대 차이를 계산합니다. 배경 차분이나 움직임 검출의 기초로 사용됩니다.',
      zh: '计算两个数组之间的逐元素绝对差值。',
      ja: '2つの配列間の要素ごとの絶対差を計算します。',
      de: 'Berechnet die elementweise absolute Differenz zwischen zwei Arrays.',
      es: 'Calcula la diferencia absoluta por elemento entre dos matrices.',
      fr: 'Calcule la différence absolue par élément entre deux tableaux.'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'blurSize',
        type: 'slider',
        defaultValue: 15,
        min: 5,
        max: 31,
        step: 2,
        description: {
          en: 'Blur kernel size (for pre-processing)',
          ko: '블러 커널 크기 (전처리용)',
          zh: '模糊核大小',
          ja: 'ブラーカーネルサイズ',
          de: 'Blur-Kernel-Größe',
          es: 'Tamaño del núcleo de desenfoque',
          fr: 'Taille du noyau de flou'
        },
      },
    ],
    syntax: 'cv2.absdiff(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga6fef31bc8c4071cbc114a758a2b79c14',
  },
  {
    id: 'magnitude',
    name: {
      en: 'Magnitude',
      ko: '크기 (Magnitude)',
      zh: '幅度',
      ja: 'マグニチュード',
      de: 'Größe',
      es: 'Magnitud',
      fr: 'Magnitude'
    },
    category: 'matrix',
    description: {
      en: 'Calculates the magnitude of 2D vectors.',
      ko: '2차원 벡터들의 크기를 계산합니다. 주로 소벨 필터의 x, y 미분값을 조합하여 엣지의 강도를 구할 때 사용됩니다.',
      zh: '计算 2D 向量的幅度。',
      ja: '2D ベクトルの大きさを計算します。',
      de: 'Berechnet die Größe von 2D-Vektoren.',
      es: 'Calcula la magnitud de los vectores 2D.',
      fr: 'Calcule la magnitude des vecteurs 2D.'
    },
    parameters: [],
    syntax: 'cv2.magnitude(x, y, magnitude)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga6d3b097586bca4409873d64a90fe64c3',
  },
  {
    id: 'phase',
    name: {
      en: 'Phase',
      ko: '위상 (Phase)',
      zh: '相位',
      ja: '位相',
      de: 'Phase',
      es: 'Fase',
      fr: 'Phase'
    },
    category: 'matrix',
    description: {
      en: 'Calculates the rotation angle of 2D vectors.',
      ko: '2차원 벡터들의 회전 각도(위상)를 계산합니다.',
      zh: '计算 2D 向量的旋转角度。',
      ja: '2D ベクトルの回転角を計算します。',
      de: 'Berechnet den Rotationswinkel von 2D-Vektoren.',
      es: 'Calcula el ángulo de rotación de los vectores 2D.',
      fr: 'Calcule l\'angle de rotation des vecteurs 2D.'
    },
    parameters: [],
    syntax: 'cv2.phase(x, y, angle, angleInDegrees)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga49f0be7e00f7c7689fa0e7e66f9b8ef9',
  },

  // 통계 연산
  {
    id: 'mean',
    name: {
      en: 'Mean',
      ko: '평균 (Mean)',
      zh: '平均值',
      ja: '平均',
      de: 'Mittelwert',
      es: 'Media',
      fr: 'Moyenne'
    },
    category: 'statistical',
    description: {
      en: 'Calculates the mean value of image pixel intensities.',
      ko: '이미지 픽셀 값의 평균을 계산합니다.',
      zh: '计算图像像素亮度的平均值。',
      ja: '画像のピクセル強度の平均値を計算します。',
      de: 'Berechnet den Mittelwert der Bildpixelintensitäten.',
      es: 'Calcula el valor medio de las intensidades de los píxeles de la imagen.',
      fr: 'Calcule la valeur moyenne des intensités des pixels de l\'image.'
    },
    parameters: [
      {
        name: 'useMask',
        type: 'select',
        defaultValue: false,
        options: [
          { label: { en: 'Not used', ko: '사용 안함', zh: '不使用', ja: '使用しない', de: 'Nicht verwendet', es: 'No usado', fr: 'Pas utilisé' }, value: false },
          { label: { en: 'Use src2 as mask', ko: 'src2를 마스크로 사용', zh: '将 src2 用作掩码', ja: 'src2 をマスクとして使用', de: 'src2 als Maske verwenden', es: 'Usar src2 como máscara', fr: 'Utiliser src2 comme masque' }, value: true },
        ],
        description: {
          en: 'Whether to use a mask',
          ko: '마스크 사용 여부',
          zh: '是否使用掩码',
          ja: 'マスクを使用するかどうか',
          de: 'Ob eine Maske verwendet werden soll',
          es: 'Si usar una máscara',
          fr: 'Si utiliser un masque'
        },
      }
    ],
    syntax: 'mean(src, mask)',
    customSrcLabel: 'src: 입력 이미지',
    hideDst: true,
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga191389f8a0e58180bb13a727782cd461',
  },
  {
    id: 'meanStdDev',
    name: {
      en: 'Mean & Standard Deviation',
      ko: '평균 및 표준편차 (Mean & StdDev)',
      zh: '平均值和标准差',
      ja: '平均と標準偏差',
      de: 'Mittelwert & Standardabweichung',
      es: 'Media y desviación estándar',
      fr: 'Moyenne et écart-type'
    },
    category: 'statistical',
    description: {
      en: 'Calculates the mean and standard deviation of all pixels.',
      ko: '이미지 픽셀의 평균과 표준편차를 계산합니다.',
      zh: '计算所有像素的平均值和标准差。',
      ja: 'すべてのピクセルの平均と標準偏差を計算します。',
      de: 'Berechnet den Mittelwert und die Standardabweichung aller Pixel.',
      es: 'Calcula la media y la desviación estándar de todos los píxeles.',
      fr: 'Calcule la moyenne et l\'écart-type de tous les pixels.'
    },
    parameters: [],
    syntax: 'meanStdDev(src, mean, stddev, mask)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga846c858f4004d59493d7c6a4354b301d',
  },
  {
    id: 'minMaxLoc',
    name: {
      en: 'Min Max Location',
      ko: '최소/최대값 위치 (MinMaxLoc)',
      zh: '最小值/最大值位置',
      ja: '最小・最大値の位置',
      de: 'Min-Max-Position',
      es: 'Ubicación mínima máxima',
      fr: 'Localisation min-max'
    },
    category: 'statistical',
    description: {
      en: 'Finds the global minimum and maximum pixel values and their locations.',
      ko: '이미지부에서 최소값과 최대값이 발생하는 위치를 찾아 표시합니다.',
      zh: '查找全局最小值和最大值像素及其位置。',
      ja: 'グローバルな最小・最大ピクセル値とその位置を検索します。',
      de: 'Findet die globalen minimalen und maximalen Pixelwerte und deren Positionen.',
      es: 'Encuentra los valores de píxel mínimo y máximo globales y sus ubicaciones.',
      fr: 'Trouve les valeurs de pixel minimales et maximales globales et leurs emplacements.'
    },
    parameters: [],
    requiresGrayscale: true,
    syntax: 'minMaxLoc(src, mask)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gab473bf2eb6d14ff97e89b355dac20707',
  },
  {
    id: 'countNonZero',
    name: {
      en: 'Count Non-Zero',
      ko: '0이 아닌 픽셀 수 (CountNonZero)',
      zh: '计算非零像素',
      ja: '非ゼロのカウント',
      de: 'Nicht-Null-Werte zählen',
      es: 'Contar no ceros',
      fr: 'Compter les non-nuls'
    },
    category: 'statistical',
    description: {
      en: 'Counts the number of non-zero pixels in a single-channel image.',
      ko: '0이 아닌 값을 가진 픽셀의 개수를 계산합니다.',
      zh: '计算单通道图像中非零像素的数量。',
      ja: 'シングルチャネル画像内の非ゼロピクセルの数をカウントします。',
      de: 'Zählt die Anzahl der Nicht-Null-Pixel in einem Einkanalbild.',
      es: 'Cuenta el número de píxeles no nulos en una imagen de un solo canal.',
      fr: 'Compte le nombre de pixels non nuls dans une image à canal unique.'
    },
    parameters: [
      {
        name: 'threshold',
        type: 'slider',
        defaultValue: 127,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Threshold value',
          ko: '임계값',
          zh: '阈值',
          ja: 'しきい値',
          de: 'Schwellenwert',
          es: 'Valor de umbral',
          fr: 'Valeur de seuil'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'countNonZero(src)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gaa4b89393263bb4d604e0fe5986723914',
  },
  {
    id: 'reduce',
    name: {
      en: 'Reduce (Dimension Reduction)',
      ko: '차원 축소 (Reduce)',
      zh: '规约 (降维)',
      ja: '縮退',
      de: 'Reduzieren',
      es: 'Reducir',
      fr: 'Réduire'
    },
    category: 'statistical',
    description: {
      en: 'Reduces a matrix to a vector by applying a specific operation.',
      ko: '행렬을 특정 연산을 적용하여 한 차원(행 또는 열)으로 축소합니다.',
      zh: '通过应用特定操作将矩阵规约为向量。',
      ja: '特定の操作を適用して、行列をベクトルに縮退させます。',
      de: 'Reduziert eine Matrix durch Anwendung einer bestimmten Operation auf einen Vektor.',
      es: 'Reduce una matriz a un vector aplicando una operación específica.',
      fr: 'Réduit une matrice en un vecteur en appliquant une opération spécifique.'
    },
    parameters: [
      {
        name: 'dim',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: { en: 'Rows (Vertical)', ko: '행 방향 (세로)', zh: '行方向 (垂直)', ja: '行方向 (垂直)', de: 'Zeilen (vertikal)', es: 'Filas (Vertical)', fr: 'Lignes (Vertical)' }, value: 0 },
          { label: { en: 'Cols (Horizontal)', ko: '열 방향 (가로)', zh: '列方向 (水平)', ja: '列方向 (水平)', de: 'Spalten (horizontal)', es: 'Columnas (Horizontal)', fr: 'Colonnes (Horizontal)' }, value: 1 },
        ],
        description: {
          en: 'Dimension to reduce',
          ko: '축소 방향',
          zh: '规约维度',
          ja: '縮退させる次元',
          de: 'Zu reduzierende Dimension',
          es: 'Dimensión a reducir',
          fr: 'Dimension à réduire'
        },
      },
      {
        name: 'rtype',
        type: 'select',
        defaultValue: 'REDUCE_AVG',
        options: [
          { label: { en: 'Average', ko: '평균 (AVG)', zh: '平均', ja: '平均', de: 'Durchschnitt', es: 'Promedio', fr: 'Moyenne' }, value: 'REDUCE_AVG' },
          { label: { en: 'Sum', ko: '합 (SUM)', zh: '求和', ja: '合計', de: 'Summe', es: 'Suma', fr: 'Somme' }, value: 'REDUCE_SUM' },
          { label: { en: 'Max', ko: '최대 (MAX)', zh: '最大值', ja: '最大', de: 'Maximum', es: 'Máximo', fr: 'Maximum' }, value: 'REDUCE_MAX' },
          { label: { en: 'Min', ko: '최소 (MIN)', zh: '最小值', ja: '最小', de: 'Minimum', es: 'Mínimo', fr: 'Minimum' }, value: 'REDUCE_MIN' },
        ],
        description: {
          en: 'Reduction operation type',
          ko: '축소 방법',
          zh: '规约操作类型',
          ja: '縮退操作の種類',
          de: 'Reduktionsoperationstyp',
          es: 'Tipo de operación de reducción',
          fr: 'Type d\'opération de réduction'
        },
      },
    ],
    syntax: 'reduce(src, dst, dim, rtype, dtype)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga4b78072a303f29d9031d56e5638da78e',
  },
  {
    id: 'sum',
    name: {
      en: 'Sum',
      ko: '합계 (Sum)',
      zh: '求和',
      ja: '合計',
      de: 'Summe',
      es: 'Suma',
      fr: 'Somme'
    },
    category: 'statistical',
    description: {
      en: 'Calculates the sum of array elements.',
      ko: '이미지의 모든 픽셀 값을 합산합니다.',
      zh: '计算数组元素的和。',
      ja: '配列要素の合計を計算します。',
      de: 'Berechnet die Summe der Array-Elemente.',
      es: 'Calcula la suma de los elementos de la matriz.',
      fr: 'Calcule la somme des éléments du tableau.'
    },
    parameters: [],
    syntax: 'sum(src)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga716e10a55dd8d85e4c24a8a0b6c3f5f7',
  },
  {
    id: 'norm',
    name: {
      en: 'Norm',
      ko: '노름 (Norm)',
      zh: '范数',
      ja: 'ノルム',
      de: 'Norm',
      es: 'Norma',
      fr: 'Norme'
    },
    category: 'statistical',
    description: {
      en: 'Calculates an absolute array norm or a relative difference norm.',
      ko: '이미지 배열의 노름(크기 또는 거리)을 계산합니다.',
      zh: '计算绝对数组范数或相对差异范数。',
      ja: '絶対配列ノルム、または相対差ノルムを計算します。',
      de: 'Berechnet eine absolute Array-Norm oder eine relative Differenznorm.',
      es: 'Calcula una norma de matriz absoluta o una norma de diferencia relativa.',
      fr: 'Calcule une norme de tableau absolue ou une norme de différence relative.'
    },
    parameters: [
      {
        name: 'normType',
        type: 'select',
        defaultValue: 'NORM_L2',
        options: [
          { label: { en: 'L1 (Manhattan)', ko: 'L1 (절댓값 합)', zh: 'L1 (曼哈顿)', ja: 'L1 (マンハッタン)', de: 'L1 (Manhattan)', es: 'L1 (Manhattan)', fr: 'L1 (Manhattan)' }, value: 'NORM_L1' },
          { label: { en: 'L2 (Euclidean)', ko: 'L2 (유클리드)', zh: 'L2 (欧几里德)', ja: 'L2 (ユークリッド)', de: 'L2 (Euklidisch)', es: 'L2 (Euclidiana)', fr: 'L2 (Euclidienne)' }, value: 'NORM_L2' },
          { label: { en: 'INF (Maximum)', ko: 'INF (최대값)', zh: 'INF (最大值)', ja: 'INF (最大)', de: 'INF (Maximum)', es: 'INF (Máximo)', fr: 'INF (Maximum)' }, value: 'NORM_INF' },
        ],
        description: {
          en: 'Norm type',
          ko: '노름 타입',
          zh: '范数类型',
          ja: 'ノルムの種類',
          de: 'Normtyp',
          es: 'Tipo de norma',
          fr: 'Type de norme'
        },
      },
    ],
    syntax: 'norm(src1, normType, mask)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga7c331fb8dd951707e184ef4e3f21dd33',
  },

  // 비교 연산
  {
    id: 'compare',
    name: {
      en: 'Compare',
      ko: '비교 (Compare)',
      zh: '比较',
      ja: '比較',
      de: 'Vergleichen',
      es: 'Comparar',
      fr: 'Comparer'
    },
    category: 'comparison',
    description: {
      en: 'Performs per-element comparison of two arrays or an array and a scalar.',
      ko: '두 이미지 또는 이미지와 임계값을 요소별로 비교합니다.',
      zh: '对两个数组或一个数组和一个标量进行逐元素比较。',
      ja: '2 つの配列、または配列とスカラーの要素ごとの比較を実行します。',
      de: 'Führt einen elementweisen Vergleich von zwei Arrays oder einem Array und einem Skalar durch.',
      es: 'Realiza la comparación por elementos de dos matrices o una matriz y un escalar.',
      fr: 'Effectue une comparaison élément par élément de deux tableaux ou d\'un tableau et d\'un scalaire.'
    },
    parameters: [
      {
        name: 'cmpop',
        type: 'select',
        defaultValue: 'CMP_GT',
        options: [
          { label: { en: 'Greater Than (>)', ko: '큼 (>)', zh: '大于 (>)', ja: 'より大きい (>)', de: 'Größer als (>)', es: 'Mayor que (>)', fr: 'Plus grand que (>)' }, value: 'CMP_GT' },
          { label: { en: 'Greater or Equal (>=)', ko: '크거나 같음 (>=)', zh: '大于等于 (>=)', ja: '以上 (>=)', de: 'Größer oder gleich (>=)', es: 'Mayor o igual (>=)', fr: 'Supérieur ou égal (>=)' }, value: 'CMP_GE' },
          { label: { en: 'Equal (==)', ko: '같음 (==)', zh: '等于 (==)', ja: '等しい (==)', de: 'Gleich (==)', es: 'Igual (==)', fr: 'Égal (==)' }, value: 'CMP_EQ' },
          { label: { en: 'Less or Equal (<=)', ko: '작거나 같음 (<=)', zh: '작거나 같음 (<=)', ja: '以下 (<=)', de: 'Kleiner oder gleich (<=)', es: 'Menor o igual (<=)', fr: 'Inférieur ou égal (<=)' }, value: 'CMP_LE' },
          { label: { en: 'Less Than (<)', ko: '작음 (<)', zh: '小于 (<)', ja: 'より小さい (<)', de: 'Kleiner als (<)', es: 'Menor que (<)', fr: 'Plus petit que (<)' }, value: 'CMP_LT' },
          { label: { en: 'Not Equal (!=)', ko: '다름 (!=)', zh: '不等于 (!=)', ja: '等しくない (!=)', de: 'Ungleich (!=)', es: 'No igual (!=)', fr: 'Différent (!=)' }, value: 'CMP_NE' },
        ],
        description: {
          en: 'Comparison operator',
          ko: '비교 연산자',
          zh: '比较运算符',
          ja: '比較演算子',
          de: 'Vergleichsoperator',
          es: 'Operador de comparación',
          fr: 'Opérateur de comparaison'
        },
      },
      {
        name: 'value',
        type: 'slider',
        defaultValue: 127,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Comparison value',
          ko: '비교 값',
          zh: '比较值',
          ja: '比較する値',
          de: 'Vergleichswert',
          es: 'Valor de comparación',
          fr: 'Valeur de comparaison'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'compare(src1, src2, dst, cmpop)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga303cfb72acf8cbb36d884650c09a3a97',
  },
  {
    id: 'min',
    name: {
      en: 'Minimum',
      ko: '최소값 (Min)',
      zh: '最小值',
      ja: '最小',
      de: 'Minimum',
      es: 'Mínimo',
      fr: 'Minimum'
    },
    category: 'comparison',
    description: {
      en: 'Calculates per-element minimum of two arrays.',
      ko: '두 이미지의 각 픽셀에서 최소값을 선택하여 새로운 이미지를 생성합니다.',
      zh: '计算两个数组的逐元素最小值。',
      ja: '2 つの配列の要素ごとの最小値を計算します。',
      de: 'Berechnet das elementweise Minimum zweier Arrays.',
      es: 'Calcula el mínimo por elementos de dos matrices.',
      fr: 'Calcule le minimum élément par élément de deux tableaux.'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'blurSize',
        type: 'slider',
        defaultValue: 15,
        min: 5,
        max: 31,
        step: 2,
        description: {
          en: 'Blur size',
          ko: '블러 크기',
          zh: '模糊大小',
          ja: 'ぼかしサイズ',
          de: 'Unschärfegröße',
          es: 'Tamaño de desenfoque',
          fr: 'Taille du flou'
        },
      },
    ],
    syntax: 'min(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga9af368f182ee76d0463d0d8d5330b764',
  },
  {
    id: 'max',
    name: {
      en: 'Maximum',
      ko: '최대값 (Max)',
      zh: '最大值',
      ja: '最大',
      de: 'Maximum',
      es: 'Máximo',
      fr: 'Maximum'
    },
    category: 'comparison',
    description: {
      en: 'Calculates per-element maximum of two arrays.',
      ko: '두 이미지의 각 픽셀에서 최대값을 선택하여 새로운 이미지를 생성합니다.',
      zh: '计算两个数组的逐元素最大值。',
      ja: '2 つの配列の要素ごとの最大値を計算します。',
      de: 'Berechnet das elementweise Maximum zweier Arrays.',
      es: 'Calcula el máximo por elementos de dos matrices.',
      fr: 'Calcule le maximum élément par élément de deux tableaux.'
    },
    inputCount: 2,
    parameters: [
      {
        name: 'blurSize',
        type: 'slider',
        defaultValue: 15,
        min: 5,
        max: 31,
        step: 2,
        description: {
          en: 'Blur size',
          ko: '블러 크기',
          zh: '模糊大小',
          ja: 'ぼかしサイズ',
          de: 'Unschärfegröße',
          es: 'Tamaño de desenfoque',
          fr: 'Taille du flou'
        },
      },
    ],
    syntax: 'max(src1, src2, dst)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#gacc40fa15eac0fb83f8ca70b7cc0b588d',
  },
  {
    id: 'checkRange',
    name: {
      en: 'Check Range',
      ko: '범위 검사 (CheckRange)',
      zh: '检查范围',
      ja: '範囲内かチェック',
      de: 'Bereich prüfen',
      es: 'Comprobar rango',
      fr: 'Vérifier la plage'
    },
    category: 'comparison',
    description: {
      en: 'Checks if every array element is within a specified range.',
      ko: '이미지 배열의 모든 픽셀 값이 특정 범위 내에 있는지 확인합니다.',
      zh: '检查每个数组元素是否在指定范围内。',
      ja: 'すべての配列要素が指定された範囲内にあるかどうかをチェックします。',
      de: 'Prüft, ob jedes Array-Element innerhalb eines bestimmten Bereichs liegt.',
      es: 'Comprueba si todos los elementos de la matriz están dentro de un rango especificado.',
      fr: 'Vérifie si chaque élément du tableau se trouve dans une plage spécifiée.'
    },
    parameters: [
      {
        name: 'minVal',
        type: 'slider',
        defaultValue: 50,
        min: 0,
        max: 200,
        step: 10,
        description: {
          en: 'Minimum value',
          ko: '최소값',
          zh: '最小值',
          ja: '最小値',
          de: 'Minimalwert',
          es: 'Valor mínimo',
          fr: 'Valeur minimale'
        },
      },
      {
        name: 'maxVal',
        type: 'slider',
        defaultValue: 200,
        min: 50,
        max: 255,
        step: 10,
        description: {
          en: 'Maximum value',
          ko: '최대값',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
    ],
    syntax: 'checkRange(a, quiet, minVal, maxVal)',
    documentation: 'https://docs.opencv.org/4.x/d2/de8/group__core__array.html#ga2bd19d89cae7629636cd0f1edb4d8b8b',
  },

  // 고급 필터
  {
    id: 'boxFilter',
    name: {
      en: 'Box Filter',
      ko: '박스 필터',
      zh: '方框滤波',
      ja: 'ボックスフィルタ',
      de: 'Box-Filter',
      es: 'Filtro de Caja',
      fr: 'Filtre boîte'
    },
    category: 'advanced_filter',
    description: {
      en: 'Blurs an image using the box filter. It calculates the average of the kernel area.',
      ko: '박스 필터를 사용하여 이미지를 블러 처리합니다. 커널 영역의 평균값을 계산합니다.',
      zh: '使用方框滤波模糊图像。它计算内核区域的平均值。',
      ja: 'ボックスフィルタを使用して画像をぼかします。カーネル領域の平均値を計算します。',
      de: 'Glättet ein Bild mit dem Box-Filter. Es berechnet den Durchschnitt des Kernel-Bereichs.',
      es: 'Desenfoca una imagen usando el filtro de caja. Calcula el promedio del área del núcleo.',
      fr: 'Floute une image à l\'aide du filtre boîte. Il calcule la moyenne de la zone du noyau.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernel-Größe',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
      {
        name: 'normalize',
        type: 'select',
        defaultValue: true,
        options: [
          { 
            label: {
              en: 'Normalize ON',
              ko: '정규화 O',
              zh: '归一化开启',
              ja: '正規化 ON',
              de: 'Normalisierung AN',
              es: 'Normalización ACTIVADA',
              fr: 'Normalisation ACTIVÉE'
            }, 
            value: true 
          },
          { 
            label: {
              en: 'Normalize OFF',
              ko: '정규화 X',
              zh: '归一化关闭',
              ja: '正規化 OFF',
              de: 'Normalisierung AUS',
              es: 'Normalización DESACTIVADA',
              fr: 'Normalisation DÉSACTIVÉE'
            }, 
            value: false 
          },
        ],
        description: {
          en: 'Whether to normalize the filter',
          ko: '정규화 여부',
          zh: '是否归一化过滤器',
          ja: 'フィルタを正規化するかどうか',
          de: 'Ob der Filter normalisiert werden soll',
          es: 'Si se debe normalizar el filtro',
          fr: 'S\'il faut normaliser le filtre'
        },
      },
    ],
    syntax: 'boxFilter(src, dst, ddepth, ksize, normalize)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gad533230ebf2d42509547d514f7d3fbc3',
  },
  {
    id: 'sqrBoxFilter',
    name: {
      en: 'Squared Box Filter',
      ko: '제곱 박스 필터',
      zh: '平方方框滤波',
      ja: '平方ボックスフィルタ',
      de: 'Quadrierter Box-Filter',
      es: 'Filtro de Caja Cuadrada',
      fr: 'Filtre boîte au carré'
    },
    category: 'advanced_filter',
    description: {
      en: 'Calculates the sum of squares of pixel values in the kernel area.',
      ko: '커널 영역에 있는 픽셀 값의 제곱의 합을 계산하는 박스 필터입니다.',
      zh: '计算内核区域像素值的平方和。',
      ja: 'カーネル領域内のピクセル値の二乗和を計算します。',
      de: 'Berechnet die Summe der Quadrate der Pixelwerte im Kernel-Bereich.',
      es: 'Calcula la suma de los cuadrados de los valores de los píxeles en el área del núcleo.',
      fr: 'Calcule la somme des carrés des valeurs de pixels dans la zone du noyau.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernel-Größe',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
    ],
    syntax: 'sqrBoxFilter(src, dst, ddepth, ksize)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga045028184a9ef65d7d2579e5c4bff6c0',
  },
  {
    id: 'filter2D',
    name: {
      en: 'Custom Filter 2D',
      ko: '사용자 정의 필터',
      zh: '自定义 2D 滤波',
      ja: 'カスタム 2D フィルタ',
      de: 'Benutzerdefinierter 2D-Filter',
      es: 'Filtro 2D Personalizado',
      fr: 'Filtre 2D personnalisé'
    },
    category: 'advanced_filter',
    description: {
      en: 'Convolves an image with a custom kernel.',
      ko: '사용자 정의 커널로 이미지를 필터링(컨볼루션)합니다.',
      zh: '使用自定义内核对图像进行卷积。',
      ja: 'カスタムカーネルで画像を畳み込みます。',
      de: 'Faltet ein Bild mit einem benutzerdefinierten Kernel.',
      es: 'Convuelve una imagen con un núcleo personalizado.',
      fr: 'Applique une convolution à une image avec un noyau personnalisé.'
    },
    parameters: [
      {
        name: 'filterType',
        type: 'select',
        defaultValue: 'sharpen',
        options: [
          { 
            label: {
              en: 'Sharpen',
              ko: '샤프닝',
              zh: '锐化',
              ja: 'シャープ',
              de: 'Schärfen',
              es: 'Afilar',
              fr: 'Netteté'
            }, 
            value: 'sharpen' 
          },
          { 
            label: {
              en: 'Edge Enhance',
              ko: '엣지 강화',
              zh: '边缘增强',
              ja: 'エッジ強調',
              de: 'Kantenverbesserung',
              es: 'Mejora de Bordes',
              fr: 'Amélioration des contours'
            }, 
            value: 'edge' 
          },
          { 
            label: {
              en: 'Emboss',
              ko: '엠보싱',
              zh: '浮雕',
              ja: 'エンボス',
              de: 'Prägen',
              es: 'Relieve',
              fr: 'Gaufrage'
            }, 
            value: 'emboss' 
          },
          { 
            label: {
              en: 'Identity',
              ko: '원본',
              zh: '恒等转换',
              ja: '元画像',
              de: 'Identität',
              es: 'Identidad',
              fr: 'Identité'
            }, 
            value: 'identity' 
          },
        ],
        description: {
          en: 'Type of filter to apply',
          ko: '적용할 필터 타입',
          zh: '要应用的过滤器类型',
          ja: '適用するフィルタのタイプ',
          de: 'Typ des anzuwendenden Filters',
          es: 'Tipo de filtro a aplicar',
          fr: 'Type de filtre à appliquer'
        },
      },
    ],
    syntax: 'filter2D(src, dst, ddepth, kernel)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga27c049795ce870216ddfb366086b5a04',
  },
  {
    id: 'sepFilter2D',
    name: {
      en: 'Separable Filter 2D',
      ko: '분리 가능 필터',
      zh: '可分离 2D 滤波',
      ja: '分離可能 2D フィルタ',
      de: 'Separierbarer 2D-Filter',
      es: 'Filtro 2D Separable',
      fr: 'Filtre 2D séparable'
    },
    category: 'advanced_filter',
    description: {
      en: 'Applies a separable linear filter to an image.',
      ko: '분리 가능한 선형 필터를 적용합니다.',
      zh: '对图像应用可分离线性滤波。',
      ja: '画像に分離可能な線形フィルタを適用します。',
      de: 'Wendet einen separierbaren linearen Filter auf ein Bild an.',
      es: 'Aplica un filtro lineal separable a una imagen.',
      fr: 'Applique un filtre linéaire séparable à une image.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 15,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernel-Größe',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
    ],
    syntax: 'sepFilter2D(src, dst, ddepth, kernelX, kernelY)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga910e29ff7d7b105057d1625a4bf6318d',
  },
  {
    id: 'Scharr',
    name: {
      en: 'Scharr Operator',
      ko: '샤르 연산자',
      zh: 'Scharr 算子',
      ja: 'Scharr 演算子',
      de: 'Scharr-Operator',
      es: 'Operador Scharr',
      fr: 'Opérateur de Scharr'
    },
    category: 'advanced_filter',
    description: {
      en: 'Calculates the first x- or y-image derivative using the Scharr operator. More accurate than Sobel for small kernels.',
      ko: 'Scharr 연산자를 사용하여 이미지의 1차 x 또는 y 미분을 계산합니다. 작은 커널의 경우 Sobel보다 정확합니다.',
      zh: '使用 Scharr 算子计算图像的一阶 x 或 y 导数。对于小内核，比 Sobel 更准确。',
      ja: 'Scharr 演算子を使用して、画像の 1 次 x または y 微分を計算します。小さなカーネルの場合、Sobel よりも正確です。',
      de: 'Berechnet die erste x- oder y-Bildableitung mit dem Scharr-Operator. Bei kleinen Kerneln genauer als Sobel.',
      es: 'Calcula la primera derivada de la imagen en x o y usando el operador Scharr. Más preciso que Sobel para núcleos pequeños.',
      fr: 'Calcule la première dérivée x ou y de l\'image à l\'aide de l\'opérateur de Scharr. Plus précis que Sobel pour les petits noyaux.'
    },
    parameters: [
      {
        name: 'dx',
        type: 'slider',
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 1,
        description: {
          en: 'Derivative order in X direction',
          ko: 'X 방향 미분 차수',
          zh: 'X 方向导数阶数',
          ja: 'X 方向の微分次数',
          de: 'Ableitungsordnung in X-Richtung',
          es: 'Orden de derivada en dirección X',
          fr: 'Ordre de dérivée dans la direction X'
        },
      },
      {
        name: 'dy',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 1,
        description: {
          en: 'Derivative order in Y direction',
          ko: 'Y 방향 미분 차수',
          zh: 'Y 方向导数阶数',
          ja: 'Y 方向の微分次数',
          de: 'Ableitungsordnung in Y-Richtung',
          es: 'Orden de derivada en dirección Y',
          fr: 'Ordre de dérivée dans la direction Y'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'Scharr(src, dst, ddepth, dx, dy)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gaa13106761eedf14798f37aa2d60404c9',
  },
  {
    id: 'spatialGradient',
    name: {
      en: 'Spatial Gradient',
      ko: '공간 기울기',
      zh: '空间梯度',
      ja: '空間勾配',
      de: 'Räumlicher Gradient',
      es: 'Gradiente Espacial',
      fr: 'Gradient spatial'
    },
    category: 'advanced_filter',
    description: {
      en: 'Calculates the first-order image derivatives in both x and y directions using a Sobel operator.',
      ko: 'Sobel 연산자를 사용하여 x와 y 방향 모두의 1차 이미지 미분을 계산합니다.',
      zh: '使用 Sobel 算子计算 x 和 y 方向的一阶图像导数。',
      ja: 'Sobel 演算子を使用して、x と y の両方向の 1 次画像微分を計算します。',
      de: 'Berechnet die Bildableitungen erster Ordnung in x- und y-Richtung mit einem Sobel-Operator.',
      es: 'Calcula las derivadas de imagen de primer orden en las direcciones x e y usando un operador Sobel.',
      fr: 'Calcule les dérivées d\'image du premier ordre dans les directions x et y à l\'aide d\'un opérateur de Sobel.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Sobel kernel size',
          ko: 'Sobel 커널 크기',
          zh: 'Sobel 内核大小',
          ja: 'Sobel カーネルサイズ',
          de: 'Sobel-Kernel-Größe',
          es: 'Tamaño del núcleo Sobel',
          fr: 'Taille du noyau de Sobel'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'spatialGradient(src, dx, dy, ksize)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga405d2b8fc0ddf3b5ff0f15fd0e4e2c70',
  },

  // 이미지 피라미드
  {
    id: 'pyrDown',
    name: {
      en: 'Pyramid Down',
      ko: '피라미드 다운샘플',
      zh: '图像金字塔向下采样',
      ja: 'ガウシアンピラミッド縮小',
      de: 'Bildpyramide verkleinern',
      es: 'Reducción de Pirámide',
      fr: 'Réduction de pyramide'
    },
    category: 'pyramid',
    description: {
      en: 'Downsamples an image and blurs it. It reduces the size by half.',
      ko: '이미지를 블러 처리한 후 다운샘플링하여 크기를 가로세로 절반으로 줄입니다.',
      zh: '对图像进行向下采样并模糊处理。它将尺寸减半。',
      ja: '画像をぼかしてからダウンサンプルし、サイズを半分に縮小します。',
      de: 'Verkleinert ein Bild und glättet es. Es reduziert die Größe um die Hälfte.',
      es: 'Reduce el muestreo de una imagen y la desenfoca. Reduce el tamaño a la mitad.',
      fr: 'Échantillonne une image vers le bas et la floute. Il réduit la taille de moitié.'
    },
    parameters: [
      {
        name: 'iterations',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 4,
        step: 1,
        description: {
          en: 'Number of downsampling iterations',
          ko: '다운샘플링 반복 횟수',
          zh: '向下采样迭代次数',
          ja: 'ダウンサンプルの繰り返し回数',
          de: 'Anzahl der Verkleinerungsschritte',
          es: 'Número de iteraciones de reducción de muestreo',
          fr: 'Nombre d\'itérations de sous-échantillonnage'
        },
      },
    ],
    syntax: 'pyrDown(src, dst, dstsize, borderType)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gaf9bba239dfca11654cb7f50f889fc2ff',
  },
  {
    id: 'pyrUp',
    name: {
      en: 'Pyramid Up',
      ko: '피라미드 업샘플',
      zh: '图像金字塔向上采样',
      ja: 'ガウシアンピラミッド拡大',
      de: 'Bildpyramide vergrößern',
      es: 'Aumento de Pirámide',
      fr: 'Agrandissement de pyramide'
    },
    category: 'pyramid',
    description: {
      en: 'Upsamples an image and then blurs it. It doubles the size.',
      ko: '이미지를 업샘플링한 후 블러 처리하여 크기를 가로세로 두 배로 늘립니다.',
      zh: '对图像进行向上采样，然后进行模糊处理。它使尺寸翻倍。',
      ja: '画像をアップサンプルしてからぼかし、サイズを 2 倍に拡大します。',
      de: 'Vergrößert ein Bild und glättet es anschließend. Es verdoppelt die Größe.',
      es: 'Aumenta el muestreo de una imagen y luego la desenfoca. Duplica el tamaño.',
      fr: 'Échantillonne une image vers le haut puis la floute. Il double la taille.'
    },
    parameters: [
      {
        name: 'iterations',
        type: 'slider',
        defaultValue: 1,
        min: 1,
        max: 4,
        step: 1,
        description: {
          en: 'Number of upsampling iterations',
          ko: '업샘플링 반복 횟수',
          zh: '向上采样迭代次数',
          ja: 'アップサンプルの繰り返し回数',
          de: 'Anzahl der Vergrößerungsschritte',
          es: 'Número de iteraciones de aumento de muestreo',
          fr: 'Nombre d\'itérations de suréchantillonnage'
        },
      },
    ],
    syntax: 'pyrUp(src, dst, dstsize, borderType)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gada75b59bdaaca411ed6fee10085eb784',
  },
  {
    id: 'pyrMeanShiftFiltering',
    name: {
      en: 'Mean Shift Filtering',
      ko: '평균 이동 필터링',
      zh: '均值偏移滤波',
      ja: 'ミーンシフトフィルタリング',
      de: 'Mean-Shift-Filterung',
      es: 'Filtrado por Desplazamiento de Medias',
      fr: 'Filtrage par décalage de moyenne'
    },
    category: 'pyramid',
    description: {
      en: 'Performs initial step of meanshift segmentation of an image.',
      ko: '이미지의 평균 이동(meanshift) 세그먼테이션의 초기 단계를 수행합니다.',
      zh: '执行图像均值偏移分割的初始步骤。',
      ja: '画像のミーンシフトセグメンテーションの初期段階を実行します。',
      de: 'Führt den ersten Schritt der Mean-Shift-Segmentierung eines Bildes aus.',
      es: 'Realiza el paso inicial de la segmentación por desplazamiento de medias de una imagen.',
      fr: 'Effectue l\'étape initiale de segmentation par décalage de moyenne d\'une image.'
    },
    parameters: [
      {
        name: 'sp',
        type: 'slider',
        defaultValue: 20,
        min: 5,
        max: 50,
        step: 5,
        description: {
          en: 'Spatial window radius',
          ko: '공간 윈도우 반지름',
          zh: '空间窗口半径',
          ja: '空間ウィンドウの半径',
          de: 'Räumlicher Fensterradius',
          es: 'Radio de la ventana espacial',
          fr: 'Rayon de la fenêtre spatiale'
        },
      },
      {
        name: 'sr',
        type: 'slider',
        defaultValue: 40,
        min: 10,
        max: 80,
        step: 5,
        description: {
          en: 'Color window radius',
          ko: '색상 윈도우 반지름',
          zh: '色彩窗口半径',
          ja: '色のウィンドウの半径',
          de: 'Farbfensterradius',
          es: 'Radio de la ventana de color',
          fr: 'Rayon de la fenêtre de couleur'
        },
      },
      {
        name: 'maxLevel',
        type: 'slider',
        defaultValue: 2,
        min: 0,
        max: 4,
        step: 1,
        description: {
          en: 'Maximum level of the pyramid for the segmentation',
          ko: '세그먼테이션을 위한 피라미드의 최대 레벨',
          zh: '用于分割的金字塔最大层数',
          ja: 'セグメンテーションに使用するピラミッドの最大レベル',
          de: 'Maximale Ebene der Pyramide für die Segmentierung',
          es: 'Nivel máximo de la pirámide para la segmentación',
          fr: 'Niveau maximum de la pyramide pour la segmentation'
        },
      },
    ],
    syntax: 'pyrMeanShiftFiltering(src, dst, sp, sr, maxLevel)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga9ae5433ce1830607f35316377317e137',
  },
  {
    id: 'buildPyramid',
    name: {
      en: 'Build Pyramid',
      ko: '피라미드 생성',
      zh: '构建图像金字塔',
      ja: 'ガウシアンピラミッドの構築',
      de: 'Bildpyramide erstellen',
      es: 'Construir Pirámide',
      fr: 'Construire une pyramide'
    },
    category: 'pyramid',
    description: {
      en: 'Constructs a Gaussian pyramid for an image.',
      ko: '이미지에 대한 가우시안 피라미드를 생성합니다.',
      zh: '为图像构建高斯金字塔。',
      ja: '画像からガウシアンピラミッドを構築します。',
      de: 'Erstellt eine Gauß-Pyramide für ein Bild.',
      es: 'Construye una pirámide gaussiana para una imagen.',
      fr: 'Construit une pyramide gaussienne pour une image.'
    },
    parameters: [
      {
        name: 'maxlevel',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 5,
        step: 1,
        description: {
          en: 'Maximum level of the pyramid',
          ko: '피라미드 최대 레벨',
          zh: '金字塔最大层数',
          ja: 'ピラミッドの最大レベル',
          de: 'Maximale Ebene der Pyramide',
          es: 'Nivel máximo de la pirámide',
          fr: 'Niveau maximum de la pyramide'
        },
      },
    ],
    syntax: 'buildPyramid(src, dst, maxlevel, borderType)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga9d1d3dc5d298b9d9c7c6e8c572101c9f',
  },

  // 미분 연산
  {
    id: 'getDerivKernels',
    name: {
      en: 'Get Derivative Kernels',
      ko: '미분 커널 얻기',
      zh: '获取导数内核',
      ja: '微分カーネルの取得',
      de: 'Ableitungskerne abrufen',
      es: 'Obtener núcleos de derivada',
      fr: 'Obtenir les noyaux de dérivée'
    },
    category: 'derivative',
    description: {
      en: 'Computes and returns filter coefficients for computing spatial image derivatives.',
      ko: '공간 이미지 미분을 계산하기 위한 필터 계수를 계산하여 반환합니다.',
      zh: '计算并返回用于计算空间图像导数的滤波器系数。',
      ja: '空間的な画像の微分を計算するためのフィルタ係数を計算して返します。',
      de: 'Berechnet und liefert Filterkoeffizienten zur Berechnung räumlicher Bildableitungen.',
      es: 'Calcula y devuelve coeficientes de filtro para calcular derivadas espaciales de imagen.',
      fr: 'Calcule et renvoie les coefficients de filtre pour le calcul des dérivées spatiales d\'image.'
    },
    parameters: [
      {
        name: 'dx',
        type: 'slider',
        defaultValue: 1,
        min: 0,
        max: 2,
        step: 1,
        description: {
          en: 'Derivative order in X direction',
          ko: 'X 방향 미분 차수',
          zh: 'X 方向导数阶数',
          ja: 'X 方向の微分次数',
          de: 'Ableitungsordnung in X-Richtung',
          es: 'Orden de derivada en dirección X',
          fr: 'Ordre de dérivée dans la direction X'
        },
      },
      {
        name: 'dy',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 2,
        step: 1,
        description: {
          en: 'Derivative order in Y direction',
          ko: 'Y 방향 미분 차수',
          zh: 'Y 方向导数阶数',
          ja: 'Y 方向の微分次数',
          de: 'Ableitungsordnung in Y-Richtung',
          es: 'Orden de derivada en dirección Y',
          fr: 'Ordre de dérivée dans la direction Y'
        },
      },
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 7,
        step: 2,
        description: {
          en: 'Aperture size',
          ko: '조리개(커널) 크기',
          zh: '孔径（内核）大小',
          ja: 'アパーチャ（カーネル）サイズ',
          de: 'Blenden- (Kernel-) Größe',
          es: 'Tamaño de apertura (núcleo)',
          fr: 'Taille d\'ouverture (noyau)'
        },
      },
    ],
    syntax: 'getDerivKernels(kx, ky, dx, dy, ksize, normalize, ktype)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#ga0b0c1c5c155c7a7e6f0a8b8f5f5e5e5e',
  },
  {
    id: 'getGaborKernel',
    name: {
      en: 'Get Gabor Kernel',
      ko: '가버 커널 생성',
      zh: '获取 Gabor 内核',
      ja: 'ガボールカーネルの取得',
      de: 'Gabor-Kernel abrufen',
      es: 'Obtener núcleo Gabor',
      fr: 'Obtenir le noyau de Gabor'
    },
    category: 'derivative',
    description: {
      en: 'Returns Gabor filter coefficients. Useful for texture analysis.',
      ko: 'Gabor 필터 계수를 반환합니다. 텍스처 분석에 유용합니다.',
      zh: '返回 Gabor 滤波器系数。对纹理分析很有用。',
      ja: 'ガボールフィルタ係数を返します。テクスチャ分析に役立ちます。',
      de: 'Liefert Gabor-Filterkoeffizienten. Nützlich für die Texturanalyse.',
      es: 'Devuelve coeficientes de filtro Gabor. Útil para el análisis de texturas.',
      fr: 'Renvoie les coefficients du filtre de Gabor. Utile pour l\'analyse de texture.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 21,
        min: 5,
        max: 51,
        step: 2,
        description: {
          en: 'Kernel size',
          ko: '커널 크기',
          zh: '内核大小',
          ja: 'カーネルサイズ',
          de: 'Kernel-Größe',
          es: 'Tamaño del núcleo',
          fr: 'Taille du noyau'
        },
      },
      {
        name: 'sigma',
        type: 'slider',
        defaultValue: 5.0,
        min: 1.0,
        max: 10.0,
        step: 0.5,
        description: {
          en: 'Standard deviation of the gaussian envelope',
          ko: '가우시안 엔벨로프의 표준편차',
          zh: '高斯包络的标准差',
          ja: 'ガウスエンベロープの標準偏差',
          de: 'Standardabweichung der Gauß-Einhüllenden',
          es: 'Desviación estándar de la envolvente gaussiana',
          fr: 'Écart-type de l\'enveloppe gaussienne'
        },
      },
      {
        name: 'theta',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 180,
        step: 15,
        description: {
          en: 'Orientation of the normal to the parallel stripes of a Gabor function',
          ko: 'Gabor 함수의 평행한 줄무늬에 대한 법선 방향(각도)',
          zh: 'Gabor 函数平行条纹法线的方向（角度）',
          ja: 'ガボール関数の平行なストライプの法線方向（角度）',
          de: 'Orientierung der Normalen zu den parallelen Streifen einer Gabor-Funktion',
          es: 'Orientación de la normal a las franjas paralelas de una función de Gabor',
          fr: 'Orientation de la normale aux bandes parallèles d\'une fonction de Gabor'
        },
      },
      {
        name: 'lambd',
        type: 'slider',
        defaultValue: 10.0,
        min: 1.0,
        max: 20.0,
        step: 1.0,
        description: {
          en: 'Wavelength of the sinusoidal factor',
          ko: '사인파 인자의 파장',
          zh: '正弦因子的波长',
          ja: '正弦波因子の波長',
          de: 'Wellenlänge des sinusförmigen Faktors',
          es: 'Longitud de onda del factor sinusoidal',
          fr: 'Longueur d\'onde du facteur sinusoïdal'
        },
      },
    ],
    syntax: 'getGaborKernel(ksize, sigma, theta, lambd, gamma, psi, ktype)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gae84c92d248183bd92fa713ce51cc3599',
  },
  {
    id: 'getGaussianKernel',
    name: {
      en: 'Get Gaussian Kernel',
      ko: '가우시안 커널 생성',
      zh: '获取高斯内核',
      ja: 'ガウシアンカーネルの取得',
      de: 'Gauß-Kernel abrufen',
      es: 'Obtener núcleo gaussiano',
      fr: 'Obtenir le noyau gaussien'
    },
    category: 'derivative',
    description: {
      en: 'Returns Gaussian filter coefficients.',
      ko: '가우시안 필터 계수를 반환합니다.',
      zh: '返回高斯滤波器系数。',
      ja: 'ガウシアンフィルタ係数を返します。',
      de: 'Liefert Gauß-Filterkoeffizienten.',
      es: 'Devuelve coeficientes de filtro gaussiano.',
      fr: 'Renvoie les coefficients du filtre gaussien.'
    },
    parameters: [
      {
        name: 'ksize',
        type: 'slider',
        defaultValue: 5,
        min: 1,
        max: 31,
        step: 2,
        description: {
          en: 'Aperture size. It should be odd and positive.',
          ko: '조리개(속도) 크기. 양수의 홀수여야 합니다.',
          zh: '孔径大小。应为正奇数。',
          ja: 'アパーチャサイズ。正の奇数である必要があります。',
          de: 'Blendenöffnung. Sie sollte ungerade und positiv sein.',
          es: 'Tamaño de apertura. Debe ser impar y positivo.',
          fr: 'Taille d\'ouverture. Elle doit être impaire et positive.'
        },
      },
      {
        name: 'sigma',
        type: 'slider',
        defaultValue: 1.5,
        min: 0.1,
        max: 5.0,
        step: 0.1,
        description: {
          en: 'Gaussian standard deviation',
          ko: '가우시안 표준편차',
          zh: '高斯标准差',
          ja: 'ガウスの標準偏差',
          de: 'Gauß-Standardabweichung',
          es: 'Desviación estándar gaussiana',
          fr: 'Écart-type gaussien'
        },
      },
    ],
    syntax: 'getGaussianKernel(ksize, sigma, ktype)',
    documentation: 'https://docs.opencv.org/4.12.0/d4/d86/group__imgproc__filter.html#gac05a120c1ae92a6060dd0db190a61afa',
  },

  // 각종 이미지변환
  {
    id: 'distanceTransform',
    name: {
      en: 'Distance Transform',
      ko: '거리 변환',
      zh: '距离变换',
      ja: '距離変換',
      de: 'Distanztransformation',
      es: 'Transformación de distancia',
      fr: 'Transformation de distance'
    },
    category: 'misc',
    description: {
      en: 'Calculates the distance to the closest zero pixel for each pixel of the binary image.',
      ko: '이진 이미지에서 각 픽셀과 가장 가까운 0 픽셀까지의 거리를 계산합니다.',
      zh: '计算二值图像中每个像素到最近零像素的距离。',
      ja: '二値画像において、各ピクセルから最も近い0ピクセルまでの距離を計算します。',
      de: 'Berechnet den Abstand zum nächsten Nullpixel für jedes Pixel des Binärbildes.',
      es: 'Calcula la distancia al píxel cero más cercano para cada píxel de la imagen binaria.',
      fr: 'Calcule la distance au pixel zéro le plus proche pour chaque pixel de l\'image binaire.'
    },
    parameters: [
      {
        name: 'distanceType',
        type: 'select',
        defaultValue: 'DIST_L2',
        options: [
          { label: { en: 'L1 (Manhattan)', ko: 'L1 (맨하탄)', zh: 'L1 (曼哈顿)', ja: 'L1 (マンハッタン)', de: 'L1 (Manhattan)', es: 'L1 (Manhattan)', fr: 'L1 (Manhattan)' }, value: 'DIST_L1' },
          { label: { en: 'L2 (Euclidean)', ko: 'L2 (유클리드)', zh: 'L2 (欧几里德)', ja: 'L2 (ユークリッド)', de: 'L2 (Euklidisch)', es: 'L2 (Euclidiana)', fr: 'L2 (Euclidienne)' }, value: 'DIST_L2' },
          { label: { en: 'C (Chessboard)', ko: 'C (체스판)', zh: 'C (棋盘)', ja: 'C (チェスボード)', de: 'C (Schachbrett)', es: 'C (Tablero de ajedrez)', fr: 'C (Échiquier)' }, value: 'DIST_C' },
        ],
        description: {
          en: 'Type of distance',
          ko: '거리 계산 방식',
          zh: '距离类型',
          ja: '距離の種類',
          de: 'Distanztyp',
          es: 'Tipo de distancia',
          fr: 'Type de distance'
        },
      },
      {
        name: 'maskSize',
        type: 'select',
        defaultValue: 5,
        options: [
          { label: '3x3', value: 3 },
          { label: '5x5', value: 5 },
        ],
        description: {
          en: 'Size of the distance transform mask',
          ko: '거리 변환 마스크 크기',
          zh: '距离变换掩码的大小',
          ja: '距離変換マスクのサイズ',
          de: 'Größe der Distanztransformationsmaske',
          es: 'Tamaño de la máscara de transformación de distancia',
          fr: 'Taille du masque de transformation de distance'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'distanceTransform(src, dst, distanceType, maskSize)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/d1b/group__imgproc__misc.html#ga8a0b7fdfcb7a13dde018988ba3a43042',
  },
  {
    id: 'floodFill',
    name: {
      en: 'Flood Fill',
      ko: '영역 채우기',
      zh: '漫水填充',
      ja: '防波堤（シードポイント）からの塗りつぶし',
      de: 'Flutfüllung',
      es: 'Relleno de inundación',
      fr: 'Remplissage par diffusion'
    },
    category: 'misc',
    description: {
      en: 'Fills a connected component starting from the seed point with the specified color.',
      ko: '시드 포인트에서 시작하여 연결된 영역을 특정 색상으로 채웁니다.',
      zh: '从种子点开始用指定颜色填充连通分量。',
      ja: 'シードポイントから開始して、接続されたコンポーネントを指定された色で塗りつぶします。',
      de: 'Füllt eine zusammenhängende Komponente beginnend am Startpunkt mit der angegebenen Farbe.',
      es: 'Rellena un componente conectado comenzando desde el punto semilla con el color especificado.',
      fr: 'Remplit une composante connectée à partir du point germe avec la couleur spécifiée.'
    },
    parameters: [
      {
        name: 'tolerance',
        type: 'slider',
        defaultValue: 10,
        min: 0,
        max: 50,
        step: 5,
        description: {
          en: 'Color tolerance for filling',
          ko: '채우기를 위한 색상 허용 오차',
          zh: '填充的颜色容差',
          ja: '塗りつぶしの色の許容誤差',
          de: 'Farbtoleranz für die Füllung',
          es: 'Tolerancia de color para el relleno',
          fr: 'Tolérance de couleur pour le remplissage'
        },
      },
    ],
    syntax: 'floodFill(image, mask, seedPoint, newVal, rect, loDiff, upDiff, flags)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/d1b/group__imgproc__misc.html#gaf1f55a048f8a45bc3383586e80b1f0d0',
  },
  {
    id: 'watershed',
    name: {
      en: 'Watershed',
      ko: '워터셰드',
      zh: '分水岭算法',
      ja: '分水嶺アルゴリズム',
      de: 'Watershed-Algorithmus',
      es: 'Cuenca hidrográfica (Watershed)',
      fr: 'Ligne de partage des eaux (Watershed)'
    },
    category: 'misc',
    description: {
      en: 'Performs a marker-based image segmentation using the watershed algorithm.',
      ko: '워터셰드 알고리즘을 사용하여 마커 기반 이미지 분할을 수행합니다.',
      zh: '使用分水岭算法执行基于标记的图像分割。',
      ja: '分水嶺アルゴリズムを使用して、マーカーベースの画像セグメンテーションを実行します。',
      de: 'Führt eine markerbasierte Bildsegmentierung mit dem Watershed-Algorithmus durch.',
      es: 'Realiza una segmentación de imagen basada en marcadores mediante el algoritmo de cuenca hidrográfica.',
      fr: 'Effectue une segmentation d\'image basée sur des marqueurs en utilisant l\'algorithme de ligne de partage des eaux.'
    },
    parameters: [
      {
        name: 'threshold',
        type: 'slider',
        defaultValue: 127,
        min: 50,
        max: 200,
        step: 10,
        description: {
          en: 'Binary threshold value for markers',
          ko: '마커 생성을 위한 이진화 임계값',
          zh: '标记的二值化阈值',
          ja: 'マーカーの二値化しきい値',
          de: 'Binärer Schwellenwert für Marker',
          es: 'Valor de umbral binario para marcadores',
          fr: 'Valeur de seuil binaire pour les marqueurs'
        },
      },
    ],
    syntax: 'watershed(image, markers)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/d1b/group__imgproc__misc.html#ga3267243e4d3f95165d55a618c65ac6e1',
  },
  {
    id: 'connectedComponents',
    name: {
      en: 'Connected Components',
      ko: '연결 요소 레이블링',
      zh: '连通分量标记',
      ja: '連通成分のラベル付け',
      de: 'Zusammenhangskomponenten',
      es: 'Componentes conectados',
      fr: 'Composantes connectées'
    },
    category: 'misc',
    description: {
      en: 'Computes the connected components labeled image of boolean image.',
      ko: '이진 이미지에서 연결된 요소를 레이블링하여 이미지를 생성합니다.',
      zh: '计算布尔图像的连通分量标记图像。',
      ja: 'ブール画像の連通成分ラベル付け画像を計算します。',
      de: 'Berechnet das markierte Bild der Zusammenhangskomponenten eines booleschen Bildes.',
      es: 'Calcula la imagen etiquetada de componentes conectados de una imagen booleana.',
      fr: 'Calcule l\'image étiquetée des composantes connectées d\'une image booléenne.'
    },
    parameters: [
      {
        name: 'connectivity',
        type: 'select',
        defaultValue: 8,
        options: [
          { label: { en: '4-connectivity', ko: '4-연결', zh: '4 连通', ja: '4-連結', de: '4-Zusammenhang', es: 'Conectividad-4', fr: 'Connectivité-4' }, value: 4 },
          { label: { en: '8-connectivity', ko: '8-연결', zh: '8 连通', ja: '8-連結', de: '8-Zusammenhang', es: 'Conectividad-8', fr: 'Connectivité-8' }, value: 8 },
        ],
        description: {
          en: 'Connectivity (4 or 8)',
          ko: '연결성 (4 또는 8)',
          zh: '连通性（4 或 8）',
          ja: '連結性（4または8）',
          de: 'Zusammenhang (4 oder 8)',
          es: 'Conectividad (4 u 8)',
          fr: 'Connectivité (4 ou 8)'
        },
      },
    ],
    requiresGrayscale: true,
    syntax: 'connectedComponents(image, labels, connectivity, ltype)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/d1b/group__imgproc__misc.html#gaedef8c7340499ca391d459122e51bef5',
  },
  
  // 모션 분석 및 객체 추적
  {
    id: 'accumulate',
    name: {
      en: 'Accumulate',
      ko: '누적',
      zh: '图像累加',
      ja: '累積（アキュムレート）',
      de: 'Akkumulieren',
      es: 'Acumular',
      fr: 'Accumuler'
    },
    category: 'motion',
    description: {
      en: 'Adds an image to the accumulator image. Used for background modeling or motion analysis.',
      ko: '입력 이미지를 누적 이미지에 더합니다. 배경 모델링이나 모션 분석에 사용됩니다.',
      zh: '将图像添加到累加器图像。用于背景建模或运动分析。',
      ja: '入力画像を累積画像に加算します。背景モデリングや動き分析に使用されます。',
      de: 'Fügt ein Bild zum Akkumulatorbild hinzu. Wird für Hintergrundmodellierung oder Bewegungsanalyse verwendet.',
      es: 'Añade una imagen a la imagen del acumulador. Se utiliza para el modelado de fondo o el análisis de movimiento.',
      fr: 'Ajoute une image à l\'image accumulateur. Utilisé pour la modélisation de l\'arrière-plan ou l\'analyse de mouvement.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 1.0,
        step: 0.1,
        description: {
          en: 'Accumulation weight',
          ko: '누적 가중치',
          zh: '累加权重',
          ja: '累積の重み',
          de: 'Akkumulationsgewicht',
          es: 'Peso de acumulación',
          fr: 'Poids d\'accumulation'
        },
      },
    ],
    inputCount: 2,
    syntax: 'accumulate(src, dst, mask=None)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga1a567a79901513811ff3b9976923b199',
  },
  {
    id: 'accumulateSquare',
    name: {
      en: 'Accumulate Square',
      ko: '제곱 누적',
      zh: '平方阶累加',
      ja: '平方累積',
      de: 'Quadratisches Akkumulieren',
      es: 'Acumular cuadrado',
      fr: 'Accumuler le carré'
    },
    category: 'motion',
    description: {
      en: 'Adds the square of the source image to the accumulator image.',
      ko: '입력 이미지의 제곱을 누적 이미지에 더합니다. 분산 계산 등에 사용됩니다.',
      zh: '将源图像的平方添加到累加器图像。',
      ja: 'ソース画像の平方を入力画像に累積します。',
      de: 'Fügt das Quadrat des Quellbildes zum Akkumulatorbild hinzu.',
      es: 'Añade el cuadrado de la imagen de origen a la imagen del acumulador.',
      fr: 'Ajoute le carré de l\'image source à l\'image accumulateur.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 1.0,
        step: 0.1,
        description: {
          en: 'Accumulation weight',
          ko: '누적 가중치',
          zh: '累加权重',
          ja: '累積の重み',
          de: 'Akkumulationsgewicht',
          es: 'Peso de acumulación',
          fr: 'Poids d\'accumulation'
        },
      },
    ],
    inputCount: 2,
    syntax: 'accumulateSquare(src, dst, mask=None)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#gacb75e7ffb573227088cef9ceaf80be8c',
  },
  {
    id: 'accumulateProduct',
    name: {
      en: 'Accumulate Product',
      ko: '곱 누적',
      zh: '图像乘积累加',
      ja: '積累積',
      de: 'Produkt akkumulieren',
      es: 'Acumular producto',
      fr: 'Accumuler le produit'
    },
    category: 'motion',
    description: {
      en: 'Adds the product of two input images to the accumulator image. Used for covariance calculation.',
      ko: '두 입력 이미지의 곱을 누적 이미지에 더합니다. 공분산 계산에 사용됩니다.',
      zh: '将两个输入图像的乘积添加到累加器图像。用于协方差计算。',
      ja: '2つの入力画像の積を累積画像に加算します。共分散計算に使用されます。',
      de: 'Fügt das Produkt zweier Eingabebilder zum Akkumulatorbild hinzu. Wird für die Kovarianzberechnung verwendet.',
      es: 'Añade el producto de dos imágenes de entrada a la imagen del acumulador. Se utiliza para el cálculo de la covarianza.',
      fr: 'Ajoute le produit de deux images d\'entrée à l\'image accumulateur. Utilisé pour le calcul de la covariance.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 1.0,
        step: 0.1,
        description: {
          en: 'Accumulation weight',
          ko: '누적 가중치',
          zh: '累加权重',
          ja: '累積の重み',
          de: 'Akkumulationsgewicht',
          es: 'Peso de acumulación',
          fr: 'Poids d\'accumulation'
        },
      },
    ],
    inputCount: 2,
    syntax: 'accumulateProduct(src1, src2, dst, mask=None)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga82518a940ecfda49460f66117ac82520',
  },
  {
    id: 'accumulateWeighted',
    name: {
      en: 'Accumulate Weighted',
      ko: '가중 누적',
      zh: '权重累加',
      ja: '加重累積',
      de: 'Gewichtet akkumulieren',
      es: 'Acumular ponderado',
      fr: 'Accumuler pondéré'
    },
    category: 'motion',
    description: {
      en: 'Calculates the weighted sum of the input image and the accumulator. Widely used for background subtraction.',
      ko: '입력 이미지와 누적 이미지의 가중 합을 계산합니다. 배경 차분에 널리 사용됩니다.',
      zh: '计算输入图像和累加器的加权和。广泛用于背景减法。',
      ja: '入力画像と累積画像の加重和を計算します。背景差分に広く使用されます。',
      de: 'Berechnet die gewichtete Summe des Eingabebildes und des Akkumulators. Wird häufig für die Hintergrundsubtraktion verwendet.',
      es: 'Calcula la suma ponderada de la imagen de entrada y el acumulador. Ampliamente utilizado para la sustracción de fondo.',
      fr: 'Calcule la somme pondérée de l\'image d\'entrée et de l\'accumulateur. Largement utilisé pour la soustraction d\'arrière-plan.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 0.1,
        min: 0.01,
        max: 1.0,
        step: 0.01,
        description: {
          en: 'Learning rate (smaller values mean slower background update)',
          ko: '학습률 (작을수록 배경 업데이트가 느림)',
          zh: '学习率（值越小表示背景更新越慢）',
          ja: '学習率（値が小さいほど背景の更新が遅くなります）',
          de: 'Lernrate (kleinere Werte bedeuten langsamere Hintergrundaktualisierung)',
          es: 'Tasa de aprendizaje (valores más pequeños significan una actualización de fondo más lenta)',
          fr: 'Taux d\'apprentissage (des valeurs plus petites signifient une mise à jour plus lente de l\'arrière-plan)'
        },
      },
    ],
    inputCount: 2,
    syntax: 'accumulateWeighted(src, dst, alpha, mask=None)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga4f9552b541187f61f6818e8d2d826bc7',
  },
  {
    id: 'createHanningWindow',
    name: {
      en: 'Create Hanning Window',
      ko: '한닝 윈도우 생성',
      zh: '创建汉宁窗',
      ja: 'ハン窓の作成',
      de: 'Hanning-Fenster erstellen',
      es: 'Crear ventana Hanning',
      fr: 'Créer une fenêtre de Hanning'
    },
    category: 'motion',
    description: {
      en: 'Computes a Hanning window coefficients for phase correlation.',
      ko: '위상 상관을 위한 한닝 윈도우 계수를 계산합니다.',
      zh: '计算用于相位相关的汉宁窗系数。',
      ja: '位相相関用のハン窓係数を計算します。',
      de: 'Berechnet Hanning-Fensterkoeffizienten für die Phasenkorrelation.',
      es: 'Calcula los coeficientes de la ventana Hanning para la correlación de fase.',
      fr: 'Calcule les coefficients d\'une fenêtre de Hanning pour la corrélation de phase.'
    },
    parameters: [
      {
        name: 'winSize',
        type: 'select',
        defaultValue: 128,
        options: [
          { label: '64x64', value: 64 },
          { label: '128x128', value: 128 },
          { label: '256x256', value: 256 },
          { label: '512x512', value: 512 },
        ],
        description: {
          en: 'Window size',
          ko: '윈도우 크기',
          zh: '窗口大小',
          ja: 'ウィンドウサイズ',
          de: 'Fenstergröße',
          es: 'Tamaño de ventana',
          fr: 'Taille de la fenêtre'
        },
      },
    ],
    syntax: 'createHanningWindow(dst, winSize, type)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga80a5991c8ef8a82c0a92e5e244f0a5a6',
  },
  {
    id: 'phaseCorrelate',
    name: {
      en: 'Phase Correlate',
      ko: '위상 상관',
      zh: '相位相关',
      ja: '位相相関',
      de: 'Phasenkorrelation',
      es: 'Correlación de fase',
      fr: 'Corrélation de phase'
    },
    category: 'motion',
    description: {
      en: 'Calculates the shift between two images using phase correlation.',
      ko: '위상 상관을 이용하여 두 이미지 간의 이동 변위를 계산합니다.',
      zh: '使用相位相关计算两个图像之间的位移。',
      ja: '位相相関を使用して2つの画像間のズレを計算します。',
      de: 'Berechnet die Verschiebung zwischen zwei Bildern mithilfe der Phasenkorrelation.',
      es: 'Calcula el desplazamiento entre dos imágenes mediante correlación de fase.',
      fr: 'Calcule le décalage entre deux images en utilisant la corrélation de phase.'
    },
    parameters: [
      {
        name: 'windowSize',
        type: 'select',
        defaultValue: 128,
        options: [
          { label: '64x64', value: 64 },
          { label: '128x128', value: 128 },
          { label: '256x256', value: 256 },
        ],
        description: {
          en: 'Window size',
          ko: '윈도우 크기',
          zh: '窗口大小',
          ja: 'ウィンドウサイズ',
          de: 'Fenstergröße',
          es: 'Tamaño de ventana',
          fr: 'Taille de la fenêtre'
        },
      },
    ],
    inputCount: 2,
    requiresGrayscale: true,
    syntax: 'phaseCorrelate(src1, src2, window=None)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga552420a2ace9ef3fb053cd630fdb4952',
  },
  {
    id: 'meanShift',
    name: {
      en: 'Mean Shift',
      ko: '평균 이동(Mean Shift)',
      zh: '均值漂移',
      ja: 'ミーンシフト',
      de: 'Mean Shift',
      es: 'Desplazamiento de media (Mean Shift)',
      fr: 'Décalage de moyenne (Mean Shift)'
    },
    category: 'motion',
    description: {
      en: 'Finds an object on a back projection image using the Mean Shift algorithm.',
      ko: 'Mean Shift 알고리즘을 사용하여 역투영 이미지에서 객체를 찾습니다.',
      zh: '使用均值漂移算法在反向投影图像上查找对象。',
      ja: 'ミーンシフトアルゴリズムを使用して、逆投影画像上のオブジェクトを検索します。',
      de: 'Findet ein Objekt in einem Rückprojektionsbild mithilfe des Mean-Shift-Algorithmus.',
      es: 'Encuentra un objeto en una imagen de retroproyección mediante el algoritmo Mean Shift.',
      fr: 'Trouve un objet sur une image de rétroprojection en utilisant l\'algorithme Mean Shift.'
    },
    parameters: [
      {
        name: 'maxIter',
        type: 'slider',
        defaultValue: 10,
        min: 1,
        max: 100,
        step: 1,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.1,
        max: 10.0,
        step: 0.1,
        description: {
          en: 'Convergence precision',
          ko: '수렴 정밀도',
          zh: '收敛精度',
          ja: '収束精度',
          de: 'Konvergenzpräzision',
          es: 'Precisión de convergencia',
          fr: 'Précision de convergence'
        },
      },
    ],
    syntax: 'meanShift(probImage, window, criteria)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#ga9a32239e2372dac74e02c1c0e5ffdb2d',
  },
  {
    id: 'CamShift',
    name: {
      en: 'CamShift',
      ko: '캠시프트(CamShift)',
      zh: '连续自适应均值漂移',
      ja: 'カムシフト',
      de: 'CamShift',
      es: 'CamShift',
      fr: 'CamShift'
    },
    category: 'motion',
    description: {
      en: 'Finds an object center, size, and orientation using the CAMSHIFT algorithm.',
      ko: 'CAMSHIFT 알고리즘을 사용하여 객체의 중심, 크기 및 방향을 찾습니다.',
      zh: '使用 CAMSHIFT 算法查找对象的中心、大小和方向。',
      ja: 'CAMSHIFTアルゴリズムを使用して、オブジェクトの中心、サイズ、および方向を検索します。',
      de: 'Findet Objektzentrum, Größe und Orientierung mit dem CAMSHIFT-Algorithmus.',
      es: 'Encuentra el centro, el tamaño y la orientación del objeto mediante el algoritmo CAMSHIFT.',
      fr: 'Trouve le centre, la taille et l\'orientation d\'un objet en utilisant l\'algorithme CAMSHIFT.'
    },
    parameters: [
      {
        name: 'maxIter',
        type: 'slider',
        defaultValue: 10,
        min: 1,
        max: 100,
        step: 1,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.1,
        max: 10.0,
        step: 0.1,
        description: {
          en: 'Convergence precision',
          ko: '수렴 정밀도',
          zh: '收敛精度',
          ja: '収束精度',
          de: 'Konvergenzpräzision',
          es: 'Precisión de convergencia',
          fr: 'Précision de convergence'
        },
      },
    ],
    syntax: 'CamShift(probImage, window, criteria)',
    documentation: 'https://docs.opencv.org/4.12.0/d7/df3/group__imgproc__motion.html#gaef6dddc64c92b0d5d83c0db6f964e6d7',
  },
  {
    id: 'calcOpticalFlowPyrLK',
    name: {
      en: 'Optical Flow Pyramidal LK',
      ko: '피라미달 Lucas-Kanade 광학 흐름',
      zh: '金字塔 Lucas-Kanade 光流',
      ja: 'ピラミダル Lucas-Kanade オプティカルフロー',
      de: 'Pyramidales Lucas-Kanade Optischer Fluss',
      es: 'Flujo óptico Lucas-Kanade piramidal',
      fr: 'Flux optique Lucas-Kanade pyramidal'
    },
    category: 'motion',
    description: {
      en: 'Calculates an optical flow for a sparse feature set using the iterative Lucas-Kanade method with pyramids.',
      ko: '피라미드를 사용하는 반복적 Lucas-Kanade 방법을 이용하여 희소 특징점의 광학 흐름(optical flow)을 계산합니다.',
      zh: '使用带有金字塔的迭代 Lucas-Kanade 方法计算稀疏特征集的光流。',
      ja: 'ピラミッドを使用した反復 Lucas-Kanade 法を使用して、スパース（稀に）な特徴セットのオプティカルフローを計算します。',
      de: 'Berechnet einen optischen Fluss für einen spärlichen Merkmalsatz mithilfe der iterativen Lucas-Kanade-Methode mit Pyramiden.',
      es: 'Calcula un flujo óptico para un conjunto de características dispersas mediante el método iterativo Lucas-Kanade con pirámides.',
      fr: 'Calcule un flux optique pour un ensemble de caractéristiques éparses en utilisant la méthode itérative de Lucas-Kanade avec des pyramides.'
    },
    parameters: [
      {
        name: 'maxLevel',
        type: 'slider',
        defaultValue: 3,
        min: 0,
        max: 10,
        step: 1,
        description: {
          en: '0-based maximal pyramid level number (0 means single level)',
          ko: '피라미드 최대 레벨 (0은 단일 레벨을 의미)',
          zh: '基于 0 的最大金字塔层数（0 表示单层）',
          ja: '0ベースの最大ピラミッドレベル番号（0は単一レベルを意味します）',
          de: '0-basierte maximale Pyramidenebene (0 bedeutet eine einzelne Ebene)',
          es: 'Número máximo de nivel de pirámide basado en 0 (0 significa nivel único)',
          fr: 'Numéro de niveau de pyramide maximal basé sur 0 (0 signifie niveau unique)'
        },
      },
      {
        name: 'winSize',
        type: 'slider',
        defaultValue: 15,
        min: 3,
        max: 51,
        step: 2,
        description: {
          en: 'Size of the search window at each pyramid level',
          ko: '각 피라미드 레벨에서의 검색 윈도우 크기',
          zh: '每个金字塔层级的搜索窗口大小',
          ja: '各ピラミッドレベルでの検索ウィンドウのサイズ',
          de: 'Größe des Suchfensters auf jeder Pyramidenebene',
          es: 'Tamaño de la ventana de búsqueda en cada nivel de la pirámide',
          fr: 'Taille de la fenêtre de recherche à chaque niveau de pyramide'
        },
      },
      {
        name: 'maxIter',
        type: 'slider',
        defaultValue: 30,
        min: 1,
        max: 100,
        step: 1,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 0.01,
        min: 0.001,
        max: 1.0,
        step: 0.001,
        description: {
          en: 'Convergence precision',
          ko: '수렴 정밀도',
          zh: '收敛精度',
          ja: '収束精度',
          de: 'Konvergenzpräzision',
          es: 'Precisión de convergencia',
          fr: 'Précision de convergence'
        },
      },
    ],
    inputCount: 2,
    syntax: 'calcOpticalFlowPyrLK(prevImg, nextImg, prevPts, nextPts, status, err, winSize, maxLevel, criteria)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga473e4730810c2bd0d58f0258e26d9e0f',
  },
  {
    id: 'calcOpticalFlowFarneback',
    name: {
      en: 'Optical Flow Farneback',
      ko: '밀집 광학 흐름(Farneback)',
      zh: 'Farneback 稠密光流',
      ja: 'Farneback 密なオプティカルフロー',
      de: 'Farneback Dichter Optischer Fluss',
      es: 'Flujo óptico denso de Farneback',
      fr: 'Flux optique dense de Farneback'
    },
    category: 'motion',
    description: {
      en: 'Computes a dense optical flow using the Gunnar Farneback algorithm.',
      ko: 'Gunnar Farneback 알고리즘을 사용하여 밀집 광학 흐름(dense optical flow)을 계산합니다.',
      zh: '使用 Gunnar Farneback 算法计算稠密光流。',
      ja: 'Gunnar Farneback アルゴリズムを使用して、密な（デンス）オプティカルフローを計算します。',
      de: 'Berechnet einen dichten optischen Fluss mit dem Gunnar-Farneback-Algorithmus.',
      es: 'Calcula un flujo óptico denso mediante el algoritmo de Gunnar Farneback.',
      fr: 'Calcule un flux optique dense en utilisant l\'algorithme de Gunnar Farneback.'
    },
    parameters: [
      {
        name: 'pyrScale',
        type: 'slider',
        defaultValue: 0.5,
        min: 0.1,
        max: 0.9,
        step: 0.1,
        description: {
          en: 'Scale to build pyramids (image size ratio)',
          ko: '피라미드 스케일 (이미지 크기 비율)',
          zh: '构建金字塔的缩放比例（图像尺寸比例）',
          ja: 'ピラミッドを構築するためのスケール（画像サイズ比）',
          de: 'Maßstab zum Erstellen von Pyramiden (Bildgrößenverhältnis)',
          es: 'Escala para construir pirámides (relación de tamaño de imagen)',
          fr: 'Échelle pour construire des pyramides (rapport de taille d\'image)'
        },
      },
      {
        name: 'levels',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Number of pyramid levels',
          ko: '피라미드 레벨 수',
          zh: '金字塔层数',
          ja: 'ピラミッドレベルの数',
          de: 'Anzahl der Pyramidenebenen',
          es: 'Número de niveles de la pirámide',
          fr: 'Nombre de niveaux de pyramide'
        },
      },
      {
        name: 'winsize',
        type: 'slider',
        defaultValue: 15,
        min: 3,
        max: 51,
        step: 2,
        description: {
          en: 'Averaging window size',
          ko: '평균 윈도우 크기',
          zh: '平均窗口大小',
          ja: '平均ウィンドウサイズ',
          de: 'Größe des Mittelungsfensters',
          es: 'Tamaño de la ventana de promedio',
          fr: 'Taille de la fenêtre de moyenne'
        },
      },
      {
        name: 'iterations',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Number of iterations at each pyramid level',
          ko: '각 피라미드 레벨에서의 반복 횟수',
          zh: '每个金字塔层级的迭代次数',
          ja: '各ピラミッドレベルでの繰り返し回数',
          de: 'Anzahl der Iterationen auf jeder Pyramidenebene',
          es: 'Número de iteraciones en cada nivel de la pirámide',
          fr: 'Nombre d\'itérations à chaque niveau de pyramide'
        },
      },
      {
        name: 'polyN',
        type: 'slider',
        defaultValue: 5,
        min: 5,
        max: 7,
        step: 2,
        description: {
          en: 'Size of the pixel neighborhood (usually 5 or 7)',
          ko: '픽셀 이웃 크기 (일반적으로 5 또는 7)',
          zh: '像素邻域大小（通常为 5 或 7）',
          ja: 'ピクセル近傍のサイズ（通常は 5 または 7）',
          de: 'Größe der Pixelelleachbarschaft (normalerweise 5 oder 7)',
          es: 'Tamaño del vecindario de píxeles (generalmente 5 o 7)',
          fr: 'Taille du voisinage de pixels (généralement 5 ou 7)'
        },
      },
      {
        name: 'polySigma',
        type: 'slider',
        defaultValue: 1.2,
        min: 1.1,
        max: 2.0,
        step: 0.1,
        description: {
          en: 'Gaussian standard deviation',
          ko: '가우시안 표준편차',
          zh: '高斯标准差',
          ja: 'ガウスの標準偏差',
          de: 'Gauß-Standardabweichung',
          es: 'Desviación estándar gaussiana',
          fr: 'Écart-type gaussien'
        },
      },
    ],
    inputCount: 2,
    requiresGrayscale: true,
    syntax: 'calcOpticalFlowFarneback(prev, next, flow, pyr_scale, levels, winsize, iterations, poly_n, poly_sigma, flags)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga5d10ebbd59fe09c5f650289ec0ece5af',
  },
  {
    id: 'buildOpticalFlowPyramid',
    name: {
      en: 'Build Optical Flow Pyramid',
      ko: '광학 흐름 피라미드 생성',
      zh: '构建光流金字塔',
      ja: 'オプティカルフローピラミッドの構築',
      de: 'Optischer-Fluss-Pyramide erstellen',
      es: 'Construir pirámide de flujo óptico',
      fr: 'Construire une pyramide de flux optique'
    },
    category: 'motion',
    description: {
      en: 'Constructs an image pyramid for sparse optical flow computations.',
      ko: '희소 광학 흐름(sparse optical flow) 계산을 위한 이미지 피라미드를 생성합니다.',
      zh: '为稀疏光流计算构建图像金字塔。',
      ja: 'スパースなオプティカルフロー計算用の画像ピラミッドを構築します。',
      de: 'Erstellt eine Bildpyramide für spärliche optische Flussberechnungen.',
      es: 'Construye una pirámide de imágenes para cálculos de flujo óptico disperso.',
      fr: 'Construit une pyramide d\'images pour les calculs de flux optique éparses.'
    },
    parameters: [
      {
        name: 'winSize',
        type: 'slider',
        defaultValue: 15,
        min: 3,
        max: 51,
        step: 2,
        description: {
          en: 'Window size',
          ko: '윈도우 크기',
          zh: '窗口大小',
          ja: 'ウィンドウサイズ',
          de: 'Fenstergröße',
          es: 'Tamaño de ventana',
          fr: 'Taille de la fenêtre'
        },
      },
      {
        name: 'maxLevel',
        type: 'slider',
        defaultValue: 3,
        min: 0,
        max: 10,
        step: 1,
        description: {
          en: 'Maximum level of the pyramid',
          ko: '피라미드 최대 레벨',
          zh: '金字塔最大层数',
          ja: 'ピラミッドの最大レベル',
          de: 'Maximale Ebene der Pyramide',
          es: 'Nivel máximo de la pirámide',
          fr: 'Niveau maximum de la pyramide'
        },
      },
      {
        name: 'withDerivatives',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'With derivatives', ko: '미분 포함', zh: '包括导数', ja: '微分を含む', de: 'Mit Ableitungen', es: 'Con derivadas', fr: 'Avec dérivées' }, value: true },
          { label: { en: 'Without derivatives', ko: '미분 제외', zh: '不包括导数', ja: '微分を含まない', de: 'Ohne Ableitungen', es: 'Sin derivadas', fr: 'Sans dérivées' }, value: false },
        ],
        description: {
          en: 'Whether to compute spatial derivatives',
          ko: '공간 미분 계산 여부',
          zh: '是否计算空间导数',
          ja: '空間微分を計算するかどうか',
          de: 'Ob räumliche Ableitungen berechnet werden sollen',
          es: 'Si calcular derivadas espaciales',
          fr: 'S\'il faut calculer les dérivées spatiales'
        },
      },
    ],
    syntax: 'buildOpticalFlowPyramid(img, pyramid, winSize, maxLevel, withDerivatives)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga7c6f62486d2b42e6b27f7f1c3e9c8696',
  },
  {
    id: 'estimateAffine2D',
    name: {
      en: 'Estimate Affine 2D',
      ko: '2D 아핀 변환 추정',
      zh: '估算 2D 仿射变换',
      ja: '2D アフィン変換の推定',
      de: '2D-Affine-Transformation schätzen',
      es: 'Estimación afin 2D',
      fr: 'Estimer une transformation affine 2D'
    },
    category: 'motion',
    description: {
      en: 'Estimates an optimal 2D affine transformation between two 2D point sets.',
      ko: '두 2D 점 집합 간의 최적 아핀 변환 행렬을 추정합니다. 모션 추정 등에 사용됩니다.',
      zh: '估计两个 2D 点集之间的最佳 2D 仿射变换。',
      ja: '2つの 2D 点セット間の最適な 2D アフィン変換を推定します。',
      de: 'Schätzt eine optimale affine 2D-Transformation zwischen zwei 2D-Punktsätzen.',
      es: 'Estima una transformación afín 2D óptima entre dos conjuntos de puntos 2D.',
      fr: 'Estime une transformation affine 2D optimale entre deux ensembles de points 2D.'
    },
    parameters: [
      {
        name: 'method',
        type: 'select',
        defaultValue: 'RANSAC',
        options: [
          { label: 'RANSAC', value: 'RANSAC' },
          { label: 'LMEDS', value: 'LMEDS' },
        ],
        description: {
          en: 'Robust estimation method',
          ko: '강인한 추정 방법',
          zh: '鲁棒估计方法',
          ja: '堅牢な推定方法',
          de: 'Robuste Schätzmethode',
          es: 'Método de estimación robusto',
          fr: 'Méthode d\'estimation robuste'
        },
      },
      {
        name: 'ransacThreshold',
        type: 'slider',
        defaultValue: 3.0,
        min: 0.1,
        max: 10.0,
        step: 0.1,
        description: {
          en: 'Maximum allowed distance for inliers (RANSAC)',
          ko: '인라이어(정상치)로 허용되는 최대 거리 (RANSAC)',
          zh: '内点的最大允许距离 (RANSAC)',
          ja: 'インライアとして許可される最大距離 (RANSAC)',
          de: 'Maximal zulässiger Abstand für Inlier (RANSAC)',
          es: 'Distancia máxima permitida para valores atípicos (RANSAC)',
          fr: 'Distance maximale autorisée pour les inliers (RANSAC)'
        },
      },
      {
        name: 'maxIters',
        type: 'slider',
        defaultValue: 2000,
        min: 100,
        max: 10000,
        step: 100,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'confidence',
        type: 'slider',
        defaultValue: 0.99,
        min: 0.9,
        max: 0.999,
        step: 0.001,
        description: {
          en: 'Confidence level (0 to 1)',
          ko: '신뢰도 (0에서 1 사이)',
          zh: '置信度（0 到 1）',
          ja: '信頼レベル（0から1）',
          de: 'Konfidenzniveau (0 bis 1)',
          es: 'Nivel de confianza (0 a 1)',
          fr: 'Niveau de confiance (0 à 1)'
        },
      },
    ],
    inputCount: 2,
    syntax: 'estimateAffine2D(from, to, inliers, method, ransacReprojThreshold, maxIters, confidence)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga27865b1d26bac9ce91efaee83e94d4dd',
  },
  {
    id: 'estimateAffinePartial2D',
    name: {
      en: 'Estimate Affine Partial 2D',
      ko: '부분적 아핀 변환 추정',
      zh: '估算局部 2D 仿射变换',
      ja: '部分的な 2D アフィン変換の推定',
      de: 'Partielle affine 2D-Transformation schätzen',
      es: 'Estimación afin parcial 2D',
      fr: 'Estimer une transformation affine partielle 2D'
    },
    category: 'motion',
    description: {
      en: 'Estimates a partial affine transformation (rotation, translation, and scale).',
      ko: '회전, 이동 및 스케일링만 포함하는 부분적 아핀 변환을 추정합니다.',
      zh: '估计局部仿射变换（旋转、平移和缩放）。',
      ja: '部分的なアフィン変換（回転、移動、スケール）を推定します。',
      de: 'Schätzt eine partielle affine Transformation (Rotation, Translation und Skalierung).',
      es: 'Estima una transformación afín parcial (rotación, traslación y escala).',
      fr: 'Estime une transformation affine partielle (rotation, translation et échelle).'
    },
    parameters: [
      {
        name: 'method',
        type: 'select',
        defaultValue: 'RANSAC',
        options: [
          { label: 'RANSAC', value: 'RANSAC' },
          { label: 'LMEDS', value: 'LMEDS' },
        ],
        description: {
          en: 'Robust estimation method',
          ko: '강인한 추정 방법',
          zh: '鲁棒估计方法',
          ja: '堅牢な推定方法',
          de: 'Robuste Schätzmethode',
          es: 'Método de estimación robusto',
          fr: 'Méthode d\'estimation robuste'
        },
      },
      {
        name: 'ransacThreshold',
        type: 'slider',
        defaultValue: 3.0,
        min: 0.1,
        max: 10.0,
        step: 0.1,
        description: {
          en: 'Maximum allowed distance for inliers (RANSAC)',
          ko: '인라이어(정상치)로 허용되는 최대 거리 (RANSAC)',
          zh: '内点的最大允许距离 (RANSAC)',
          ja: 'インライアとして許可される最大距離 (RANSAC)',
          de: 'Maximal zulässiger Abstand für Inlier (RANSAC)',
          es: 'Distancia máxima permitida para valores atípicos (RANSAC)',
          fr: 'Distance maximale autorisée pour les inliers (RANSAC)'
        },
      },
      {
        name: 'maxIters',
        type: 'slider',
        defaultValue: 2000,
        min: 100,
        max: 10000,
        step: 100,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'confidence',
        type: 'slider',
        defaultValue: 0.99,
        min: 0.9,
        max: 0.999,
        step: 0.001,
        description: {
          en: 'Confidence level (0 to 1)',
          ko: '신뢰도 (0에서 1 사이)',
          zh: '置信度（0 到 1）',
          ja: '信頼レベル（0から1）',
          de: 'Konfidenzniveau (0 bis 1)',
          es: 'Nivel de confianza (0 a 1)',
          fr: 'Niveau de confiance (0 à 1)'
        },
      },
    ],
    inputCount: 2,
    syntax: 'estimateAffinePartial2D(from, to, inliers, method, ransacReprojThreshold, maxIters, confidence)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gadf69bd46f00dbbe48be993414972e3a1',
  },
  {
    id: 'findTransformECC',
    name: {
      en: 'Find Transform ECC',
      ko: 'ECC 변환 생성',
      zh: '寻找 ECC 变换',
      ja: 'ECC 変換の検索',
      de: 'ECC-Transformation finden',
      es: 'Encontrar transformación ECC',
      fr: 'Trouver une transformation ECC'
    },
    category: 'motion',
    description: {
      en: 'Finds the geometric transformation between two images in terms of the Enhanced Correlation Coefficient (ECC).',
      ko: 'ECC(향상된 상관 계수)를 최대화하여 두 이미지 간의 기하학적 변환을 찾습니다.',
      zh: '使用增强相关系数 (ECC) 寻找两个图像之间的几何变换。',
      ja: '拡張相関係数 (ECC) を使用して、2つの画像間の幾何学的変換を検索します。',
      de: 'Findet die geometrische Transformation zwischen zwei Bildern basierend auf dem Enhanced Correlation Coefficient (ECC).',
      es: 'Encuentra la transformación geométrica entre dos imágenes en términos del coeficiente de correlación mejorado (ECC).',
      fr: 'Trouve la transformation géométrique entre deux images en termes de coefficient de corrélation amélioré (ECC).'
    },
    parameters: [
      {
        name: 'motionType',
        type: 'select',
        defaultValue: 'MOTION_AFFINE',
        options: [
          { label: { en: 'Translation', ko: '이동 (Translation)', zh: '平移', ja: '平行移動', de: 'Translation', es: 'Traslación', fr: 'Translation' }, value: 'MOTION_TRANSLATION' },
          { label: { en: 'Euclidean', ko: '유클리드 (Euclidean)', zh: '欧几里得', ja: 'ユークリッド', de: 'Euklidisch', es: 'Euclidiano', fr: 'Euclidien' }, value: 'MOTION_EUCLIDEAN' },
          { label: { en: 'Affine', ko: '아핀 (Affine)', zh: '仿射', ja: 'アフィン', de: 'Affin', es: 'Afín', fr: 'Affine' }, value: 'MOTION_AFFINE' },
          { label: { en: 'Homography', ko: '호모그래피 (Homography)', zh: '单应性', ja: 'ホモグラフィ', de: 'Homographie', es: 'Homografía', fr: 'Homographie' }, value: 'MOTION_HOMOGRAPHY' },
        ],
        description: {
          en: 'Motion model',
          ko: '모션 모델',
          zh: '运动模型',
          ja: 'モーションモデル',
          de: 'Bewegungsmodell',
          es: 'Modelo de movimiento',
          fr: 'Modèle de mouvement'
        },
      },
      {
        name: 'maxIters',
        type: 'slider',
        defaultValue: 50,
        min: 1,
        max: 200,
        step: 1,
        description: {
          en: 'Maximum number of iterations',
          ko: '최대 반복 횟수',
          zh: '最大迭代次数',
          ja: '最大繰り返し回数',
          de: 'Maximale Anzahl der Iterationen',
          es: 'Número máximo de iteraciones',
          fr: 'Nombre maximum d\'itérations'
        },
      },
      {
        name: 'epsilon',
        type: 'slider',
        defaultValue: 0.001,
        min: 0.0001,
        max: 0.1,
        step: 0.0001,
        description: {
          en: 'Convergence precision',
          ko: '수렴 정밀도',
          zh: '收敛精度',
          ja: '収束精度',
          de: 'Konvergenzpräzision',
          es: 'Precisión de convergencia',
          fr: 'Précision de convergence'
        },
      },
    ],
    inputCount: 2,
    syntax: 'findTransformECC(templateImage, inputImage, warpMatrix, motionType, criteria, inputMask)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga1af2a7cc97c0e20e42b0e449e4f4f1fe',
  },
  {
    id: 'readOpticalFlow',
    name: {
      en: 'Read Optical Flow',
      ko: '광학 흐름 읽기',
      zh: '读取光流',
      ja: 'オプティカルフローの読み込み',
      de: 'Optischer Fluss lesen',
      es: 'Leer flujo óptico',
      fr: 'Lire le flux optique'
    },
    category: 'motion',
    description: {
      en: 'Reads an optical flow from a file. Currently supports .flo files.',
      ko: '파일에서 광학 흐름(optical flow)을 읽어옵니다. 현재 .flo 포맷을 지원합니다.',
      zh: '从文件中读取光流。当前支持 .flo 文件。',
      ja: 'ファイルからオプティカルフローを読み込みます。現在 .flo ファイルをサポートしています。',
      de: 'Liest einen optischen Fluss aus einer Datei. Unterstützt derzeit .flo-Dateien.',
      es: 'Lee un flujo óptico desde un archivo. Actualmente admite archivos .flo.',
      fr: 'Lit un flux optique à partir d\'un fichier. Prend actuellement en charge les fichiers .flo.'
    },
    parameters: [
      {
        name: 'format',
        type: 'select',
        defaultValue: '.flo',
        options: [
          { label: '.flo (Middlebury)', value: '.flo' },
        ],
        description: {
          en: 'File format',
          ko: '파일 포맷',
          zh: '文件格式',
          ja: 'ファイル形式',
          de: 'Datei-Format',
          es: 'Formato de archivo',
          fr: 'Format de fichier'
        },
      },
    ],
    syntax: 'readOpticalFlow(path)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga3d2b2762eaa4ba3c7e7b3d3f3d0c2e56',
  },
  {
    id: 'writeOpticalFlow',
    name: {
      en: 'Write Optical Flow',
      ko: '광학 흐름 저장',
      zh: '写入光流',
      ja: 'オプティカルフローの書き込み',
      de: 'Optischer Fluss schreiben',
      es: 'Escribir flujo óptico',
      fr: 'Écrire le flux optique'
    },
    category: 'motion',
    description: {
      en: 'Writes an optical flow to a file in .flo format.',
      ko: '광학 흐름을 .flo 포맷 파일로 저장합니다.',
      zh: '将光流以 .flo 格式写入文件。',
      ja: 'オプティカルフローを .flo 形式でファイルに書き込みます。',
      de: 'Schreibt einen optischen Fluss im .flo-Format in eine Datei.',
      es: 'Escribe un flujo óptico en un archivo en formato .flo.',
      fr: 'Écrit un flux optique dans un fichier au format .flo.'
    },
    parameters: [
      {
        name: 'format',
        type: 'select',
        defaultValue: '.flo',
        options: [
          { label: '.flo (Middlebury)', value: '.flo' },
        ],
        description: {
          en: 'File format',
          ko: '파일 포맷',
          zh: '文件格式',
          ja: 'ファイル形式',
          de: 'Datei-Format',
          es: 'Formato de archivo',
          fr: 'Format de fichier'
        },
      },
    ],
    syntax: 'writeOpticalFlow(path, flow)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#ga69fd6eb1e82708b5a9ca5c202e5b5d1c',
  },
  {
    id: 'calcOpticalFlowSF',
    name: 'Optical Flow Simple Flow',
    category: 'motion',
    description: 'SimpleFlow 알고리즘을 사용하여 밀집 광학 흐름을 계산합니다.',
    parameters: [
      {
        name: 'layers',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 10,
        step: 1,
        description: '피라미드 레벨 수',
      },
      {
        name: 'averagingBlockSize',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: '평균화 블록 크기',
      },
      {
        name: 'maxFlow',
        type: 'slider',
        defaultValue: 4,
        min: 1,
        max: 20,
        step: 1,
        description: '최대 흐름 값',
      },
    ],
    inputCount: 2,
    syntax: 'calcOpticalFlowSF(from, to, flow, layers, averaging_block_size, max_flow)',
    documentation: 'https://docs.opencv.org/4.x/de/de1/group__video__motion.html#gacfdb078200b5b1d33d8be7e98f8ec2f0',
  },

  // 객체 추적 (Object Tracking)
  {
    id: 'trackerMIL',
    name: {
      en: 'Tracker MIL',
      ko: 'MIL 추적기 (Multiple Instance Learning)',
      zh: 'MIL 跟踪器',
      ja: 'MIL トラッカー',
      de: 'MIL-Tracker',
      es: 'Tracker MIL',
      fr: 'Tracker MIL'
    },
    category: 'tracking',
    description: {
      en: 'Discriminative MIL (Multiple Instance Learning) tracker. Stable even when the object shape changes.',
      ko: 'MIL(Multiple Instance Learning) 기법을 사용한 추적기입니다. 객체의 모양이 변하는 상황에서도 비교적 안정적으로 추적을 유지합니다.',
      zh: '判别式 MIL (多实例学习) 跟踪器。即使物体形状发生变化也能保持稳定。',
      ja: '判別 MIL (多インスタンス学習) トラッカーです。オブジェクトの形状が変化する場合でも安定しています。',
      de: 'Diskriminativer MIL-Tracker (Multiple Instance Learning). Stabil, auch wenn sich die Objektform ändert.',
      es: 'Tracker MIL (Multiple Instance Learning) discriminativo. Estable incluso cuando la forma del objeto cambia.',
      fr: 'Tracker MIL (Multiple Instance Learning) discriminatif. Stable même lorsque la forme de l\'objet change.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerMIL_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d0/d26/classcv_1_1TrackerMIL.html',
  },
  {
    id: 'trackerKCF',
    name: {
      en: 'Tracker KCF',
      ko: 'KCF 추적기 (Kernelized Correlation Filters)',
      zh: 'KCF 跟踪器',
      ja: 'KCF トラッカー',
      de: 'KCF-Tracker',
      es: 'Tracker KCF',
      fr: 'Tracker KCF'
    },
    category: 'tracking',
    description: {
      en: 'Kernelized Correlation Filters tracker. Fast and accurate for many scenarios.',
      ko: '커널 상관 필터(KCF)를 기반으로 한 추적기입니다. 처리 속도가 빠르고 정확도가 높아 널리 사용됩니다.',
      zh: '核相关滤波器跟踪器。在许多场景下既快又准。',
      ja: '核相関フィルタを用いたトラッカーです。多くのシナリオで高速かつ正確です。',
      de: 'Kernelized Correlation Filters Tracker. Schnell und genau für viele Szenarien.',
      es: 'Tracker KCF (Kernelized Correlation Filters). Rápido y preciso para muchos escenarios.',
      fr: 'Tracker KCF (Kernelized Correlation Filters). Rapide et précis pour de nombreux scénarios.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
      {
        name: 'detect_thresh',
        type: 'slider',
        defaultValue: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        description: {
          en: 'Detection threshold',
          ko: '검출 임계값',
          zh: '检测阈值',
          ja: '検出のしきい値',
          de: 'Erkennungsschwellwert',
          es: 'Umbral de detección',
          fr: 'Seuil de détection'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerKCF_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d2/dff/classcv_1_1TrackerKCF.html',
  },
  {
    id: 'trackerCSRT',
    name: {
      en: 'Tracker CSRT',
      ko: 'CSRT 추적기 (Channel & Spatial Reliability)',
      zh: 'CSRT 跟踪器',
      ja: 'CSRT トラッカー',
      de: 'CSRT-Tracker',
      es: 'Tracker CSRT',
      fr: 'Tracker CSRT'
    },
    category: 'tracking',
    description: {
      en: 'Discriminative Correlation Filter with Channel and Spatial Reliability tracker. Highly accurate but slower.',
      ko: '채널 및 공간 신뢰도를 고려한 상관 필터(CSRT) 추적기입니다. 복잡한 환경에서도 정확도가 매우 높지만 속도는 다소 느립니다.',
      zh: '具有通道和空间可靠性的判别式相关滤波器跟踪器。精度高但速度慢。',
      ja: 'チャネルおよび空間的な信頼性を備えたトラッカーです。精度が非常に高いですが、低速です。',
      de: 'CSRT-Tracker (Discriminative Correlation Filter with Channel and Spatial Reliability). Hochpräzise, aber langsamer.',
      es: 'Tracker CSRT (Discriminative Correlation Filter with Channel and Spatial Reliability). Muy preciso pero más lento.',
      fr: 'Tracker CSRT (Discriminative Correlation Filter with Channel and Spatial Reliability). Très précis mais plus lent.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
      {
        name: 'use_hog',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'True (Use HOG)', ko: 'True (HOG 사용)', zh: 'True (使用 HOG)', ja: 'True (HOGを使用)', de: 'True (HOG verwenden)', es: 'True (Usar HOG)', fr: 'True (Utiliser HOG)' }, value: true },
          { label: { en: 'False (No HOG)', ko: 'False (HOG 미사용)', zh: 'False (不使用 HOG)', ja: 'False (HOGを使用しない)', de: 'False (Kein HOG)', es: 'False (No usar HOG)', fr: 'False (Pas de HOG)' }, value: false },
        ],
        description: {
          en: 'Whether to use HOG features',
          ko: 'HOG 특징 사용 여부',
          zh: '是否使用 HOG 特征',
          ja: 'HOG 特徴を使用するかどうか',
          de: 'Ob HOG-Merkmale verwendet werden sollen',
          es: 'Si usar características HOG',
          fr: 'Si utiliser des caractéristiques HOG'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerCSRT_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d2/da2/classcv_1_1TrackerCSRT.html',
  },
  {
    id: 'trackerMedianFlow',
    name: {
      en: 'Tracker Median Flow',
      ko: 'Median Flow 추적기',
      zh: 'Median Flow 跟踪器',
      ja: 'Median Flow トラッカー',
      de: 'Median-Flow-Tracker',
      es: 'Tracker Median Flow',
      fr: 'Tracker Median Flow'
    },
    category: 'tracking',
    description: {
      en: 'Median Flow tracker. Effective for predictable motion and fail detection.',
      ko: 'Median Flow 기법을 사용한 추적기입니다. 움직임이 급격하지 않을 때 효과적이며, 추적 실패를 잘 감지해냅니다.',
      zh: 'Median Flow 跟踪器。对比可预测运动和失败检测非常有效。',
      ja: 'Median Flow トラッカーです。予測可能な動きや、失敗の検出に効果的です。',
      de: 'Median-Flow-Tracker. Effektiv für vorhersehbare Bewegungen und zur Fehlererkennung.',
      es: 'Tracker Median Flow. Efectivo para el movimiento predecible y la detección de fallos.',
      fr: 'Tracker Median Flow. Efficace pour les mouvements prévisibles et la détection d\'échecs.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
      {
        name: 'pointsInGrid',
        type: 'slider',
        defaultValue: 10,
        min: 5,
        max: 20,
        step: 1,
        description: {
          en: 'Number of points in grid',
          ko: '격차당 점의 개수',
          zh: '网格中的点数',
          ja: 'グリッド内の点の数',
          de: 'Anzahl der Punkte im Raster',
          es: 'Número de puntos en la cuadrícula',
          fr: 'Nombre de points dans la grille'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerMedianFlow_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d7/d86/classcv_1_1TrackerMedianFlow.html',
  },
  {
    id: 'trackerMOSSE',
    name: {
      en: 'Tracker MOSSE',
      ko: 'MOSSE 추적기 (Minimum Output Sum of Squared Error)',
      zh: 'MOSSE 跟踪器',
      ja: 'MOSSE トラッカー',
      de: 'MOSSE-Tracker',
      es: 'Tracker MOSSE',
      fr: 'Tracker MOSSE'
    },
    category: 'tracking',
    description: {
      en: 'MOSSE (Minimum Output Sum of Squared Error) tracker. Extremely fast but low accuracy.',
      ko: 'MOSSE 알고리즘을 사용한 추적기입니다. 처리 속도가 매우 빠르지만 다른 최신 추적기에 비해 정확도는 다소 떨어집니다.',
      zh: 'MOSSE (最小输出平方误差和) 跟踪器。极快，但精度较低。',
      ja: 'MOSSE トラッカーです。非常に高速ですが、精度は低くなります。',
      de: 'MOSSE-Tracker (Minimum Output Sum of Squared Error). Extrem schnell, aber geringe Genauigkeit.',
      es: 'Tracker MOSSE (Minimum Output Sum of Squared Error). Extremadamente rápido pero de baja precisión.',
      fr: 'Tracker MOSSE (Minimum Output Sum of Squared Error). Extrêmement rapide mais de faible précision.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerMOSSE_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d0/d02/classcv_1_1TrackerMOSSE.html',
  },
  {
    id: 'trackerBoosting',
    name: {
      en: 'Tracker Boosting',
      ko: 'Boosting 추적기',
      zh: 'Boosting 跟踪器',
      ja: 'Boosting トラッカー',
      de: 'Boosting-Tracker',
      es: 'Tracker Boosting',
      fr: 'Tracker Boosting'
    },
    category: 'tracking',
    description: {
      en: 'Boosting tracker. Older algorithm based on online adaboost.',
      ko: '온라인 아다부스트(AdaBoost)를 기반으로 한 초기 단계의 추적 알고리즘입니다. 현재는 다른 추적기에 비해 성능이 낮은 편입니다.',
      zh: 'Boosting 跟踪器。基于在线 adaboost 的较旧算法。',
      ja: 'Boosting トラッカーです。オンライン adaboost に基づく古いアルゴリズムです。',
      de: 'Boosting-Tracker. Älterer Algorithmus basierend auf Online-Adaboost.',
      es: 'Tracker Boosting. Algoritmo más antiguo basado en adaboost en línea.',
      fr: 'Tracker Boosting. Algorithme plus ancien basé sur adaboost en ligne.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
      {
        name: 'numClassifiers',
        type: 'slider',
        defaultValue: 100,
        min: 10,
        max: 250,
        step: 10,
        description: {
          en: 'Number of weak classifiers',
          ko: '약한 분류기 개수',
          zh: '弱分类器数量',
          ja: '弱分類器の数',
          de: 'Anzahl schwacher Klassifikatoren',
          es: 'Número de clasificadores débiles',
          fr: 'Nombre de classificateurs faibles'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerBoosting_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d1/d1a/classcv_1_1TrackerBoosting.html',
  },
  {
    id: 'trackerGOTURN',
    name: {
      en: 'Tracker GOTURN',
      ko: 'GOTURN 추적기 (Generic Object Tracking Using Regression Networks)',
      zh: 'GOTURN 跟踪器',
      ja: 'GOTURN トラッカー',
      de: 'GOTURN-Tracker',
      es: 'Tracker GOTURN',
      fr: 'Tracker GOTURN'
    },
    category: 'tracking',
    description: {
      en: 'Generic Object Tracking Using Regression Networks. Deep learning based tracker.',
      ko: '딥러닝(회귀 네트워크)을 사용하여 사전에 학습된 데이터를 바탕으로 일반적인 객체를 추적합니다.',
      zh: '使用回归网络的通用对象跟踪。基于深度学习的跟踪器。',
      ja: '回帰ネットワークを使用した一般的なオブジェクトの追跡です。ディープラーニングベースのトラッカーです。',
      de: 'Generic Object Tracking Using Regression Networks. Deep-Learning-basierter Tracker.',
      es: 'Tracker GOTURN (Generic Object Tracking Using Regression Networks). Rastreador basado en aprendizaje profundo.',
      fr: 'Tracker GOTURN (Generic Object Tracking Using Regression Networks). Suivi basé sur l\'apprentissage profond.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerGOTURN_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/d7/d4c/classcv_1_1TrackerGOTURN.html',
  },
  {
    id: 'trackerTLD',
    name: {
      en: 'Tracker TLD',
      ko: 'TLD 추적기 (Tracking, Learning and Detection)',
      zh: 'TLD 跟踪器',
      ja: 'TLD トラッカー',
      de: 'TLD-Tracker',
      es: 'Tracker TLD',
      fr: 'Tracker TLD'
    },
    category: 'tracking',
    description: {
      en: 'Tracking, Learning and Detection tracker. Good for long-term tracking.',
      ko: '추적(Tracking), 학습(Learning), 검출(Detection) 세 가지 과정을 결합하여 장기간 객체 추적에 효과적인 성능을 발휘합니다.',
      zh: '跟踪、学习和检测跟踪器。适合长期跟踪。',
      ja: '追跡、学習、検出を組み合わせたトラッカーです。長期的な追跡に適しています。',
      de: 'TLD-Tracker (Tracking, Learning and Detection). Gut für Langzeit-Tracking.',
      es: 'Tracker TLD (Tracking, Learning and Detection). Bueno para el seguimiento a largo plazo.',
      fr: 'Tracker TLD (Tracking, Learning and Detection). Bon pour le suivi à long terme.'
    },
    parameters: [
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 640,
        step: 1,
        description: {
          en: 'Initial X coordinate',
          ko: '추적 영역 시작 X 좌표',
          zh: '初始 X 坐标',
          ja: '初期 X 座標',
          de: 'Anfängliche X-Koordinate',
          es: 'Coordenada X inicial',
          fr: 'Coordonnée X initiale'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 480,
        step: 1,
        description: {
          en: 'Initial Y coordinate',
          ko: '추적 영역 시작 Y 좌표',
          zh: '初始 Y 坐标',
          ja: '初期 Y 座標',
          de: 'Anfängliche Y-Koordinate',
          es: 'Coordenada Y inicial',
          fr: 'Coordonnée Y initiale'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Width of tracking box',
          ko: '추적 영역 너비',
          zh: '跟踪框宽度',
          ja: '追跡ボックスの幅',
          de: 'Breite der Tracking-Box',
          es: 'Ancho del cuadro de seguimiento',
          fr: 'Largeur de la boîte de suivi'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 150,
        min: 10,
        max: 400,
        step: 1,
        description: {
          en: 'Height of tracking box',
          ko: '추적 영역 높이',
          zh: '跟踪框高度',
          ja: '追跡ボックスの高さ',
          de: 'Höhe der Tracking-Box',
          es: 'Altura del cuadro de seguimiento',
          fr: 'Hauteur de la boîte de suivi'
        },
      },
    ],
    syntax: 'tracker = cv2.TrackerTLD_create(); tracker.init(frame, bbox)',
    documentation: 'https://docs.opencv.org/4.x/dc/d1c/classcv_1_1TrackerTLD.html',
  },
  {
    id: 'createBackgroundSubtractorMOG2',
    name: {
      en: 'Background Subtractor MOG2',
      ko: '배경 차분 MOG2',
      zh: '背景减除 MOG2',
      ja: '背景差分 MOG2',
      de: 'Hintergrund-Subtraktion MOG2',
      es: 'Sustractor de fondo MOG2',
      fr: 'Soustraction de fond MOG2'
    },
    category: 'tracking',
    description: {
      en: 'Gaussian Mixture-based Background/Foreground Segmentation algorithm.',
      ko: '가우시안 혼합 모델(MOG2)을 사용하여 배경을 학습하고 움직이는 전경 객체를 검출합니다.',
      zh: '基于高斯混合模型的背景/前景分割算法。',
      ja: '混合ガウス分布に基づく背景・前景セグメンテーションアルゴリズムです。',
      de: 'Gaußscher Mischmodell-basierter Hintergrund/Vordergrund-Segmentierungsalgorithmus.',
      es: 'Algoritmo de segmentación de fondo/primer plano basado en mezcla gaussiana.',
      fr: 'Algorithme de segmentation arrière-plan/avant-plan basé sur un mélange gaussien.'
    },
    parameters: [
      {
        name: 'history',
        type: 'slider',
        defaultValue: 500,
        min: 100,
        max: 1000,
        step: 50,
        description: {
          en: 'Number of history frames',
          ko: '히스토리 길이 (프레임 수)',
          zh: '历史帧数',
          ja: '履歴フレームの数',
          de: 'Anzahl der Historien-Frames',
          es: 'Número de fotogramas de historial',
          fr: 'Nombre d\'images d\'historique'
        },
      },
      {
        name: 'varThreshold',
        type: 'slider',
        defaultValue: 16,
        min: 4,
        max: 100,
        step: 4,
        description: {
          en: 'Threshold on the squared Mahalanobis distance',
          ko: '분산 임계값',
          zh: '马氏距离平方的阈值',
          ja: 'マハラノビス距離の二乗のしきい値',
          de: 'Schwellenwert für die quadrierte Mahalanobis-Distanz',
          es: 'Umbral en la distancia de Mahalanobis al cuadrado',
          fr: 'Seuil sur la distance de Mahalanobis au carré'
        },
      },
      {
        name: 'detectShadows',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'True (Detect)', ko: 'True (그림자 검출)', zh: 'True (检测)', ja: 'True (検出する)', de: 'True (Erkennen)', es: 'True (Detectar)', fr: 'True (Détecter)' }, value: true },
          { label: { en: 'False (Ignore)', ko: 'False (그림자 미검출)', zh: 'False (忽略)', ja: 'False (検出しない)', de: 'False (Ignorieren)', es: 'False (Ignorar)', fr: 'False (Ignorer)' }, value: false },
        ],
        description: {
          en: 'Whether to detect and mark shadows',
          ko: '그림자 검출 여부',
          zh: '是否检测并标记阴影',
          ja: '影を検出してマークするかどうか',
          de: 'Ob Schatten erkannt und markiert werden sollen',
          es: 'Si detectar y marcar sombras',
          fr: 'Si détecter et marquer les ombres'
        },
      },
    ],
    syntax: 'backSub = cv2.createBackgroundSubtractorMOG2(history, varThreshold, detectShadows)',
    documentation: 'https://docs.opencv.org/4.x/d7/d7b/classcv_1_1BackgroundSubtractorMOG2.html',
  },
  {
    id: 'createBackgroundSubtractorKNN',
    name: {
      en: 'Background Subtractor KNN',
      ko: '배경 차분 KNN',
      zh: '背景减除 KNN',
      ja: '背景差分 KNN',
      de: 'Hintergrund-Subtraktion KNN',
      es: 'Sustractor de fondo KNN',
      fr: 'Soustraction de fond KNN'
    },
    category: 'tracking',
    description: {
      en: 'K-Nearest Neighbors based Background/Foreground Segmentation algorithm.',
      ko: 'K-최근접 이웃(KNN) 알고리즘을 기반으로 배경을 학습하여 배경을 제거하고 객체를 검출합니다.',
      zh: '基于 K 近邻的背景/前景分割算法。',
      ja: 'K近傍法に基づく背景・前景セグメンテーションアルゴリズムです。',
      de: 'K-Nearest-Neighbors-basierter Hintergrund/Vordergrund-Segmentierungsalgorithmus.',
      es: 'Algoritmo de segmentación de fondo/primer plano basado en K-vecinos más cercanos.',
      fr: 'Algorithme de segmentation arrière-plan/avant-plan basé sur les K plus proches voisins.'
    },
    parameters: [
      {
        name: 'history',
        type: 'slider',
        defaultValue: 500,
        min: 100,
        max: 1000,
        step: 50,
        description: {
          en: 'Number of history frames',
          ko: '히스토리 길이 (프레임 수)',
          zh: '历史帧数',
          ja: '履歴フレームの数',
          de: 'Anzahl der Historien-Frames',
          es: 'Número de fotogramas de historial',
          fr: 'Nombre d\'images d\'historique'
        },
      },
      {
        name: 'dist2Threshold',
        type: 'slider',
        defaultValue: 400,
        min: 100,
        max: 1000,
        step: 50,
        description: {
          en: 'Threshold on the squared distance to decide background',
          ko: '거리 제곱 임계값',
          zh: '判定背景的距离平方阈值',
          ja: '背景を決定するための距離の二乗のしきい値',
          de: 'Schwellenwert für die quadrierte Distanz zur Hintergrundentscheidung',
          es: 'Umbral en la distancia al cuadrado para decidir el fondo',
          fr: 'Seuil sur la distance au carré pour décider de l\'arrière-plan'
        },
      },
      {
        name: 'detectShadows',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'True (Detect)', ko: 'True (그림자 검출)', zh: 'True (检测)', ja: 'True (検出する)', de: 'True (Erkennen)', es: 'True (Detectar)', fr: 'True (Détecter)' }, value: true },
          { label: { en: 'False (Ignore)', ko: 'False (그림자 미검출)', zh: 'False (忽略)', ja: 'False (検出하지 않음)', de: 'False (Ignorieren)', es: 'False (Ignorar)', fr: 'False (Ignorer)' }, value: false },
        ],
        description: {
          en: 'Whether to detect and mark shadows',
          ko: '그림자 검출 여부',
          zh: '是否检测并标记阴影',
          ja: '影を検出してマークするかどうか',
          de: 'Ob Schatten erkannt und markiert werden sollen',
          es: 'Si detectar y marcar sombras',
          fr: 'Si détecter et marquer les ombres'
        },
      },
    ],
    syntax: 'backSub = cv2.createBackgroundSubtractorKNN(history, dist2Threshold, detectShadows)',
    documentation: 'https://docs.opencv.org/4.x/db/d88/classcv_1_1BackgroundSubtractorKNN.html',
  },
  {
    id: 'multiTracker',
    name: {
      en: 'Multi Tracker',
      ko: '다중 객체 추적 (Multi Tracker)',
      zh: '多对象跟踪',
      ja: 'マルチトラッカー',
      de: 'Multi-Tracker',
      es: 'Multi Tracker',
      fr: 'Multi Tracker'
    },
    category: 'tracking',
    description: {
      en: 'Tracks multiple objects simultaneously. Creates independent trackers for each object.',
      ko: '여러 객체를 동시에 추적합니다. 각 객체에 대해 독립적인 추적기 인스턴스를 생성하여 관리합니다.',
      zh: '同时跟踪多个对象。为每个对象创建独立的跟踪器。',
      ja: '複数のオブジェクトを同時に追跡します。各オブジェクトに対して独立したトラッカーを作成します Correntement.',
      de: 'Verfolgt mehrere Objekte gleichzeitig. Erstellt für jedes Objekt unabhängige Tracker.',
      es: 'Rastrea múltiples objetos simultáneamente. Crea rastreadores independientes para cada objeto.',
      fr: 'Suit plusieurs objets simultanément. Crée des trackers indépendants pour chaque objet.'
    },
    parameters: [
      {
        name: 'trackerType',
        type: 'select',
        defaultValue: 'KCF',
        options: [
          { label: { en: 'KCF (Fast/Accurate)', ko: 'KCF (빠르고 정확)', zh: 'KCF (快速/准确)', ja: 'KCF (高速/正確)', de: 'KCF (Schnell/Genau)', es: 'KCF (Rápido/Preciso)', fr: 'KCF (Rapide/Précis)' }, value: 'KCF' },
          { label: { en: 'CSRT (High Accuracy)', ko: 'CSRT (높은 정확도)', zh: 'CSRT (高精度)', ja: 'CSRT (高精度)', de: 'CSRT (Hohe Genauigkeit)', es: 'CSRT (Alta precisión)', fr: 'CSRT (Haute précision)' }, value: 'CSRT' },
          { label: { en: 'MIL (Stable)', ko: 'MIL (안정적)', zh: 'MIL (稳定)', ja: 'MIL (安定的)', de: 'MIL (Stabil)', es: 'MIL (Estable)', fr: 'MIL (Stable)' }, value: 'MIL' },
          { label: { en: 'MOSSE (Extremely Fast)', ko: 'MOSSE (매우 빠름)', zh: 'MOSSE (极快)', ja: 'MOSSE (極めて高速)', de: 'MOSSE (Extrem schnell)', es: 'MOSSE (Extremadamente rápido)', fr: 'MOSSE (Extrêmement rapide)' }, value: 'MOSSE' },
        ],
        description: {
          en: 'Tracking algorithm type',
          ko: '사용할 추적 알고리즘 유형',
          zh: '跟踪算法类型',
          ja: '追跡アルゴリズムの種類',
          de: 'Tracking-Algorithmentyp',
          es: 'Tipo de algoritmo de seguimiento',
          fr: 'Type d\'algorithme de suivi'
        },
      },
      {
        name: 'objectCount',
        type: 'slider',
        defaultValue: 2,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Number of objects to track',
          ko: '추적할 객체 수',
          zh: '要跟踪的对象数',
          ja: '追跡するオブジェクトの数',
          de: 'Anzahl der zu verfolgenden Objekte',
          es: 'Número de objetos a rastrear',
          fr: 'Nombre d\'objets à suivre'
        },
      },
    ],
    syntax: 'multiTracker = cv2.legacy.MultiTracker_create()',
    documentation: 'https://docs.opencv.org/4.x/d8/d77/classcv_1_1legacy_1_1MultiTracker.html',
  },

  // High-level GUI
  {
    id: 'namedWindow',
    name: {
      en: 'Named Window',
      ko: '윈도우 생성 (Named Window)',
      zh: '创建窗口',
      ja: 'ウィンドウの作成',
      de: 'Fenster erstellen',
      es: 'Crear ventana',
      fr: 'Créer une fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Creates a window with the specified name. It can be used as a placeholder for images and trackbars.',
      ko: '지정된 이름으로 윈도우를 생성합니다. 이미지를 표시하기 전에 윈도우를 생성할 수 있습니다.',
      zh: '创建一个具有指定名称的窗口。可以用作图像和轨迹条的占位符。',
      ja: '指定した名前のウィンドウを作成します。画像やトラックバーのプレースホルダーとして使用できます。',
      de: 'Erstellt ein Fenster mit dem angegebenen Namen. Kann als Platzhalter für Bilder und Trackbars verwendet werden.',
      es: 'Crea una ventana con el nombre especificado. Puede usarse como marcador de posición para imágenes y barras de seguimiento.',
      fr: 'Crée une fenêtre avec le nom spécifié. Peut être utilisé comme espace réservé pour les images et les barres de suivi.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '결과', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
          { label: { en: 'Custom Window', ko: '사용자 지정 윈도우', zh: '自定义窗口', ja: 'カスタムウィンドウ', de: 'Benutzerdefiniertes Fenster', es: 'Ventana personalizada', fr: 'Fenêtre personnalisée' }, value: 'Custom Window' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'flags',
        type: 'select',
        defaultValue: 'WINDOW_AUTOSIZE',
        options: [
          { label: { en: 'WINDOW_AUTOSIZE', ko: 'WINDOW_AUTOSIZE (자동 크기)', zh: 'WINDOW_AUTOSIZE (自动大小)', ja: 'WINDOW_AUTOSIZE (自動サイズ)', de: 'WINDOW_AUTOSIZE', es: 'WINDOW_AUTOSIZE', fr: 'WINDOW_AUTOSIZE' }, value: 'WINDOW_AUTOSIZE' },
          { label: { en: 'WINDOW_NORMAL', ko: 'WINDOW_NORMAL (크기 조절 가능)', zh: 'WINDOW_NORMAL (可调整大小)', ja: 'WINDOW_NORMAL (サイズ変更可能)', de: 'WINDOW_NORMAL', es: 'WINDOW_NORMAL', fr: 'WINDOW_NORMAL' }, value: 'WINDOW_NORMAL' },
          { label: { en: 'WINDOW_FULLSCREEN', ko: 'WINDOW_FULLSCREEN (전체 화면)', zh: 'WINDOW_FULLSCREEN (全屏)', ja: 'WINDOW_FULLSCREEN (全画面)', de: 'WINDOW_FULLSCREEN', es: 'WINDOW_FULLSCREEN', fr: 'WINDOW_FULLSCREEN' }, value: 'WINDOW_FULLSCREEN' },
          { label: { en: 'WINDOW_FREERATIO', ko: 'WINDOW_FREERATIO (자유 비율)', zh: 'WINDOW_FREERATIO (自由比例)', ja: 'WINDOW_FREERATIO (フリーレシオ)', de: 'WINDOW_FREERATIO', es: 'WINDOW_FREERATIO', fr: 'WINDOW_FREERATIO' }, value: 'WINDOW_KEEPRATIO' },
          { label: { en: 'WINDOW_KEEPRATIO', ko: 'WINDOW_KEEPRATIO (비율 유지)', zh: 'WINDOW_KEEPRATIO (保持比例)', ja: 'WINDOW_KEEPRATIO (比率維持)', de: 'WINDOW_KEEPRATIO', es: 'WINDOW_KEEPRATIO', fr: 'WINDOW_KEEPRATIO' }, value: 'WINDOW_KEEPRATIO' },
        ],
        description: {
          en: 'Window flags',
          ko: '윈도우 플래그',
          zh: '窗口标志',
          ja: 'ウィンドウフラグ',
          de: 'Fenster-Flags',
          es: 'Banderas de ventana',
          fr: 'Drapeaux de fenêtre'
        },
      },
    ],
    syntax: 'cv2.namedWindow(winname, flags=WINDOW_AUTOSIZE)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga5afdf8410934fd099df85c75b2e0888b',
  },
  {
    id: 'destroyWindow',
    name: {
      en: 'Destroy Window',
      ko: '윈도우 삭제 (Destroy Window)',
      zh: '销毁窗口',
      ja: 'ウィンドウの破棄',
      de: 'Fenster zerstören',
      es: 'Destruir ventana',
      fr: 'Détruire la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Destroys the window with the specified name.',
      ko: '지정된 이름의 윈도우를 삭제합니다.',
      zh: '销毁具有指定名称的窗口。',
      ja: '指定した名前のウィンドウを破棄します。',
      de: 'Zerstört das Fenster mit dem angegebenen Namen.',
      es: 'Destruye la ventana con el nombre especificado.',
      fr: 'Détruit la fenêtre avec le nom spécifié.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
          { label: { en: 'All Windows', ko: '모든 윈도우', zh: '所有窗口', ja: 'すべてのウィンドウ', de: 'Alle Fenster', es: 'Todas las ventanas', fr: 'Toutes les fenêtres' }, value: 'All Windows' },
        ],
        description: {
          en: 'Name of the window to destroy',
          ko: '삭제할 윈도우 이름',
          zh: '要销毁的窗口名称',
          ja: '破棄するウィンドウの名前',
          de: 'Name des zu zerstörenden Fensters',
          es: 'Nombre de la ventana a destruir',
          fr: 'Nom de la fenêtre à détruire'
        },
      },
    ],
    syntax: 'destroyWindow(winname)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga851ccdd6961022d1d5b4c4f255dbab34',
  },
  {
    id: 'destroyAllWindows',
    name: {
      en: 'Destroy All Windows',
      ko: '모든 윈도우 삭제 (Destroy All Windows)',
      zh: '销毁所有窗口',
      ja: 'すべてのウィンドウの破棄',
      de: 'Alle Fenster zerstören',
      es: 'Destruir todas las ventanas',
      fr: 'Détruire toutes les fenêtres'
    },
    category: 'highgui',
    description: {
      en: 'Destroys all of the HighGUI windows.',
      ko: '현재 생성되어 있는 모든 HighGUI 윈도우를 한 번에 닫고 삭제합니다.',
      zh: '销毁所有 HighGUI 窗口。',
      ja: 'すべての HighGUI ウィンドウを破棄します。',
      de: 'Zerstört alle HighGUI-Fenster.',
      es: 'Destruye todas las ventanas HighGUI.',
      fr: 'Détruit toutes les fenêtres HighGUI.'
    },
    parameters: [],
    syntax: 'cv2.destroyAllWindows()',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga6b7fc1c1a8960453e16905f3dc82974a',
  },
  {
    id: 'resizeWindow',
    name: {
      en: 'Resize Window',
      ko: '윈도우 크기 조절 (Resize Window)',
      zh: '调整窗口大小',
      ja: 'ウィンドウサイズの変更',
      de: 'Fenstergröße ändern',
      es: 'Cambiar tamaño de ventana',
      fr: 'Redimensionner la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Resizes the window to the specified size. Works only for windows created with WINDOW_NORMAL flag.',
      ko: '윈도우의 크기를 조절합니다. WINDOW_NORMAL 플래그로 생성된 윈도우에서만 작동합니다.',
      zh: '调整窗口大小。仅适用于使用 WINDOW_NORMAL 标志创建的窗口。',
      ja: 'ウィンドウのサイズを変更します。WINDOW_NORMAL フラグで作成されたウィンドウでのみ機能します。',
      de: 'Ändert die Fenstergröße. Funktioniert nur bei Fenstern, die mit dem Flag WINDOW_NORMAL erstellt wurden.',
      es: 'Cambia el tamaño de la ventana. Solo funciona para ventanas creadas con la bandera WINDOW_NORMAL.',
      fr: 'Redimensionne la fenêtre. Fonctionne uniquement pour les fenêtres créées avec le drapeau WINDOW_NORMAL.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'width',
        type: 'slider',
        defaultValue: 640,
        min: 100,
        max: 1920,
        step: 10,
        description: {
          en: 'Window width (pixels)',
          ko: '윈도우 너비 (픽셀)',
          zh: '窗口宽度 (像素)',
          ja: 'ウィンドウの幅 (ピクセル)',
          de: 'Fensterbreite (Pixel)',
          es: 'Ancho de la ventana (píxeles)',
          fr: 'Largeur de la fenêtre (pixels)'
        },
      },
      {
        name: 'height',
        type: 'slider',
        defaultValue: 480,
        min: 100,
        max: 1080,
        step: 10,
        description: {
          en: 'Window height (pixels)',
          ko: '윈도우 높이 (픽셀)',
          zh: '窗口高度 (像素)',
          ja: 'ウィンドウの高さ (ピクセル)',
          de: 'Fensterhöhe (Pixel)',
          es: 'Altura de la ventana (píxeles)',
          fr: 'Hauteur de la fenêtre (pixels)'
        },
      },
    ],
    syntax: 'cv2.resizeWindow(winname, width, height)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga9e80e080f7ef33f897e415358aee7f08',
  },
  {
    id: 'moveWindow',
    name: {
      en: 'Move Window',
      ko: '윈도우 이동 (Move Window)',
      zh: '移动窗口',
      ja: 'ウィンドウの移動',
      de: 'Fenster verschieben',
      es: 'Mover ventana',
      fr: 'Déplacer la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Moves the window to the specified position.',
      ko: '윈도우를 화면의 지정된 좌표(x, y)로 이동합니다.',
      zh: '将窗口移动到指定位置。',
      ja: 'ウィンドウを指定された位置に移動します。',
      de: 'Verschiebt das Fenster an die angegebene Position.',
      es: 'Mueve la ventana a la posición especificada.',
      fr: 'Déplace la fenêtre à la position spécifiée.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'x',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 1920,
        step: 10,
        description: {
          en: 'X coordinate (pixels)',
          ko: 'X 좌표 (픽셀)',
          zh: 'X 坐标 (像素)',
          ja: 'X 座標 (ピクセル)',
          de: 'X-Koordinate (Pixel)',
          es: 'Coordenada X (píxeles)',
          fr: 'Coordonnée X (pixels)'
        },
      },
      {
        name: 'y',
        type: 'slider',
        defaultValue: 100,
        min: 0,
        max: 1080,
        step: 10,
        description: {
          en: 'Y coordinate (pixels)',
          ko: 'Y 좌표 (픽셀)',
          zh: 'Y 坐标 (像素)',
          ja: 'Y 座標 (ピクセル)',
          de: 'Y-Koordinate (Pixel)',
          es: 'Coordenada Y (píxeles)',
          fr: 'Coordonnée Y (pixels)'
        },
      },
    ],
    syntax: 'cv2.moveWindow(winname, x, y)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga8b9c9f4e5b37c362ecb6bf8f7a0f3cfc',
  },
  {
    id: 'setWindowTitle',
    name: {
      en: 'Set Window Title',
      ko: '윈도우 제목 설정 (Set Window Title)',
      zh: '设置窗口标题',
      ja: 'ウィンドウタイトルの設定',
      de: 'Fenstertitel festlegen',
      es: 'Establecer título de ventana',
      fr: 'Définir le titre de la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Updates the window title.',
      ko: '실행 중인 윈도우의 제목 표시줄 텍스트를 변경합니다.',
      zh: '更新窗口标题。',
      ja: 'ウィンドウのタイトルを更新します。',
      de: 'Aktualisiert den Fenstertitel.',
      es: 'Actualiza el título de la ventana.',
      fr: 'Met à jour le titre de la fenêtre.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'title',
        type: 'select',
        defaultValue: 'OpenCV Image',
        options: [
          { label: { en: 'OpenCV Image', ko: 'OpenCV 이미지', zh: 'OpenCV 图像', ja: 'OpenCV 画像', de: 'OpenCV Bild', es: 'Imagen OpenCV', fr: 'Image OpenCV' }, value: 'OpenCV Image' },
          { label: { en: 'Processed Result', ko: '처리 결과', zh: '处理结果', ja: '処理結果', de: 'Verarbeitungsergebnis', es: 'Resultado procesado', fr: 'Résultat traité' }, value: 'Processed Result' },
          { label: { en: 'Original Image', ko: '원본 이미지', zh: '原始图像', ja: '元画像', de: 'Originalbild', es: 'Imagen original', fr: 'Image originale' }, value: 'Original Image' },
          { label: { en: 'Custom Title', ko: '사용자 지정 제목', zh: '自定义标题', ja: 'カスタムタイトル', de: 'Benutzerdefinierter Titel', es: 'Título personalizado', fr: 'Titre personnalisé' }, value: 'Custom Title' },
        ],
        description: {
          en: 'New window title',
          ko: '새로운 윈도우 제목',
          zh: '新窗口标题',
          ja: '新しいウィンドウのタイトル',
          de: 'Neuer Fenstertitel',
          es: 'Nuevo título de ventana',
          fr: 'Nouveau titre de fenêtre'
        },
      },
    ],
    syntax: 'cv2.setWindowTitle(winname, title)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga95d0c3d1ea38398aa8c41e95e049c1a5',
  },
  {
    id: 'getWindowProperty',
    name: {
      en: 'Get Window Property',
      ko: '윈도우 속성 가져오기 (Get Window Property)',
      zh: '获取窗口属性',
      ja: 'ウィンドウプロパティの取得',
      de: 'Fenstereigenschaft abrufen',
      es: 'Obtener propiedad de ventana',
      fr: 'Obtenir la propriété de la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Provides parameters of a window.',
      ko: '지정된 윈도우의 특정 속성 값을 가져옵니다 (예: 전체 화면 모드 여부 등).',
      zh: '提供窗口的参数。',
      ja: 'ウィンドウのパラメータを提供します。',
      de: 'Liefert Parameter eines Fensters.',
      es: 'Proporciona parámetros de una ventana.',
      fr: 'Fournit les paramètres d\'une fenêtre.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'propId',
        type: 'select',
        defaultValue: 'WND_PROP_FULLSCREEN',
        options: [
          { label: { en: 'WND_PROP_FULLSCREEN', ko: 'WND_PROP_FULLSCREEN (전체 화면 여부)', zh: 'WND_PROP_FULLSCREEN (全屏)', ja: 'WND_PROP_FULLSCREEN (全画面表示)', de: 'WND_PROP_FULLSCREEN (Vollbild)', es: 'WND_PROP_FULLSCREEN (Pantalla completa)', fr: 'WND_PROP_FULLSCREEN (Plein écran)' }, value: 'WND_PROP_FULLSCREEN' },
          { label: { en: 'WND_PROP_AUTOSIZE', ko: 'WND_PROP_AUTOSIZE (자동 크기 여부)', zh: 'WND_PROP_AUTOSIZE (自动调整大小)', ja: 'WND_PROP_AUTOSIZE (自動サイズ調整)', de: 'WND_PROP_AUTOSIZE (Automatische Größe)', es: 'WND_PROP_AUTOSIZE (Tamaño automático)', fr: 'WND_PROP_AUTOSIZE (Taille automatique)' }, value: 'WND_PROP_AUTOSIZE' },
          { label: { en: 'WND_PROP_ASPECT_RATIO', ko: 'WND_PROP_ASPECT_RATIO (비율)', zh: 'WND_PROP_ASPECT_RATIO (纵横比)', ja: 'WND_PROP_ASPECT_RATIO (アスペクト比)', de: 'WND_PROP_ASPECT_RATIO (Seitenverhältnis)', es: 'WND_PROP_ASPECT_RATIO (Relación de aspecto)', fr: 'WND_PROP_ASPECT_RATIO (Un rapport hauteur-largeur)' }, value: 'WND_PROP_ASPECT_RATIO' },
          { label: { en: 'WND_PROP_OPENGL', ko: 'WND_PROP_OPENGL (OpenGL 지원 여부)', zh: 'WND_PROP_OPENGL (OpenGL)', ja: 'WND_PROP_OPENGL (OpenGL)', de: 'WND_PROP_OPENGL (OpenGL)', es: 'WND_PROP_OPENGL (OpenGL)', fr: 'WND_PROP_OPENGL (OpenGL)' }, value: 'WND_PROP_OPENGL' },
          { label: { en: 'WND_PROP_VISIBLE', ko: 'WND_PROP_VISIBLE (가시성)', zh: 'WND_PROP_VISIBLE (可见性)', ja: 'WND_PROP_VISIBLE (可視性)', de: 'WND_PROP_VISIBLE (Sichtbarkeit)', es: 'WND_PROP_VISIBLE (Visibilidad)', fr: 'WND_PROP_VISIBLE (Visibilité)' }, value: 'WND_PROP_VISIBLE' },
        ],
        description: {
          en: 'Property ID',
          ko: '속성 ID',
          zh: '属性 ID',
          ja: 'プロパティ ID',
          de: 'Eigenschafts-ID',
          es: 'ID de propiedad',
          fr: 'ID de propriété'
        },
      },
    ],
    syntax: 'cv2.getWindowProperty(winname, prop_id)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#gaaf9504b8f9cf19024d9d44a14e461656',
  },
  {
    id: 'setWindowProperty',
    name: {
      en: 'Set Window Property',
      ko: '윈도우 속성 설정 (Set Window Property)',
      zh: '设置窗口属性',
      ja: 'ウィンドウプロパティの設定',
      de: 'Fenstereigenschaft festlegen',
      es: 'Establecer propiedad de ventana',
      fr: 'Définir la propriété de la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Changes parameters of a window dynamically.',
      ko: '윈도우의 속성을 동적으로 변경합니다 (예: 전체 화면 모드로 전환).',
      zh: '动态更改窗口的参数。',
      ja: 'ウィンドウのパラメータを動的に変更します。',
      de: 'Ändert Parameter eines Fensters dynamisch.',
      es: 'Cambia los parámetros de una ventana dinámicamente.',
      fr: 'Modifie dynamiquement les paramètres d\'une fenêtre.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'propId',
        type: 'select',
        defaultValue: 'WND_PROP_FULLSCREEN',
        options: [
          { label: { en: 'WND_PROP_FULLSCREEN', ko: 'WND_PROP_FULLSCREEN (전체 화면)', zh: 'WND_PROP_FULLSCREEN (全屏)', ja: 'WND_PROP_FULLSCREEN (全画面表示)', de: 'WND_PROP_FULLSCREEN (Vollbild)', es: 'WND_PROP_FULLSCREEN (Pantalla completa)', fr: 'WND_PROP_FULLSCREEN (Plein écran)' }, value: 'WND_PROP_FULLSCREEN' },
          { label: { en: 'WND_PROP_AUTOSIZE', ko: 'WND_PROP_AUTOSIZE (자동 크기)', zh: 'WND_PROP_AUTOSIZE (自动调整大小)', ja: 'WND_PROP_AUTOSIZE (自動サイズ調整)', de: 'WND_PROP_AUTOSIZE (Automatische Größe)', es: 'WND_PROP_AUTOSIZE (Tamaño automático)', fr: 'WND_PROP_AUTOSIZE (Taille automatique)' }, value: 'WND_PROP_AUTOSIZE' },
          { label: { en: 'WND_PROP_ASPECT_RATIO', ko: 'WND_PROP_ASPECT_RATIO (비율)', zh: 'WND_PROP_ASPECT_RATIO (纵横比)', ja: 'WND_PROP_ASPECT_RATIO (アスペクト比)', de: 'WND_PROP_ASPECT_RATIO (Seitenverhältnis)', es: 'WND_PROP_ASPECT_RATIO (Relación de aspecto)', fr: 'WND_PROP_ASPECT_RATIO (Un rapport hauteur-largeur)' }, value: 'WND_PROP_ASPECT_RATIO' },
          { label: { en: 'WND_PROP_TOPMOST', ko: 'WND_PROP_TOPMOST (최상위)', zh: 'WND_PROP_TOPMOST (最顶层)', ja: 'WND_PROP_TOPMOST (最前面)', de: 'WND_PROP_TOPMOST (Immer im Vordergrund)', es: 'WND_PROP_TOPMOST (Siempre visible)', fr: 'WND_PROP_TOPMOST (Toujours au premier plan)' }, value: 'WND_PROP_TOPMOST' },
        ],
        description: {
          en: 'Property ID',
          ko: '속성 ID',
          zh: '属性 ID',
          ja: 'プロパティ ID',
          de: 'Eigenschafts-ID',
          es: 'ID de propiedad',
          fr: 'ID de propriété'
        },
      },
      {
        name: 'propValue',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 1,
        description: {
          en: 'Property value (0 or 1)',
          ko: '속성 값 (0 또는 1)',
          zh: '属性值 (0 或 1)',
          ja: 'プロパティ値 (0 または 1)',
          de: 'Eigenschaftswert (0 oder 1)',
          es: 'Valor de propiedad (0 o 1)',
          fr: 'Valeur de propriété (0 ou 1)'
        },
      },
    ],
    syntax: 'cv2.setWindowProperty(winname, prop_id, prop_value)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga66e4a6db4d4e06148bcdfe0d70a5df27',
  },
  {
    id: 'waitKey',
    name: {
      en: 'Wait Key',
      ko: '키 입력 대기 (Wait Key)',
      zh: '等待按键',
      ja: 'キー入力待機',
      de: 'Wartetaste',
      es: 'Esperar tecla',
      fr: 'Attendre une touche'
    },
    category: 'highgui',
    description: {
      en: 'Waits for a pressed key. If delay is 0, it waits indefinitely.',
      ko: '지정된 시간 동안 키 입력이 있을 때까지 기다립니다. 대기 시간(delay)이 0이면 무한히 기다립니다.',
      zh: '等待按下按键。如果延迟为 0，则无限期等待。',
      ja: 'キーが押されるのを待ちます。遅延が 0 の場合、無期限に待ちます。',
      de: 'Wartet auf eine gedrückte Taste. Wenn die Verzögerung 0 ist, wird unendlich lange gewartet.',
      es: 'Espera a que se presione una tecla. Si el retraso es 0, espera indefinidamente.',
      fr: 'Attend l\'appui sur une touche. Si le délai est 0, l\'attente est indéfinie.'
    },
    parameters: [
      {
        name: 'delay',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 5000,
        step: 1,
        description: {
          en: 'Delay in milliseconds (0 = infinite)',
          ko: '대기 시간 (밀리초 단위, 0은 무한 대기)',
          zh: '延迟（毫秒，0 表示无限期）',
          ja: 'ミリ秒単位の遅延（0 = 無期限）',
          de: 'Verzögerung in Millisekunden (0 = unendlich)',
          es: 'Retraso en milisegundos (0 = infinito)',
          fr: 'Délai en millisecondes (0 = infini)'
        },
      },
    ],
    syntax: 'cv2.waitKey(delay=0)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga5628525ad33f52eab17feebcfba38bd7',
  },
  {
    id: 'pollKey',
    name: {
      en: 'Poll Key',
      ko: '키보드 상태 확인 (Poll Key)',
      zh: '轮询按键',
      ja: 'キーポーリング',
      de: 'Taste abfragen',
      es: 'Sondear tecla',
      fr: 'Sonder la touche'
    },
    category: 'highgui',
    description: {
      en: 'Checks for a pressed key. Returns immediately without waiting.',
      ko: '현재 눌린 키를 확인합니다. 대기하지 않고 즉시 반환됩니다.',
      zh: '检查按下的按键。立即返回而不等待。',
      ja: '押されたキーを確認します。待たずにすぐに戻ります。',
      de: 'Prüft auf eine gedrückte Taste. Kehrt sofort zurück, ohne zu warten.',
      es: 'Verifica si se ha presionado una tecla. Regresa inmediatamente sin esperar.',
      fr: 'Vérifie si une touche est enfoncée. Revient immédiatement sans attendre.'
    },
    parameters: [],
    syntax: 'cv2.pollKey()',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga8b3b7fc6228a2c7dab04e318ed1fc0fc',
  },
  {
    id: 'createTrackbar',
    name: {
      en: 'Create Trackbar',
      ko: '트랙바 생성 (Create Trackbar)',
      zh: '创建轨迹条',
      ja: 'トラックバーの作成',
      de: 'Trackbar erstellen',
      es: 'Crear barra de seguimiento',
      fr: 'Créer une barre de suivi'
    },
    category: 'highgui',
    description: {
      en: 'Creates a trackbar and attaches it to the specified window.',
      ko: '윈도우에 트랙바(슬라이더)를 생성하고 지정된 윈도우에 붙입니다.',
      zh: '创建一个轨迹条并将其附加到指定的窗口。',
      ja: 'トラックバーを作成し、指定されたウィンドウにアタッチします。',
      de: 'Erstellt eine Trackbar und fügt sie dem angegebenen Fenster hinzu.',
      es: 'Crea una barra de seguimiento y la adjunta a la ventana especificada.',
      fr: 'Crée une barre de suivi et l\'attache à la fenêtre spécifiée.'
    },
    parameters: [
      {
        name: 'trackbarName',
        type: 'select',
        defaultValue: 'Threshold',
        options: [
          { label: { en: 'Threshold', ko: '임계값', zh: '阈值', ja: 'しきい値', de: 'Schwellenwert', es: 'Umbral', fr: 'Seuil' }, value: 'Threshold' },
          { label: { en: 'Brightness', ko: '밝기', zh: '亮度', ja: '明るさ', de: 'Helligkeit', es: 'Brillo', fr: 'Luminosité' }, value: 'Brightness' },
          { label: { en: 'Contrast', ko: '대비', zh: '对比度', ja: 'コントラスト', de: 'Kontrast', es: 'Contraste', fr: 'Contraste' }, value: 'Contrast' },
          { label: { en: 'Value', ko: '값', zh: '值', ja: '値', de: 'Wert', es: 'Valor', fr: 'Valeur' }, value: 'Value' },
        ],
        description: {
          en: 'Trackbar name',
          ko: '트랙바 이름',
          zh: '轨迹条名称',
          ja: 'トラックバー名',
          de: 'Trackbar-Name',
          es: 'Nombre de la barra de seguimiento',
          fr: 'Nom de la barre de suivi'
        },
      },
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'value',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'Initial value',
          ko: '초기 값',
          zh: '初始值',
          ja: '初期値',
          de: 'Anfangswert',
          es: 'Valor inicial',
          fr: 'Valeur initiale'
        },
      },
      {
        name: 'count',
        type: 'slider',
        defaultValue: 255,
        min: 1,
        max: 500,
        step: 1,
        description: {
          en: 'Maximum value',
          ko: '최대 값',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
    ],
    syntax: 'cv2.createTrackbar(trackbarname, winname, value, count, onChange)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#gaf78d2155d30b728fc413803745b67a9b',
  },
  {
    id: 'getTrackbarPos',
    name: {
      en: 'Get Trackbar Position',
      ko: '트랙바 위치 가져오기 (Get Trackbar Position)',
      zh: '获取轨迹条位置',
      ja: 'トラックバー位置の取得',
      de: 'Trackbar-Position abrufen',
      es: 'Obtener posición de barra de seguimiento',
      fr: 'Obtenir la position de la barre de suivi'
    },
    category: 'highgui',
    description: {
      en: 'Returns the trackbar position.',
      ko: '트랙바의 현재 위치(값)를 가져옵니다.',
      zh: '返回轨迹条位置。',
      ja: 'トラックバーの位置を返します。',
      de: 'Gibt die Trackbar-Position zurück.',
      es: 'Devuelve la posición de la barra de seguimiento.',
      fr: 'Renvoie la position de la barre de suivi.'
    },
    parameters: [
      {
        name: 'trackbarName',
        type: 'select',
        defaultValue: 'Threshold',
        options: [
          { label: { en: 'Threshold', ko: '임계값', zh: '阈值', ja: 'しきい値', de: 'Schwellenwert', es: 'Umbral', fr: 'Seuil' }, value: 'Threshold' },
          { label: { en: 'Brightness', ko: '밝기', zh: '亮度', ja: '明るさ', de: 'Helligkeit', es: 'Brillo', fr: 'Luminosité' }, value: 'Brightness' },
          { label: { en: 'Contrast', ko: '대비', zh: '对比度', ja: 'コントラスト', de: 'Kontrast', es: 'Contraste', fr: 'Contraste' }, value: 'Contrast' },
          { label: { en: 'Value', ko: '값', zh: '值', ja: '値', de: 'Wert', es: 'Valor', fr: 'Valeur' }, value: 'Value' },
        ],
        description: {
          en: 'Trackbar name',
          ko: '트랙바 이름',
          zh: '轨迹条名称',
          ja: 'トラックバー名',
          de: 'Trackbar-Name',
          es: 'Nombre de la barra de seguimiento',
          fr: 'Nom de la barre de suivi'
        },
      },
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
    ],
    syntax: 'cv2.getTrackbarPos(trackbarname, winname)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga122632e9e91b9ec06943472c55d9cda8',
  },
  {
    id: 'setTrackbarPos',
    name: {
      en: 'Set Trackbar Position',
      ko: '트랙바 위치 설정 (Set Trackbar Position)',
      zh: '设置轨迹条位置',
      ja: 'トラックバー位置の設定',
      de: 'Trackbar-Position festlegen',
      es: 'Establecer posición de barra de seguimiento',
      fr: 'Définir la position de la barre de suivi'
    },
    category: 'highgui',
    description: {
      en: 'Sets the trackbar position.',
      ko: '트랙바의 위치(값)를 설정합니다.',
      zh: '设置轨迹条位置。',
      ja: 'トラックバーの位置を設定します。',
      de: 'Legt die Trackbar-Position fest.',
      es: 'Establece la posición de la barra de seguimiento.',
      fr: 'Définit la position de la barre de suivi.'
    },
    parameters: [
      {
        name: 'trackbarName',
        type: 'select',
        defaultValue: 'Threshold',
        options: [
          { label: { en: 'Threshold', ko: '임계값', zh: '阈值', ja: 'しきい値', de: 'Schwellenwert', es: 'Umbral', fr: 'Seuil' }, value: 'Threshold' },
          { label: { en: 'Brightness', ko: '밝기', zh: '亮度', ja: '明るさ', de: 'Helligkeit', es: 'Brillo', fr: 'Luminosité' }, value: 'Brightness' },
          { label: { en: 'Contrast', ko: '대비', zh: '对比度', ja: 'コントラスト', de: 'Kontrast', es: 'Contraste', fr: 'Contraste' }, value: 'Contrast' },
          { label: { en: 'Value', ko: '값', zh: '值', ja: '値', de: 'Wert', es: 'Valor', fr: 'Valeur' }, value: 'Value' },
        ],
        description: {
          en: 'Trackbar name',
          ko: '트랙바 이름',
          zh: '轨迹条名称',
          ja: 'トラックバー名',
          de: 'Trackbar-Name',
          es: 'Nombre de la barra de seguimiento',
          fr: 'Nom de la barre de suivi'
        },
      },
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '결과', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'pos',
        type: 'slider',
        defaultValue: 128,
        min: 0,
        max: 255,
        step: 1,
        description: {
          en: 'New position',
          ko: '새로운 위치',
          zh: '新位置',
          ja: '新しい位置',
          de: 'Neue Position',
          es: 'Nueva posición',
          fr: 'Nouvelle position'
        },
      },
    ],
    syntax: 'cv2.setTrackbarPos(trackbarname, winname, pos)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga67d73c4c9430f13481fd58410d01bd8d',
  },
  {
    id: 'setTrackbarMin',
    name: {
      en: 'Set Trackbar Min',
      ko: '트랙바 최소값 설정 (Set Trackbar Min)',
      zh: '设置轨迹条最小值',
      ja: 'トラックバー最小値の設定',
      de: 'Trackbar-Minimum festlegen',
      es: 'Establecer mínimo de barra de seguimiento',
      fr: 'Définir le minimum de la barre de suivi'
    },
    category: 'highgui',
    description: {
      en: 'Sets the trackbar minimum value.',
      ko: '트랙바의 최소값을 설정합니다.',
      zh: '设置轨迹条最小值。',
      ja: 'トラックバーの最小値を設定します。',
      de: 'Legt den Mindestwert der Trackbar fest.',
      es: 'Establece el valor mínimo de la barra de seguimiento.',
      fr: 'Définit la valeur minimale de la barre de suivi.'
    },
    parameters: [
      {
        name: 'trackbarName',
        type: 'select',
        defaultValue: 'Threshold',
        options: [
          { label: { en: 'Threshold', ko: '임계값', zh: '阈值', ja: 'しきい値', de: 'Schwellenwert', es: 'Umbral', fr: 'Seuil' }, value: 'Threshold' },
          { label: { en: 'Brightness', ko: '밝기', zh: '亮度', ja: '明るさ', de: 'Helligkeit', es: 'Brillo', fr: 'Luminosité' }, value: 'Brightness' },
          { label: { en: 'Contrast', ko: '대비', zh: '对比度', ja: 'コントラスト', de: 'Kontrast', es: 'Contraste', fr: 'Contraste' }, value: 'Contrast' },
          { label: { en: 'Value', ko: '값', zh: '值', ja: '値', de: 'Wert', es: 'Valor', fr: 'Valeur' }, value: 'Value' },
        ],
        description: {
          en: 'Trackbar name',
          ko: '트랙바 이름',
          zh: '轨迹条名称',
          ja: 'トラックバー名',
          de: 'Trackbar-Name',
          es: 'Nombre de la barra de seguimiento',
          fr: 'Nom de la barre de suivi'
        },
      },
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '결과', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'minval',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 100,
        step: 1,
        description: {
          en: 'Minimum value',
          ko: '최소값',
          zh: '最小值',
          ja: '最小値',
          de: 'Mindestwert',
          es: 'Valor mínimo',
          fr: 'Valeur minimale'
        },
      },
    ],
    syntax: 'cv2.setTrackbarMin(trackbarname, winname, minval)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#gabe26ffe8d2b60cc678895595a581b7aa',
  },
  {
    id: 'setTrackbarMax',
    name: {
      en: 'Set Trackbar Max',
      ko: '트랙바 최대값 설정 (Set Trackbar Max)',
      zh: '设置轨迹条最大值',
      ja: 'トラックバー最大値の設定',
      de: 'Trackbar-Maximum festlegen',
      es: 'Establecer máximo de barra de seguimiento',
      fr: 'Définir le maximum de la barre de suivi'
    },
    category: 'highgui',
    description: {
      en: 'Sets the trackbar maximum value.',
      ko: '트랙바의 최대값을 설정합니다.',
      zh: '设置轨迹条最大值。',
      ja: 'トラックバーの最大値を設定します。',
      de: 'Legt den Maximalwert der Trackbar fest.',
      es: 'Establece el valor máximo de la barra de seguimiento.',
      fr: 'Définit la valeur maximale de la barre de suivi.'
    },
    parameters: [
      {
        name: 'trackbarName',
        type: 'select',
        defaultValue: 'Threshold',
        options: [
          { label: { en: 'Threshold', ko: '임계값', zh: '阈值', ja: 'しきい値', de: 'Schwellenwert', es: 'Umbral', fr: 'Seuil' }, value: 'Threshold' },
          { label: { en: 'Brightness', ko: '밝기', zh: '亮度', ja: '明るさ', de: 'Helligkeit', es: 'Brillo', fr: 'Luminosité' }, value: 'Brightness' },
          { label: { en: 'Contrast', ko: '대비', zh: '对比度', ja: 'コントラスト', de: 'Kontrast', es: 'Contraste', fr: 'Contraste' }, value: 'Contrast' },
          { label: { en: 'Value', ko: '값', zh: '值', ja: '値', de: 'Wert', es: 'Valor', fr: 'Valeur' }, value: 'Value' },
        ],
        description: {
          en: 'Trackbar name',
          ko: '트랙바 이름',
          zh: '轨迹条名称',
          ja: 'トラックバー名',
          de: 'Trackbar-Name',
          es: 'Nombre de la barra de seguimiento',
          fr: 'Nom de la barre de suivi'
        },
      },
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Result', ko: '결과', zh: '결과', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'maxval',
        type: 'slider',
        defaultValue: 255,
        min: 100,
        max: 500,
        step: 1,
        description: {
          en: 'Maximum value',
          ko: '최대값',
          zh: '最大值',
          ja: '最大値',
          de: 'Maximalwert',
          es: 'Valor máximo',
          fr: 'Valeur maximale'
        },
      },
    ],
    syntax: 'cv2.setTrackbarMax(trackbarname, winname, maxval)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga7e5437ccba37f1154b65210902fc4480',
  },
  {
    id: 'selectROI',
    name: {
      en: 'Select ROI',
      ko: '관심 영역 선택 (Select ROI)',
      zh: '选择感兴趣区域',
      ja: 'ROI の選択',
      de: 'ROI auswählen',
      es: 'Seleccionar ROI',
      fr: 'Sélectionner ROI'
    },
    category: 'highgui',
    description: {
      en: 'Selects a Region of Interest (ROI) from an image.',
      ko: '이미지에서 관심 영역(ROI)을 마우스로 선택합니다.',
      zh: '从图像中选择感兴趣区域 (ROI)。',
      ja: '画像から関心領域 (ROI) を選択します。',
      de: 'Wählt einen Interessenbereich (ROI) aus einem Bild aus.',
      es: 'Selecciona una Región de Interés (ROI) de una imagen.',
      fr: 'Sélectionne une région d\'intérêt (ROI) dans une image.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'ROI Selection',
        options: [
          { label: { en: 'ROI Selection', ko: 'ROI 선택', zh: 'ROI 选择', ja: 'ROI 選択', de: 'ROI-Auswahl', es: 'Selección de ROI', fr: 'Sélection de ROI' }, value: 'ROI Selection' },
          { label: { en: 'Select Area', ko: '영역 선택', zh: '选择区域', ja: '領域選択', de: 'Bereich auswählen', es: 'Seleccionar área', fr: 'Sélectionner une zone' }, value: 'Select Area' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'showCrosshair',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'Show', ko: '표시', zh: '显示', ja: '表示', de: 'Anzeigen', es: 'Mostrar', fr: 'Afficher' }, value: true },
          { label: { en: 'Hide', ko: '숨김', zh: '隐藏', ja: '非表示', de: 'Verbergen', es: 'Ocultar', fr: 'Masquer' }, value: false },
        ],
        description: {
          en: 'Show crosshair',
          ko: '십자선 표시 여부',
          zh: '显示十字准线',
          ja: '十字線を表示',
          de: 'Fadenkreuz anzeigen',
          es: 'Mostrar punto de mira',
          fr: 'Afficher le réticule'
        },
      },
      {
        name: 'fromCenter',
        type: 'select',
        defaultValue: false,
        options: [
          { label: { en: 'From center', ko: '중심에서', zh: '从中心', ja: '中心から', de: 'Vom Zentrum', es: 'Desde el centro', fr: 'Depuis le centre' }, value: true },
          { label: { en: 'From corner', ko: '모서리에서', zh: '从角落', ja: '角から', de: 'Von der Ecke', es: 'Desde la esquina', fr: 'Depuis le coin' }, value: false },
        ],
        description: {
          en: 'Start selection from center',
          ko: '선택 시작 위치 (중심/모서리)',
          zh: '从中心开始选择',
          ja: '中心から選択を開始',
          de: 'Auswahl vom Zentrum starten',
          es: 'Iniciar selección desde el centro',
          fr: 'Lancer la sélection depuis le centre'
        },
      },
    ],
    syntax: 'cv2.selectROI(windowName, img, showCrosshair=True, fromCenter=False)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga8daf4730d3adf7035b6de9be4c469af5',
  },
  {
    id: 'selectROIs',
    name: {
      en: 'Select ROIs',
      ko: '여러 관심 영역 선택 (Select ROIs)',
      zh: '选择多个感兴趣区域',
      ja: 'ROI の複数選択',
      de: 'ROIs auswählen',
      es: 'Seleccionar ROIs',
      fr: 'Sélectionner des ROIs'
    },
    category: 'highgui',
    description: {
      en: 'Selects multiple Regions of Interest (ROIs) from an image.',
      ko: '이미지에서 여러 개의 관심 영역(ROI)을 마우스로 선택합니다.',
      zh: '从图像中选择多个感兴趣区域 (ROI)。',
      ja: '画像から複数の関心領域 (ROI) を選択します。',
      de: 'Wählt mehrere Interessenbereiche (ROIs) aus einem Bild aus.',
      es: 'Selecciona múltiples Regiones de Interés (ROIs) de una imagen.',
      fr: 'Sélectionne plusieurs régions d\'intérêt (ROI) dans une image.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'ROI Selection',
        options: [
          { label: { en: 'ROI Selection', ko: 'ROI 선택', zh: 'ROI 选择', ja: 'ROI 選択', de: 'ROI-Auswahl', es: 'Selección de ROI', fr: 'Sélection de ROI' }, value: 'ROI Selection' },
          { label: { en: 'Select Areas', ko: '영역 선택', zh: '选择区域', ja: '領域選択', de: 'Bereiche auswählen', es: 'Seleccionar áreas', fr: 'Sélectionner des zones' }, value: 'Select Areas' },
          { label: { en: 'Multi Selection', ko: '다중 선택', zh: '多重选择', ja: '多重選択', de: 'Mehrfachauswahl', es: 'Selección múltiple', fr: 'Sélection multiple' }, value: 'Multi Selection' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'showCrosshair',
        type: 'select',
        defaultValue: true,
        options: [
          { label: { en: 'Show', ko: '표시', zh: '显示', ja: '表示', de: 'Anzeigen', es: 'Mostrar', fr: 'Afficher' }, value: true },
          { label: { en: 'Hide', ko: '숨김', zh: '隐藏', ja: '非表示', de: 'Verbergen', es: 'Ocultar', fr: 'Masquer' }, value: false },
        ],
        description: {
          en: 'Show crosshair',
          ko: '십자선 표시 여부',
          zh: '显示十字准线',
          ja: '十字線を表示',
          de: 'Fadenkreuz anzeigen',
          es: 'Mostrar punto de mira',
          fr: 'Afficher le réticule'
        },
      },
      {
        name: 'fromCenter',
        type: 'select',
        defaultValue: false,
        options: [
          { label: { en: 'From center', ko: '중심에서', zh: '从中心', ja: '中心から', de: 'Vom Zentrum', es: 'Desde el centro', fr: 'Depuis le centre' }, value: true },
          { label: { en: 'From corner', ko: '모서리에서', zh: '从角落', ja: '角から', de: 'Von der Ecke', es: 'Desde la esquina', fr: 'Depuis le coin' }, value: false },
        ],
        description: {
          en: 'Start selection from center',
          ko: '선택 시작 위치 (중심/모서리)',
          zh: '从中心开始选择',
          ja: '中心から選択を開始',
          de: 'Auswahl vom Zentrum starten',
          es: 'Iniciar selección desde el centro',
          fr: 'Lancer la sélection depuis le centre'
        },
      },
    ],
    syntax: 'cv2.selectROIs(windowName, img, showCrosshair=True, fromCenter=False)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga0f11fad74a6432b8055fb21621a0f893',
  },
  {
    id: 'setMouseCallback',
    name: {
      en: 'Set Mouse Callback',
      ko: '마우스 콜백 설정 (Set Mouse Callback)',
      zh: '设置鼠标回调',
      ja: 'マウスコールバックの設定',
      de: 'Maus-Callback festlegen',
      es: 'Establecer devolución de llamada del mouse',
      fr: 'Définir le rappel de souris'
    },
    category: 'highgui',
    description: {
      en: 'Sets the mouse callback function for a window.',
      ko: '윈도우에 마우스 이벤트 콜백 함수를 설정합니다.',
      zh: '为窗口设置鼠标回调函数。',
      ja: 'ウィンドウのマウスコールバック関数を設定します。',
      de: 'Legt die Maus-Callback-Funktion für ein Fenster fest.',
      es: 'Establece la función de devolución de llamada del mouse para una ventana.',
      fr: 'Définit la fonction de rappel de la souris pour une fenêtre.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'OpenCV Window',
        options: [
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'Interactive Window', ko: '대화형 윈도우', zh: '交互式窗口', ja: '対話型ウィンドウ', de: 'Interaktives Fenster', es: 'Ventana interactiva', fr: 'Fenêtre interactive' }, value: 'Interactive Window' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
      {
        name: 'eventType',
        type: 'select',
        defaultValue: 'EVENT_LBUTTONDOWN',
        options: [
          { label: { en: 'EVENT_LBUTTONDOWN', ko: 'EVENT_LBUTTONDOWN (좌클릭)', zh: 'EVENT_LBUTTONDOWN (左键单击)', ja: 'EVENT_LBUTTONDOWN (左クリック)', de: 'EVENT_LBUTTONDOWN (Linksklick)', es: 'EVENT_LBUTTONDOWN (Clic izquierdo)', fr: 'EVENT_LBUTTONDOWN (Clic gauche)' }, value: 'EVENT_LBUTTONDOWN' },
          { label: { en: 'EVENT_RBUTTONDOWN', ko: 'EVENT_RBUTTONDOWN (우클릭)', zh: 'EVENT_RBUTTONDOWN (右键单击)', ja: 'EVENT_RBUTTONDOWN (右クリック)', de: 'EVENT_RBUTTONDOWN (Rechtsklick)', es: 'EVENT_RBUTTONDOWN (Clic derecho)', fr: 'EVENT_RBUTTONDOWN (Clic droit)' }, value: 'EVENT_RBUTTONDOWN' },
          { label: { en: 'EVENT_MBUTTONDOWN', ko: 'EVENT_MBUTTONDOWN (휠클릭)', zh: 'EVENT_MBUTTONDOWN (中键单击)', ja: 'EVENT_MBUTTONDOWN (中クリック)', de: 'EVENT_MBUTTONDOWN (Mittelklick)', es: 'EVENT_MBUTTONDOWN (Clic central)', fr: 'EVENT_MBUTTONDOWN (Clic milieu)' }, value: 'EVENT_MBUTTONDOWN' },
          { label: { en: 'EVENT_MOUSEMOVE', ko: 'EVENT_MOUSEMOVE (이동)', zh: 'EVENT_MOUSEMOVE (移动)', ja: 'EVENT_MOUSEMOVE (移動)', de: 'EVENT_MOUSEMOVE (Bewegung)', es: 'EVENT_MOUSEMOVE (Movimiento)', fr: 'EVENT_MOUSEMOVE (Déménagement)' }, value: 'EVENT_MOUSEMOVE' },
          { label: { en: 'EVENT_LBUTTONDBLCLK', ko: 'EVENT_LBUTTONDBLCLK (더블클릭)', zh: 'EVENT_LBUTTONDBLCLK (双击)', ja: 'EVENT_LBUTTONDBLCLK (ダブルクリック)', de: 'EVENT_LBUTTONDBLCLK (Doppelklick)', es: 'EVENT_LBUTTONDBLCLK (Doble clic)', fr: 'EVENT_LBUTTONDBLCLK (Double clic)' }, value: 'EVENT_LBUTTONDBLCLK' },
        ],
        description: {
          en: 'Mouse event type',
          ko: '마우스 이벤트 타입',
          zh: '鼠标事件类型',
          ja: 'マウスイベントの種類',
          de: 'Mausereignistyp',
          es: 'Tipo de evento de mouse',
          fr: 'Type d\'événement de souris'
        },
      },
    ],
    syntax: 'cv2.setMouseCallback(windowName, onMouse, param=None)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga89e7806b0a616f6f1d502bd8c183ad3e',
  },
  {
    id: 'getMouseWheelDelta',
    name: {
      en: 'Get Mouse Wheel Delta',
      ko: '마우스 휠 변화량 (Get Mouse Wheel Delta)',
      zh: '获取鼠标滚轮增量',
      ja: 'マウスホイールデルタの取得',
      de: 'Mausrad-Delta abrufen',
      es: 'Obtener delta de rueda del mouse',
      fr: 'Obtenir le delta de la molette de la souris'
    },
    category: 'highgui',
    description: {
      en: 'Gets the mouse wheel delta.',
      ko: '마우스 휠의 변화량을 가져옵니다.',
      zh: '获取鼠标滚轮的增量。',
      ja: 'マウスホイールのデルタを取得します。',
      de: 'Ruft das Mausrad-Delta ab.',
      es: 'Obtiene el delta de la rueda del mouse.',
      fr: 'Obtient le delta de la molette de la souris.'
    },
    parameters: [
      {
        name: 'flags',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 10,
        step: 1,
        description: {
          en: 'Flags',
          ko: '플래그 값',
          zh: '标志',
          ja: 'フラグ',
          de: 'Flaggen',
          es: 'Banderas',
          fr: 'Drapeaux'
        },
      },
    ],
    syntax: 'cv2.getMouseWheelDelta(flags)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#gaab0b7e141d9e1b5e4c5331d6e8d8e5b3',
  },
  {
    id: 'startWindowThread',
    name: {
      en: 'Start Window Thread',
      ko: '윈도우 스레드 시작 (Start Window Thread)',
      zh: '启动窗口线程',
      ja: 'ウィンドウ スレッドの開始',
      de: 'Fenster-Thread starten',
      es: 'Iniciar hilo de ventana',
      fr: 'Démarrer le fil de la fenêtre'
    },
    category: 'highgui',
    description: {
      en: 'Starts the thread that handles the GUI window.',
      ko: 'GUI 윈도우를 처리하는 스레드를 시작합니다.',
      zh: '启动处理 GUI 窗口的线程。',
      ja: 'GUI ウィンドウを処理するスレッドを開始します。',
      de: 'Startet den Thread, der das GUI-Fenster verwaltet.',
      es: 'Inicia el hilo que maneja la ventana GUI.',
      fr: 'Démarre le thread qui gère la fenêtre GUI.'
    },
    parameters: [],
    syntax: 'cv2.startWindowThread()',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga45bba0d82d8b63ba7e3e5c0e0bb68355',
  },
  {
    id: 'imshow',
    name: {
      en: 'Show Image',
      ko: '이미지 표시 (Show Image)',
      zh: '显示图像',
      ja: '画像表示',
      de: 'Bild anzeigen',
      es: 'Mostrar imagen',
      fr: 'Afficher l\'image'
    },
    category: 'highgui',
    description: {
      en: 'Displays an image in the specified window.',
      ko: '지정된 윈도우에 이미지를 표시합니다. 웹 환경에서는 Canvas를 통해 표시됩니다.',
      zh: '在指定窗口中显示图像。',
      ja: '指定されたウィンドウに画像を表示します。',
      de: 'Zeigt ein Bild im angegebenen Fenster an.',
      es: 'Muestra una imagen en la ventana especificada.',
      fr: 'Affiche une image dans la fenêtre spécifiée.'
    },
    parameters: [
      {
        name: 'windowName',
        type: 'select',
        defaultValue: 'Image Display',
        options: [
          { label: { en: 'Image Display', ko: '이미지 표시', zh: '图像显示', ja: '画像表示', de: 'Bildanzeige', es: 'Visualización de imagen', fr: 'Affichage d\'image' }, value: 'Image Display' },
          { label: { en: 'OpenCV Window', ko: 'OpenCV 윈도우', zh: 'OpenCV 窗口', ja: 'OpenCV ウィンドウ', de: 'OpenCV Fenster', es: 'Ventana OpenCV', fr: 'Fenêtre OpenCV' }, value: 'OpenCV Window' },
          { label: { en: 'Result', ko: '결과', zh: '结果', ja: '結果', de: 'Ergebnis', es: 'Resultado', fr: 'Résultat' }, value: 'Result' },
          { label: { en: 'Original', ko: '원본', zh: '原始', ja: 'オリジナル', de: 'Original', es: 'Original', fr: 'Original' }, value: 'Original' },
        ],
        description: {
          en: 'Window name',
          ko: '윈도우 이름',
          zh: '窗口名称',
          ja: 'ウィンドウ名',
          de: 'Fenstername',
          es: 'Nombre de la ventana',
          fr: 'Nom de la fenêtre'
        },
      },
    ],
    syntax: 'cv2.imshow(winname, mat)',
    documentation: 'https://docs.opencv.org/4.x/d7/dfc/group__highgui.html#ga453d42fe4cb60e5723281a89973ee563',
  },

  // Camera Calibration & 3D Reconstruction
  {
    id: 'findChessboardCorners',
    name: {
      en: 'Find Chessboard Corners',
      ko: '체스보드 코너 검출',
      zh: '查找棋盘格角点',
      ja: 'チェスボードコーナーの検出',
      de: 'Schachbrett-Ecken finden',
      es: 'Encontrar esquinas de tablero de ajedrez',
      fr: 'Trouver les coins de l\'échiquier'
    },
    category: 'calib3d',
    description: {
      en: 'Finds the positions of internal corners of the chessboard. Used for camera calibration.',
      ko: '체스보드 패턴의 내부 코너 위치를 검출합니다. 카메라 캘리브레이션에 사용됩니다.',
      zh: '查找棋盘格的内部角点位置。用于相机标定。',
      ja: 'チェスボードパターンの内部コーナーの位置を検出します。カメラキャリブレーションに使用されます。',
      de: 'Findet die Positionen der internen Ecken des Schachbretts. Wird für die Kamerakalibrierung verwendet.',
      es: 'Encuentra las posiciones de las esquinas internas del tablero de ajedrez. Se utiliza para la calibración de la cámara.',
      fr: 'Trouve les positions des coins internes de l\'échiquier. Utilisé pour l\'étalonnage de la caméra.'
    },
    requiresGrayscale: true,
    customSrcLabel: {
      en: 'image: Input chessboard image',
      ko: 'image: 입력 체스보드 이미지',
      zh: 'image: 输入棋盘图像',
      ja: 'image: 入力チェスボード画像',
      de: 'image: Eingabe-Schachbrettbild',
      es: 'image: Imagen de tablero de ajedrez de entrada',
      fr: 'image: Image de l\'échiquier d\'entrée'
    },
    hideDst: false,
    customDstLabel: {
      en: 'dst: Corner visualization result',
      ko: 'dst: 코너 시각화 결과',
      zh: 'dst: 角点可视化结果',
      ja: 'dst: コーナー可視化結果',
      de: 'dst: Eckenvisualisierungsergebnis',
      es: 'dst: Resultado de visualización de esquinas',
      fr: 'dst: Résultat de visualisation des coins'
    },
    parameters: [
      {
        name: 'patternWidth',
        type: 'slider',
        defaultValue: 9,
        min: 3,
        max: 15,
        step: 1,
        description: {
          en: 'Number of inner corners per chessboard row',
          ko: '체스보드 가로 코너 개수 (내부)',
          zh: '每个棋盘行内部角点的数量',
          ja: 'チェスボードの行ごとの内部コーナーの数',
          de: 'Anzahl der inneren Ecken pro Schachbrettreihe',
          es: 'Número de esquinas internas por fila de tablero de ajedrez',
          fr: 'Nombre de coins intérieurs par ligne d\'échiquier'
        },
      },
      {
        name: 'patternHeight',
        type: 'slider',
        defaultValue: 6,
        min: 3,
        max: 15,
        step: 1,
        description: {
          en: 'Number of inner corners per chessboard column',
          ko: '체스보드 세로 코너 개수 (내부)',
          zh: '每个棋盘列内部角点的数量',
          ja: 'チェスボードの列ごとの内部コーナーの数',
          de: 'Anzahl der inneren Ecken pro Schachbrettspalte',
          es: 'Número de esquinas internas por columna de tablero de ajedrez',
          fr: 'Nombre de coins intérieurs par colonne d\'échiquier'
        },
      },
      {
        name: 'flags',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'CALIB_CB_ADAPTIVE_THRESH', value: 1 },
          { label: 'CALIB_CB_NORMALIZE_IMAGE', value: 2 },
          { label: 'CALIB_CB_FILTER_QUADS', value: 4 },
          { label: 'CALIB_CB_FAST_CHECK', value: 8 },
          { label: { en: 'Default', ko: '기본값', zh: '默认', ja: 'デフォルト', de: 'Standard', es: 'Predeterminado', fr: 'Par défaut' }, value: 0 },
        ],
        description: {
          en: 'Detection flags',
          ko: '검출 플래그',
          zh: '检测标志',
          ja: '検出フラグ',
          de: 'Erkennungsflags',
          es: 'Banderas de detección',
          fr: 'Indicateurs de détection'
        },
      },
    ],
    syntax: 'findChessboardCorners(image, patternSize, corners, flags=CALIB_CB_ADAPTIVE_THRESH+CALIB_CB_NORMALIZE_IMAGE)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga93efa9b0aa890de240ca32b11253dd4a',
  },
  {
    id: 'drawChessboardCorners',
    name: {
      en: 'Draw Chessboard Corners',
      ko: '체스보드 코너 그리기',
      zh: '绘制棋盘格角点',
      ja: 'チェスボードコーナーの描画',
      de: 'Schachbrett-Ecken zeichnen',
      es: 'Dibujar esquinas de tablero de ajedrez',
      fr: 'Dessiner les coins de l\'échiquier'
    },
    category: 'calib3d',
    description: {
      en: 'Draws detected chessboard corners onto the image.',
      ko: '검출된 체스보드 코너를 이미지 위에 그립니다.',
      zh: '将检测到的棋盘格角点绘制到图像上。',
      ja: '検出されたチェスボードのコーナーを画像に描画します。',
      de: 'Zeichnet erkannte Schachbrett-Ecken auf das Bild.',
      es: 'Dibuja las esquinas detectadas del tablero de ajedrez en la imagen.',
      fr: 'Dessine les coins de l\'échiquier détectés sur l\'image.'
    },
    parameters: [
      {
        name: 'patternWidth',
        type: 'slider',
        defaultValue: 9,
        min: 3,
        max: 15,
        step: 1,
        description: {
          en: 'Number of inner corners per row',
          ko: '체스보드 가로 코너 개수',
          zh: '每行内部角点的数量',
          ja: '行ごとの内部コーナーの数',
          de: 'Anzahl der inneren Ecken pro Reihe',
          es: 'Número de esquinas internas por fila',
          fr: 'Nombre de coins intérieurs par ligne'
        },
      },
      {
        name: 'patternHeight',
        type: 'slider',
        defaultValue: 6,
        min: 3,
        max: 15,
        step: 1,
        description: {
          en: 'Number of inner corners per column',
          ko: '체스보드 세로 코너 개수',
          zh: '每列内部角点的数量',
          ja: '列ごとの内部コーナーの数',
          de: 'Anzahl der inneren Ecken pro Spalte',
          es: 'Número de esquinas internas por columna',
          fr: 'Nombre de coins intérieurs par colonne'
        },
      },
    ],
    syntax: 'drawChessboardCorners(image, patternSize, corners, patternWasFound)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga6a10b0bb120c4907e5eabbcd22319022',
  },
  {
    id: 'findCirclesGrid',
    name: {
      en: 'Find Circles Grid',
      ko: '원형 그리드 검출',
      zh: '查找圆圈网格',
      ja: '円グリッドの検出',
      de: 'Kreisgitter finden',
      es: 'Encontrar cuadrícula de círculos',
      fr: 'Trouver une grille de cercles'
    },
    category: 'calib3d',
    description: {
      en: 'Finds centers in the grid of circles.',
      ko: '원형 패턴 그리드에서 중심점들을 검출합니다.',
      zh: '在圆圈网格中查找中心点。',
      ja: '円のグリッド内で中心を検出します。',
      de: 'Findet Zentren im Kreisgitter.',
      es: 'Encuentra centros en la cuadrícula de círculos.',
      fr: 'Trouve les centres dans la grille de cercles.'
    },
    requiresGrayscale: true,
    parameters: [
      {
        name: 'patternWidth',
        type: 'slider',
        defaultValue: 4,
        min: 2,
        max: 10,
        step: 1,
        description: {
          en: 'Number of circles per grid row',
          ko: '그리드 가로 원 개수',
          zh: '每行圆圈的数量',
          ja: 'グリッドの行ごとの円の数',
          de: 'Anzahl der Kreise pro Gitterreihe',
          es: 'Número de círculos por fila de la cuadrícula',
          fr: 'Nombre de cercles par ligne de grille'
        },
      },
      {
        name: 'patternHeight',
        type: 'slider',
        defaultValue: 11,
        min: 2,
        max: 15,
        step: 1,
        description: {
          en: 'Number of circles per grid column',
          ko: '그리드 세로 원 개수',
          zh: '每列圆圈的数量',
          ja: 'グリッドの列ごとの円の数',
          de: 'Anzahl der Kreise pro Gitterspalte',
          es: 'Número de círculos por columna de la cuadrícula',
          fr: 'Nombre de cercles par colonne de grille'
        },
      },
      {
        name: 'flags',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'CALIB_CB_SYMMETRIC_GRID', value: 1 },
          { label: 'CALIB_CB_ASYMMETRIC_GRID', value: 2 },
          { label: 'CALIB_CB_CLUSTERING', value: 4 },
          { label: { en: 'Default', ko: '기본값', zh: '默认', ja: 'デフォルト', de: 'Standard', es: 'Predeterminado', fr: 'Par défaut' }, value: 0 },
        ],
        description: {
          en: 'Detection flags',
          ko: '검출 플래그',
          zh: '检测标志',
          ja: '検出フラグ',
          de: 'Erkennungsflags',
          es: 'Banderas de detección',
          fr: 'Indicateurs de détection'
        },
      },
    ],
    syntax: 'findCirclesGrid(image, patternSize, centers, flags=CALIB_CB_SYMMETRIC_GRID)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga93efa9b0aa890de240ca32b11253dd4a',
  },
  {
    id: 'calibrateCamera',
    name: {
      en: 'Calibrate Camera',
      ko: '카메라 캘리브레이션',
      zh: '相机标定',
      ja: 'カメラキャリブレーション',
      de: 'Kamerakalibrierung',
      es: 'Calibrar cámara',
      fr: 'Étalonner la caméra'
    },
    category: 'calib3d',
    description: {
      en: 'Finds the camera intrinsic and extrinsic parameters from several views of a calibration pattern.',
      ko: '캘리브레이션 패턴의 여러 뷰로부터 카메라 내부 파라미터와 왜곡 계수를 계산합니다.',
      zh: '从标定图案的多个视图中寻找相机的内参和外参。',
      ja: 'キャリブレーションパターンの複数のビューから、カメラの内部および外部パラメータを検出します。',
      de: 'Findet die intrinsischen und extrinsischen Kameraparameter aus mehreren Ansichten eines Kalibrierungsmusters.',
      es: 'Encuentra los parámetros intrínsecos y extrínsecos de la cámara a partir de varias vistas de un patrón de calibración.',
      fr: 'Trouve les paramètres intrinsèques et extrinsèques de la caméra à partir de plusieurs vues d\'un motif d\'étalonnage.'
    },
    parameters: [
      {
        name: 'squareSize',
        type: 'number',
        defaultValue: 1.0,
        min: 0.1,
        max: 100,
        step: 0.1,
        description: {
          en: 'The size of a square on the chessboard (mm)',
          ko: '체스보드 정사각형 한 변의 크기 (mm)',
          zh: '棋盘格上正方形的大小 (mm)',
          ja: 'チェスボード上の正方形のサイズ (mm)',
          de: 'Die Größe eines Quadrats auf dem Schachbrett (mm)',
          es: 'El tamaño de un cuadrado en el tablero de ajedrez (mm)',
          fr: 'La taille d\'un carré sur l\'échiquier (mm)'
        },
      },
      {
        name: 'flags',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'CALIB_FIX_ASPECT_RATIO', value: 2 },
          { label: 'CALIB_FIX_PRINCIPAL_POINT', value: 4 },
          { label: 'CALIB_ZERO_TANGENT_DIST', value: 8 },
          { label: 'CALIB_RATIONAL_MODEL', value: 16384 },
          { label: { en: 'Default', ko: '기본값', zh: '默认', ja: 'デフォルト', de: 'Standard', es: 'Predeterminado', fr: 'Par défaut' }, value: 0 },
        ],
        description: {
          en: 'Calibration flags',
          ko: '캘리브레이션 플래그',
          zh: '标定标志',
          ja: 'キャリブレーションフラグ',
          de: 'Kalibrierungsflags',
          es: 'Banderas de calibración',
          fr: 'Indicateurs d\'étalonnage'
        },
      },
    ],
    syntax: 'calibrateCamera(objectPoints, imagePoints, imageSize, cameraMatrix, distCoeffs, rvecs, tvecs, flags=0)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga3207604e4b1a1758aa66acb6ed5aa65d',
  },
  {
    id: 'undistort',
    name: {
      en: 'Undistort Image',
      ko: '이미지 왜곡 보정',
      zh: '图像去畸变',
      ja: '画像の歪み補正',
      de: 'Bild entzerren',
      es: 'Corregir distorsión de imagen',
      fr: 'Correction de la distorsion d\'image'
    },
    category: 'calib3d',
    description: {
      en: 'Transforms an image to compensate for lens distortion.',
      ko: '카메라 렌즈 왜곡을 보정하여 이미지를 변환합니다.',
      zh: '转换图像以补偿镜头畸变。',
      ja: 'レンズの歪みを補正するために画像を変換します。',
      de: 'Transformiert ein Bild, um Linsenverzerrungen auszugleichen.',
      es: 'Transforma una imagen para compensar la distorsión de la lente.',
      fr: 'Transforme une image pour compenser la distorsion de l\'objectif.'
    },
    parameters: [
      {
        name: 'k1',
        type: 'slider',
        defaultValue: 0,
        min: -1,
        max: 1,
        step: 0.01,
        description: {
          en: 'Radial distortion coefficient k1',
          ko: '방사 왜곡 계수 k1',
          zh: '径向畸变系数 k1',
          ja: '放射方向の歪み係数 k1',
          de: 'Radialer Verzerrungskoeffizient k1',
          es: 'Coeficiente de distorsión radial k1',
          fr: 'Coefficient de distorsion radiale k1'
        },
      },
      {
        name: 'k2',
        type: 'slider',
        defaultValue: 0,
        min: -1,
        max: 1,
        step: 0.01,
        description: {
          en: 'Radial distortion coefficient k2',
          ko: '방사 왜곡 계수 k2',
          zh: '径向畸变系数 k2',
          ja: '放射方向の歪み係数 k2',
          de: 'Radialer Verzerrungskoeffizient k2',
          es: 'Coeficiente de distorsión radial k2',
          fr: 'Coefficient de distorsion radiale k2'
        },
      },
      {
        name: 'p1',
        type: 'slider',
        defaultValue: 0,
        min: -0.1,
        max: 0.1,
        step: 0.001,
        description: {
          en: 'Tangential distortion coefficient p1',
          ko: '접선 왜곡 계수 p1',
          zh: '切向畸变系数 p1',
          ja: '接線方向の歪み係数 p1',
          de: 'Tangentialer Verzerrungskoeffizient p1',
          es: 'Coeficiente de distorsión tangencial p1',
          fr: 'Coefficient de distorsion tangentielle p1'
        },
      },
      {
        name: 'p2',
        type: 'slider',
        defaultValue: 0,
        min: -0.1,
        max: 0.1,
        step: 0.001,
        description: {
          en: 'Tangential distortion coefficient p2',
          ko: '접선 왜곡 계수 p2',
          zh: '切向畸变系数 p2',
          ja: '接線方向の歪み係数 p2',
          de: 'Tangentialer Verzerrungskoeffizient p2',
          es: 'Coeficiente de distorsión tangencial p2',
          fr: 'Coefficient de distorsion tangentielle p2'
        },
      },
    ],
    syntax: 'undistort(src, dst, cameraMatrix, distCoeffs, newCameraMatrix=None)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga69fd6eb1e82708b5a9ca5c202e5b5d1c',
  },
  {
    id: 'getOptimalNewCameraMatrix',
    name: {
      en: 'Get Optimal New Camera Matrix',
      ko: '최적 카메라 행렬 계산',
      zh: '获取最佳新相机矩阵',
      ja: '最適な新しいカメラ行列の取得',
      de: 'Optimale neue Kameramatrix erhalten',
      es: 'Obtener la nueva matriz de cámara óptima',
      fr: 'Obtenir la nouvelle matrice de caméra optimale'
    },
    category: 'calib3d',
    description: {
      en: 'Returns the optimal new camera matrix based on the free scaling parameter.',
      ko: '자유 스케일링 파라미터를 기반으로 왜곡 보정 후의 최적의 새로운 카메라 행렬을 반환합니다.',
      zh: '根据自由缩放参数返回最佳新相机矩阵。',
      ja: '自由スケーリングパラメータに基づいて、新しい最適なカメラ行列を返します。',
      de: 'Gibt die optimale neue Kameramatrix basierend auf dem freien Skalierungsparameter zurück.',
      es: 'Devuelve la nueva matriz de cámara óptima basada en el parámetro de escalado libre.',
      fr: 'Renvoie la nouvelle matrice de caméra optimale en fonction du paramètre de mise à l\'échelle libre.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.1,
        description: {
          en: 'Free scaling parameter (0=all pixels valid, 1=keep all original pixels)',
          ko: '자유 스케일링 파라미터 (0=모든 픽셀 유효, 1=모든 원본 픽셀 유지)',
          zh: '自由缩放参数 (0=所有像素有效, 1=保留所有原始像素)',
          ja: '自由スケーリングパラメータ (0=すべてのピクセルが有効, 1=すべての元のピクセルを保持)',
          de: 'Freier Skalierungsparameter (0=alle Pixel gültig, 1=alle Originalpixel beibehalten)',
          es: 'Parámetro de escalado libre (0=todos los píxeles válidos, 1=mantener todos los píxeles originales)',
          fr: 'Paramètre de mise à l\'échelle libre (0=tous les pixels valides, 1=conserver tous les pixels d\'origine)'
        },
      },
    ],
    syntax: 'getOptimalNewCameraMatrix(cameraMatrix, distCoeffs, imageSize, alpha, newImgSize=None)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga7a6c4e032c97f03ba747966e6ad862b1',
  },
  {
    id: 'initUndistortRectifyMap',
    name: {
      en: 'Init Undistort Rectify Map',
      ko: '왜곡 보정 맵 초기화',
      zh: '初始化去畸变校正映射',
      ja: '歪み補正・平行化マップの初期化',
      de: 'Undistort-Rectify-Map initialisieren',
      es: 'Inicializar mapa de rectificación de distorsión',
      fr: 'Initialiser la carte de rectification de distorsion'
    },
    category: 'calib3d',
    description: {
      en: 'Computes the undistortion and rectification transformation map.',
      ko: '왜곡 보정 및 정류 변형을 위한 매핑 맵을 생성합니다.',
      zh: '计算去畸变和校正变换映射。',
      ja: '歪み補正と平行化変換のマップを計算します。',
      de: 'Berechnet die Undistortion- und Rectification-Transformations-Map.',
      es: 'Calcula el mapa de transformación de rectificación y corrección de distorsión.',
      fr: 'Calcule la carte de transformation de rectification et de correction de distorsion.'
    },
    parameters: [
      {
        name: 'mapType',
        type: 'select',
        defaultValue: 16,
        options: [
          { label: 'CV_32FC1', value: 5 },
          { label: 'CV_32FC2', value: 16 },
          { label: 'CV_16SC2', value: 17 },
        ],
        description: {
          en: 'Type of the first output map',
          ko: '출력 맵 데이터 타입',
          zh: '第一个输出映射的类型',
          ja: '最初の出力マップの型',
          de: 'Typ der ersten Ausgabe-Map',
          es: 'Tipo del primer mapa de salida',
          fr: 'Type de la première carte de sortie'
        },
      },
    ],
    syntax: 'initUndistortRectifyMap(cameraMatrix, distCoeffs, R, newCameraMatrix, size, m1type, map1, map2)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga7dfb72c9cf9780a347fbe3d1c47e5d5a',
  },
  {
    id: 'findHomography',
    name: {
      en: 'Find Homography',
      ko: '호모그래피 찾기',
      zh: '查找单应性矩阵',
      ja: 'ホモグラフィ行列の検出',
      de: 'Homographie finden',
      es: 'Encontrar homografía',
      fr: 'Trouver l\'homographie'
    },
    category: 'calib3d',
    description: {
      en: 'Finds a perspective transformation between two planes.',
      ko: '두 평면 사이의 원근 변환(호모그래피) 행렬을 찾습니다.',
      zh: '寻找两个平面之间的透视变换。',
      ja: '2つの平面間の透視変換を検出します。',
      de: 'Findet eine Perspektivtransformation zwischen zwei Ebenen.',
      es: 'Encuentra una transformación de perspectiva entre dos planos.',
      fr: 'Trouve une transformation de perspective entre deux plans.'
    },
    parameters: [
      {
        name: 'method',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'Regular (0)', value: 0 },
          { label: 'RANSAC (8)', value: 8 },
          { label: 'LMEDS (4)', value: 4 },
          { label: 'RHO (16)', value: 16 },
        ],
        description: {
          en: 'Method used to compute a homography matrix',
          ko: '호모그래피 계산 방법',
          zh: '用于计算单应性矩阵的方法',
          ja: 'ホ모グラフィ行列の計算に使用される手法',
          de: 'Methode zur Berechnung der Homographiematrix',
          es: 'Método utilizado para calcular la matriz de homografía',
          fr: 'Méthode utilisée pour calculer une matrice d\'homographie'
        },
      },
      {
        name: 'ransacReprojThreshold',
        type: 'slider',
        defaultValue: 3,
        min: 0.1,
        max: 10,
        step: 0.1,
        description: {
          en: 'Maximum allowed reprojection error to treat a point pair as an inlier',
          ko: 'RANSAC 재투영 임계값 (인라이어로 처리할 최대 픽셀 오차)',
          zh: 'RANSAC 重投影阈值（认定为内点的最大像素误差）',
          ja: 'RANSAC 再投影しきい値（インライアとして処理する最大ピクセル誤差）',
          de: 'Maximal zulässiger Reprojektionsfehler für Inlier',
          es: 'Error de reproyección máximo permitido para tratar un par de puntos como inlier',
          fr: 'Erreur de reprojection maximale autorisée pour traiter une paire de points comme inlier'
        },
      },
    ],
    syntax: 'findHomography(srcPoints, dstPoints, method=0, ransacReprojThreshold=3)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga4abc2ece9fab9398f2e560d53c8c9780',
  },
  {
    id: 'perspectiveTransform',
    name: {
      en: 'Perspective Transform',
      ko: '원근 변환',
      zh: '透视变换',
      ja: '透視変換',
      de: 'Perspektivtransformation',
      es: 'Transformación de perspectiva',
      fr: 'Transformation de perspective'
    },
    category: 'calib3d',
    description: {
      en: 'Performs perspective matrix transformation of vectors.',
      ko: '호모그래피 행렬을 사용하여 벡터(점)들을 원근 변환합니다.',
      zh: '对向量进行透视矩阵变换。',
      ja: 'ベクトルの透視変換行列変換を実行します。',
      de: 'Führt die perspektivische Matrixtransformation von Vektoren durch.',
      es: 'Realiza la transformación de matriz de perspectiva de vectores.',
      fr: 'Effectue la transformation de matrice de perspective des vecteurs.'
    },
    parameters: [
      {
        name: 'scaleX',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.1,
        max: 3,
        step: 0.1,
        description: {
          en: 'X-axis scale factor',
          ko: 'X축 스케일 계수',
          zh: 'X 轴缩放因子',
          ja: 'X軸スケール係数',
          de: 'X-Achsen-Skalierungsfaktor',
          es: 'Factor de escala del eje X',
          fr: 'Facteur d\'échelle de l\'axe X'
        },
      },
      {
        name: 'scaleY',
        type: 'slider',
        defaultValue: 1.0,
        min: 0.1,
        max: 3,
        step: 0.1,
        description: {
          en: 'Y-axis scale factor',
          ko: 'Y축 스케일 계수',
          zh: 'Y 轴缩放因子',
          ja: 'Y軸スケール係数',
          de: 'Y-Achsen-Skalierungsfaktor',
          es: 'Factor de escala del eje Y',
          fr: 'Facteur d\'échelle de l\'axe Y'
        },
      },
    ],
    syntax: 'perspectiveTransform(src, dst, m)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gad327659ac03e5fd6894b90dc06963694',
  },
  {
    id: 'decomposeHomographyMat',
    name: {
      en: 'Decompose Homography Matrix',
      ko: '호모그래피 행렬 분해',
      zh: '分解单应性矩阵',
      ja: 'ホモグラフィ行列の分解',
      de: 'Homographiematrix zerlegen',
      es: 'Descomponer la matriz de homografía',
      fr: 'Décomposer la matrice d\'homographie'
    },
    category: 'calib3d',
    description: {
      en: 'Decomposes a homography matrix to rotation, translation, and normal vectors.',
      ko: '호모그래피 행렬을 회전, 이동, 그리고 평면 법선 벡터들로 분해합니다.',
      zh: '将单应性矩阵分解为旋转、平移和法向量。',
      ja: 'ホモグラフィ行列を回転、並進、法線ベクトルに分解します。',
      de: 'Zerlegt eine Homographiematrix in Rotations-, Translations- und Normalvektoren.',
      es: 'Descompone una matriz de homografía en rotación, traslación y vectores normales.',
      fr: 'Décompose une matrice d\'homographie en rotation, translation et vecteurs normaux.'
    },
    parameters: [],
    syntax: 'decomposeHomographyMat(H, K, rotations, translations, normals)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga7f60bdff78833d1e3fd6d9d0fd538d92',
  },
  {
    id: 'stereoCalibrate',
    name: {
      en: 'Stereo Calibrate',
      ko: '스테레오 캘리브레이션',
      zh: '立体标定',
      ja: 'ステレオキャリブレーション',
      de: 'Stereo-Kalibrierung',
      es: 'Calibración estéreo',
      fr: 'Étalonnage stéréo'
    },
    category: 'calib3d',
    description: {
      en: 'Calibrates a stereo camera system.',
      ko: '스테레오 카메라 시스템의 내부 및 외부 파라미터를 캘리브레이션합니다.',
      zh: '标定立体相机系统。',
      ja: 'ステレオカメラシステムをキャリブレーションします。',
      de: 'Kalibriert ein Stereokamerasystem.',
      es: 'Calibra un sistema de cámara estéreo.',
      fr: 'Étalonne un système de caméra stéréo.'
    },
    parameters: [
      {
        name: 'flags',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'CALIB_FIX_INTRINSIC', value: 256 },
          { label: 'CALIB_USE_INTRINSIC_GUESS', value: 1 },
          { label: 'CALIB_FIX_FOCAL_LENGTH', value: 16 },
          { label: 'CALIB_RATIONAL_MODEL', value: 16384 },
          { label: { en: 'Default', ko: '기본값', zh: '默认', ja: 'デフォルト', de: 'Standard', es: 'Predeterminado', fr: 'Par défaut' }, value: 0 },
        ],
        description: {
          en: 'Calibration flags',
          ko: '캘리브레이션 플래그',
          zh: '标定标志',
          ja: 'キャリブレーションフラグ',
          de: 'Kalibrierungsflags',
          es: 'Banderas de calibración',
          fr: 'Indicateurs d\'étalonnage'
        },
      },
    ],
    syntax: 'stereoCalibrate(objectPoints, imagePoints1, imagePoints2, cameraMatrix1, distCoeffs1, cameraMatrix2, distCoeffs2, imageSize, R, T, E, F, flags=0)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga91018d80e2a93ade37539f01e6f07de5',
  },
  {
    id: 'stereoRectify',
    name: {
      en: 'Stereo Rectify',
      ko: '스테레오 정류',
      zh: '立体校正',
      ja: 'ステレオ平行化',
      de: 'Stereo-Rectify',
      es: 'Rectificación estéreo',
      fr: 'Rectification stéréo'
    },
    category: 'calib3d',
    description: {
      en: 'Computes rectification transforms for each head of a calibrated stereo camera.',
      ko: '캘리브레이션된 스테레오 카메라의 각 이미지에 대한 정류 변환을 계산하여 에피폴라 라인을 수평으로 만듭니다.',
      zh: '为已标定的立体相机的每个镜头计算校正变换。',
      ja: 'キャリブレーションされたステレオカメラの各ヘッドに対して平行化変換を計算します。',
      de: 'Berechnet Rectification-Transformationen für jeden Kopf einer kalibrierten Stereokamera.',
      es: 'Calcula las transformaciones de rectificación para cada cabezal de una cámara estéreo calibrada.',
      fr: 'Calcule les transformations de rectification pour chaque tête d\'une caméra stéréo étalonnée.'
    },
    parameters: [
      {
        name: 'alpha',
        type: 'slider',
        defaultValue: -1,
        min: -1,
        max: 1,
        step: 0.1,
        description: {
          en: 'Free scaling parameter',
          ko: '자유 스케일링 파라미터',
          zh: '自由缩放参数',
          ja: '自由スケーリングパラメータ',
          de: 'Freier Skalierungsparameter',
          es: 'Parámetro de escalado libre',
          fr: 'Paramètre de mise à l\'échelle libre'
        },
      },
    ],
    syntax: 'stereoRectify(cameraMatrix1, distCoeffs1, cameraMatrix2, distCoeffs2, imageSize, R, T, R1, R2, P1, P2, Q, flags=CALIB_ZERO_DISPARITY, alpha=-1)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga617b1685d4059c6040827800e72ad2b6',
  },
  {
    id: 'StereoBM_compute',
    name: {
      en: 'Stereo Block Matching',
      ko: '스테레오 블록 매칭',
      zh: '立体块匹配',
      ja: 'ステレオブロックマッチング',
      de: 'Stereo-Block-Matching',
      es: 'Emparejamiento de bloques estéreo',
      fr: 'Appariement de blocs stéréo'
    },
    category: 'calib3d',
    description: {
      en: 'Computes disparity map using the block matching algorithm.',
      ko: 'Block Matching 알고리즘을 사용하여 스테레오 이미지 쌍으로부터 시차(disparity) 맵을 계산합니다.',
      zh: '使用块匹配算法计算视差图。',
      ja: 'ブロックマッチングアルゴリズムを使用して視差マップを計算します。',
      de: 'Berechnet die Disparitätskarte mit dem Blockvergleichsalgorithmus.',
      es: 'Calcula el mapa de disparidad utilizando el algoritmo de coincidencia de bloques.',
      fr: 'Calcule la carte de disparité à l\'aide de l\'algorithme d\'appariement de blocs.'
    },
    inputCount: 2,
    requiresGrayscale: true,
    parameters: [
      {
        name: 'numDisparities',
        type: 'slider',
        defaultValue: 64,
        min: 16,
        max: 256,
        step: 16,
        description: {
          en: 'Maximum disparity minus minimum disparity (must be divisible by 16)',
          ko: '최대 시차 범위 (16의 배수여야 함)',
          zh: '最大视差减去最小视差（必须能被 16 整除）',
          ja: '最大視差から最小視差を引いたもの（16で割り切れる必要があります）',
          de: 'Maximale Disparität minus minimale Disparität (muss durch 16 teilbar sein)',
          es: 'Disparidad máxima menos disparidad mínima (debe ser divisible por 16)',
          fr: 'Disparité maximale moins disparité minimale (doit être divisible par 16)'
        },
      },
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 15,
        min: 5,
        max: 51,
        step: 2,
        description: {
          en: 'Matched block size. It must be an odd number >=1.',
          ko: '매칭 블록 크기 (1보다 큰 홀수여야 함)',
          zh: '匹配的块大小。必须是 >=1 的奇数。',
          ja: 'マッチングブロックサイズ。1以上の奇数である必要があります。',
          de: 'Größe des verglichenen Blocks. Es muss eine ungerade Zahl >=1 sein.',
          es: 'Tamaño del bloque coincidente. Debe ser un número impar >=1.',
          fr: 'Taille du bloc apparié. Il doit s\'agir d\'un nombre impair >=1.'
        },
      },
      {
        name: 'preFilterCap',
        type: 'slider',
        defaultValue: 31,
        min: 1,
        max: 63,
        step: 1,
        description: {
          en: 'Truncation value for pre-filtering',
          ko: '사전 필터링 결과의 잘림(truncation) 값',
          zh: '预滤波的截断值',
          ja: 'プリフィルタリングの切り捨て値',
          de: 'Abschneidewert für die Vorfilterung',
          es: 'Valor de truncamiento para el prefiltrado',
          fr: 'Valeur de troncature pour le pré-filtrage'
        },
      },
      {
        name: 'uniquenessRatio',
        type: 'slider',
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 1,
        description: {
          en: 'Margin in percentage by which the best cost function value should "win" the second best',
          ko: '최선값이 차선값보다 나아야 하는 마진 비율 (%)',
          zh: '最佳代价函数值应优于次佳值的百分比边缘',
          ja: '最適なコスト関数値が2番目に最適な値を「上回る」必要があるパーセンテージの許容範囲',
          de: 'Marge in Prozent, um die der beste Kostenfunktionswert den zweitbesten „gewinnen“ sollte',
          es: 'Margen en porcentaje por el cual el mejor valor de la función de costo debería "ganar" al segundo mejor',
          fr: 'Marge en pourcentage par laquelle la meilleure valeur de la fonction de coût doit "gagner" la deuxième meilleure'
        },
      },
    ],
    syntax: 'StereoBM.compute(left, right, disparity)',
    documentation: 'https://docs.opencv.org/4.x/d9/dba/classcv_1_1StereoBM.html',
  },
  {
    id: 'StereoSGBM_compute',
    name: {
      en: 'Stereo Semi-Global Block Matching',
      ko: '스테레오 SGBM',
      zh: '立体半全局块匹配',
      ja: 'ステレオセミグローバルブロックマッチング',
      de: 'Stereo-Semi-Global-Block-Matching',
      es: 'Emparejamiento de bloques semiglobal estéreo',
      fr: 'Appariement de blocs semi-global stéréo'
    },
    category: 'calib3d',
    description: {
      en: 'Computes disparity map using the semi-global block matching algorithm.',
      ko: 'Semi-Global Block Matching 알고리즘을 사용하여 고품질 시차 맵을 계산합니다.',
      zh: '使用半全局块匹配算法计算视差图。',
      ja: 'セミグローバルブロックマッチングアルゴリズムを使用して視差マップを計算します。',
      de: 'Berechnet die Disparitätskarte mit dem Semi-Global-Block-Matching-Algorithmus.',
      es: 'Calcula el mapa de disparidad utilizando el algoritmo de coincidencia de bloques semiglobal.',
      fr: 'Calcule la carte de disparité à l\'aide de l\'algorithme d\'appariement de blocs semi-global.'
    },
    inputCount: 2,
    requiresGrayscale: true,
    parameters: [
      {
        name: 'minDisparity',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 64,
        step: 1,
        description: {
          en: 'Minimum possible disparity value',
          ko: '최소 가능한 시차 값',
          zh: '最小可能的视差值',
          ja: '最小の視差値',
          de: 'Minimal möglicher Disparitätswert',
          es: 'Valor de disparidad mínimo posible',
          fr: 'Valeur de disparité minimale possible'
        },
      },
      {
        name: 'numDisparities',
        type: 'slider',
        defaultValue: 64,
        min: 16,
        max: 256,
        step: 16,
        description: {
          en: 'Maximum disparity minus minimum disparity (must be divisible by 16)',
          ko: '시차 범위 (16의 배수여야 함)',
          zh: '最大视差减去最小视差（必须能被 16 整除）',
          ja: '最大視差から最小視差を引いたもの（16で割り切れる必要があります）',
          de: 'Maximale Disparität minus minimale Disparität (muss durch 16 teilbar sein)',
          es: 'Disparidad máxima menos disparidad mínima (debe ser divisible por 16)',
          fr: 'Disparité maximale moins disparité minimale (doit être divisible par 16)'
        },
      },
      {
        name: 'blockSize',
        type: 'slider',
        defaultValue: 5,
        min: 3,
        max: 21,
        step: 2,
        description: {
          en: 'Matched block size (must be an odd number >=1)',
          ko: '매칭 블록 크기 (1보다 큰 홀수여야 함)',
          zh: '匹配的块大小（必须是 >=1 的奇数）',
          ja: 'マッチングブロックサイズ（1以上の奇数である必要があります）',
          de: 'Größe des verglichenen Blocks (muss eine ungerade Zahl >=1 sein)',
          es: 'Tamaño del bloque coincidente (debe ser un número impar >=1)',
          fr: 'Taille du bloc apparié (doit être un nombre impair >=1)'
        },
      },
      {
        name: 'P1',
        type: 'slider',
        defaultValue: 200,
        min: 0,
        max: 1000,
        step: 10,
        description: {
          en: 'Penalty for small disparity change between neighbor pixels',
          ko: '인접 픽셀 간의 작은 시차 변화에 대한 패널티',
          zh: '相邻像素之间小视差变化的惩罚',
          ja: '隣接ピクセル間の小さな視差変化に対するペナルティ',
          de: 'Strafe für kleine Disparitätsänderungen zwischen benachbarten Pixeln',
          es: 'Penalización por pequeño cambio de disparidad entre píxeles vecinos',
          fr: 'Pénalité pour un petit changement de disparité entre les pixels voisins'
        },
      },
      {
        name: 'P2',
        type: 'slider',
        defaultValue: 800,
        min: 0,
        max: 5000,
        step: 100,
        description: {
          en: 'Penalty for large disparity change between neighbor pixels',
          ko: '인접 픽셀 간의 큰 시차 변화에 대한 패널티',
          zh: '相邻像素之间大视差变化的惩罚',
          ja: '隣接ピクセル間の大きな視差変化に対するペナルティ',
          de: 'Strafe für große Disparitätsänderungen zwischen benachbarten Pixeln',
          es: 'Penalización por gran cambio de disparidad entre píxeles vecinos',
          fr: 'Pénalité pour un changement de disparité important entre les pixels voisins'
        },
      },
      {
        name: 'mode',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'MODE_SGBM', value: 0 },
          { label: 'MODE_HH', value: 1 },
          { label: 'MODE_SGBM_3WAY', value: 2 },
        ],
        description: {
          en: 'SGBM mode',
          ko: 'SGBM 모드',
          zh: 'SGBM 模式',
          ja: 'SGBMモード',
          de: 'SGBM-Modus',
          es: 'Modo SGBM',
          fr: 'Mode SGBM'
        },
      },
    ],
    syntax: 'StereoSGBM.compute(left, right, disparity)',
    documentation: 'https://docs.opencv.org/4.x/d2/d85/classcv_1_1StereoSGBM.html',
  },
  {
    id: 'reprojectImageTo3D',
    name: {
      en: 'Reproject Image to 3D',
      ko: '이미지를 3D로 재투영',
      zh: '将图像重投影为 3D',
      ja: '画像を3Dに再投影',
      de: 'Bild in 3D reprojizieren',
      es: 'Reproyectar imagen a 3D',
      fr: 'Reprojeter l\'image en 3D'
    },
    category: 'calib3d',
    description: {
      en: 'Reprojects a disparity image to 3D space.',
      ko: '시차 맵을 3D 포인트 클라우드로 재투영합니다.',
      zh: '将视差图重投影到 3D 空间。',
      ja: '視差マップを3D空間に再投影します。',
      de: 'Reprojiziert ein Disparitätsbild in den 3D-Raum.',
      es: 'Reproyecta una imagen de disparidad al espacio 3D.',
      fr: 'Reprojette une image de disparité dans l\'espace 3D.'
    },
    parameters: [
      {
        name: 'handleMissingValues',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: { en: 'False', ko: '거짓', zh: '假', ja: '偽', de: 'Falsch', es: 'Falso', fr: 'Faux' }, value: 0 },
          { label: { en: 'True', ko: '참', zh: '真', ja: '真', de: 'Wahr', es: 'Verdadero', fr: 'Vrai' }, value: 1 },
        ],
        description: {
          en: 'Indicates whether to handle missing values',
          ko: '결측값 처리 여부',
          zh: '是否处理缺失值',
          ja: '欠損値を処理するかどうかを示します',
          de: 'Gibt an, ob fehlende Werte behandelt werden sollen',
          es: 'Indica si se deben manejar los valores faltantes',
          fr: 'Indique s\'il faut gérer les valeurs manquantes'
        },
      },
    ],
    syntax: 'reprojectImageTo3D(disparity, _3dImage, Q, handleMissingValues=False)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga1bc1152bd57d63bc524204f21fde6e02',
  },
  {
    id: 'triangulatePoints',
    name: {
      en: 'Triangulate Points',
      ko: '점 삼각 측량',
      zh: '三角测量点',
      ja: '点の三角測量',
      de: 'Punkte triangulieren',
      es: 'Triangular puntos',
      fr: 'Trianguler les points'
    },
    category: 'calib3d',
    description: {
      en: 'Reconstructs 3D points by triangulation from two views.',
      ko: '두 뷰에서 대응되는 점들로부터 3D 점을 삼각측량하여 복원합니다.',
      zh: '通过两个视图的三角测量重建 3D 点。',
      ja: '2つのビューからの三角測量によって3Dポイントを再構成します。',
      de: 'Rekonstruiert 3D-Punkte durch Triangulation aus zwei Ansichten.',
      es: 'Reconstruye puntos 3D por triangulación de dos vistas.',
      fr: 'Reconstruit des points 3D par triangulation à partir de deux vues.'
    },
    parameters: [],
    syntax: 'triangulatePoints(projMatr1, projMatr2, projPoints1, projPoints2, points4D)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gad3fc9a0c82b08df034234979960b778c',
  },
  {
    id: 'correctMatches',
    name: {
      en: 'Correct Matches',
      ko: '매칭 포인트 보정',
      zh: '校正匹配',
      ja: 'マッチングの補正',
      de: 'Übereinstimmungen korrigieren',
      es: 'Corregir coincidencias',
      fr: 'Corriger les correspondances'
    },
    category: 'calib3d',
    description: {
      en: 'Refines coordinates of matching points to satisfy epipolar constraint.',
      ko: '에피폴라 제약 조건을 만족하도록 대응되는 점들의 좌표를 보정합니다.',
      zh: '完善匹配点的坐标以满足极线约束。',
      ja: 'エピポーラ制約を満たすようにマッチングポイントの座標を調整します。',
      de: 'Verfeinert die Koordinaten übereinstimmender Punkte, um die Epipolarbeschränkung zu erfüllen.',
      es: 'Refina las coordenadas de los puntos coincidentes para satisfacer la restricción epipolar.',
      fr: 'Affine les coordonnées des points correspondants pour satisfaire la contrainte épipolaire.'
    },
    parameters: [],
    syntax: 'correctMatches(F, points1, points2, newPoints1, newPoints2)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga7c1c3a3d6c06e8f8c40a59d5d0dd8e48',
  },
  {
    id: 'convertPointsToHomogeneous',
    name: {
      en: 'Convert Points to Homogeneous',
      ko: '동차 좌표로 변환',
      zh: '转换为齐次坐标',
      ja: '同次座標への変換',
      de: 'Punkte in homogene Koordinaten umwandeln',
      es: 'Convertir puntos a homogéneos',
      fr: 'Convertir les points en coordonnées homogènes'
    },
    category: 'calib3d',
    description: {
      en: 'Converts points from Euclidean to homogeneous coordinates.',
      ko: '유클리드 좌표계의 점들을 동차(homogeneous) 좌표계로 변환합니다.',
      zh: '将点从欧几里得坐标转换为齐次坐标。',
      ja: 'ポイントをユークリッド座標から同次座標に変換します。',
      de: 'Konvertiert Punkte von euklidischen in homogene Koordinaten.',
      es: 'Convierte puntos de coordenadas euclidianas a homogéneas.',
      fr: 'Convertit les points des coordonnées euclidiennes en coordonnées homogènes.'
    },
    parameters: [],
    syntax: 'convertPointsToHomogeneous(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gad10a5ef12ee3499d0774c7904a801e99',
  },
  {
    id: 'convertPointsFromHomogeneous',
    name: {
      en: 'Convert Points from Homogeneous',
      ko: '동차 좌표에서 유클리드 좌표로 변환',
      zh: '从齐次坐标转换为欧几里得坐标',
      ja: '同次座標からユークリッド座標への変換',
      de: 'Punkte von homogenen Koordinaten umwandeln',
      es: 'Convertir puntos de homogéneos a euclidianos',
      fr: 'Convertir les points des coordonnées homogènes en coordonnées euclidiennes'
    },
    category: 'calib3d',
    description: {
      en: 'Converts points from homogeneous to Euclidean coordinates.',
      ko: '동차(homogeneous) 좌표계의 점들을 유클리드 좌표계로 변환합니다.',
      zh: '将点从齐次坐标转换为欧几里得坐标。',
      ja: 'ポイントを同次座標からユークリッド座標に変換します。',
      de: 'Konvertiert Punkte von homogenen in euklidische Koordinaten.',
      es: 'Convierte puntos de coordenadas homogéneas a euclidianas.',
      fr: 'Convertit les points des coordonnées homogènes en coordonnées euclidiennes.'
    },
    parameters: [],
    syntax: 'convertPointsFromHomogeneous(src, dst)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gaf9135b54f6a0f6b8c761a4f3b0c4caa9',
  },
  {
    id: 'solvePnP',
    name: {
      en: 'Solve PnP',
      ko: 'PnP 문제 해결 (Pose 추정)',
      zh: '解 PnP 问题',
      ja: 'PnP問題の解決',
      de: 'PnP-Problem lösen',
      es: 'Resolver PnP',
      fr: 'Résoudre PnP'
    },
    category: 'calib3d',
    description: {
      en: 'Estimates the object pose from 3D-2D point correspondences.',
      ko: '3D 점들과 그에 대응하는 2D 이미지 점들의 쌍으로부터 객체의 자세(위치와 방향)를 추정합니다.',
      zh: '通过 3D-2D 点对应关系估计物体的姿态。',
      ja: '3D-2Dの点の対応関係からオブジェクトの姿勢を推定します。',
      de: 'Schätzt die Objektpose aus 3D-2D-Punktkorrespondenzen.',
      es: 'Estima la pose del objeto a partir de correspondencias de puntos 3D-2D.',
      fr: 'Estime la pose de l\'objet à partir des correspondances de points 3D-2D.'
    },
    parameters: [
      {
        name: 'method',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'SOLVEPNP_ITERATIVE', value: 0 },
          { label: 'SOLVEPNP_EPNP', value: 1 },
          { label: 'SOLVEPNP_P3P', value: 2 },
          { label: 'SOLVEPNP_DLS', value: 3 },
          { label: 'SOLVEPNP_UPNP', value: 4 },
          { label: 'SOLVEPNP_AP3P', value: 5 },
          { label: 'SOLVEPNP_IPPE', value: 6 },
          { label: 'SOLVEPNP_IPPE_SQUARE', value: 7 },
          { label: 'SOLVEPNP_SQPNP', value: 8 },
        ],
        description: {
          en: 'PnP solution method',
          ko: 'PnP 해결 방법',
          zh: 'PnP 解决方法',
          ja: 'PnP解決手法',
          de: 'PnP-Lösungsmethode',
          es: 'Método de resolución PnP',
          fr: 'Méthode de résolution PnP'
        },
      },
    ],
    syntax: 'solvePnP(objectPoints, imagePoints, cameraMatrix, distCoeffs, rvec, tvec, useExtrinsicGuess=False, flags=SOLVEPNP_ITERATIVE)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga549c2075fac14829ff4a58bc931c033d',
  },
  {
    id: 'solvePnPRansac',
    name: {
      en: 'Solve PnP RANSAC',
      ko: 'PnP RANSAC (강건한 Pose 추정)',
      zh: '解 PnP RANSAC',
      ja: 'PnP RANSACの解決',
      de: 'PnP RANSAC lösen',
      es: 'Resolver PnP RANSAC',
      fr: 'Résoudre PnP RANSAC'
    },
    category: 'calib3d',
    description: {
      en: 'Estimates the object pose from 3D-2D point correspondences using RANSAC to be robust to outliers.',
      ko: 'RANSAC 알고리즘을 사용하여 이상치(outlier)에 강건하게 3D-2D 대응으로부터 객체의 자세를 추정합니다.',
      zh: '使用 RANSAC 通过 3D-2D 点对应关系估计物体的姿态，对离群点具有鲁棒性。',
      ja: 'RANSACを使用して、外れ値に対して堅牢に3D-2Dの点の対応関係からオブジェクトの姿勢を推定します。',
      de: 'Schätzt die Objektpose aus 3D-2D-Punktkorrespondenzen mithilfe von RANSAC, um robust gegenüber Ausreißern zu sein.',
      es: 'Estima la pose del objeto a partir de correspondencias de puntos 3D-2D utilizando RANSAC para ser robusto a los valores atípicos.',
      fr: 'Estime la pose de l\'objet à partir des correspondances de points 3D-2D en utilisant RANSAC pour être robuste aux valeurs aberrantes.'
    },
    parameters: [
      {
        name: 'iterationsCount',
        type: 'slider',
        defaultValue: 100,
        min: 10,
        max: 1000,
        step: 10,
        description: {
          en: 'Maximum number of RANSAC iterations',
          ko: 'RANSAC 최대 반복 횟수',
          zh: 'RANSAC 最大迭代次数',
          ja: 'RANSACの最大反復回数',
          de: 'Maximale Anzahl der RANSAC-Iterationen',
          es: 'Número máximo de iteraciones de RANSAC',
          fr: 'Nombre maximum d\'itérations RANSAC'
        },
      },
      {
        name: 'reprojectionError',
        type: 'slider',
        defaultValue: 8.0,
        min: 1,
        max: 20,
        step: 0.5,
        description: {
          en: 'Inlier threshold; maximum allowed distance between observed and projected points',
          ko: '인라이어 임계값 (관측된 점과 투영된 점 사이의 최대 허용 거리)',
          zh: '内点阈值；观测点与投影点之间允许的最大距离',
          ja: 'インライアしきい値。観測された点と投影された点の間の最大許容距離',
          de: 'Inlier-Schwellenwert; maximal zulässiger Abstand zwischen beobachteten und projizierten Punkten',
          es: 'Umbral de inlier; distancia máxima permitida entre puntos observados y proyectados',
          fr: 'Seuil d\'inlier ; distance maximale autorisée entre les points observés et projetés'
        },
      },
      {
        name: 'confidence',
        type: 'slider',
        defaultValue: 0.99,
        min: 0.8,
        max: 0.999,
        step: 0.01,
        description: {
          en: 'Confidence level for the result',
          ko: '결과에 대한 신뢰도 수준',
          zh: '结果的置信度',
          ja: '結果の信頼レベル',
          de: 'Konfidenzniveau für das Ergebnis',
          es: 'Nivel de confianza para el resultado',
          fr: 'Niveau de confiance pour le résultat'
        },
      },
    ],
    syntax: 'solvePnPRansac(objectPoints, imagePoints, cameraMatrix, distCoeffs, rvec, tvec, useExtrinsicGuess=False, iterationsCount=100, reprojectionError=8.0, confidence=0.99)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga50620f0e26e02caa2e9adc07b5fbf24e',
  },
  {
    id: 'solvePnPRefineLM',
    name: {
      en: 'Solve PnP Refine LM',
      ko: 'PnP 오차 정제 (LM 최적화)',
      zh: '解 PnP LM 细化',
      ja: 'PnP LMの精緻化',
      de: 'PnP LM verfeinern',
      es: 'Refinar PnP LM',
      fr: 'Affiner PnP LM'
    },
    category: 'calib3d',
    description: {
      en: 'Refines the pose estimate using Levenberg-Marquardt optimization.',
      ko: 'Levenberg-Marquardt 최적화 방법을 사용하여 추정된 자세(pose)를 더 정확하게 정제합니다.',
      zh: '使用 Levenberg-Marquardt 优化完善姿态估计。',
      ja: 'Levenberg-Marquardt最適化を使用して姿勢推定を精緻化します。',
      de: 'Verfeinert die Posenschätzung mithilfe der Levenberg-Marquardt-Optimierung.',
      es: 'Refina la estimación de la pose utilizando la optimización de Levenberg-Marquardt.',
      fr: 'Affine l\'estimation de la pose en utilisant l\'optimisation de Levenberg-Marquardt.'
    },
    parameters: [],
    syntax: 'solvePnPRefineLM(objectPoints, imagePoints, cameraMatrix, distCoeffs, rvec, tvec)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gade26b44ae74a6eb58eb08c4ab94c6222',
  },
  {
    id: 'Rodrigues',
    name: {
      en: 'Rodrigues Transform',
      ko: '로드리게스 변환',
      zh: '罗德里格斯变换',
      ja: 'ロドリゲス変換',
      de: 'Rodrigues-Transformation',
      es: 'Transformación de Rodrigues',
      fr: 'Transformation de Rodrigues'
    },
    category: 'calib3d',
    description: {
      en: 'Converts a rotation vector to a rotation matrix or vice versa.',
      ko: '회전 벡터(3x1)를 회전 행렬(3x3)로, 또는 그 반대로 변환합니다.',
      zh: '将旋转向量转换为旋转矩阵，反之亦然。',
      ja: '回転ベクトルを回転行列に、またはその逆に変換します。',
      de: 'Konvertiert einen Rotationsvektor in eine Rotationsmatrix oder umgekehrt.',
      es: 'Convierte un vector de rotación en una matriz de rotación o viceversa.',
      fr: 'Convertit un vecteur de rotation en une matrice de rotation ou vice versa.'
    },
    parameters: [],
    syntax: 'Rodrigues(src, dst, jacobian=None)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga61585db663d9da06b68e70cfbf6a1eac',
  },
  {
    id: 'projectPoints',
    name: {
      en: 'Project Points',
      ko: '3D 점 투영',
      zh: '投影点',
      ja: '点の投影',
      de: 'Punkte projizieren',
      es: 'Proyectar puntos',
      fr: 'Projeter des points'
    },
    category: 'calib3d',
    description: {
      en: 'Projects 3D points to an image plane.',
      ko: '3D 공간상의 점들을 카메라 파라미터를 기반으로 2D 이미지 평면에 투영합니다.',
      zh: '将 3D 点投影到图像平面上。',
      ja: '3Dポイントを画像平面に投影します。',
      de: 'Projiziert 3D-Punkte auf eine Bildebene.',
      es: 'Proyecta puntos 3D en un plano de imagen.',
      fr: 'Projette des points 3D sur un plan d\'image.'
    },
    parameters: [],
    syntax: 'projectPoints(objectPoints, rvec, tvec, cameraMatrix, distCoeffs, imagePoints, jacobian=None)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga1019495a2c8d1743ed5cc23fa0daff8c',
  },
  {
    id: 'drawFrameAxes',
    name: {
      en: 'Draw Frame Axes',
      ko: '좌표축 그리기',
      zh: '绘制坐标轴',
      ja: '座標軸の描画',
      de: 'Achsen zeichnen',
      es: 'Dibujar ejes de coordenadas',
      fr: 'Dessiner les axes de coordonnées'
    },
    category: 'calib3d',
    description: {
      en: 'Draws 3D axes into an image.',
      ko: '3D 좌표축(X, Y, Z)을 이미지 상의 특정 자세에 맞게 그립니다.',
      zh: '在图像中绘制 3D 坐标轴。',
      ja: '画像内に3D座標軸を描画します。',
      de: 'Zeichnet 3D-Achsen in ein Bild.',
      es: 'Dibuja ejes 3D en una imagen.',
      fr: 'Dessine des axes 3D dans une image.'
    },
    parameters: [
      {
        name: 'length',
        type: 'slider',
        defaultValue: 100,
        min: 10,
        max: 500,
        step: 10,
        description: {
          en: 'Length of the axes to be drawn',
          ko: '그려질 축의 길이 (픽셀)',
          zh: '待绘制坐标轴的长度',
          ja: '描画される軸の長さ',
          de: 'Länge der zu zeichnenden Achsen',
          es: 'Longitud de los ejes a dibujar',
          fr: 'Longueur des axes à dessiner'
        },
      },
      {
        name: 'thickness',
        type: 'slider',
        defaultValue: 3,
        min: 1,
        max: 10,
        step: 1,
        description: {
          en: 'Thickness of the axes lines',
          ko: '축 선의 두께',
          zh: '坐标轴线的粗细',
          ja: '軸線の太さ',
          de: 'Dicke der Achsenlinien',
          es: 'Grosor de las líneas de los ejes',
          fr: 'Épaisseur des lignes des axes'
        },
      },
    ],
    syntax: 'drawFrameAxes(image, cameraMatrix, distCoeffs, rvec, tvec, length, thickness=3)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga2ad34b0f277013dbb6a7d0c3b90bc75c',
  },
  {
    id: 'decomposeProjectionMatrix',
    name: {
      en: 'Decompose Projection Matrix',
      ko: '투영 행렬 분해',
      zh: '分解投影矩阵',
      ja: '投影行列の分解',
      de: 'Projektionsmatrix zerlegen',
      es: 'Descomponer la matriz de proyección',
      fr: 'Décomposer la matrice de projection'
    },
    category: 'calib3d',
    description: {
      en: 'Decomposes a projection matrix into a camera matrix and a rotation-translation matrix.',
      ko: '3x4 투영 행렬을 카메라 내부 파라미터 행렬(K), 회전 행렬(R), 그리고 이동 벡터(t)로 분해합니다.',
      zh: '将投影矩阵分解为相机矩阵和旋转-平移矩阵。',
      ja: '投影行列をカメラ行列と回転・並進行列に分解します。',
      de: 'Zerlegt eine Projektionsmatrix in eine Kameramatrix und eine Rotations-Translations-Matrix.',
      es: 'Descompone una matriz de proyección en una matriz de cámara y una matriz de rotación-traslación.',
      fr: 'Décompose une matrice de projection en une matrice de caméra et une matrice de rotation-translation.'
    },
    parameters: [],
    syntax: 'decomposeProjectionMatrix(projMatrix, cameraMatrix, rotMatrix, transVect)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#gaaae5a7899faa1ffdf268cd9088940248',
  },
  {
    id: 'composeRT',
    name: {
      en: 'Compose RT',
      ko: '회전과 이동 결합',
      zh: '组合旋转和平移',
      ja: '回転と並進の結合',
      de: 'RT kombinieren',
      es: 'Componer RT',
      fr: 'Composer RT'
    },
    category: 'calib3d',
    description: {
      en: 'Combines two rotation-translation transformations.',
      ko: '두 개의 연속적인 회전-이동 변환을 하나의 결과 변환으로 결합합니다.',
      zh: '将两个旋转-平移变换组合在一起。',
      ja: '2つの連続する回転・並進変換を1つに結合します。',
      de: 'Kombiniert zwei Rotations-Translations-Transformationen.',
      es: 'Combina dos transformaciones de rotación-traslación.',
      fr: 'Combine deux transformations de rotation-translation.'
    },
    parameters: [],
    syntax: 'composeRT(rvec1, tvec1, rvec2, tvec2, rvec3, tvec3)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga7e00a2b5e455e81b229c2c2a159d216f',
  },
  {
    id: 'computeCorrespondEpilines',
    name: {
      en: 'Compute Correspond Epilines',
      ko: '에피폴라 라인 계산',
      zh: '计算对应的极线',
      ja: '対応するエピポーラ線の計算',
      de: 'Epipolarlinien berechnen',
      es: 'Calcular líneas epipolares correspondientes',
      fr: 'Calculer les lignes épipolaires correspondantes'
    },
    category: 'calib3d',
    description: {
      en: 'For points in one image of a stereo pair, computes the corresponding epipolar lines in the other image.',
      ko: '스테레오 이미지 쌍 중 한 이미지의 점들에 대해, 다른 이미지 상의 대응되는 에피폴라 라인을 계산합니다.',
      zh: '对于立体图像对中一幅图像的点，计算其在另一幅图像中对应的极线。',
      ja: 'ステレオペアの一方の画像のポイントに対して、他方の画像内の対応するエピポーラ線を計算します。',
      de: 'Berechnet für Punkte in einem Bild eines Stereopaares die entsprechenden Epipolarlinien im anderen Bild.',
      es: 'Para los puntos en una imagen de un par estéreo, calcula las líneas epipolares correspondientes en la otra imagen.',
      fr: 'Pour les points d\'une image d\'une paire stéréo, calcule les lignes épipolaires correspondantes dans l\'autre image.'
    },
    parameters: [
      {
        name: 'whichImage',
        type: 'select',
        defaultValue: 1,
        options: [
          { label: 'Image 1', value: 1 },
          { label: 'Image 2', value: 2 },
        ],
        description: {
          en: 'Index of the image that contains the points',
          ko: '점이 포함된 이미지 번호',
          zh: '包含这些点的图像索引',
          ja: 'ポイントが含まれている画像のインデックス',
          de: 'Index des Bildes, das die Punkte enthält',
          es: 'Índice de la imagen que contiene los puntos',
          fr: 'Index de l\'image qui contient les points'
        },
      },
    ],
    syntax: 'computeCorrespondEpilines(points, whichImage, F, lines)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga19e3401c94c44b47c229be6e51d158b7',
  },
  {
    id: 'validateDisparity',
    name: {
      en: 'Validate Disparity',
      ko: '시차 맵 검증',
      zh: '验证视差',
      ja: '視差の検証',
      de: 'Disparität validieren',
      es: 'Validar disparidad',
      fr: 'Valider la disparité'
    },
    category: 'calib3d',
    description: {
      en: 'Validates the disparity map and removes outliers.',
      ko: '시차(disparity) 맵의 품질을 검증하고 신뢰할 수 없는 아웃라이어를 제거합니다.',
      zh: '验证视差图并移除离群点。',
      ja: '視差マップを検証し、外れ値を除去します。',
      de: 'Validiert die Disparitätskarte und entfernt Ausreißer.',
      es: 'Valida el mapa de disparidad y elimina los valores atípicos.',
      fr: 'Valide la carte de disparité et supprime les valeurs aberrantes.'
    },
    parameters: [
      {
        name: 'minDisparity',
        type: 'slider',
        defaultValue: 0,
        min: 0,
        max: 64,
        step: 1,
        description: {
          en: 'Minimum possible disparity value',
          ko: '최소 가능한 시차 값',
          zh: '最小可能的视差值',
          ja: '最小の視差値',
          de: 'Minimal möglicher Disparitätswert',
          es: 'Valor de disparidad mínimo posible',
          fr: 'Valeur de disparité minimale possible'
        },
      },
      {
        name: 'numberOfDisparities',
        type: 'slider',
        defaultValue: 64,
        min: 16,
        max: 256,
        step: 16,
        description: {
          en: 'Number of disparities to search',
          ko: '검색할 시차 범위',
          zh: '要搜索的视差数量',
          ja: '検索する視差の数',
          de: 'Anzahl der zu suchenden Disparitäten',
          es: 'Número de disparidades para buscar',
          fr: 'Nombre de disparités à rechercher'
        },
      },
    ],
    syntax: 'validateDisparity(disparity, cost, minDisparity, numberOfDisparities, disp12MaxDiff=1)',
    documentation: 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html#ga6b8b179d329b8ad03a6a2f7a4ae89a1f',
  },
];