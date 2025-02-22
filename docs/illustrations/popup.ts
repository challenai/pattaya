import { Graph } from "@pattaya/depict/graph";
import theme from "../theme";
import { popup } from "@pattaya/pattaya/components";

const ident = "ptyPopup";

const n1 = {
  x: 240,
  y: 200,
  shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10, aligned: false }, theme.ptr.popup.normal),
};

const n2 = {
  x: 480,
  y: 200,
  shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10, aligned: false }, theme.ptr.popup.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  popup.blueprint.applyStyle(n1.shapes, theme.ptr.popup.normal);
  popup.blueprint.applyStyle(n2.shapes, theme.ptr.popup.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}