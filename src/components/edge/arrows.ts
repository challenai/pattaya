import type { Endpoint } from "../line/point";
import type { ArrowStyles } from "../arrow/styles";
import type { Fragment, Shapes } from "../../core";
import * as arrow from "../arrow";

export enum ArrowType {
    Basic = 1,
    Blunt = 2,
    Bullet = 3,
    Dome = 4,
    Triangle = 5,
    Vee = 6,
}

function buildArrow(typ: ArrowType, styles: ArrowStyles): Shapes {
    switch (typ) {
        case ArrowType.Basic:
            return arrow.basic.shapes({ width: 9, height: 6 }, styles);
        case ArrowType.Blunt:
            return arrow.blunt.shapes({ width: 9, low: 4, high: 9 }, styles);
        case ArrowType.Bullet:
            return arrow.bullet.shapes({ width: 9, height: 6 }, styles);
        case ArrowType.Dome:
            return arrow.dome.shapes({ width: 9, low: 6 }, styles);
        case ArrowType.Triangle:
            return arrow.triangle.shapes({ width: 9, height: 6 }, styles);
        case ArrowType.Vee:
            return arrow.vee.shapes({ width: 9, low: -6, high: 9 }, styles);
    }
    return [];
}

// TODO: should we expose the arrows parameters to the users in the level of components?
export function endpointArrow(
    typ: ArrowType,
    ep: Endpoint,
    styles: ArrowStyles,
): Fragment {
    return {
        x: ep.x,
        y: ep.y,
        shapes: buildArrow(typ, {
            ...styles,
            rotation: ep.rotation + Math.PI / 2,
        }),
    };
}

export function applyArrowStyles(
    fragment: Fragment,
    typ: ArrowType,
    styles: ArrowStyles,
) {
    const opts = fragment.shapes![0].opts;
    const styles_ = { ...styles };
    if (opts?.rotation) {
        styles_.rotation = opts.rotation;
    }
    switch (typ) {
        case ArrowType.Basic:
            arrow.basic.applyStyle(fragment.shapes, styles_);
            break;
        case ArrowType.Blunt:
            arrow.blunt.applyStyle(fragment.shapes, styles_);
            break;
        case ArrowType.Bullet:
            arrow.bullet.applyStyle(fragment.shapes, styles_);
            break;
        case ArrowType.Dome:
            arrow.dome.applyStyle(fragment.shapes, styles_);
            break;
        case ArrowType.Triangle:
            arrow.triangle.applyStyle(fragment.shapes, styles_);
            break;
        case ArrowType.Vee:
            arrow.vee.applyStyle(fragment.shapes, styles_);
            break;
    }
}
