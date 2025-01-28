import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CardStyleProps } from "./props";
import { rectangle } from "impressionist";

export interface CardProps {
  width: number,
  height: number,
  radius: number,
};

function setOpts(style: CardStyleProps): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
}

export function applyStyle(shape: Mesh[] | undefined, style: CardStyleProps) {
  shape![0].opts = setOpts(style);
}

export function shapes({ width, height, radius }: CardProps, style: CardStyleProps): Mesh[] {
  return [
    {
      path: rectangle.roundAligned(0, 0, width, height, radius),
      opts: setOpts(style),
    },
  ];
}

export function wireframe({ width, height, radius }: CardProps): string {
  return rectangle.roundAligned(0, 0, width, height, radius);
}

export default {
  shapes,
  applyStyle,
  wireframe,
};