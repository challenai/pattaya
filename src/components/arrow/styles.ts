import type { MeshOptions } from "@challenai/depict/graph";

export interface ArrowStyles {
  border?: string;
  background?: string | CanvasGradient | CanvasPattern;
  width?: number;
  rotation?: number;
};

export function toOpts(styles: ArrowStyles): MeshOptions {
  const opts: MeshOptions = {};
  if (styles.rotation) opts.rotation = styles.rotation;
  if (styles.width) opts.lineWidth = styles.width;
  if (styles.background) opts.fill = styles.background;
  if (styles.border) {
    opts.border = true;
    opts.stroke = styles.border;
  } else {
    opts.border = false;
  }
  return opts;
};