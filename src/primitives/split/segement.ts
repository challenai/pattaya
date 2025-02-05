import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { SplitStyles } from "./styles";
import { rectangle } from "impressionist";

export interface SegementProps {
  offsets: number[];
  width: number;
  height: number;
  vertical?: boolean;
  radius?: number;
};

export function toBoxOpts(styles: SplitStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.background) opts.fill = styles.background;
  if (styles.shadow) opts.shadowColor = styles.shadow;
  if (styles.shadowBlur) opts.shadowBlur = styles.shadowBlur;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function toSeperatorOpts(styles: SplitStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function applyStyle(shape: Mesh[] | undefined, style: SplitStyles) {
  shape![0].opts = toBoxOpts(style);
  shape![1].opts = toSeperatorOpts(style);
}

export function shapes({ width, height, offsets, vertical, radius }: SegementProps, styles: SplitStyles): Mesh[] {
  const result: Mesh[] = [];
  const rect = radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height);
  result.push({
    path: rect,
    opts: toBoxOpts(styles),
  });
  let path = "";
  for (let offset of offsets) {
    if (vertical) {
      if (offset < height) {
        offset += 0.5;
        path += `M0 ${offset}L${width} ${offset}`;
      }
    } else {
      if (offset < width) {
        offset += 0.5;
        path += `M${offset} 0L${offset} ${height}`;
      }
    }
  }
  result.push({
    path: path,
    opts: toSeperatorOpts(styles),
  });
  return result;
}

export default {
  shapes,
  applyStyle,
};