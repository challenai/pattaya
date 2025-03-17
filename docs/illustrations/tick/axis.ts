import { Graph, type Text } from "@challenai/depict/graph";
import { tick } from "@pattaya/pattaya/components";

const ident = "ptyTickAxis";

const textOpts = {
  width: 14,
  textBaseline: "middle",
  font: "12px Arial",
  fill: "#8ac"
};

const tickTexts0: Text[] = [0, 1, 2, 3, 4, 5, 6, 7].map((item, idx) => ({
  x: idx * 60,
  y: 16,
  content: `${item}`,
  opts: {
    ...textOpts,
    textAlign: "center",
  },
}));

const tickTexts1: Text[] = [10, 15, 20, 25, 30, 35].map((item, idx) => ({
  x: -9,
  y: -idx * 36,
  content: `${item}`,
  opts: {
    ...textOpts,
    textAlign: "right",
  },
}));

const tick0 = tick.blueprint.fragments({ count: 8, margin: 60, offset: 5, baseline: 180 }, { borderTick: "#8ac", borderBaseline: "rgba(100, 100, 100, .35)" });
const tick1 = tick.blueprint.fragments({ count: 6, margin: 36, offset: -5, vertical: true, baseline: 420 }, { borderTick: "#8ac", borderBaseline: "rgba(100, 100, 100, .35)" });

const n = {
  x: 180,
  y: 250,
  children: [
    {
      x: 0,
      y: 0,
      texts: tickTexts0,
      children: tick0.elements,
    },
    {
      x: 0,
      y: 0,
      texts: tickTexts1,
      children: tick1.elements,
    }
  ],
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

const layers = [n];

function applyTheme() {
  // hard coded styles
}

export default {
  ident,
  graph,
  applyTheme,
  layers,
}