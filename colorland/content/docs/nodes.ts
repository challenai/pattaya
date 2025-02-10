'use client'
import { Graph } from "@pattaya/depict/graph";
import { nodes } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.nodes.background;

export const styles = mayk.nodes;

export const cGraph = new Graph();
cGraph.onReady(() => {
  cGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: nodes.circle.shapes({ radius: 48 }, styles.normal),
    },
  ]]);
});

export const dGraph = new Graph();
dGraph.onReady(() => {
  dGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: nodes.diamond.shapes({ width: 120, height: 90 }, styles.normal),
    },
  ]]);
});

export const rGraph = new Graph();
rGraph.onReady(() => {
  rGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: nodes.rectangle.shapes({ width: 120, height: 90, radius: 9 }, styles.normal),
    },
  ]]);
});