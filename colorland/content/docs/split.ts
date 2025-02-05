'use client'
import { Graph } from "@pattaya/depict/graph";
import { split } from "@pattaya/pattaya/primitives";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.split.background;

export const styles = mayk.split.styles;

export const segementGraph = new Graph();

const seg = split.segement.shapes({ offsets: [10, 26, 48, 68, 96], width: 148, height: 40, radius: 5, vertical: false }, styles.normal);

segementGraph.onReady(() => {
  segementGraph.resetGraph([[{
    x: 120,
    y: 160,
    shapes: seg,
  }]]);
});

export const gridGraph = new Graph();

const gr = split.grid.shapes({
  width: 196, height: 128, radius: 5, vertical: false,
  units: [
    { offset: 32, offsets: [20, 86, 108, 120, 160] },
    { offset: 68, offsets: [64, 126] },
    { offset: 128, offsets: [30, 52, 65, 122] },
  ],
}, styles.normal);

gridGraph.onReady(() => {
  gridGraph.resetGraph([[{
    x: 120,
    y: 120,
    shapes: gr,
  }]]);
});
