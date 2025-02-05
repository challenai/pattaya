import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import type { Point } from "./point";
import { line } from "impressionist";

export interface BasicLineProps {
  start: Point
  end: Point;
};

function toOpts(styles: LineStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.width) opts.lineWidth = styles.width;
  if (styles.color) {
    opts.border = true;
    opts.stroke = styles.color;
  } else {
    opts.border = false;
  }
  return opts;
};

export function applyStyle(shape: Mesh[] | undefined, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: BasicLineProps, style: LineStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ start, end }: BasicLineProps): string {
  return line.basic(start.x, start.y, end.x, end.y);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};