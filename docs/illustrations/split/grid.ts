import { Graph } from "@pattaya/depict/graph";
import theme from "../../theme";
import { split } from "@pattaya/pattaya/components";

const ident = "ptyGridSplit";

const n1 = {
  x: 200,
  y: 100,
  shapes: split.grid.shapes({
    width: 196, height: 128, radius: 5, vertical: false,
    units: [
      { offset: 32, offsets: [20, 86, 108, 120, 160] },
      { offset: 68, offsets: [64, 126] },
      { offset: 128, offsets: [30, 52, 65, 122] },
    ],
  }, theme.ptr.split.normal),
};

const n2 = {
  x: 480,
  y: 100,
  shapes: split.grid.shapes({
    width: 196, height: 128, vertical: false,
    units: [
      { offset: 32, offsets: [20, 86, 108, 120, 160] },
      { offset: 68, offsets: [64, 126] },
      { offset: 128, offsets: [30, 52, 65, 122] },
    ],
  }, theme.ptr.split.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  split.grid.applyStyle(n1.shapes, theme.ptr.split.normal);
  split.grid.applyStyle(n2.shapes, theme.ptr.split.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}