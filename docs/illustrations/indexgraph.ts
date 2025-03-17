import { Graph } from "@challenai/depict/graph";
import callhierarchy from "./callhierarchy";
import sector from "./circular/sector";
import popup from "./popup";
import scale from "./scale";
import tick from "./tick";
import ring from "./patterns/ring";

const ident = "ptyIndexGraph";

const graph = new Graph();
graph.onReady(() => {
  graph.updateLayerOptions(0, { dynamic: false });
  graph.updateLayerOptions(1, { dynamic: true });
  const staticLayer = [
    {
      x: -150,
      y: 150,
      children: tick.axis.layers,
    },
    {
      x: 60,
      y: 420,
      children: sector.layers,
    },
    {
      x: -160,
      y: 160,
      children: popup.hover.layers,
    },
    {
      x: -20,
      y: 50,
      children: scale.multiple.layers,
    },
    {
      x: 240,
      y: 280,
      children: ring.layers,
    },
  ];
  const dynamicLayer = [
    {
      x: -100,
      y: 420,
      children: callhierarchy.layers
    },
  ];
  graph.resetGraph([staticLayer, dynamicLayer]);
});

function applyTheme() {
  callhierarchy.applyTheme();
  sector.applyTheme();
  popup.hover.applyTheme();
  scale.multiple.applyTheme();
  tick.axis.applyTheme();
  ring.applyTheme();
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}