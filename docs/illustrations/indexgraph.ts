import { Graph } from "@pattaya/depict/graph";
import callhierarchy from "./callhierarchy";
import sector from "./circular/sector";
import popup from "./popup";
import ring from "./patterns/ring";
import diamond from "./nodes/diamond";

const ident = "ptyIndexGraph";

const graph = new Graph();
graph.onReady(() => {
  graph.updateLayerOptions(0, { dynamic: false });
  graph.updateLayerOptions(1, { dynamic: true });
  const staticLayer = [
    {
      x: -480,
      y: 120,
      children: sector.layers,
    },
    {
      x: 360,
      y: -60,
      children: popup.layers,
    },
    {
      x: 300,
      y: 180,
      children: ring.layers,
    },
    {
      x: 100,
      y: 260,
      children: diamond.layers,
    },
  ];
  const dynamicLayer = [
    {
      x: -100,
      y: 0,
      children: callhierarchy.layers
    },
  ];
  graph.resetGraph([staticLayer, dynamicLayer]);
});

function applyTheme() {
  callhierarchy.applyTheme();
  sector.applyTheme();
  popup.applyTheme();
  ring.applyTheme();
  diamond.applyTheme();
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}