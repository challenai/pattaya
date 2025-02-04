import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyles } from "./styles";
import { circular } from "impressionist";

export interface PieProps {
  radius: number,
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

export function shapes(props: PieProps, style: CircularStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
}

export function wireframe({ radius, start, end }: PieProps): string {
  return circular.pie(0, 0, radius, start, end);
}

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};