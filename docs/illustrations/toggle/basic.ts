import { Graph } from "@challenai/depict/graph";
import theme from "../../theme";
import { toggle } from "@pattaya/pattaya/components";
import { rectContain } from "@pattaya/pattaya/core";

const ident = "ptyToggle";

const n = {
  x: 240,
  y: 130,
  data: false,
  shapes: toggle.blueprint.shapes({ width: 50, height: 30, radius: 10, active: false }, theme.ptr.toggle.normal),
  contain: rectContain(50, 30, false),
  onClick(render) {
    this.data = !this.data;
    const styles = this.data ? theme.ptr.toggle.active : theme.ptr.toggle.normal;
    this.shapes = toggle.blueprint.shapes({ width: 50, height: 30, radius: 10, active: this.data }, styles);
    render();
  },
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  const styles = n.data ? theme.ptr.toggle.active : theme.ptr.toggle.normal;
  toggle.blueprint.applyStyle(n.shapes, n.data, styles);
  graph.renderAll();
}

const layers = [n];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}