# Button

## TextButton

This is an example of a material ui style button component with text.  
The size of the button will scale with the text.
You can expose the internal padding or other parameters to change the styles of the button.

```js
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
    shapes: shapes({ width, height, radius }, styles.normal),
    contain,
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

// Since we hope the size of button should scale automatically,
// we can get the size of text in canvas only if our canvas are ready (canvas created in the browser, and worker are ready if we use web worker).
// Different devices could run faster or slower, it commonly takes less than 10 ms to prepare a new canvas in the web worker thread.
// Therefore, you can't build this text button before the graph started.
graph.onReady(() => {
  // to create a new button here
  const btn = TextButton(240, 180, { text: "click me", radius: 8, styles, textBoundingBox: graph.boundingBox.bind(graph) });
  graph.updateLayerOptions(0, { dynamic: true, update: true });
  graph.resetGraph([[btn]]);
});
```

```pty
ptyButton
```