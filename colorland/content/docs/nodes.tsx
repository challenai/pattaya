'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { nodes, theme } from "@pattaya/pattaya";

export const background = theme.mayk.card.cardBackground;

const nodeStyle = theme.mayk.card.cardStyle;

export const circle: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: nodes.circle.shapes({ radius: 48 }, nodeStyle.normal),
    },
  ],
];

export const diamond: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: nodes.diamond.shapes({ width: 120, height: 90 }, nodeStyle.normal),
    },
  ],
];

export const rectangle: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: nodes.rectangle.shapes({ width: 120, height: 90, radius: 9 }, nodeStyle.normal),
    },
  ],
];