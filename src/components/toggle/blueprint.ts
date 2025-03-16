import type { MeshOptions } from "@challenai/depict/graph";
import type { ToggleStyles } from "./styles";
import type { Shapes } from "../../core";
import { capsule, circle } from "impressionist";

export interface ToggleProps {
  width: number;
  height: number;
  radius: number;
  active: boolean;
};

function toOptsBackground(styles: ToggleStyles): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.pannelBackground,
    stroke: styles.pannelBorder,
  };
  return opts;
};

function toOptsButton(styles: ToggleStyles): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.buttonBackground,
    stroke: styles.buttonBorder,
  };
  // if (styles.buttonBorderWidth) opts.lineWidth = styles.buttonBorderWidth;
  return opts;
};

export function applyStyle(shape: Shapes, active: boolean, styles: ToggleStyles) {
  shape![0].opts = toOptsBackground(styles);
  shape![1].opts = toOptsButton(styles);
};

export function shapes({ width, height, radius, active }: ToggleProps, styles: ToggleStyles): Shapes {
  return [
    // 0. background
    {
      path: wireframeBackground(width, height),
      opts: toOptsBackground(styles),
    },
    // 1. button
    {
      path: wireframeButton(width, height, radius, active),
      opts: toOptsButton(styles),
    },
  ];
};

export function wireframeBackground(width: number, height: number): string {
  return capsule.rowAligned(-width * 0.5, -height * 0.5, width, height);
};

export function wireframeButton(width: number, height: number, radius: number, active: boolean): string {
  const padding = height * 0.5 - radius;
  return circle.basic(active ? - radius - padding + width * 0.5 : radius + padding - width * 0.5, 0, radius);
};

export function update(shape: Shapes, p: ToggleProps, styles: ToggleStyles) {
  shape = shapes(p, styles);
};

export default {
  shapes,
  update,
  applyStyle,
};