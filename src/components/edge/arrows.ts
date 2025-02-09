import type { MeshOptions } from "@pattaya/depict/graph";
import type { Endpoint } from "../line/point";
import type { LineStyles } from "../line/styles";
import type { Fragment } from "../../core";
import * as arrow from "../arrow";

export enum ArrowType {
  Basic = 1,
  Blunt,
  Bullet,
  Dome,
  Triangle,
  Vee,
};

function buildArrow(typ: ArrowType): string {
  switch (typ) {
    case ArrowType.Basic:
      return arrow.basic.wireframe({ width: 9, height: 6 });
    case ArrowType.Blunt:
      return arrow.blunt.wireframe({ width: 9, low: 4, high: 9 });
    case ArrowType.Bullet:
      return arrow.bullet.wireframe({ width: 9, height: 6 });
    case ArrowType.Dome:
      return arrow.dome.wireframe({ width: 9, low: 6 });
    case ArrowType.Triangle:
      return arrow.triangle.wireframe({ width: 9, height: 6 });
    case ArrowType.Vee:
      return arrow.vee.wireframe({ width: 9, low: 6, high: 9 });
  }
  return "";
}

// TODO: should we expose the arrows parameters to the users in the level of components?
export function endpointArrow(typ: ArrowType, ep: Endpoint, styles: LineStyles): Fragment {
  const opts: MeshOptions = {
    stroke: styles.color,
    rotation: ep.rotation + Math.PI / 2,
  };
  if (styles.width) opts.lineWidth = styles.width;
  return {
    x: ep.x,
    y: ep.y,
    shapes: [
      {
        path: buildArrow(typ),
        opts,
      }
    ],
  };
}

export function applyArrowStyles(fragment: Fragment, styles: LineStyles) {
  const opts = fragment.shapes![0].opts!;
  if (styles.width) opts.lineWidth = styles.width;
  opts.stroke = styles.color;
}