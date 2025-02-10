import type { MeshOptions } from "@pattaya/depict/graph";

export interface ArrowStyles {
  border?: string;
  background?: string;
  width?: number;
  rotation?: number;
};

export function toOpts(styles: ArrowStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.rotation) opts.rotation = styles.rotation;
  if (styles.width) opts.rotation = styles.width;
  if (styles.background) opts.fill = styles.background;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
};