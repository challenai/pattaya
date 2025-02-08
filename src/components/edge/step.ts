import type { LineStyles } from "../line/styles";
import type { EdgeFragments } from "./edge";
import type { Fragment } from "../../core";
import * as step from "../line/step";
import { applyArrowStyles, ArrowType, endpointArrow } from "./arrows";

export interface StepEdgeProps {
  pathes: number[];
  radius?: number;
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments({ pathes, radius, startDecoration, endDecoration }: StepEdgeProps, styles: LineStyles): EdgeFragments {
  const lineFrag: Fragment = {
    x: 0,
    y: 0,
    shapes: step.shapes({ pathes, radius }, styles),
  };
  const frags: EdgeFragments = {
    line: lineFrag,
    elements: [],
  };
  if (startDecoration) {
    const se = step.start(pathes);
    if (se) {
      const start = endpointArrow(startDecoration, se, styles);
      frags.start = start;
      frags.elements.push(frags.start);
    }
  }
  if (endDecoration) {
    const ee = step.end(pathes);
    if (ee) {
      const end = endpointArrow(endDecoration, ee, styles);
      frags.end = end;
      frags.elements.push(end);
    }
  }
  return frags;
}

export function applyStyles(fragments: EdgeFragments, styles: LineStyles) {
  step.applyStyle(fragments.line.shapes, styles);
  if (fragments.start) applyArrowStyles(fragments.start, styles);
  if (fragments.end) applyArrowStyles(fragments.end, styles);
};

export function update(frags: EdgeFragments, { pathes, radius, startDecoration, endDecoration }: StepEdgeProps, styles: LineStyles) {
  frags.line.shapes = step.shapes({ pathes, radius }, styles);
  frags.elements.length = 0;
  frags.elements.push(frags.line);

  if (startDecoration) {
    const se = step.start(pathes);
    if (se) {
      const start = endpointArrow(startDecoration, se, styles);
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
    const ee = step.end(pathes);
    if (ee) {
      const end = endpointArrow(endDecoration, ee, styles);
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