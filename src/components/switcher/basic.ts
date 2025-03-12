import type { MeshOptions } from "@pattaya/depict/graph";
import type { SwitcherStylesItem, SwitcherStyles } from "./styles";
import type { Shapes } from "../../core";
import { capsule, circle } from "impressionist";

export interface SwitchProps {
  width: number;
  height: number;
  radius: number;
  active: boolean;
};

function toOptsBackground(styles: SwitcherStylesItem): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.pannelBackground,
    stroke: styles.pannelBorder,
  };
  return opts;
};

function toOptsButton(styles: SwitcherStylesItem): MeshOptions {
  const opts: MeshOptions = {
    fill: styles.buttonBackground,
    stroke: styles.buttonBorder,
  };
  // if (styles.buttonBorderWidth) opts.lineWidth = styles.buttonBorderWidth;
  return opts;
};

export function applyStyle(shape: Shapes, active: boolean, styles: SwitcherStyles) {
  const ptr = active ? styles.active : styles.normal;
  shape![0].opts = toOptsBackground(ptr);
  shape![1].opts = toOptsButton(ptr);
};

export function shapes({ width, height, radius, active }: SwitchProps, styles: SwitcherStyles): Shapes {
  const ptr = active ? styles.active : styles.normal;
  return [
    // 0. background
    {
      path: wireframeBackground(width, height),
      opts: toOptsBackground(ptr),
    },
    // 1. button
    {
      path: wireframeButton(width, height, radius, active),
      opts: toOptsButton(ptr),
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

export function update(shape: Shapes, p: SwitchProps, styles: SwitcherStyles) {
  shape = shapes(p, styles);
};

export default {
  shapes,
  update,
  applyStyle,
};