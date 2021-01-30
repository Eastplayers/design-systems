export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSizes;
}

export enum CheckboxSizes {
  NORMAL = "normal",
  SMALL = "small"
}
