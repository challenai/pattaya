import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { nodes } from "@pattaya/pattaya/components";

const ident = "ptyDiamond";

const n1 = {
  x: 240,
  y: 130,
  shapes: nodes.diamond.shapes({ width: 120, height: 90 }, theme.ptr.nodes.normal),
};

const n2 = {
  x: 480,
  y: 130,
  shapes: nodes.diamond.shapes({ width: 120, height: 90 }, theme.ptr.nodes.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  nodes.diamond.applyStyle(n1.shapes, theme.ptr.nodes.normal);
  nodes.diamond.applyStyle(n2.shapes, theme.ptr.nodes.active);
  graph.renderAll();
}

const layers = [n1];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}