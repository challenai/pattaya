import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "./styles";
import { circle } from "impressionist";

export interface CircleProps {
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

export function shapes(props: CircleProps, style: NodeStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ radius }: CircleProps): string {
  return circle.basic(0, 0, radius);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};