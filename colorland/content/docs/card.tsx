'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { card, theme } from "@pattaya/pattaya";

export const background = theme.mayk.card.cardBackground;

const cardStyle = theme.mayk.card.cardStyle;

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: card.blueprint.shapes({ width: 120, height: 90, radius: 9 }, cardStyle.normal),
    },
  ],
];

export const custom: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: card.blueprint.shapes({ width: 120, height: 90, radius: 9 }, cardStyle.normal),
      contain(x, y) {
        return x > 0 && y > 0 && x < 120 && y < 90;
      },
      onMouseenter(render, x, y, mouseX, mouseY) {
        card.blueprint.applyStyle(this.shapes, cardStyle.active);
        render();
      },
      onMouseleave(render, x, y, mouseX, mouseY) {
        card.blueprint.applyStyle(this.shapes, cardStyle.normal);
        render();
      },
    },
  ],
];