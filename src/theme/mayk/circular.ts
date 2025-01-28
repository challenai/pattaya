import { background, palette } from "./palette";

export const circularBackground = background;

export const circularStyle = {
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

export default {
  style: circularStyle,
  background,
};