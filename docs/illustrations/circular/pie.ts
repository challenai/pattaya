import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { circular } from "@pattaya/pattaya/components";

const ident = "ptyPie";

const n1 = {
  x: 240,
  y: 180,
  shapes: circular.pie.shapes({ radius: 72, start: 30, end: 60 }, theme.ptr.circular.normal),
};

const n2 = {
  x: 520,
  y: 180,
  shapes: circular.pie.shapes({ radius: 72, start: 40, end: 160 }, theme.ptr.circular.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  circular.pie.applyStyle(n1.shapes, theme.ptr.circular.normal);
  circular.pie.applyStyle(n2.shapes, theme.ptr.circular.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}