'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { circular } from "@pattaya/pattaya";

export const basic: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx) {
        circular.drawCircular(ctx, {
          width: 100,
          height: 100,
          lineWidth: 1,
          margin: 9,
          offsetX: -20,
          offsetY: -20,
          segements: undefined,
          lineColor: "#ccf",
          backgroundColor: "transparent",
        });
      }
    },
  ],
];