export type Translatable = string | { [key: string]: string };

export interface FunctionParameter {
  name: string;
  type: 'number' | 'select' | 'slider' | 'color' | 'size';
  defaultValue: any;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: Translatable; value: any }[];
  description: Translatable;
}

export interface OpenCVFunction {
  id: string;
  name: Translatable;
  category: string;
  description: Translatable;
  parameters: FunctionParameter[];
  requiresGrayscale?: boolean;
  inputCount?: number;
  syntax: string;
  documentation: string;
  customSrcLabel?: Translatable;
  customDstLabel?: Translatable;
  hideDst?: boolean;
}

export interface Category {
  id: string;
  name: Translatable;
  icon: string;
  parent: string;
}
