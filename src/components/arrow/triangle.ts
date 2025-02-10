import { toOpts, type ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import { arrow } from "impressionist";

export { toOpts } from "./styles";

export interface TriangleProps {
  width: number;
  height: number;
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