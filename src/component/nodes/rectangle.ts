import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyleProps } from "./props";
import { Rectangle } from "@pattaya/pather";

export interface RectangleProps {
  width: number;
  height: number;
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

export function shapes(props: RectangleProps, style: NodeStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ width, height, radius }: RectangleProps): string {
  if (radius === 0) {
    return Rectangle.Basic(0, 0, width, height);
  }
  return Rectangle.Round(0, 0, width, height, radius);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};