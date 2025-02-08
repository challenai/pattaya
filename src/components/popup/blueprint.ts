import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { PopupStyles } from "./styles";
import { common } from "impressionist";

export interface PopupProps {
  width: number,
  height: number,
  triangleWidth: number,
  triangleHeight: number,
  radius: number,
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

export function applyStyle(shape: Mesh[] | undefined, style: PopupStyles) {
  shape![0].opts = toOpts(style);
}

export function shapes(props: PopupProps, style: PopupStyles): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: toOpts(style),
    },
  ];
}

export function wireframe({ width, height, radius, triangleHeight, triangleWidth }: PopupProps): string {
  return common.popup(0, 0, width, height, radius, triangleWidth, triangleHeight);
}

export default {
  shapes,
  wireframe,
  toOpts,
  applyStyle,
};