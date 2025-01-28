import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyleProps } from "./props";
import { arrow } from "impressionist";

export interface DomeProps {
  width: number;
  low: number;
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

export function shapes(props: DomeProps, style: ArrowStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
};

export function wireframe({ width, low }: DomeProps): string {
  return arrow.dome(0, 0, width, low);
};

export default {
  shapes,
  applyStyle,
  wireframe,
};