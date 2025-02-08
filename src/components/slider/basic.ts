import type { MeshOptions } from "@pattaya/depict/graph";
import type { SliderStyles } from "./styles";
import type { Shapes } from "../../core";
import { circle, rectangle } from "impressionist";

export interface SliderProps {
  totalLength: number;
  slideLength: number;
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

export function shapes({ totalLength, slideLength, slideWidth, barWidth, radius }: SliderProps, styles: SliderStyles): Shapes {
  return [
    // 0. bar
    {
      path: wireframeBar(slideLength, barWidth, totalLength),
      opts: {
        fill: styles.barBackground,
        stroke: styles.barBorder,
      },
    },
    // 1. slide
    {
      path: wireframeSlide(slideWidth, slideLength),
      opts: {
        fill: styles.slideBackground,
        stroke: styles.slideBorder,
      }
    },
    // 2. button
    {
      path: wireframeButton(slideLength, radius),
      opts: {
        fill: styles.buttonBackground,
        stroke: styles.buttonBorder,
        lineWidth: styles.buttonBorderWidth,
      },
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

export function update(shapes: Shapes, { totalLength, slideLength, slideWidth, barWidth, radius }: SliderProps) {
  shapes![0].path = wireframeBar(slideLength, barWidth, totalLength);
  shapes![1].path = wireframeSlide(slideWidth, slideLength);
  shapes![2].path = wireframeButton(slideLength, radius);
};

export default {
  shapes,
  update,
  applyStyle,
};