import type { MeshOptions } from "@pattaya/depict/graph";
import type { SplitStyles } from "./styles";
import type { Shapes } from "../../core";
import { rectangle } from "impressionist";

export interface SegementProps {
  offsets: number[];
  width: number;
  height: number;
  vertical?: boolean;
  radius?: number;
};

function toBoxOpts(styles: SplitStyles): MeshOptions {
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

function toSeperatorOpts(styles: SplitStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function applyStyle(shape: Shapes, style: SplitStyles) {
  shape![0].opts = toBoxOpts(style);
  shape![1].opts = toSeperatorOpts(style);
}

function buildSeperator(width: number, height: number, offsets: number[], vertical?: boolean): string {
  let p = "";
  for (let offset of offsets) {
    if (vertical) {
      if (offset < height) {
        offset += 0.5;
        p += `M0 ${offset}L${width} ${offset}`;
      }
    } else {
      if (offset < width) {
        offset += 0.5;
        p += `M${offset} 0L${offset} ${height}`;
      }
    }
  }
  return p;
}

export function shapes({ width, height, offsets, vertical, radius }: SegementProps, styles: SplitStyles): Shapes {
  return [
    {
      path: radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height),
      opts: toBoxOpts(styles),
    },
    {
      path: buildSeperator(width, height, offsets, vertical),
      opts: toSeperatorOpts(styles),
    }
  ];
}

export function update(shapes: Shapes, { width, height, offsets, vertical, radius }: SegementProps) {
  shapes![0].path = radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height);
  shapes![1].path = buildSeperator(width, height, offsets, vertical);
};

export default {
  shapes,
  update,
  applyStyle,
};