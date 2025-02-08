import type { Point } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { EdgeFragments } from "./edge";
import * as cubic from "../line/cubic";
import { ArrowType, endpointArrow } from "./arrows";

export interface CubicBezierEdgeProps {
  points: Point[];
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
};

export function fragments({ points, startDecoration, endDecoration }: CubicBezierEdgeProps, styles: LineStyles): EdgeFragments {
  const lineFrag = {
    x: 0,
    y: 0,
    shapes: cubic.shapes(points, styles),
  };
  const frags: EdgeFragments = {
    line: lineFrag,
    elements: [],
  };
  if (startDecoration) {
    const se = cubic.start(points);
    if (se) {
      const start = endpointArrow(startDecoration, se, styles);
      frags.start = start;
      frags.elements.push(frags.start);
    }
  }
  if (endDecoration) {
    const ee = cubic.end(points);
    if (ee) {
      const end = endpointArrow(endDecoration, ee, styles);
      frags.end = end;
      frags.elements.push(end);
    }
  }
  return frags;
}

export function applyStyles(fragments: EdgeFragments, styles: LineStyles) {
  cubic.applyStyle(fragments.line.shapes, styles);
};

// export function update(fragments: EdgeFragments, props: CubicBezierEdgeProps) {
//   cubic.update(fragments.line.shapes, props.points);
//   const se = cubic.start(props.points);
// };

export default {
  fragments,
  applyStyles,
};