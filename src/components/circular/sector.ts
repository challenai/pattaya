import type { MeshOptions } from "@pattaya/depict/graph";
import type { CircularStyles } from "./styles";
import type { Shapes } from "../../core";
import { circular } from "impressionist";

export interface SectorProps {
  radius0: number,
  radius1: number,
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

export function applyStyle(shape: Shapes, style: CircularStyles) {
  shape![0].opts = toOpts(style);
}

export function shapes(props: SectorProps, style: CircularStyles): Shapes {
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

export function update(shapes: Shapes, props: SectorProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};