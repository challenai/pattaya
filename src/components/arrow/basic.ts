import { toOpts, type ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import { arrow } from "impressionist";

export { toOpts } from "./styles";

export interface BasicArrowProps {
  width: number;
  height: number;
};

export function applyStyle(shapes: Shapes, style: ArrowStyles) {
  shapes![0].opts = toOpts(style);
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