import { background, palette } from "./palette";

export const cardBackground = background;

export const nodeStyle = {
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
  style: nodeStyle,
  background,
};