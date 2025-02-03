import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import { step } from "impressionist";

function toOpts(style: LineStyles): MeshOptions {
  return {
    stroke: style.color,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(points: number[], style: LineStyles): Mesh[] {
  return [
    {
      path: wireframe(points),
      opts: toOpts(style),
    },
  ];
};

export function wireframe(pathes: number[]): string {
  return step.basic(0, 0, pathes);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};