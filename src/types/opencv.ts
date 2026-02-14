export interface FunctionParameter {
  name: string;
  type: 'number' | 'select' | 'slider' | 'color' | 'size';
  defaultValue: any;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: any }[];
  description: string;
}

export interface OpenCVFunction {
  id: string;
  name: string;
  category: string;
  description: string;
  parameters: FunctionParameter[];
  requiresGrayscale?: boolean;
  inputCount?: number;
  syntax: string;
  documentation: string;
  customSrcLabel?: string;
  customDstLabel?: string;
  hideDst?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  parent: string;
}
