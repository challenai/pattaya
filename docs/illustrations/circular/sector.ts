import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { circular } from "@pattaya/pattaya/components";

const ident = "ptySector";

const n1 = {
  x: 240,
  y: 180,
  shapes: circular.sector.shapes({ radius0: 64, radius1: 96, start: 60, end: 120 }, theme.ptr.circular.normal),
};

const n2 = {
  x: 480,
  y: 130,
  shapes: circular.sector.shapes({ radius0: 32, radius1: 96, start: -60, end: 20 }, theme.ptr.circular.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  circular.sector.applyStyle(n1.shapes, theme.ptr.circular.normal);
  circular.sector.applyStyle(n2.shapes, theme.ptr.circular.active);
  graph.renderAll();
}

const layers = [n2];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}