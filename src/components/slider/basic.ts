import type { MeshOptions } from "@pattaya/depict/graph";
import type { SliderStyles } from "./styles";
import type { Shapes } from "../../core";
import { circle, rectangle } from "impressionist";

export interface SliderProps {
  totalLength: number;
  progress: number;
  barWidth: number;
  slideWidth: number;
  radius: number;
};

function toOptsBar(styles: SliderStyles): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.barBackground,
    stroke: styles.barBorder,
  };
  return opts;
};

function toOptsSlide(styles: SliderStyles): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.slideBackground,
    stroke: styles.slideBorder,
  };
  return opts;
};

function toOptsButton(styles: SliderStyles): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.buttonBackground,
    stroke: styles.buttonBorder,
  };
  if (styles.buttonBorderWidth) opts.lineWidth = styles.buttonBorderWidth;
  return opts;
};

export function applyStyle(shape: Shapes, styles: SliderStyles) {
  shape![0].opts = toOptsBar(styles);
  shape![1].opts = toOptsSlide(styles);
  shape![2].opts = toOptsButton(styles);
};

export function shapes({ totalLength, progress, slideWidth, barWidth, radius }: SliderProps, styles: SliderStyles): Shapes {
  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;
  const slideLength = progress * totalLength;
  return [
    // 0. bar
    {
      path: wireframeBar(slideLength, barWidth, totalLength - slideLength),
      opts: toOptsBar(styles),
    },
    // 1. slide
    {
      path: wireframeSlide(slideWidth, slideLength),
      opts: toOptsSlide(styles),
    },
    // 2. button
    {
      path: wireframeButton(slideLength, radius),
      opts: toOptsButton(styles),
    },
  ];
};

export function wireframeBar(slideLength: number, barWidth: number, totalLength: number): string {
  return rectangle.basicAligned(slideLength, -barWidth / 2, totalLength, barWidth);
};

export function wireframeSlide(slideWidth: number, slideLength: number): string {
  return rectangle.basicAligned(0, -slideWidth / 2, slideLength, slideWidth);
};

export function wireframeButton(slideLength: number, radius: number): string {
  return circle.basic(slideLength, 0, radius);
};

export function update(shapes: Shapes, { totalLength, progress, slideWidth, barWidth, radius }: SliderProps) {
  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;
  const slideLength = progress * totalLength;
  shapes![0].path = wireframeBar(slideLength, barWidth, totalLength - slideLength);
  shapes![1].path = wireframeSlide(slideWidth, slideLength);
  shapes![2].path = wireframeButton(slideLength, radius);
};

export default {
  shapes,
  update,
  applyStyle,
};