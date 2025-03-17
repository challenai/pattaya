import { Graph, type ShadowElement } from "@challenai/depict/graph";
import theme from "../../theme";
import { nodes } from "@pattaya/pattaya/components";
import { rectContain } from "@pattaya/pattaya/core";
import { easing, newAnimationStore, startAnimation, updateAnimation } from "@pattaya/pattaya/animation";

const ident = "ptyAnimationButton";

const mutedStyle = {
  color: "rgba(200, 200, 200, 1)",
  fontColor: "rgba(100, 100, 100, 1)",
  scale: 0.9,
};

const activeStyle = {
  color: "rgba(255, 255, 255, 1)",
  fontColor: "rgba(20, 20, 20, 1)",
  scale: 1.0,
}

const n: ShadowElement = {
  x: 240,
  y: 120,
  shapes: [{
    path: nodes.rectangle.wireframe({ width: 160, height: 60, radius: 6 }),
    opts: {
      fill: mutedStyle.color,
      scale: mutedStyle.scale,
      border: false,
    }
  }],
  contain: rectContain(160, 60),
  data: newAnimationStore(mutedStyle, easing.easeInOut),
  texts: [{
    content: "Search",
    opts: {
      fill: mutedStyle.fontColor,
      font: "16px Arial",
      textAlign: "center",
      textBaseline: "middle",
    },
  }],
  update(ts) {
    const current = updateAnimation(this.data, ts);
    const opts = this.shapes[0].opts;
    const textOpts = this.texts[0].opts;
    opts.fill = current.color;
    opts.scale = current.scale;
    textOpts.fill = current.fontColor;
  },
  onMouseenter(render) {
    startAnimation(this.data, 250, activeStyle);
  },
  onMouseleave(render) {
    startAnimation(this.data, 250, mutedStyle);
  }
};

const graph = new Graph();
graph.onReady(() => {
  graph.updateLayerOptions(0, { dynamic: true, update: true });
  graph.resetGraph([[n]]);
});

function applyTheme() {
  // graph.renderAll();
}

const layers = [n];

export default {
  ident,
  graph,
  applyTheme,
  layers,
}