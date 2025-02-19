import { Graph } from "@pattaya/depict/graph";
import theme from "../../theme";
import { nodes } from "@pattaya/pattaya/components";

const ident = "ptyRectangle";

const n1 = {
  x: 240,
  y: 120,
  shapes: nodes.rectangle.shapes({ width: 120, height: 90, radius: 9 }, theme.ptr.nodes.normal),
};

const n2 = {
  x: 480,
  y: 120,
  shapes: nodes.rectangle.shapes({ width: 120, height: 90 }, theme.ptr.nodes.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  nodes.rectangle.applyStyle(n1.shapes, theme.ptr.nodes.normal);
  nodes.rectangle.applyStyle(n2.shapes, theme.ptr.nodes.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}