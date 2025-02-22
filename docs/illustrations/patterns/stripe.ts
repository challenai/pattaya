import { Graph } from "@pattaya/depict/graph";
import { drawStripe } from "@pattaya/pattaya/patterns";

import theme from "../../theme";

const ident = "ptyStripePattern";

const n = {
  x: 240,
  y: 100,
  postRenderCallback(ctx: any) {
    drawStripe(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      margin: 9,
      offset: -100,
      segements: [10, 6],
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