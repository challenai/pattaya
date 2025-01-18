import type { MeshOptions, ShadowElement } from "@pattaya/depict/graph";
import { Rectangle } from "@pattaya/pather";
import type { CardStyleProps } from "./props";

export interface CardProps {
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  style: CardStyleProps,
};

const getOptsFromTheme = (props: CardStyleProps): MeshOptions => ({
  fill: props.background,
  stroke: props.border,
});

export const applyCardStyle = (card: ShadowElement, style: CardStyleProps) => {
  card.shapes![0].opts = getOptsFromTheme(style);
};

export const Card = ({ x, y, width, height, radius, style }: CardProps): ShadowElement => {
  const card: ShadowElement = {
    x,
    y,
    shapes: [
      {
        path: Rectangle.RoundAligned(0, 0, width, height, radius),
        opts: getOptsFromTheme(style),
      },
    ],
    contain: (x, y) => x > 0 && x < width && y > 0 && y < height,
  };
  return card;
};