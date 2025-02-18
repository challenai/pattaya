# Split

Split the background to Segements, Grids

## Segement

Example of a segement.

```js
graph.onReady(() => {
  const btn = button.basic.TextButton(240, 180, { text: "click me", radius: 8, styles, textBoundingBox: graph.boundingBox.bind(graph) });
  graph.resetGraph([[btn]]);
});
```

```pty
ptySegementSplit
```

## Grid

Example of a grid.

```js
graph.onReady(() => {
  const btn = button.basic.TextButton(240, 180, { text: "click me", radius: 8, styles, textBoundingBox: graph.boundingBox.bind(graph) });
  graph.resetGraph([[btn]]);
});
```

```pty
ptyGridSplit
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
