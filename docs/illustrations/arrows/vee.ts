import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { arrow } from "@pattaya/pattaya/components";

const ident = "ptyVeeArrow";

const n1 = {
  x: 240,
  y: 100,
  shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, theme.ptr.nodes.normal),
};

const n2 = {
  x: 480,
  y: 100,
  shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, theme.ptr.nodes.active),
};

const n3 = {
  x: 240,
  y: 200,
  shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, theme.ptr.nodes.normal),
};

const n4 = {
  x: 480,
  y: 200,
  shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, theme.ptr.nodes.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2, n3, n4]]));

function applyTheme() {
  arrow.vee.applyStyle(n1.shapes, theme.ptr.nodes.normal);
  arrow.vee.applyStyle(n2.shapes, theme.ptr.nodes.active);
  arrow.vee.applyStyle(n3.shapes, theme.ptr.nodes.normal);
  arrow.vee.applyStyle(n4.shapes, theme.ptr.nodes.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}