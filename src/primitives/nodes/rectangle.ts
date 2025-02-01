import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "./styles";
import { rectangle } from "impressionist";

export interface RectangleProps {
  width: number;
  height: number;
  radius: number;
};

function toOpts(style: NodeStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: NodeStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: RectangleProps, style: NodeStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height, radius }: RectangleProps): string {
  if (radius === 0) {
    return rectangle.basic(0, 0, width, height);
  }
  return rectangle.round(0, 0, width, height, radius);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};