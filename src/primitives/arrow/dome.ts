import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import { arrow } from "impressionist";

export interface DomeProps {
  width: number;
  low: number;
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

export function shapes(props: DomeProps, style: ArrowStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, low }: DomeProps): string {
  return arrow.dome(0, 0, width, low);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};