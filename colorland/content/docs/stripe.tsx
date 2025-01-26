'use client'
import { ShadowElement } from "@pattaya/depict/graph";
import { stripe } from "@pattaya/pattaya";

export const basic: ShadowElement[][] = [
  [
    {
      x: 120,
      y: 90,
      postRenderCallback(ctx, offscreen) {
        const p = new Path2D();
        p.rect(0, 0, 100, 100);
        ctx.clip(p);
        stripe.drawStripe(ctx, {
          width: 100,
          height: 100,
          lineWidth: 1,
          margin: 9,
          offset: -100,
          segements: [10, 6],
          lineColor: "#ccf",
          backgroundColor: "transparent",
        });
      }
    },
  ],
];