import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { SplitStyles } from "./styles";
import { rectangle } from "impressionist";

export interface SegementProps {
  units: number[];
  size: number;
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

export function shapes({ units, size, vertical, radius }: SegementProps, styles: SplitStyles): Mesh[] {
  const result: Mesh[] = [];
  const sum = units.reduce((pv: number, cv: number) => pv + cv);
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
  let offset = 0.5;
  let path = "";
  for (let i = 0; i < units.length - 1; i++) {
    offset += units[i];
    if (vertical) {
      path += `M0 ${offset}L${size} ${offset}`;
    } else {
      path += `M${offset} 0L${offset} ${size}`;
    }
  }
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