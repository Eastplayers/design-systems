export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSizes;
  defaultChecked?: boolean;
  inline?: boolean;
  name?: string;
}

export enum CheckboxSizes {
  NORMAL = "normal",
  SMALL = "small"
}
