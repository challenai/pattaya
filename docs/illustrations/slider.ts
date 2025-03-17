import { Graph } from "@challenai/depict/graph";
import theme from "../theme";
import { slider } from "@pattaya/pattaya/components";

const ident = "ptySlider";

const sliderProps = { totalLength: 200, progress: .62, barWidth: 3, slideWidth: 3, radius: 6 };
const n = {
  x: 240,
  y: 130,
  shapes: slider.basic.shapes(sliderProps, theme.ptr.slider),
  contain(x: number, y: number) {
    return x > 0 && x < sliderProps.totalLength && y > -10 && y < 10;
  },
  onClick(render: any, _x: number, _y: number, mx: number, _my: number) {
    sliderProps.progress = (mx - this.x) / sliderProps.totalLength;
    slider.basic.update(this.shapes, sliderProps);
    render();
  }
};

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[n]]));

function applyTheme() {
  slider.basic.applyStyle(n.shapes, theme.ptr.slider);
  graph.renderAll();
}

export default {
  ident,
  graph,
  applyTheme,
}