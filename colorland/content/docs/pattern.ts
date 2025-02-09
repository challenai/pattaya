'use client'
import { Graph } from "@pattaya/depict/graph";
import { stripe, circular, grid } from "@pattaya/pattaya/patterns";

const sn = {
  x: 120,
  y: 90,
  postRenderCallback(ctx: any) {
    stripe.drawStripe(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      margin: 9,
      offset: -100,
      segements: [10, 6],
      lineColor: "#ccf",
    });
  }
};

const rn = {
  x: 120,
  y: 90,
  postRenderCallback(ctx: any) {
    circular.drawCircular(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      margin: 9,
      offsetX: -20,
      offsetY: -20,
      lineColor: "#ccf",
    });
  }
};

const gn = {
  x: 120,
  y: 90,
  postRenderCallback(ctx: any) {
    grid.drawGrid(ctx, {
      width: 100,
      height: 100,
      lineWidth: 1,
      marginX: 9,
      marginY: 9,
      offsetX: 3.5,
      offsetY: 5.5,
      lineColor: "#ccf",
    });
  }
};

export const sGraph = new Graph();
sGraph.onReady(() => sGraph.resetGraph([[sn]]));
export const rGraph = new Graph();
rGraph.onReady(() => rGraph.resetGraph([[rn]]));
export const gGraph = new Graph();
gGraph.onReady(() => gGraph.resetGraph([[gn]]));