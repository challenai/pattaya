import type { ShadowElement } from "@pattaya/depict/graph";
import type { Point } from "../../primitives/line/point";
import type { LineStyles } from "../../primitives/line/styles";
import { line } from "../../primitives";
import { ArrowType, endpointArrow } from "./arrows";

export interface QuadraticBezierEdgeProps {
  points: Point[];
  styles: {
    normal: LineStyles;
    active: LineStyles;
  };
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
  children?: ShadowElement[];
};

export function QuadraticBezierEdge(x: number, y: number, { points, startDecoration, endDecoration, styles }: QuadraticBezierEdgeProps): ShadowElement {
  const children = [];
  if (startDecoration) {
    const se = line.quadratic.start(points);
    if (se) children.push(endpointArrow(startDecoration, se, styles.normal));
  }
  if (endDecoration) {
    const ee = line.quadratic.end(points);
    if (ee) children.push(endpointArrow(endDecoration, ee, styles.normal));
  }
  return {
    x,
    y,
    shapes: line.quadratic.shapes(points, styles.normal),
    children,
  };
}