import type { ShadowElement } from "@pattaya/depict/graph";
import type { Point } from "../../primitives/line/point";
import type { LineStyles } from "../../primitives/line/styles";
import { line } from "../../primitives";
import { ArrowType, endpointArrow } from "./arrows";

export interface FoldEdgeProps {
  points: Point[];
  styles: {
    normal: LineStyles;
    active: LineStyles;
  };
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
  children?: ShadowElement[];
};

export function FoldEdge(x: number, y: number, { points, startDecoration, endDecoration, styles }: FoldEdgeProps): ShadowElement {
  const children = [];
  if (startDecoration) {
    const se = line.fold.start(points);
    if (se) children.push(endpointArrow(startDecoration, se, styles.normal));
  }
  if (endDecoration) {
    const ee = line.fold.end(points);
    if (ee) children.push(endpointArrow(endDecoration, ee, styles.normal));
  }
  return {
    x,
    y,
    shapes: line.fold.shapes(points, styles.normal),
    children,
  };
}