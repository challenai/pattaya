import type { ShadowElement } from "@pattaya/depict/graph";
import type { Point } from "../../primitives/line/point";
import type { LineStyles } from "../../primitives/line/styles";
import { line } from "../../primitives";
import { ArrowType, endpointArrow } from "./arrows";

export interface LineEdgeProps {
  start: Point;
  end: Point;
  styles: {
    normal: LineStyles;
    active: LineStyles;
  };
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
  children?: ShadowElement[];
};

export function LineEdge(x: number, y: number, { start, end, startDecoration, endDecoration, styles }: LineEdgeProps): ShadowElement {
  const children = [];
  if (startDecoration) {
    const se = line.basic.start({ start, end });
    if (se) children.push(endpointArrow(startDecoration, se, styles.normal));
  }
  if (endDecoration) {
    const ee = line.basic.end({ start, end });
    if (ee) children.push(endpointArrow(endDecoration, ee, styles.normal));
  }
  return {
    x,
    y,
    shapes: line.basic.shapes({ start, end }, styles.normal),
    children,
  };
}