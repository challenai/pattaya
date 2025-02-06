import { Mesh, ShadowElement } from "@pattaya/depict/graph";
import { arrow } from "../../primitives";
import { Endpoint } from "../../primitives/line/point";
import { LineStyles } from "../../primitives/line/styles";

export enum ArrowType {
  Basic = 1,
  Blunt,
  Bullet,
  Dome,
  Triangle,
  Vee,
};

// TODO: should we expose the arrows parameters to the users in the level of components?
export function endpointArrow(typ: ArrowType, ep: Endpoint, styles: LineStyles): ShadowElement {
  const m: Mesh = {
    path: "",
    opts: {
      stroke: styles.color,
      rotation: ep.rotation + Math.PI / 2,
    },
  };
  if (styles.width) m.opts!.lineWidth = styles.width;
  switch (typ) {
    case ArrowType.Basic:
      m.path = arrow.basic.wireframe({ width: 9, height: 6 });
      break;
    case ArrowType.Blunt:
      m.path = arrow.blunt.wireframe({ width: 9, low: 4, high: 9 });
      break;
    case ArrowType.Bullet:
      m.path = arrow.bullet.wireframe({ width: 9, height: 6 });
      break;
    case ArrowType.Dome:
      m.path = arrow.dome.wireframe({ width: 9, low: 6 });
      break;
    case ArrowType.Triangle:
      m.path = arrow.triangle.wireframe({ width: 9, height: 6 });
      break;
    case ArrowType.Vee:
      m.path = arrow.vee.wireframe({ width: 9, low: 6, high: 9 });
      break;
  }
  return {
    x: ep.x,
    y: ep.y,
    shapes: [m],
  };
}