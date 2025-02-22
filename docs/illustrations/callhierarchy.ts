import { Graph, ShadowElement } from "@pattaya/depict/graph";
import { rectContain } from "@pattaya/pattaya/core";
import { edge, nodes } from "@pattaya/pattaya/components";
import theme from "../theme";

const graph = new Graph();

const arrowType = edge.ArrowType.Basic;

const c1 = edge.cubic.fragments({ points: [{ x: 240, y: 100 }, { x: 360, y: 100 }, { x: 300, y: 130 }, { x: 420, y: 130 }], endDecoration: arrowType }, theme.ptr.edge.normal);
const c2 = edge.cubic.fragments({ points: [{ x: 240, y: 100 }, { x: 360, y: 100 }, { x: 300, y: 250 }, { x: 420, y: 250 }], endDecoration: arrowType }, theme.ptr.edge.normal);

const r1: ShadowElement = {
  x: 120,
  y: 60,
  shapes: nodes.rectangle.shapes({ width: 120, height: 80, radius: 6, aligned: true }, theme.ptr.nodes.normal),
  contain: rectContain(120, 80, true),
  onMouseenter() {
    nodes.rectangle.applyStyle(r1.shapes, theme.ptr.nodes.active);
    edge.cubic.applyStyles(c1, arrowType, theme.ptr.edge.active);
    edge.cubic.applyStyles(c2, arrowType, theme.ptr.edge.active);
  },
  onMouseleave() {
    nodes.rectangle.applyStyle(r1.shapes, theme.ptr.nodes.normal);
    edge.cubic.applyStyles(c1, arrowType, theme.ptr.edge.normal);
    edge.cubic.applyStyles(c2, arrowType, theme.ptr.edge.normal);
  },
  children: [
    {
      x: 12,
      y: 24,
      texts: [
        {
          content: "main.go",
          opts: {
            textAlign: "start",
            textBaseline: "middle",
            fill: theme.ptr.text.normal.color,
            font: "14px Arial",
          },
        }
      ],
      contain(x, y) {
        return x > 0 && x < 60 && y < 10 && y > -10;
      },
      onMouseenter() {
        const opts = this.texts![0].opts;
        opts!.fill = theme.ptr.text.active.color;
      },
      onMouseleave() {
        const opts = this.texts![0].opts;
        opts!.fill = theme.ptr.text.normal.color;
      },
    },
  ],
}
const r2: ShadowElement = {
  x: 420,
  y: 90,
  shapes: nodes.rectangle.shapes({ width: 120, height: 80, radius: 6, aligned: true }, theme.ptr.nodes.normal),
  contain: rectContain(120, 80, true),
  onMouseenter() {
    nodes.rectangle.applyStyle(r2.shapes, theme.ptr.nodes.active);
    edge.cubic.applyStyles(c1, arrowType, theme.ptr.edge.active);
  },
  onMouseleave() {
    nodes.rectangle.applyStyle(r2.shapes, theme.ptr.nodes.normal);
    edge.cubic.applyStyles(c1, arrowType, theme.ptr.edge.normal);
  },
}
const r3: ShadowElement = {
  x: 420,
  y: 210,
  shapes: nodes.rectangle.shapes({ width: 120, height: 80, radius: 6, aligned: true }, theme.ptr.nodes.normal),
  contain: rectContain(120, 80, true),
  onMouseenter() {
    nodes.rectangle.applyStyle(r3.shapes, theme.ptr.nodes.active);
    edge.cubic.applyStyles(c2, arrowType, theme.ptr.edge.active);
  },
  onMouseleave() {
    nodes.rectangle.applyStyle(r3.shapes, theme.ptr.nodes.normal);
    edge.cubic.applyStyles(c2, arrowType, theme.ptr.edge.normal);
  },
}

const layers: ShadowElement[] = [
  r1,
  r2,
  r3,
  { x: 0, y: 0, children: c1.elements },
  { x: 0, y: 0, children: c2.elements },
];

graph.onReady(() => {
  graph.updateLayerOptions(0, { dynamic: true });
  graph.resetGraph([layers]);
});

function applyTheme() {
  nodes.rectangle.applyStyle(r1.shapes, theme.ptr.nodes.normal);
  nodes.rectangle.applyStyle(r2.shapes, theme.ptr.nodes.normal);
  nodes.rectangle.applyStyle(r3.shapes, theme.ptr.nodes.normal);
  edge.cubic.applyStyles(c1, arrowType, theme.ptr.edge.normal);
  edge.cubic.applyStyles(c2, arrowType, theme.ptr.edge.normal);
  graph.renderAll();
}

const ident = "ptyCallHierarchy";

export default {
  ident,
  graph,
  applyTheme,
  layers,
}