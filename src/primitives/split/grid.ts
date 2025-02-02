import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { SplitStyles } from "./styles";
import { rectangle } from "impressionist";

export interface GridUnit {
  seperators: number[];
  size: number;
}

export interface GridProps {
  size: number;
  units: GridUnit[];
  vertical?: boolean;
  radius: number;
};

export function toBoxOpts(style: SplitStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
}

export function toSeperatorOpts(style: SplitStyles): MeshOptions {
  return {
    stroke: style.border,
  };
}

export function applyStyle(shape: Mesh[] | undefined, style: SplitStyles) {
  shape![0].opts = toBoxOpts(style);
  shape![1].opts = toSeperatorOpts(style);
}

export function shapes({ units, size, vertical, radius }: GridProps, styles: SplitStyles): Mesh[] {
  const result: Mesh[] = [];
  let sum = 0;
  units.forEach((u: GridUnit) => sum += u.size);
  let width, height;
  if (vertical) {
    width = size;
    height = sum;
  } else {
    width = sum;
    height = size;
  }
  const rect = radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height);
  result.push({
    path: rect,
    opts: toBoxOpts(styles),
  });
  let path = "";
  // TODO: build seperators' path
  result.push({
    path,
    opts: toSeperatorOpts(styles),
  });
  return result;
}

export default {
  shapes,
  applyStyle,
};