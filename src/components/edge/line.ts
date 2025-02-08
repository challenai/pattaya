import type { Point } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { Fragment, Fragments } from "../../core";
import * as basic from "../line/basic";
import { ArrowType, endpointArrow } from "./arrows";

export interface LineEdgeProps {
  start: Point;
  end: Point;
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments(x: number, y: number, { start, end, startDecoration, endDecoration }: LineEdgeProps, styles: LineStyles): Fragments {
  const frags: Fragment[] = [
    {
      x,
      y,
      shapes: basic.shapes({ start, end }, styles),
    }
  ];
  if (startDecoration) {
    const se = basic.start({ start, end });
    if (se) frags.push(endpointArrow(startDecoration, se, styles));
  }
  if (endDecoration) {
    const ee = basic.end({ start, end });
    if (ee) frags.push(endpointArrow(endDecoration, ee, styles));
  }
  return frags;
}

export function applyStyles(fragments: Fragments, styles: LineStyles) {
  basic.applyStyle(fragments![0].shapes, styles);
};

export default {
  fragments,
  applyStyles,
};