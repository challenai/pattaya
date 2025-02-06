import type { ShadowElement } from "@pattaya/depict/graph";
import type { LineStyles } from "../../primitives/line/styles";
import { type ArrowType, endpointArrow } from "./arrows";
import { line } from "../../primitives";

export interface StepEdgeProps {
  pathes: number[];
  radius?: number;
  styles: {
    normal: LineStyles;
    active: LineStyles;
  };
  startDecoration?: ArrowType;
  endDecoration?: ArrowType;
  children?: ShadowElement[];
};

export function StepEdge(x: number, y: number, { pathes, radius, startDecoration, endDecoration, styles }: StepEdgeProps): ShadowElement {
  const children = [];
  if (startDecoration) {
    const se = line.step.start(pathes);
    if (se) children.push(endpointArrow(startDecoration, se, styles.normal));
  }
  if (endDecoration) {
    const ee = line.step.end(pathes);
    if (ee) children.push(endpointArrow(endDecoration, ee, styles.normal));
  }
  return {
    x,
    y,
    shapes: line.step.shapes({ pathes, radius }, styles.normal),
    children,
  };
}