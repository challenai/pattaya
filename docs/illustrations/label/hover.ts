import { Graph, type ShadowElement } from "@challenai/depict/graph";
import theme from "../../theme";
import { label } from "@pattaya/pattaya/components";
import { rectContain } from "@pattaya/pattaya/core";

const ident = "ptyLabelHover";

const offsetX = 24;
const offsetY = -32;
const underline = 64;

const hint: ShadowElement = {
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
  }],
  hidden: true,
};

const text: ShadowElement = {
  x: 300,
  y: 180,
  contain: rectContain(80, 40),
  texts: [{
    content: "Hover me!",
    opts: {
      width: 80,
      height: 40,
      fill: theme.ptr.text.active.color,
      font: "14px Arial",
      textAlign: "center",
    },
  }],
  onMouseenter(render) {
    hint.hidden = false;
    render();
  },
  onMouseleave(render) {
    hint.hidden = true;
    render();
  }
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[hint, text]]));

function applyTheme() {
  label.blueprint.applyStyle(hint.shapes, theme.ptr.label.active);
  hint.texts!.forEach((t) => {
    if (t.opts) t.opts.fill = theme.ptr.text.active.color;
  })
  text.texts!.forEach((t) => {
    if (t.opts) t.opts.fill = theme.ptr.text.active.color;
  })
  graph.renderAll();
}

const layers = [text, hint];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}