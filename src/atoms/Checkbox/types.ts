export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSizes;
  defaultChecked?: boolean;
  name?: string;
  inline?: boolean;
}

export enum CheckboxSizes {
  NORMAL = "normal",
  SMALL = "small"
}
