import type { LineStyles } from "../line/styles";
import type { Fragment, Fragments } from "../../core";
import * as step from "../line/step";
import { ArrowType, endpointArrow } from "./arrows";

export interface StepEdgeProps {
  pathes: number[];
  radius?: number;
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments(x: number, y: number, { pathes, radius, startDecoration, endDecoration }: StepEdgeProps, styles: LineStyles): Fragments {
  const frags: Fragment[] = [
    {
      x,
      y,
      shapes: step.shapes({ pathes, radius }, styles),
    }
  ];
  if (startDecoration) {
    const se = step.start(pathes);
    if (se) frags.push(endpointArrow(startDecoration, se, styles));
  }
  if (endDecoration) {
    const ee = step.end(pathes);
    if (ee) frags.push(endpointArrow(endDecoration, ee, styles));
  }
  return frags;
}

export function applyStyles(fragments: Fragments, styles: LineStyles) {
  step.applyStyle(fragments![0].shapes, styles);
};

export default {
  fragments,
  applyStyles,
};