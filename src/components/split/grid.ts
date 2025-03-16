import type { MeshOptions } from "@challenai/depict/graph";
import type { SplitStyles } from "./styles";
import type { Shapes } from "../../core";
import { rectangle } from "impressionist";

export interface GridUnit {
  offsets: number[];
  offset: number;
}

export interface GridProps {
  width: number;
  height: number;
  units: GridUnit[];
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

function buildVerticalSeperators(width: number, height: number, units: GridUnit[]): string {
  let path = "";
  let prevOffset = 0;
  for (const unit of units) {
    if (prevOffset >= width) return path;
    // h: from prevOffset to offset
    const vOffset = Math.min(unit.offset, width);
    for (let offset of unit.offsets) {
      if (offset >= height) break;
      offset += 0.5;
      path += `M${prevOffset} ${offset}L${vOffset} ${offset}`;
    }
    if (unit.offset < width) {
      unit.offset += 0.5;
      path += `M${unit.offset} 0L${unit.offset} ${height}`;
    }
    prevOffset = unit.offset;
  }
  return path;
}

function buildHorizontalSeperators(width: number, height: number, units: GridUnit[]): string {
  let path = "";
  let prevOffset = 0;
  for (const unit of units) {
    if (prevOffset >= height) return path;
    // v: from prevOffset to offset
    const vOffset = Math.min(unit.offset, height);
    for (let offset of unit.offsets) {
      if (offset >= width) break;
      offset += 0.5;
      path += `M${offset} ${prevOffset}L${offset} ${vOffset}`;
    }
    if (unit.offset < height) {
      unit.offset += 0.5;
      path += `M0 ${unit.offset}L${width} ${unit.offset}`;
    }
    prevOffset = unit.offset;
  }
  return path;
}

export function shapes({ width, height, units, vertical, radius }: GridProps, styles: SplitStyles): Shapes {
  return [
    {
      path: radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height),
      opts: toBoxOpts(styles),
    },
    {
      path: vertical ? buildVerticalSeperators(width, height, units) : buildHorizontalSeperators(width, height, units),
      opts: toSeperatorOpts(styles),
    },
  ];
};

export function update(shapes: Shapes, { width, height, units, vertical, radius }: GridProps) {
  shapes![0].path = radius ? rectangle.roundAligned(0, 0, width, height, radius) : rectangle.basicAligned(0, 0, width, height);
  shapes![1].path = vertical ? buildVerticalSeperators(width, height, units) : buildHorizontalSeperators(width, height, units);
};

export default {
  shapes,
  update,
  applyStyle,
};