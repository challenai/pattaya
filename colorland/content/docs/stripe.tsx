'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { stripe } from "@pattaya/pattaya";

export const basic: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx) {
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
    },
  ],
];