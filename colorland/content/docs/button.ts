'use client'
import { Graph } from "@pattaya/depict/graph";
import { button } from "@pattaya/pattaya/components";

export const graph = new Graph();

export const background = "#fff";

const styles = {
  common: {
    font: "18px Arial",
    textLineHeight: 18,
  },
  normal: {
    background: "#90caf9",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadowBlur: 6,
    textColor: "#000",
  },
  active: {
    background: "#42a5f5",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadowBlur: 6,
    textColor: "#000",
  },
};

graph.onReady(() => {
  const btn = button.basic.TextButton(240, 180, { text: "click me", radius: 8, styles, textBoundingBox: graph.boundingBox.bind(graph) });
  graph.updateLayerOptions(0, { dynamic: true, update: true });
  graph.resetGraph([[{
    x: 0,
    y: 0,
    children: [btn]
  }]]);
});
