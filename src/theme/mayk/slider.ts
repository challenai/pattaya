import { background, palette } from "./palette";

export const sliderBackground = background;

export const sliderStyle = {
  normal: {
    barBackground: palette.grotto,
    barBorder: palette.grotto,
    buttonBackground: palette.white,
    buttonBorder: palette.navy,
    slideBackground: palette.navy,
    slideBorder: palette.navy,
    buttonBorderWidth: 4,
  },
};

export default {
  style: sliderStyle,
  background,
};