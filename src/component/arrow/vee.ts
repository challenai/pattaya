import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyleProps } from "./props";
import { arrow } from "impressionist";

export interface VeeProps {
  width: number;
  low: number;
  high: number;
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

export function shapes(props: VeeProps, style: ArrowStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ width, low, high }: VeeProps): string {
  return arrow.vee(0, 0, width, low, high);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};