import { Graph } from "@challenai/depict/graph";
import { drawCircular } from "@pattaya/pattaya/patterns";

import theme from "../../theme";

const ident = "ptyRingPattern";

const n = {
  x: 240,
  y: 100,
  postRenderCallback(ctx: any) {
    drawCircular(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      margin: 9,
      offsetX: -20,
      offsetY: -20,
      lineColor: theme.ptr.line.active.color,
    });
  }
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  graph.renderAll();
}

const layers = [n];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}