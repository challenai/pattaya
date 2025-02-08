import type { Point } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { EdgeFragments } from "./edge";
import type { Fragment } from "../../core";
import * as basic from "../line/basic";
import { applyArrowStyles, ArrowType, endpointArrow } from "./arrows";

export interface LineEdgeProps {
  start: Point;
  end: Point;
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments({ start, end, startDecoration, endDecoration }: LineEdgeProps, styles: LineStyles): EdgeFragments {
  const lineFrag: Fragment = {
    x: 0,
    y: 0,
    shapes: basic.shapes({ start, end }, styles),
  };
  const frags: EdgeFragments = {
    line: lineFrag,
    elements: [],
  };
  const r = basic.start({ start, end });
  if (startDecoration && r) {
    const start = endpointArrow(startDecoration, r, styles);
    frags.start = start;
    frags.elements.push(frags.start);
  }
  if (endDecoration && r) {
    const end = endpointArrow(endDecoration, r, styles);
    frags.end = end;
    frags.elements.push(end);
  }
  return frags;
}

export function applyStyles(fragments: EdgeFragments, styles: LineStyles) {
  basic.applyStyle(fragments.line.shapes, styles);
  if (fragments.start) applyArrowStyles(fragments.start, styles);
  if (fragments.end) applyArrowStyles(fragments.end, styles);
};

export function update(frags: EdgeFragments, { start, end, startDecoration, endDecoration }: LineEdgeProps, styles: LineStyles) {
  frags.line.shapes = basic.shapes({ start, end }, styles);
  frags.elements.length = 0;
  frags.elements.push(frags.line);

  const r = basic.start({ start, end });
  if (startDecoration) {
    if (r) {
      const start = endpointArrow(startDecoration, r, styles);
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
    if (r) {
      const end = endpointArrow(endDecoration, r, styles);
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
  applyStyles,
};