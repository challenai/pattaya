import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { PopupStyleProps } from "./props";
import { common } from "impressionist";

export interface PopupProps {
  width: number,
  height: number,
  triangleWidth: number,
  triangleHeight: number,
  radius: number,
};

function setOpts(style: PopupStyleProps): MeshOptions {
  return {
    fill: style.background,
    stroke: style.border,
    shadowColor: style.shadow,
    shadowBlur: style.shadowBlur,
  };
}

export function applyStyle(shape: Mesh[] | undefined, style: PopupStyleProps) {
  shape![0].opts = setOpts(style);
}

export function shapes(props: PopupProps, style: PopupStyleProps): Mesh[] {
  return [
    {
      path: wireframe(props),
      opts: setOpts(style),
    },
  ];
}

export function wireframe({ width, height, radius, triangleHeight, triangleWidth }: PopupProps): string {
  return common.popup(0, 0, width, height, radius, triangleWidth, triangleHeight);
}

export default {
  shapes,
  applyStyle,
  wireframe,
};