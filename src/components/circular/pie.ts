import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyles } from "./styles";
import { circular } from "impressionist";

export interface PieProps {
  radius: number,
  start: number,
  end: number,
};

export function toOpts(styles: CircularStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.background) opts.fill = styles.background;
  if (styles.shadow) opts.shadowColor = styles.shadow;
  if (styles.shadowBlur) opts.shadowBlur = styles.shadowBlur;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
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