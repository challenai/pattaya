import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { LineStyles } from "./styles";
import type { Endpoint, Point } from "./point";
import { line } from "impressionist";
import { points2Radians } from "../../utils/ratotation";

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

export function applyStyle(shape: Mesh[] | undefined, style: LineStyles) {
  shape![0].opts = toOpts(style);
};

export function shapes(points: Point[], style: LineStyles): Mesh[] {
  return [
    {
      path: wireframe(points),
      opts: toOpts(style),
    },
  ];
};

export function wireframe(points: Point[]): string {
  return line.fold(points);
};

export function start(points: Point[]): Endpoint | null {
  if (!points || points.length < 2) return null;
  const m = points[0];
  const n = points[1];
  return {
    x: m.x,
    y: m.y,
    rotation: points2Radians(m.x, m.y, n.x, n.y),
  };
}

export function end(points: Point[]): Endpoint | null {
  if (!points || points.length < 2) return null;
  const m = points[points.length - 2];
  const n = points[points.length - 1];
  return {
    x: n.x,
    y: n.y,
    rotation: points2Radians(m.x, m.y, n.x, n.y),
  };
}

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
  start,
  end,
};