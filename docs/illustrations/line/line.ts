import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { line } from "@pattaya/pattaya/components";

const ident = "ptyLine";

const n = {
  x: 200,
  y: 60,
  shapes: line.basic.shapes({ start: { x: 20, y: 20 }, end: { x: 200, y: 180 } }, theme.ptr.line.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  line.basic.applyStyle(n.shapes, theme.ptr.line.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}