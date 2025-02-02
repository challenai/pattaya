import type { ShadowElement, TextOptions } from "@pattaya/depict/graph";
import type { NodeStyles } from "../../primitives/nodes/styles";
import { shapes, applyStyle } from "../../primitives/nodes/rectangle";
import { animationRunning, newAnimationStore, startAnimation, updateAnimation } from "../../animation";

export interface ContainerButtonProps {
  width: number;
  height: number;
  radius?: number;
  styles: {
    normal: NodeStyles;
    active: NodeStyles;
  };
  children?: ShadowElement[];
  onClick?: () => void;
}

export function ContainerButton(x: number, y: number, { width, height, radius, styles, onClick }: ContainerButtonProps): ShadowElement {
  if (!radius) radius = 0;
  return {
    x,
    y,
    shapes: shapes({ width, height, radius }, styles.normal),
    contain(x: number, y: number) {
      return x > -width / 2 && y > -height / 2 && x < width / 2 && y < height / 2;
    },
    data: { animation: newAnimationStore(styles.normal) },
    update(ts: number) {
      if (animationRunning(this.data.animation)) {
        const result = updateAnimation<NodeStyles>(this.data.animation, ts);
        applyStyle(this.shapes, result);
      }
    },
    onMouseenter() {
      startAnimation(this.data.animation, 250, styles.active);
    },
    onMouseleave() {
      startAnimation(this.data.animation, 250, styles.normal);
    },
    onClick,
  };
}

export interface TextStyles {
  textColor: string;
}

export interface TextButtonStyles extends NodeStyles, TextStyles { }

export interface TextButtonProps {
  radius?: number;
  styles: {
    normal: TextButtonStyles;
    active: TextButtonStyles;
    common: {
      font?: string;
      textLineHeight?: number;
    };
  };
  text: string;
  textBoundingBox: any;
  onClick?: () => void;
}

export function TextButton(x: number, y: number, { radius, styles, text, textBoundingBox, onClick }: TextButtonProps): ShadowElement {
  if (!radius) radius = 0;
  const textOpts: TextOptions = {
    textAlign: "center",
    textBaseline: "middle",
    fill: styles.normal.textColor,
  };
  if (styles.common.font && styles.common.textLineHeight) {
    textOpts.font = styles.common.font;
    textOpts.lineHeight = styles.common.textLineHeight;
  }
  const buttonText = {
    content: text,
    opts: textOpts,
  };
  const bb = textBoundingBox(buttonText);
  const width = bb.width + 36;
  const height = bb.height + 24;
  return {
    x,
    y,
    shapes: shapes({ width, height, radius }, styles.normal),
    contain(x: number, y: number) {
      return x > -width / 2 && y > -height / 2 && x < width / 2 && y < height / 2;
    },
    texts: [buttonText],
    data: { animation: newAnimationStore(styles.normal) },
    update(ts: number) {
      if (animationRunning(this.data.animation)) {
        const result = updateAnimation<TextButtonStyles>(this.data.animation, ts);
        applyStyle(this.shapes, result);
        this.texts![0].opts!.fill = result.textColor;
      }
    },
    onMouseenter() {
      startAnimation(this.data.animation, 250, styles.active);
    },
    onMouseleave() {
      startAnimation(this.data.animation, 250, styles.normal);
    },
    onClick,
  };
}