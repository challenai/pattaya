'use client'
import { Graph } from "@pattaya/depict/graph";
import { popup } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.popup.background;

export const styles = mayk.popup;

export const bGraph = new Graph();
bGraph.onReady(() => {
  bGraph.resetGraph([[
    {
      x: 180,
      y: 220,
      shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10, aligned: false }, styles.normal),
    },
  ]]);
});

export const cGraph = new Graph();
cGraph.onReady(() => {
  cGraph.resetGraph([[
    {
      x: 180,
      y: 220,
      shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, styles.normal),
      contain(x, y) {
        return x > -60 && y > -85 && x < 60 && y < -10;
      },
      onMouseenter(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, styles.active);
        render();
      },
      onMouseleave(render, x, y, mouseX, mouseY) {
        popup.blueprint.applyStyle(this.shapes, styles.normal);
        render();
      },
    },
  ]]);
});