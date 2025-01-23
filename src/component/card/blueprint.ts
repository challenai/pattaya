import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CardStyleProps } from "./props";
import { Rectangle } from "@pattaya/pather";

export interface CardProps {
  width: number,
  height: number,
  radius: number,
};

const setOpts = (style: CardStyleProps): MeshOptions => ({
  fill: style.background,
  stroke: style.border,
  shadowColor: style.shadow,
  shadowBlur: style.shadowBlur,
});

export const applyStyle = (shape: Mesh[] | undefined, style: CardStyleProps) => {
  shape![0].opts = setOpts(style);
};

export const shape = ({ width, height, radius }: CardProps, style: CardStyleProps): Mesh[] => {
  return [
    {
      path: Rectangle.RoundAligned(0, 0, width, height, radius),
      opts: setOpts(style),
    },
  ];
};

export const wireframe = ({ width, height, radius }: CardProps): string => {
  return Rectangle.RoundAligned(0, 0, width, height, radius)
};

export default {
  shape,
  applyStyle,
  wireframe,
};