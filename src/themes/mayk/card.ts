export { default as background } from "./background";
import palette from "./palette";

export const styles = {
  normal: {
    border: palette.grotto,
    background: palette.white,
    shadow: palette.white,
    shadowBlur: 0,
  },
  active: {
    border: palette.navy,
    background: palette.comp1,
    shadow: palette.white,
    shadowBlur: 0,
  },
};