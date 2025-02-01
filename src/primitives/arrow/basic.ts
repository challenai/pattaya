import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import { arrow } from "impressionist";

export interface BasicArrowProps {
  width: number;
  height: number;
};

export function toOpts(style: ArrowStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
  };
};

export function applyStyle(shapes: Mesh[] | undefined, style: ArrowStyles) {
  shapes![0].opts = toOpts(style);
};

export function shapes(props: BasicArrowProps, style: ArrowStyles): Mesh[] {
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

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};