import { Graph } from "@pattaya/depict/graph";
import { drawGrid } from "@pattaya/pattaya/patterns";

import theme from "../../theme";

const ident = "ptyGridPattern";

const n = {
  x: 240,
  y: 100,
  postRenderCallback(ctx: any) {
    drawGrid(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      marginX: 9,
      marginY: 9,
      offsetX: 3.5,
      offsetY: 5.5,
      lineColor: theme.ptr.pattern.active.color,
    });
  }
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}