import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { line } from "@pattaya/pattaya/components";

const ident = "ptyCubic";

const n = {
  x: 100,
  y: 120,
  shapes: line.cubic.shapes([
    { x: 20, y: 60 },
    { x: 60, y: -20 },
    { x: 120, y: 90 },
    { x: 180, y: 60 },
    { x: 240, y: -20 },
    { x: 320, y: 50 },
    { x: 400, y: 90 },
    { x: 480, y: 10 },
  ], theme.ptr.line.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  line.cubic.applyStyle(n.shapes, theme.ptr.line.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}