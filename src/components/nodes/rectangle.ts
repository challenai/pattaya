import type { MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "./styles";
import type { Shapes } from "../../core";
import { rectangle } from "impressionist";

export interface RectangleProps {
  width: number;
  height: number;
  radius?: number;
  aligned?: boolean;
};

export function toOpts(styles: NodeStyles): MeshOptions {
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
};

export function applyStyle(shapes: Shapes, style: NodeStyles) {
  shapes![0].opts = toOpts(style);
};

export function shapes(props: RectangleProps, style: NodeStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height, radius, aligned }: RectangleProps): string {
  if (radius) {
    if (aligned) {
      return rectangle.roundAligned(0, 0, width, height, radius);
    }
    return rectangle.round(0, 0, width, height, radius);
  }
  if (aligned) {
    return rectangle.basicAligned(0, 0, width, height);
  }
  return rectangle.basic(0, 0, width, height);
};

export function update(shapes: Shapes, props: RectangleProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};