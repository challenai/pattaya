import { background, palette } from "./palette";

export const arrowBackground = background;

export const arrowStyle = {
  normal: {
    border: palette.baby,
    background: palette.white,
  },
  active: {
    border: palette.navy,
    background: palette.white,
  },
};

export default {
  style: arrowStyle,
  background,
};