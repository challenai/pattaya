import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { ArrowStyles } from "./styles";
import { arrow } from "impressionist";

export interface BulletProps {
  width: number;
  height: number;
};

export function toOpts(style: ArrowStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: ArrowStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: BulletProps, style: ArrowStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ width, height }: BulletProps): string {
  return arrow.bullet(0, 0, width, height);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};