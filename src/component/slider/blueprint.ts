import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import { circle, rectangle } from "impressionist";
import type { SliderStyleProps } from "./props";

export interface SliderProps {
  totalLength: number;
  slideLength: number;
  barWidth: number;
  slideWidth: number;
  radius: number;
};

const setSlideOpts = (style: SliderStyleProps): MeshOptions => ({
  fill: style.slideBackground,
  stroke: style.slideBorder,
});

const setBarOpts = (style: SliderStyleProps): MeshOptions => ({
  fill: style.barBackground,
  stroke: style.barBorder,
});

const setButtonOpts = (style: SliderStyleProps): MeshOptions => ({
  fill: style.buttonBackground,
  stroke: style.buttonBorder,
  lineWidth: style.buttonBorderWidth,
});

export const applyStyle = (shape: Mesh[] | undefined, style: SliderStyleProps) => {
  shape![0].opts = setBarOpts(style);
  shape![1].opts = setSlideOpts(style);
  shape![2].opts = setButtonOpts(style);
};

export const shapes = ({ totalLength, slideLength, slideWidth, barWidth, radius }: SliderProps, style: SliderStyleProps): Mesh[] => {
  return [
    // 0. bar
    {
      path: rectangle.basicAligned(slideLength, -barWidth / 2, totalLength, barWidth),
      opts: setBarOpts(style),
    },
    // 1. slide
    {
      path: rectangle.basicAligned(0, -slideWidth / 2, slideLength, slideWidth),
      opts: setSlideOpts(style),
    },
    // 2. button
    {
      path: circle.basic(slideLength, 0, radius),
      opts: setButtonOpts(style),
    },
  ];
};

export default {
  shapes,
  applyStyle,
};