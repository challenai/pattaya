'use client'
import { Graph } from "@pattaya/depict/graph";
import { drawCircular, drawGrid, drawStripe } from "@pattaya/pattaya/patterns";

const sn = {
  x: 120,
  y: 90,
  postRenderCallback(ctx: any) {
    drawStripe(ctx, {
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
    drawCircular(ctx, {
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
    drawGrid(ctx, {
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