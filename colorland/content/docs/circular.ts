'use client'
import { Graph } from "@pattaya/depict/graph";
import { circular as c } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.circular.background;

export const styles = mayk.circular.styles;

export const sGraph = new Graph();
sGraph.onReady(() => {
  sGraph.resetGraph([[
    {
      x: 180,
      y: 220,
      shapes: c.sector.shapes({ radius0: 64, radius1: 96, start: 60, end: 120 }, styles.normal),
    },
    {
      x: 420,
      y: 160,
      shapes: c.sector.shapes({ radius0: 32, radius1: 96, start: -60, end: 20 }, styles.normal),
    },
  ]]);
});

export const pGraph = new Graph();
pGraph.onReady(() => {
  pGraph.resetGraph([[
    {
      x: 180,
      y: 220,
      shapes: c.pie.shapes({ radius: 72, start: 30, end: 60 }, styles.normal),
    },
    {
      x: 420,
      y: 220,
      shapes: c.pie.shapes({ radius: 72, start: 40, end: 160 }, styles.normal),
    },
  ]]);
});
