import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { popup } from "@pattaya/pattaya/components";

const ident = "ptyPopup";

const n = {
  x: 300,
  y: 200,
  shapes: popup.blueprint.shapes({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10, aligned: false }, theme.ptr.popup),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  popup.blueprint.applyStyle(n.shapes, theme.ptr.popup);
  graph.renderAll();
}

const layers = [n];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}