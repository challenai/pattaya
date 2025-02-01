import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import { arrow } from "impressionist";

export interface TriangleProps {
  width: number;
  height: number;
};

export function toOpts(style: ArrowStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: ArrowStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: TriangleProps, style: ArrowStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height }: TriangleProps): string {
  return arrow.triangle(0, 0, width, height);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};