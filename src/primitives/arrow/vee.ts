import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import { arrow } from "impressionist";

export interface VeeProps {
  width: number;
  low: number;
  high: number;
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

export function shapes(props: VeeProps, style: ArrowStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, low, high }: VeeProps): string {
  return arrow.vee(0, 0, width, low, high);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};