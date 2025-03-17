import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { nodes } from "@pattaya/pattaya/components";

const ident = "ptyCircle";

const n1 = {
  x: 240,
  y: 130,
  shapes: nodes.circle.shapes({ radius: 48 }, theme.ptr.nodes.normal),
};

const n2 = {
  x: 480,
  y: 130,
  shapes: nodes.circle.shapes({ radius: 48 }, theme.ptr.nodes.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  nodes.circle.applyStyle(n1.shapes, theme.ptr.nodes.normal);
  nodes.circle.applyStyle(n2.shapes, theme.ptr.nodes.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}