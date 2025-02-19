import base from "./base";

export const background = base.background;

export const normal = {
  barBackground: base.normal.border,
  // don't show border in this theme
  barBorder: base.normal.border,
  buttonBackground: background,
  buttonBorder: base.active.border,
  slideBackground: base.active.border,
  // don't show border in this theme
  slideBorder: base.active.border,
  buttonBorderWidth: 4,
};