'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { slider, theme } from "@pattaya/pattaya";

export const background = theme.mayk.slider.sliderBackground;

const sliderStyle = theme.mayk.slider.sliderStyle;

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: slider.blueprint.shapes({ totalLength: 200, slideLength: 120, barWidth: 3, slideWidth: 3, radius: 6 }, sliderStyle.normal),
    },
  ],
];