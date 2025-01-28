'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { circular as c, theme } from "@pattaya/pattaya";

export const background = theme.mayk.circular.circularBackground;

const circularStyle = theme.mayk.circular.circularStyle;

export const sector: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 220,
      shapes: c.sector.shapes({ radius0: 64, radius1: 96, start: 60, end: 120 }, circularStyle.normal),
    },
    {
      x: 420,
      y: 160,
      shapes: c.sector.shapes({ radius0: 32, radius1: 96, start: -60, end: 20 }, circularStyle.normal),
    },
  ],
];

export const pie: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 220,
      shapes: c.pie.shapes({ radius: 72, start: 30, end: 60 }, circularStyle.normal),
    },
    {
      x: 420,
      y: 220,
      shapes: c.pie.shapes({ radius: 72, start: 40, end: 160 }, circularStyle.normal),
    },
  ],
];
