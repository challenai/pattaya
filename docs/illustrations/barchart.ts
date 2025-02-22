import { Graph, type Text, type ShadowElement } from "@pattaya/depict/graph";
import { edge, nodes, popup } from "@pattaya/pattaya/components";
import { animationRunning, newAnimationStore, startAnimation, updateAnimation, rectContain } from "@pattaya/pattaya/core";

export const background = "#fff";

const color1 = "#cacbcc";
const color2 = "#9a9b9c";
const color3 = "#aaabac";

const edgeStyles: edge.EdgeStyles = {
  line: { color: color3 },
  arrow: { border: color3 },
};
const barStyles = {
  normal: { background: color1 },
  active: { background: color2 },
};
const hintStyles: popup.PopupStyles = { border: color3, background };

const data = [
  [12, 20, 52],
  [24, 36, 18],
  [48, 108, 21],
  [72, 60, 30],
  [42, 18, 21],
  [22, 48, 74],
];

const hintText: Text = {
  x: 0,
  y: -23,
  content: "0",
  opts: {
    textAlign: "center",
    font: "18px Arial",
    fill: color2,
  },
};

const hint: ShadowElement = {
  x: 100,
  y: 100,
  hidden: true,
  shapes: popup.blueprint.shapes({ width: 64, height: 48, triangleHeight: 6, triangleWidth: 10, radius: 6 }, hintStyles),
  texts: [hintText],
};

const bars: any[] = [];

function Bar(x: number, y: number, width: number, height: number): ShadowElement {
  const contain = rectContain(width, height, false);
  return {
    x,
    y,
    shapes: nodes.rectangle.shapes({ width, height }, barStyles.normal),
    data: { animation: newAnimationStore(barStyles.normal) },
    update(ts: number) {
      if (animationRunning(this.data.animation)) {
        const result = updateAnimation<nodes.NodeStyles>(this.data.animation, ts);
        nodes.rectangle.applyStyle(this.shapes, result);
      }
    },
    contain,
    onMouseenter(_render, x1, y1) {
      startAnimation(this.data.animation, 250, barStyles.active);
      hint.x = x1 + this.x;
      hint.y = y1 + this.y - height / 2 - 5;
      hint.hidden = false;
      hintText.content = `${height}`;
    },
    onMouseleave(_render, x1, y1) {
      startAnimation(this.data.animation, 250, barStyles.normal);
      hint.x = x1 + this.x;
      hint.y = y1 + this.y - height / 2;
      hint.hidden = true;
    }
  };
}

data.forEach((row: number[], idx: number) => {
  let y = 280;
  row.forEach((h: number, n: number) => {
    bars.push(Bar(210 + idx * 30, y - h / 2 - n, 20, h));
    y -= h;
  });
});

const arrow1 = edge.line.fragments({
  start: { x: -20, y: 0 },
  end: { x: 240, y: 0 },
  endDecoration: edge.ArrowType.Basic,
}, edgeStyles);

const arrow2 = edge.line.fragments({
  start: { x: 0, y: 20 },
  end: { x: 0, y: -200 },
  endDecoration: edge.ArrowType.Basic,
}, edgeStyles);

export const graph = new Graph();
graph.onReady(() => {
  graph.updateLayerOptions(0, { update: true, dynamic: true });
  graph.resetGraph([[
    ...bars,
    { x: 180, y: 280, children: arrow1.elements },
    { x: 180, y: 280, children: arrow2.elements },
    hint,
  ]]);
});

const ident = "ptyBarChart";

function applyTheme() { }

export default {
  ident,
  graph,
  applyTheme,
}