import type { Point } from "../line/point";
import type { EdgeFragments } from "./edge";
import type { Fragment } from "../../core";
import * as basic from "../line/basic";
import { applyArrowStyles, type ArrowType, endpointArrow } from "./arrows";
import type { EdgeStyles } from "./styles";

export interface LineEdgeProps {
    start: Point;
    end: Point;
    startDecoration?: ArrowType;
    endDecoration?: ArrowType;
}

export function fragments(
    { start, end, startDecoration, endDecoration }: LineEdgeProps,
    styles: EdgeStyles,
): EdgeFragments {
    const lineFrag: Fragment = {
        x: 0,
        y: 0,
        shapes: basic.shapes({ start, end }, styles.line),
    };
    const frags: EdgeFragments = {
        line: lineFrag,
        elements: [lineFrag],
    };
    if (startDecoration) {
        const se = basic.start({ start, end });
        if (se) {
            const start = endpointArrow(startDecoration, se, styles.arrow);
            frags.start = start;
            frags.elements.push(frags.start);
        }
    }
    if (endDecoration) {
        const ee = basic.end({ start, end });
        if (ee) {
            const end = endpointArrow(endDecoration, ee, styles.arrow);
            frags.end = end;
            frags.elements.push(end);
        }
    }
    return frags;
}

export function applyStyles(
    fragments: EdgeFragments,
    typ: ArrowType,
    styles: EdgeStyles,
) {
    basic.applyStyle(fragments.line.shapes, styles.line);
    if (fragments.start) applyArrowStyles(fragments.start, typ, styles.arrow);
    if (fragments.end) applyArrowStyles(fragments.end, typ, styles.arrow);
}

export function update(
    frags: EdgeFragments,
    { start, end, startDecoration, endDecoration }: LineEdgeProps,
    styles: EdgeStyles,
) {
    frags.line.shapes = basic.shapes({ start, end }, styles.line);
    frags.elements.length = 0;
    frags.elements.push(frags.line);

    const r = basic.start({ start, end });
    if (startDecoration) {
        const se = basic.start({ start, end });
        if (se) {
            const start = endpointArrow(startDecoration, r, styles.arrow);
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
        const ee = basic.end({ start, end });
        if (ee) {
            const end = endpointArrow(endDecoration, r, styles.arrow);
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
}

export default {
    fragments,
    applyStyles,
};
