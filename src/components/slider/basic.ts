import type { ShadowElement } from "@pattaya/depict/graph";
import { circle, rectangle } from "impressionist";

export interface SliderProps {
  totalLength: number;
  slideLength: number;
  barWidth: number;
  slideWidth: number;
  radius: number;
  styles: SliderStyleProps;
  onClick?: () => void;
  children?: ShadowElement[];
};

export interface SliderStyleProps {
  barBorder: string;
  barBackground: string;
  slideBorder: string;
  slideBackground: string;
  buttonBorder: string;
  buttonBackground: string;
  buttonBorderWidth: number;
};

export function BasicSlider(x: number, y: number, { totalLength, slideLength, slideWidth, barWidth, radius, styles, onClick }: SliderProps): ShadowElement {
  return {
    x,
    y,
    shapes: [
      // 0. bar
      {
        path: rectangle.basicAligned(slideLength, -barWidth / 2, totalLength, barWidth),
        opts: {
          fill: styles.barBackground,
          stroke: styles.barBorder,
        },
      },
      // 1. slide
      {
        path: rectangle.basicAligned(0, -slideWidth / 2, slideLength, slideWidth),
        opts: {
          fill: styles.slideBackground,
          stroke: styles.slideBorder,
        }
      },
      // 2. button
      {
        path: circle.basic(slideLength, 0, radius),
        opts: {
          fill: styles.buttonBackground,
          stroke: styles.buttonBorder,
          lineWidth: styles.buttonBorderWidth,
        },
      },
    ],
    onClick,
  }
}