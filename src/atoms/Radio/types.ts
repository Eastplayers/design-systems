export interface RadioProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: RadioSizes;
  defaultChecked?: boolean;
  name?: string;
  inline?: boolean;
}

export enum RadioSizes {
  NORMAL = "normal",
  SMALL = "small"
}
