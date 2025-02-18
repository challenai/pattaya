'use client'
import { Graph } from "@pattaya/depict/graph";
import { line } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.line.background;

export const styles = mayk.line;

export const lnGraph = new Graph();
lnGraph.onReady(() => {
  const ln = line.basic.shapes({ start: { x: 20, y: 20 }, end: { x: 200, y: 200 } }, styles.normal);
  lnGraph.resetGraph([[{
    x: 120,
    y: 120,
    shapes: ln,
  }]]);
});

export const qGraph = new Graph();
qGraph.onReady(() => {
  const ln = line.quadratic.shapes([
    { x: 20, y: 20 },
    { x: 60, y: 40 },
    { x: 120, y: 10 },
    { x: 240, y: 80 },
    { x: 360, y: 60 },
  ], styles.normal);
  // line.basic.shapes({ start: { x: 20, y: 20 }, end: { x: 200, y: 200 } }, styles.normal);
  qGraph.resetGraph([[{
    x: 120,
    y: 120,
    shapes: ln,
  }]]);
});

export const cGraph = new Graph();
cGraph.onReady(() => {
  const ln = line.cubic.shapes([
    { x: 20, y: 60 },
    { x: 60, y: -20 },
    { x: 120, y: 90 },
    { x: 180, y: 60 },
    { x: 240, y: -20 },
    { x: 320, y: 50 },
    { x: 400, y: 90 },
    { x: 480, y: 10 },
  ], styles.normal);
  // line.basic.shapes({ start: { x: 20, y: 20 }, end: { x: 200, y: 200 } }, styles.normal);
  cGraph.resetGraph([[{
    x: 100,
    y: 120,
    shapes: ln,
  }]]);
});

export const fGraph = new Graph();
fGraph.onReady(() => {
  const ln = line.fold.shapes(
    [
      { x: 20, y: 60 },
      { x: 60, y: -20 },
      { x: 120, y: 90 },
      { x: 180, y: 60 },
      { x: 240, y: -20 },
      { x: 320, y: 50 },
      { x: 400, y: 90 },
      { x: 480, y: 10 },
    ], styles.normal);
  fGraph.resetGraph([[{
    x: 100,
    y: 120,
    shapes: ln,
  }]]);
});

export const sGraph = new Graph();
sGraph.onReady(() => {
  const ln = line.step.shapes({ pathes: [130, -50, 120, -50, 90, 140, 140, -150], radius: 9 }, styles.normal);
  sGraph.resetGraph([[{
    x: 120,
    y: 240,
    shapes: ln,
  }]]);
});