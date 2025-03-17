import { Graph } from "@challenai/depict/graph";
import { tick } from "@pattaya/pattaya/components";
import * as line from "@pattaya/pattaya/components/line";
import theme from "../../theme";

const ident = "ptyTickBasic";

const ts = tick.blueprint.fragments({ count: 5, margin: 60, offset: 6, baseline: 0, vertical: false }, theme.ptr.tick);

const n = {
  x: 240,
  y: 120,
  shapes: line.basic.shapes({ start: { x: 0, y: 0 }, end: { x: 240, y: 0 } }, { color: "rgba(100, 100, 100, .75)" }),
  children: ts.elements,
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  tick.blueprint.applyStyles(ts, theme.ptr.tick);
  // hard coded styles
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}