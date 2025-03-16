import type { MeshOptions } from "@challenai/depict/graph";
import type { Fragment } from "../../core";
import type { ScaleStyles } from "./styles";
import { arrow, line } from "impressionist";

export interface ScaleFragments {
  line: Fragment;
  startArrow: Fragment;
  endArrow: Fragment;
  border?: Fragment;
  elements: Fragment[];
};

export interface ScaleProps {
  width: number;
  height?: number;
  padding: number;
  space: number;
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

export function fragments({ width, height, padding, space, vertical, arrowSize }: ScaleProps, styles: ScaleStyles): ScaleFragments {
  const lineWidth = (width - space) / 2 - padding;
  const optsArrow = toOptsArrow(styles);
  const optsBorder = toOptsBorder(styles);
  const lineFrag: Fragment = {
    x: 0,
    y: 0,
    shapes: [
      {
        path: wireframeLine(padding, lineWidth + padding, vertical),
        opts: optsArrow,
      },
      {
        path: wireframeLine(width - padding - lineWidth, width - padding, vertical),
        opts: optsArrow,
      }
    ],
  };
  if (!arrowSize) arrowSize = 10;
  const arrowPath = arrow.basic(0, 0, arrowSize, arrowSize);
  const startArrowFrag: Fragment = {
    x: vertical ? 0 : padding,
    y: vertical ? padding : 0,
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
  };
  const endArrowFrag: Fragment = {
    x: vertical ? 0 : width - padding,
    y: vertical ? width - padding : 0,
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
  };
  const frags: ScaleFragments = {
    line: lineFrag,
    startArrow: startArrowFrag,
    endArrow: endArrowFrag,
    elements: [lineFrag, startArrowFrag, endArrowFrag],
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
        {
          path: wireframeBorder(width, height, vertical),
          opts: optsBorder,
        }
      ],
    };
    frags.border = border;
    frags.elements.push(border);
  }
  return frags;
}

export function applyStyles(fragments: ScaleFragments, styles: ScaleStyles) {
  const optsArrow = toOptsArrow(styles);
  const optsBorder = toOptsBorder(styles);
  if (fragments.line.shapes) {
    for (const s of fragments.line.shapes) {
      s.opts = optsArrow;
    }
  }
  if (fragments.startArrow.shapes) {
    for (const s of fragments.startArrow.shapes) {
      const rotation = s.opts?.rotation;
      s.opts = {
        ...optsArrow,
        rotation,
      };
    }
  }
  if (fragments.endArrow.shapes) {
    for (const s of fragments.endArrow.shapes) {
      const rotation = s.opts?.rotation;
      s.opts = {
        ...optsArrow,
        rotation,
      };
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