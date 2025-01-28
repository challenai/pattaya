import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyleProps } from "./props";
import { circular } from "impressionist";

export interface PieProps {
  radius: number,
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

export function shapes(props: PieProps, style: CircularStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
}

export function wireframe({ radius, start, end }: PieProps): string {
  return circular.pie(0, 0, radius, start, end);
}

export default {
  shapes,
  applyStyle,
  wireframe,
};