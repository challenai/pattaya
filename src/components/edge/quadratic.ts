import type { Point } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { Fragments } from "../../core";
import * as quadratic from "../line/quadratic";
import { ArrowType, endpointArrow } from "./arrows";

export interface QuadraticBezierEdgeProps {
  points: Point[];
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments({ points, startDecoration, endDecoration }: QuadraticBezierEdgeProps, styles: LineStyles): Fragments {
  const frags: Fragments = [
    {
      x: 0,
      y: 0,
      shapes: quadratic.shapes(points, styles),
    },
  ];
  if (startDecoration) {
    const se = quadratic.start(points);
    if (se) frags.push(endpointArrow(startDecoration, se, styles));
  }
  if (endDecoration) {
    const ee = quadratic.end(points);
    if (ee) frags.push(endpointArrow(endDecoration, ee, styles));
  }
  return frags;
}

export function applyStyles(fragments: Fragments, styles: LineStyles) {
  quadratic.applyStyle(fragments![0].shapes, styles);
};

export default {
  fragments,
  applyStyles,
};