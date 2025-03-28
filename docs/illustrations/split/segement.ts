import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { split } from "@pattaya/pattaya/components";

const ident = "ptySegementSplit";

const n1 = {
  x: 160,
  y: 100,
  shapes: split.segement.shapes({ offsets: [40, 80, 120, 160], width: 200, height: 40, radius: 5, vertical: false }, theme.ptr.split.normal),
};

const n2 = {
  x: 480,
  y: 100,
  shapes: split.segement.shapes({ offsets: [10, 26, 48, 68, 96], width: 200, height: 40, vertical: false }, theme.ptr.split.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  split.segement.applyStyle(n1.shapes, theme.ptr.split.normal);
  split.segement.applyStyle(n2.shapes, theme.ptr.split.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}