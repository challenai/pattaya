import type { Point } from "../line/point";
import type { EdgeFragments } from "./edge";
import type { Fragment } from "../../core";
import type { EdgeStyles } from "./styles";
import * as cubic from "../line/cubic";
import { applyArrowStyles, ArrowType, endpointArrow, } from "./arrows";

export interface CubicBezierEdgeProps {
  points: Point[];
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments({ points, startDecoration, endDecoration }: CubicBezierEdgeProps, styles: EdgeStyles): EdgeFragments {
  const lineFrag: Fragment = {
    x: 0,
    y: 0,
    shapes: cubic.shapes(points, styles.line),
  };
  const frags: EdgeFragments = {
    line: lineFrag,
    elements: [lineFrag],
  };
  if (startDecoration) {
    const se = cubic.start(points);
    if (se) {
      const start = endpointArrow(startDecoration, se, styles.arrow);
      frags.start = start;
      frags.elements.push(frags.start);
    }
  }
  if (endDecoration) {
    const ee = cubic.end(points);
    if (ee) {
      const end = endpointArrow(endDecoration, ee, styles.arrow);
      frags.end = end;
      frags.elements.push(end);
    }
  }
  return frags;
}

export function applyStyles(fragments: EdgeFragments, styles: EdgeStyles) {
  cubic.applyStyle(fragments.line.shapes, styles.line);
  if (fragments.start) applyArrowStyles(fragments.start, styles.arrow);
  if (fragments.end) applyArrowStyles(fragments.end, styles.arrow);
};

export function update(frags: EdgeFragments, { points, startDecoration, endDecoration }: CubicBezierEdgeProps, styles: EdgeStyles) {
  frags.line.shapes = cubic.shapes(points, styles.line);
  frags.elements.length = 0;
  frags.elements.push(frags.line);

  if (startDecoration) {
    const se = cubic.start(points);
    if (se) {
      const start = endpointArrow(startDecoration, se, styles.arrow);
      if (frags.start) {
        frags.start.x = start.x;
        frags.start.y = start.y;
        frags.start.shapes = start.shapes;
      } else {
        frags.start = start;
      }
      frags.elements.push(frags.start);
    } else {
      frags.start = undefined;
    }
  }
  if (endDecoration) {
    const ee = cubic.end(points);
    if (ee) {
      const end = endpointArrow(endDecoration, ee, styles.arrow);
      if (frags.end) {
        frags.end.x = end.x;
        frags.end.y = end.y;
        frags.end.shapes = end.shapes;
      } else {
        frags.end = end;
      }
      frags.elements.push(frags.end);
    } else {
      frags.end = undefined;
    }
  }
};

export default {
  fragments,
  update,
  applyStyles,
};