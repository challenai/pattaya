'use client'
import { Graph, type ShadowElement } from "@pattaya/depict/graph";
import { slider } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";

export const background = mayk.slider.background;

export const styles = mayk.slider;

const sliderProps = { totalLength: 200, progress: .62, barWidth: 3, slideWidth: 3, radius: 6 };
const n: ShadowElement = {
  x: 181,
  y: 123,
  shapes: slider.basic.shapes(sliderProps, styles.normal),
  contain(x: number, y: number) {
    return x > 0 && x < sliderProps.totalLength && y > -10 && y < 10;
  },
  onClick(render: any, x: number, y: number, mx: number, my: number) {
    sliderProps.progress = (mx - 181) / sliderProps.totalLength;
    slider.basic.update(this.shapes, sliderProps);
    render();
  }
};

export const bGraph = new Graph();
bGraph.onReady(() => bGraph.resetGraph([[n]]));