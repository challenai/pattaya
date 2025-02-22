import { Graph } from "@pattaya/depict/graph";
import theme from "../../theme";
import { arrow } from "@pattaya/pattaya/components";

const ident = "ptyBulletArrow";

const n1 = {
  x: 240,
  y: 130,
  shapes: arrow.bullet.shapes({ width: 12, height: 18 }, theme.ptr.circular.normal),
};

const n2 = {
  x: 480,
  y: 130,
  shapes: arrow.bullet.shapes({ width: 12, height: 18 }, theme.ptr.circular.active),
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n1, n2]]));

function applyTheme() {
  arrow.bullet.applyStyle(n1.shapes, theme.ptr.circular.normal);
  arrow.bullet.applyStyle(n2.shapes, theme.ptr.circular.active);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}