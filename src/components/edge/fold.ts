import type { Point } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { Fragment, Fragments } from "../../core";
import * as fold from "../line/fold";
import { ArrowType, endpointArrow } from "./arrows";

export interface FoldEdgeProps {
  points: Point[];
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments(x: number, y: number, { points, startDecoration, endDecoration }: FoldEdgeProps, styles: LineStyles): Fragments {
  const frags: Fragment[] = [
    {
      x,
      y,
      shapes: fold.shapes(points, styles),
    }
  ];
  if (startDecoration) {
    const se = fold.start(points);
    if (se) frags.push(endpointArrow(startDecoration, se, styles));
  }
  if (endDecoration) {
    const ee = fold.end(points);
    if (ee) frags.push(endpointArrow(endDecoration, ee, styles));
  }
  return frags;
}

export function applyStyles(fragments: Fragments, styles: LineStyles) {
  fold.applyStyle(fragments![0].shapes, styles);
};

export default {
  fragments,
  applyStyles,
};