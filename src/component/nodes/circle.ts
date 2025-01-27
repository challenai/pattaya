import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyleProps } from "./props";
import { Circle } from "@pattaya/pather";

export interface CircleProps {
  radius: number;
};

function setOpts(style: NodeStyleProps): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: NodeStyleProps) {
  shape![0].opts = setOpts(style);
};

export function shapes(props: CircleProps, style: NodeStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ radius }: CircleProps): string {
  return Circle.Basic(0, 0, radius);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};