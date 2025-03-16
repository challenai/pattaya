import type { MeshOptions } from "@challenai/depict/graph";
import type { Fragment } from "../../core";
import type { ScaleStyles } from "./styles";
import { arrow, line } from "impressionist";

export interface MultipleScaleFragments {
  line: Fragment;
  arrows: Fragment[];
  border?: Fragment;
  elements: Fragment[];
};

export interface ScaleItem {
  width: number;
  space: number;
}

export interface MultipleScaleProps {
  segements: ScaleItem[];
  height?: number;
  padding: number;
  vertical?: boolean;
  arrowSize?: number;
};

export function wireframeLine(start: number, end: number, vertical?: boolean): string {
  if (vertical) {
    return line.basic(0, start, 0, end);
  }
  return line.basic(start, 0, end, 0);
}

export function wireframeBorder(offset: number, height: number, vertical?: boolean): string {
  if (vertical) {
    return line.basic(-height / 2, offset, height / 2, offset);
  }
  return line.basic(offset, -height / 2, offset, height / 2);
}

function toOptsBorder(styles: ScaleStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

function toOptsArrow(styles: ScaleStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function fragments({ segements, height, padding, vertical, arrowSize }: MultipleScaleProps, styles: ScaleStyles): MultipleScaleFragments {
  const optsArrow = toOptsArrow(styles);
  const optsBorder = toOptsBorder(styles);
  if (!arrowSize) arrowSize = 10;
  const arrowPath = arrow.basic(0, 0, arrowSize, arrowSize);

  const lineFrag: Fragment = {
    x: 0,
    y: 0,
    shapes: [],
  };
  const arrows: Fragment[] = [];
  let offset = 0;
  for (const item of segements) {
    const lineWidth = (item.width - item.space) / 2 - padding;
    lineFrag.shapes!.push({
      path: wireframeLine(offset + padding, offset + lineWidth + padding, vertical),
      opts: optsArrow,
    });
    lineFrag.shapes!.push({
      path: wireframeLine(offset + item.width - padding - lineWidth, offset + item.width - padding, vertical),
      opts: optsArrow,
    });
    arrows.push({
      x: vertical ? 0 : offset + padding,
      y: vertical ? padding + offset : 0,
      shapes: [
        {
          x: 0,
          y: 0,
          path: arrowPath,
          opts: {
            ...optsArrow,
            rotation: vertical ? 0 : Math.PI * 1.5,
          }
        },
      ],
    });
    arrows.push({
      x: vertical ? 0 : offset + item.width - padding,
      y: vertical ? offset + item.width - padding : 0,
      shapes: [
        {
          x: 0,
          y: 0,
          path: arrowPath,
          opts: {
            ...optsArrow,
            rotation: vertical ? Math.PI : Math.PI * 0.5,
          }
        },
      ],
    });
    offset += item.width;
  }

  const frags: MultipleScaleFragments = {
    line: lineFrag,
    arrows: arrows,
    elements: [lineFrag, ...arrows],
  };
  if (height) {
    const border = {
      x: 0,
      y: 0,
      shapes: [
        {
          path: wireframeBorder(0, height, vertical),
          opts: optsBorder,
        },
      ],
    };
    let offset = 0;
    for (const item of segements) {
      border.shapes.push({
        path: wireframeBorder(offset + item.width, height, vertical),
        opts: optsBorder,
      });
      offset += item.width;
    }
    frags.border = border;
    frags.elements.push(border);
  }
  return frags;
}

export function applyStyles(fragments: MultipleScaleFragments, styles: ScaleStyles) {
  const optsArrow = toOptsArrow(styles);
  const optsBorder = toOptsBorder(styles);
  if (fragments.line.shapes) {
    for (const s of fragments.line.shapes) {
      s.opts = optsArrow;
    }
  }
  for (const item of fragments.arrows) {
    if (item.shapes) {
      for (const s of item.shapes) {
        const rotation = s.opts?.rotation;
        s.opts = {
          ...optsArrow,
          rotation,
        };
      }
    }
  }
  if (fragments.border?.shapes) {
    for (const s of fragments.border.shapes) {
      s.opts = optsBorder;
    }
  }
};

export default {
  fragments,
  applyStyles,
};