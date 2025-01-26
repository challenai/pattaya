'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { popup } from "@pattaya/pattaya";

const muted = { border: "#666", background: "#ccf", shadow: "#fff", shadowBlur: 0 };

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: popup.blueprint.shape({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, muted),
    },
  ],
];

const active = { border: "#666", background: "#aae", shadow: "#fff", shadowBlur: 0 };

export const custom: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: popup.blueprint.shape({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, muted),
      contain(x, y) {
        return x > 0 && y > 0 && x < 120 && y < 90;
      },
      onMouseenter(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, active);
        render();
      },
      onMouseleave(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, muted);
        render();
      },
    },
  ],
];