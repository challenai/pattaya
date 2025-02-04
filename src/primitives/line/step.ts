import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import { step } from "impressionist";

export interface StepLineProps {
  points: number[];
  radius?: number;
};

function toOpts(style: LineStyles): MeshOptions {
  return {
    stroke: style.color,
  };
};

export function applyStyle(shape: Mesh[] | undefined, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: StepLineProps, style: LineStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ points, radius }: StepLineProps): string {
  return step.relative(0, 0, points, radius);
};

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};