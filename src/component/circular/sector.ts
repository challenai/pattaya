import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyleProps } from "./props";
import { circular } from "impressionist";

export interface SectorProps {
  radius0: number,
  radius1: number,
  start: number,
  end: number,
};

function setOpts(style: CircularStyleProps): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
}

export function applyStyle(shape: Mesh[] | undefined, style: CircularStyleProps) {
  shape![0].opts = setOpts(style);
}

export function shapes(props: SectorProps, style: CircularStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
}

export function wireframe({ radius0, radius1, start, end }: SectorProps): string {
  return circular.sector(0, 0, radius0, radius1, start, end);
}

export default {
  shapes,
  applyStyle,
  wireframe,
};