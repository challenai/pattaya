import type { MeshOptions } from "@challenai/depict/graph";
import type { LabelStyles } from "./styles";
import type { Shapes } from "../../core";
import { line } from "impressionist";

export interface LabelProps {
  offsetX: number;
  offsetY: number;
  underline: number;
};

function toOpts(styles: LabelStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
};

export function applyStyle(shape: Shapes, style: LabelStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: LabelProps, style: LabelStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ offsetX, offsetY, underline }: LabelProps): string {
  if (offsetX < 0) underline = -underline;
  return line.fold([
    { x: 0, y: 0 },
    { x: offsetX, y: offsetY },
    { x: offsetX + underline, y: offsetY },
  ]);
};

export function update(shapes: Shapes, props: LabelProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};