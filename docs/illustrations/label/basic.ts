import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { label, popup } from "@pattaya/pattaya/components";

const ident = "ptyLabel";

const offsetX = 24;
const offsetY = -32;
const underline = 64;

const n = {
  x: 300,
  y: 160,
  shapes: label.blueprint.shapes({ offsetX, offsetY, underline }, theme.ptr.label.active),
  texts: [{
    x: offsetX + underline / 2,
    y: offsetY - 12,
    content: "hello, world",
    opts: {
      font: "14px Arial",
      fill: theme.ptr.text.active.color,
      textAlign: "center",
    }
  }]
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  label.blueprint.applyStyle(n.shapes, theme.ptr.label.active);
  n.texts.forEach((t) => {
    if (t.opts) t.opts.fill = theme.ptr.text.active.color;
  })
  graph.renderAll();
}

const layers = [n];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}