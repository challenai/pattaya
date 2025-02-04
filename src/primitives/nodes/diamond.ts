import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "./styles";
import { rectangle } from "impressionist";

export interface DiamondProps {
  width: number;
  height: number;
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

export function shapes(props: DiamondProps, style: NodeStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height }: DiamondProps): string {
  return rectangle.diamond(0, 0, width, height);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};