import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { line } from "@pattaya/pattaya/components";

const ident = "ptyQuadratic";

const n = {
  x: 120,
  y: 100,
  shapes: line.quadratic.shapes([
    { x: 20, y: 20 },
    { x: 60, y: 40 },
    { x: 120, y: 10 },
    { x: 240, y: 80 },
    { x: 360, y: 60 },
  ], theme.ptr.line.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  line.quadratic.applyStyle(n.shapes, theme.ptr.line.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}