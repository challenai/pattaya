import { Graph } from "@pattaya/depict/graph";
import theme from "../../theme";
import { line } from "@pattaya/pattaya/components";

const ident = "ptyStep";

const n = {
  x: 120,
  y: 220,
  shapes: line.step.shapes({
    pathes: [130, -50, 120, -50, 90, 140, 140, -150],
    radius: 9
  }, theme.ptr.line.normal),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  line.step.applyStyle(n.shapes, theme.ptr.line.normal);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}