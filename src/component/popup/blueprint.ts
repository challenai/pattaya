import type { Mesh, MeshOptions } from "@pattaya/depict/graph";
import type { PopupStyleProps } from "./props";

export interface PopupProps {
  width: number,
  height: number,
  triangleWidth: number,
  triangleHeight: number,
  radius: number,
};

const setOpts = (style: PopupStyleProps): MeshOptions => ({
  fill: style.background,
  stroke: style.border,
  shadowColor: style.shadow,
  shadowBlur: style.shadowBlur,
});

const build = (width: number, height: number, radius: number, tw: number, th: number): string => {
  const twr = tw / 2;
  return `
      M${radius} 0
      l${width - radius - radius} 0
      a${radius} ${radius} 0 0 1 ${radius} ${radius}
      l0 ${height - radius - radius}
      a${radius} ${radius} 0 0 1 ${-radius} ${radius}
      l${(radius + radius - width) / 2 + twr} 0
      l${-twr} ${th}
      l${-twr} ${-th}
      l${(radius + radius - width) / 2 + twr} 0
      a${radius} ${radius} 0 0 1 ${-radius} ${-radius}
      l0 ${radius + radius - height}
      a${radius} ${radius} 0 0 1 ${radius} ${-radius}
    `;
}

export const applyStyle = (shape: Mesh[] | undefined, style: PopupStyleProps) => {
  shape![0].opts = setOpts(style);
};

export const shape = ({ width, height, radius, triangleHeight, triangleWidth }: PopupProps, style: PopupStyleProps): Mesh[] => {
  return [
    {
      path: build(width, height, radius, triangleWidth, triangleHeight),
      opts: setOpts(style),
    },
  ];
};

export const wireframe = ({ width, height, radius, triangleHeight, triangleWidth }: PopupProps): string => {
  return build(width, height, radius, triangleWidth, triangleHeight);
};

export default {
  shape,
  applyStyle,
  wireframe,
};