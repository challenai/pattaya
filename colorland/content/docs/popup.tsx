'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { popup, theme } from "@pattaya/pattaya";

export const background = theme.mayk.popup.popupBackground;

const popupStyle = theme.mayk.popup.popupStyle;

export const basic: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, popupStyle.normal),
    },
  ],
];

export const custom: ShadowElement[][] = [
  [
    {
      x: 180,
      y: 120,
      shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, popupStyle.normal),
      contain(x, y) {
        return x > 0 && y > 0 && x < 120 && y < 90;
      },
      onMouseenter(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, popupStyle.active);
        render();
      },
      onMouseleave(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, popupStyle.normal);
        render();
      },
    },
  ],
];