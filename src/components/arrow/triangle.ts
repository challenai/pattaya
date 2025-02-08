import type { MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import { arrow } from "impressionist";

export interface TriangleProps {
  width: number;
  height: number;
};

export function toOpts(styles: ArrowStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.background) opts.fill = styles.background;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
};

export function applyStyle(shape: Shapes, style: ArrowStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: TriangleProps, style: ArrowStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height }: TriangleProps): string {
  return arrow.triangle(0, 0, width, height);
};

export function update(shapes: Shapes, props: TriangleProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};