import type { MeshOptions } from "@pattaya/depict/graph";
import type { TickStyles } from "./styles";
import type { Fragment, Shapes } from "../../core";
import { line } from "impressionist";

export interface TickFragment {
  tick: Fragment;
  baseline?: Fragment;
  elements: Fragment[];
}

export interface BaselineProps {
  offset: number;
  height: number;
};

export interface TickProps {
  offset: number;
  margin: number;
  count: number;
  baseline?: number;
  vertical?: boolean;
};

function toOptsTick(styles: TickStyles): MeshOptions {
  const opts: MeshOptions = {};
  opts.border = true;
  opts.stroke = styles.borderTick;
  return opts;
};

function toOptsBaseline(styles: TickStyles): MeshOptions {
  const opts: MeshOptions = {};
  opts.border = true;
  opts.stroke = styles.borderBaseline;
  return opts;
};

export function applyStyle(shape: Shapes, style: TickStyles) {
  shape![0].opts = toOptsTick(style);
};

export function fragments({ count, margin, offset, baseline, vertical }: TickProps, styles: TickStyles): TickFragment {
  const tick: Fragment = {
    x: 0,
    y: 0,
    shapes: [],
  };
  const opts = toOptsTick(styles);
  for (let i = 0; i < count; i++) {
    let current = i * margin;
    if (vertical) current = -current;
    tick.shapes!.push({
      path: wireframeTick(current, offset, vertical),
      opts,
    })
  }

  const frag: TickFragment = {
    tick,
    elements: [tick],
  };

  if (baseline) {
    const optsBaseline = toOptsBaseline(styles);
    if (offset > 0) baseline = - baseline;
    const baselineFrag: Fragment = {
      x: 0,
      y: 0,
      shapes: [],
    };
    for (let i = 1; i < count; i++) {
      let current = i * margin;
      if (vertical) current = -current;
      baselineFrag.shapes!.push({
        path: wireframeTick(current, baseline, vertical),
        opts: optsBaseline,
      })
    }
    frag.baseline = baselineFrag;
    frag.elements.push(baselineFrag);
  }

  return frag;
};

function wireframeTick(offset: number, offsetSecondary: number, vertical?: boolean): string {
  if (vertical) {
    return line.basic(0, offset, offsetSecondary, offset);
  }
  return line.basic(offset, 0, offset, offsetSecondary);
};

export default {
  fragments,
  applyStyle,
};