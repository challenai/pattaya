import type { ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import type { MeshOptions } from "@pattaya/depict/graph";
import { arrow } from "impressionist";

export interface BasicArrowProps {
  width: number;
  height: number;
};

export function toOpts(styles: ArrowStyles): MeshOptions {
  // ignore background in this arrow!
  const opts: MeshOptions = {};
  if (styles.rotation) opts.rotation = styles.rotation;
  if (styles.width) opts.lineWidth = styles.width;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function applyStyle(shapes: Shapes, styles: ArrowStyles) {
  shapes![0].opts = toOpts(styles);
};

export function shapes(props: BasicArrowProps, style: ArrowStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height }: BasicArrowProps): string {
  return arrow.basic(0, 0, width, height);
};

export function update(shapes: Shapes, props: BasicArrowProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};