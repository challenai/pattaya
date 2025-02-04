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

export function toOpts(style: PopupStyles): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
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