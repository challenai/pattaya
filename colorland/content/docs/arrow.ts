'use client'
import { Graph } from "@pattaya/depict/graph";
import { arrow } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.arrow.background;

const styles = mayk.arrow;

export function points2Radians(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x1 - x0;
  const dy = y1 - y0;
  if (dy === 0) {
    return x0 <= x1 ? 0 : Math.PI;
  }
  if (dx === 0) {
    return y0 <= y1 ? Math.PI * 0.5 : Math.PI * 1.5;
  }
  const r = Math.atan(dy / dx);
  if (dx < 0) return r + Math.PI;
  return r
}

const te = points2Radians(0, 0, -1, -2);
console.log(te);

export const bGraph = new Graph();
bGraph.onReady(() => {
  bGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.basic.shapes({ width: 16, height: 20 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.basic.shapes({ width: 16, height: 20 }, styles.active),
    },
  ]]);
});

export const tGraph = new Graph();
tGraph.onReady(() => {
  tGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.triangle.shapes({ width: 16, height: 20 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.triangle.shapes({ width: 16, height: 20 }, styles.active),
    },
  ]]);
});

export const vGraph = new Graph();
vGraph.onReady(() => {
  vGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, styles.active),
    },
    {
      x: 180,
      y: 240,
      shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, styles.normal),
    },
    {
      x: 300,
      y: 240,
      shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, styles.active),
    },
  ]]);
});

export const buGraph = new Graph();
buGraph.onReady(() => {
  buGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.bullet.shapes({ width: 12, height: 18 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.bullet.shapes({ width: 12, height: 18 }, styles.active),
    },
  ]]);
});

export const blGraph = new Graph();
blGraph.onReady(() => {
  blGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.blunt.shapes({ width: 16, low: 12, high: 24 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.blunt.shapes({ width: 16, low: 12, high: 24 }, styles.active),
    },
  ]]);
});

export const dGraph = new Graph();
dGraph.onReady(() => {
  dGraph.resetGraph([[
    {
      x: 180,
      y: 120,
      shapes: arrow.dome.shapes({ width: 16, low: 12 }, styles.normal),
    },
    {
      x: 300,
      y: 120,
      shapes: arrow.dome.shapes({ width: 16, low: 12 }, styles.active),
    },
  ]]);
});