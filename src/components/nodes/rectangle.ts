import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "./styles";
import { rectangle } from "impressionist";

export interface RectangleProps {
  width: number;
  height: number;
  radius: number;
};

function toOpts(styles: NodeStyles): MeshOptions {
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

export function applyStyle(shape: Mesh[] | undefined, style: NodeStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: RectangleProps, style: NodeStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height, radius }: RectangleProps): string {
  if (radius === 0) {
    return rectangle.basic(0, 0, width, height);
  }
  return rectangle.round(0, 0, width, height, radius);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};