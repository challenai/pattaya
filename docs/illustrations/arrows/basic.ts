import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { arrow } from "@pattaya/pattaya/components";

const ident = "ptyBasicArrow";

const n1 = {
  x: 240,
  y: 130,
  shapes: arrow.basic.shapes({ width: 16, height: 20 }, theme.ptr.circular.normal),
};

const n2 = {
  x: 480,
  y: 130,
  shapes: arrow.basic.shapes({ width: 16, height: 20 }, theme.ptr.circular.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  arrow.basic.applyStyle(n1.shapes, theme.ptr.circular.normal);
  arrow.basic.applyStyle(n2.shapes, theme.ptr.circular.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}