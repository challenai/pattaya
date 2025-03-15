export interface ToggleStyles {
  normal: ToggleStylesItem,
  active: ToggleStylesItem,
};

export interface ToggleStylesItem {
  pannelBorder?: string;
  pannelBackground: string;
  buttonBorder?: string;
  buttonBackground: string;
}