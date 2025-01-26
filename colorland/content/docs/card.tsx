'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { card } from "@pattaya/pattaya";

const muted = { border: "#666", background: "#ccf", shadow: "#fff", shadowBlur: 0 };

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: card.blueprint.shape({ width: 120, height: 90, radius: 9 }, muted),
    },
  ],
];

const active = { border: "#666", background: "#aae", shadow: "#fff", shadowBlur: 0 };

export const custom: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: card.blueprint.shape({ width: 120, height: 90, radius: 9 }, muted),
      contain(x, y) {
        return x > 0 && y > 0 && x < 120 && y < 90;
      },
      onMouseenter(render, x, y, mouseX, mouseY) {
        card.blueprint.applyStyle(this.shapes, active);
        render();
      },
      onMouseleave(render, x, y, mouseX, mouseY) {
        card.blueprint.applyStyle(this.shapes, muted);
        render();
      },
    },
  ],
];