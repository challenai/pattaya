import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyles } from "./styles";
import { circular } from "impressionist";

export interface SectorProps {
  radius0: number,
  radius1: number,
  start: number,
  end: number,
};

export function toOpts(style: CircularStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
}

export function applyStyle(shape: Mesh[] | undefined, style: CircularStyles) {
  shape![0].opts = toOpts(style);
}

export function shapes(props: SectorProps, style: CircularStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
}

export function wireframe({ radius0, radius1, start, end }: SectorProps): string {
  return circular.sector(0, 0, radius0, radius1, start, end);
}

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};