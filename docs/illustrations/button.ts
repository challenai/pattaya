import type { ShadowElement, TextOptions } from "@pattaya/depict/graph";
import { Graph } from "@pattaya/depict/graph";
import { nodes } from "@pattaya/pattaya/components";
import { animationRunning, newAnimationStore, startAnimation, updateAnimation, rectContain } from "@pattaya/pattaya/core";

export interface TextStyles {
  textColor: string;
}

export interface TextButtonStyles extends nodes.NodeStyles, TextStyles { }

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
  const contain = rectContain(width, height, false);
  return {
    x,
    y,
    shapes: nodes.rectangle.shapes({ width, height, radius }, styles.normal),
    contain,
    texts: [buttonText],
    data: { animation: newAnimationStore(styles.normal) },
    update(ts: number) {
      if (animationRunning(this.data.animation)) {
        const result = updateAnimation<TextButtonStyles>(this.data.animation, ts);
        nodes.rectangle.applyStyle(this.shapes, result);
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

// -----------------------------------------------
const ident = "ptyButton";
const graph = new Graph();

const styles = {
  common: {
    font: "18px Arial",
    textLineHeight: 18,
  },
  normal: {
    background: "#90caf9",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadowBlur: 6,
    textColor: "#000",
  },
  active: {
    background: "#42a5f5",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadowBlur: 6,
    textColor: "#000",
  },
};

graph.onReady(() => {
  const btn = TextButton(240, 180, { text: "click me", radius: 8, styles, textBoundingBox: graph.boundingBox.bind(graph) });
  graph.updateLayerOptions(0, { dynamic: true, update: true });
  graph.resetGraph([[btn]]);
});

function applyTheme() { }

export default {
  ident,
  graph,
  applyTheme,
}