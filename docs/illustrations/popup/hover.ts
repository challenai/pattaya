import { Graph, type ShadowElement } from "@challenai/depict/graph";
import theme from "../../theme";
import { popup } from "@pattaya/pattaya/components";
import { rectContain } from "@pattaya/pattaya/core";

const ident = "ptyPopupHover";

const hint: ShadowElement = {
  x: 300,
  y: 160,
  shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10, aligned: false }, theme.ptr.popup),
  texts: [{
    x: 0,
    y: -43,
    content: "Hi, there",
    opts: {
      fill: theme.ptr.text.normal.color,
      font: "14px Arial",
      textAlign: "center",
    },
  }],
  hidden: true
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
  popup.blueprint.applyStyle(hint.shapes, theme.ptr.popup);
  hint.texts?.forEach((t) => {
    if (t.opts) t.opts.fill = theme.ptr.text.normal.color;
  });
  text.texts?.forEach((t) => {
    if (t.opts) t.opts.fill = theme.ptr.text.active.color;
  });
  graph.renderAll();
}

const layers = [text, hint];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}