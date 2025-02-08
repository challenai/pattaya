import type { MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import type { Endpoint } from "./point";
import { type Shapes, rotation } from "../../core";
import { step } from "impressionist";

export interface StepLineProps {
  pathes: number[];
  radius?: number;
};

function toOpts(styles: LineStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.width) opts.lineWidth = styles.width;
  if (styles.color) {
    opts.border = true;
    opts.stroke = styles.color;
  } else {
    opts.border = false;
  }
  return opts;
};

export function applyStyle(shape: Shapes, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(props: StepLineProps, style: LineStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
};

export function wireframe({ pathes, radius }: StepLineProps): string {
  return step.relative(0, 0, pathes, radius);
};

export function start(pathes: number[]): Endpoint | null {
  if (pathes.length < 1) return null;
  let nx = 0;
  let ny = 0;
  if (pathes[0] === 0) {
    ny = pathes[0];
  } else {
    nx = pathes[0];
  }
  return {
    x: 0,
    y: 0,
    rotation: rotation.points2Radians(0, 0, nx, ny),
  };
}

export function end(pathes: number[]): Endpoint | null {
  if (pathes.length < 1) return null;
  let x = 0;
  let y = 0;
  let h = true;
  for (const p of pathes) {
    if (h) {
      x += p;
    } else {
      y += p;
    }
    h = !h;
  }
  let dx = 0;
  let dy = 0;
  if (h) {
    dy = pathes[pathes.length - 1];
  } else {
    dx = pathes[pathes.length - 1];
  }
  return {
    x,
    y,
    rotation: rotation.points2Radians(0, 0, dx, dy),
  };
}

export function update(shapes: Shapes, props: StepLineProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
  start,
  end,
};