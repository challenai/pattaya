# Slider

Sliders are used to control progress

## Basic

Example of a slider controlled by click.

```js
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
graph.updateQueue(0, [[n]]);
```

```pty
ptySlider
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
