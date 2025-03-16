import type { MeshOptions } from "@challenai/depict/graph";
import type { NodeStyles } from "./styles";
import type { Shapes } from "../../core";
import { circle } from "impressionist";

export interface CircleProps {
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

export function applyStyle(shape: Shapes, style: NodeStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: CircleProps, style: NodeStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ radius }: CircleProps): string {
  return circle.basic(0, 0, radius);
};

export function update(shapes: Shapes, props: CircleProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};