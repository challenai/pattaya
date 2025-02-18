import { toOpts, type ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import { arrow } from "impressionist";

export { toOpts } from "./styles";

export interface BluntProps {
  width: number;
  low: number;
  high: number;
};

export function applyStyle(shape: Shapes, style: ArrowStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: BluntProps, style: ArrowStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, low, high }: BluntProps): string {
  return arrow.blunt(0, 0, width, low, high);
};

export function update(shapes: Shapes, props: BluntProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};