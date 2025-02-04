import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import type { Point } from "./point";
import { bezier } from "impressionist";

function toOpts(style: LineStyles): MeshOptions {
  return {
    stroke: style.color,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(points: Point[], style: LineStyles): Mesh[] {
  return [
    {
      path: wireframe(points),
      opts: toOpts(style),
    },
  ];
};

export function wireframe(points: Point[]): string {
  return bezier.cubic(points);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};