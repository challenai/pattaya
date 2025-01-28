'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { stripe as s, ring as r } from "@pattaya/pattaya";

export const stripe: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx) {
        s.drawStripe(ctx, {
          width: 100,
          height: 100,
          lineWidth: 1,
          margin: 9,
          offset: -100,
          segements: [10, 6],
          lineColor: "#ccf",
        });
      }
    },
  ],
];

export const ring: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx) {
        r.drawCircular(ctx, {
          width: 100,
          height: 100,
          lineWidth: 1,
          margin: 9,
          offsetX: -20,
          offsetY: -20,
          lineColor: "#ccf",
        });
      }
    },
  ],
];

export const grid: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx) {
        c.drawCircular(ctx, {
          width: 100,
          height: 100,
          lineWidth: 1,
          margin: 9,
          offsetX: -20,
          offsetY: -20,
          lineColor: "#ccf",
        });
        // g.drawGrid(ctx, {
        //   width: 100,
        //   height: 100,
        //   lineWidth: 1,
        //   margin: 9,
        //   offsetX: -20,
        //   offsetY: -20,
        //   lineColor: "#ccf",
        // });
      }
    },
  ],
];