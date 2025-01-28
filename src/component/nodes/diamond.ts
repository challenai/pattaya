import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyleProps } from "./props";
import { rectangle } from "impressionist";

export interface DiamondProps {
  width: number;
  height: number;
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

export function shapes(props: DiamondProps, style: NodeStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ width, height }: DiamondProps): string {
  return rectangle.diamond(0, 0, width, height);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};