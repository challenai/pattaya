'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { slider } from "@pattaya/pattaya";

const palette = {
  flat: "#FFFFFF",
  baby: "#BFD7ED",
  grotto: "#60A3D9",
  royal: "#0074B7",
  navy: "#003B73",
  comp1: "#EFFEFA",
  comp2: "#FAFBFF",
};

const muted = { barBorder: "#000", barBackground: "#fff", slideBorder: "#000", slideBackground: "#aaa", buttonBorder: "#888", buttonBackground: "#888", buttonBorderWidth: 2 };

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: slider.blueprint.shape({
        totalLength: 200, slideLength: 120, barWidth: 3, slideWidth: 3, radius: 6, style: {
          barBackground: palette.grotto,
          barBorder: palette.grotto,
          buttonBackground: palette.flat,
          buttonBorder: palette.navy,
          slideBackground: palette.navy,
          slideBorder: palette.navy,
          buttonBorderWidth: 4,
        }
      }),
    },
  ],
];