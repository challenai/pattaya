'use client'
import { Graph } from "@pattaya/depict/graph";
import { arrow } from "@pattaya/pattaya/primitives";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.arrow.background;

const styles = mayk.arrow.styles;

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