import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyleProps } from "./props";
import { arrow } from "impressionist";

export interface TriangleProps {
  width: number;
  height: number;
};

function setOpts(style: ArrowStyleProps): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: ArrowStyleProps) {
  shape![0].opts = setOpts(style);
};

export function shapes(props: TriangleProps, style: ArrowStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ width, height }: TriangleProps): string {
  return arrow.triangle(0, 0, width, height);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};