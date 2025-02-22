import { Graph } from "@pattaya/depict/graph";
import theme from "../../theme";
import { line } from "@pattaya/pattaya/components";

const ident = "ptyLine";

const n = {
  x: 200,
  y: 60,
  shapes: line.basic.shapes({ start: { x: 20, y: 20 }, end: { x: 200, y: 180 } }, theme.ptr.line.normal),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  line.basic.applyStyle(n.shapes, theme.ptr.line.normal);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}