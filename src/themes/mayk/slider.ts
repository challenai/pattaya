import { normal, active, background } from "./base";

export const styles = {
  normal: {
    barBackground: normal.background,
    // don't show border in this theme
    barBorder: normal.background,
    buttonBackground: background,
    buttonBorder: active.border,
    slideBackground: active.border,
    // don't show border in this theme
    slideBorder: active.border,
    buttonBorderWidth: 4,
  },
};