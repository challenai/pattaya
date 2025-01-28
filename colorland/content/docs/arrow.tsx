'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { arrow, theme } from "@pattaya/pattaya";

export const background = theme.mayk.arrow.arrowBackground;

const arrowStyle = theme.mayk.arrow.arrowStyle;

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.basic.shapes({ width: 16, height: 20 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.basic.shapes({ width: 16, height: 20 }, arrowStyle.active),
    },
  ],
];

export const triangle: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.triangle.shapes({ width: 16, height: 20 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.triangle.shapes({ width: 16, height: 20 }, arrowStyle.active),
    },
  ],
];

export const vee: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, arrowStyle.active),
    },
    {
      x: 180,
      y: 240,
      shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 240,
      shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, arrowStyle.active),
    },
  ],
];

export const bullet: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.bullet.shapes({ width: 12, height: 18 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.bullet.shapes({ width: 12, height: 18 }, arrowStyle.active),
    },
  ],
];

export const blunt: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.blunt.shapes({ width: 16, low: 12, high: 24 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.blunt.shapes({ width: 16, low: 12, high: 24 }, arrowStyle.active),
    },
  ],
];

export const dome: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: arrow.dome.shapes({ width: 16, low: 12 }, arrowStyle.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.dome.shapes({ width: 16, low: 12 }, arrowStyle.active),
    },
  ],
];