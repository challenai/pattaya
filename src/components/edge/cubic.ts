import type { ShadowElement } from "@pattaya/depict/graph";
import type { Point } from "../../primitives/line/point";
import type { LineStyles } from "../../primitives/line/styles";
import { line } from "../../primitives";
import { ArrowType, endpointArrow } from "./arrows";

export interface CubicBezierEdgeProps {
  points: Point[];
  styles: {
    normal: LineStyles;
    active: LineStyles;
  };
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
  children?: ShadowElement[];
};

export function CubicBezierEdge(x: number, y: number, { points, startDecoration, endDecoration, styles }: CubicBezierEdgeProps): ShadowElement {
  const children = [];
  if (startDecoration) {
    const se = line.cubic.start(points);
    if (se) children.push(endpointArrow(startDecoration, se, styles.normal));
  }
  if (endDecoration) {
    const ee = line.cubic.end(points);
    if (ee) children.push(endpointArrow(endDecoration, ee, styles.normal));
  }
  return {
    x,
    y,
    shapes: line.cubic.shapes(points, styles.normal),
    children,
  };
}