import type { ShadowElement } from "@pattaya/depict/graph";
import { rectangle } from "impressionist";

export interface CardProps {
  width: number;
  height: number;
  radius: number;
  styles: CardStyleProps;
};

export interface CardStyleProps {
  border: string;
  background: string;
  shadow: string;
  shadowBlur: number;
};

export function BasicCard(x: number, y: number, { width, height, radius, styles }: CardProps): ShadowElement {
  return {
    x,
    y,
    shapes: [
      {
        path: rectangle.roundAligned(0, 0, width, height, radius),
        opts: {
          fill: styles.background,
          stroke: styles.border,
          shadowColor: styles.shadow,
          shadowBlur: styles.shadowBlur,
        },
      },
    ]
  };
}