import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { scale } from "@pattaya/pattaya/components";

const ident = "ptyScaleBasic";

const textOpts = {
  width: 42,
  textAlign: "center",
  textBaseline: "middle",
  font: "14px Arial",
  fill: "#8ac"
};

const width = 130;

const frags1 = scale.blueprint.fragments({ width, height: 16, padding: 5, space: 42, arrowSize: 7, vertical: true }, theme.ptr.scale.normal);
const n1 = {
  x: 240,
  y: 90,
  children: frags1.elements,
  texts: [
    {
      y: width / 2,
      content: "?",
      opts: {
        ...textOpts,
        fill: theme.ptr.line.normal.color
      },
    },
  ],
};

const frags2 = scale.blueprint.fragments({ width, height: 16, padding: 5, space: 42, arrowSize: 7, vertical: false }, theme.ptr.scale.active);
const n2 = {
  x: 480,
  y: 140,
  children: frags2.elements,
  texts: [
    {
      x: width / 2,
      content: "20px",
      opts: textOpts,
    },
  ],
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  scale.blueprint.applyStyles(frags1, theme.ptr.scale.normal);
  scale.blueprint.applyStyles(frags2, theme.ptr.scale.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}