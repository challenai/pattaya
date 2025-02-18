import type { MeshOptions } from "@pattaya/depict/graph";
import type { PopupStyles } from "./styles";
import type { Shapes } from "../../core";
import { common } from "impressionist";

export interface PopupProps {
  width: number;
  height: number;
  triangleWidth: number;
  triangleHeight: number;
  radius?: number;
  aligned?: boolean;
};

export function toOpts(styles: PopupStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.background) opts.fill = styles.background;
  if (styles.shadow) opts.shadowColor = styles.shadow;
  if (styles.shadowBlur) opts.shadowBlur = styles.shadowBlur;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
}

export function applyStyle(shape: Shapes, style: PopupStyles) {
  shape![0].opts = toOpts(style);
}

export function shapes(props: PopupProps, style: PopupStyles): Shapes {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
}

export function wireframe({ width, height, radius, triangleHeight, triangleWidth, aligned }: PopupProps): string {
  if (aligned) {
    return common.popupAligned(0, 0, width, height, triangleWidth, triangleHeight, radius);
  }
  return common.popup(0, 0, width, height, triangleWidth, triangleHeight, radius);
}

export function update(shapes: Shapes, props: PopupProps) {
  shapes![0].path = wireframe(props);
};

export default {
  shapes,
  update,
  wireframe,
  toOpts,
  applyStyle,
};