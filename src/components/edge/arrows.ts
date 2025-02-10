import type { Endpoint } from "../line/point";
import type { ArrowStyles } from "../arrow/styles";
import type { Fragment, Shapes } from "../../core";
import * as arrow from "../arrow";

export enum ArrowType {
  Basic = 1,
  Blunt,
  Bullet,
  Dome,
  Triangle,
  Vee,
};

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
      return arrow.vee.shapes({ width: 9, low: 6, high: 9 }, styles);
  }
  return [];
}

// TODO: should we expose the arrows parameters to the users in the level of components?
export function endpointArrow(typ: ArrowType, ep: Endpoint, styles: ArrowStyles): Fragment {
  return {
    x: ep.x,
    y: ep.y,
    shapes: buildArrow(typ, styles),
  };
}

export function applyArrowStyles(fragment: Fragment, styles: ArrowStyles) {
  fragment.shapes![0].opts = arrow.toOpts(styles);
}