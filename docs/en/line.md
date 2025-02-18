# Line

Lines, fold lines, curves, step lines

## Line

Example of a simple line.

```js
const layers = [
  [
    {
      x: 180,
      y: 120,
      shapes: nodes.circle.shapes({ radius: 64 }, nodeStyle.normal),
    },
  ],
];
graph.updateQueue(0, layers);
```

```pty
ptyLine
```

## Quadratic Bezier Curve

Example of a quadratic bezier curve.

```js
const layers = [
  [
    {
      x: 180,
      y: 120,
      shapes: nodes.circle.shapes({ radius: 64 }, nodeStyle.normal),
    },
  ],
];
graph.updateQueue(0, layers);
```

```pty
ptyQuadratic
```

## Cubic Bezier Curve

Example of a cubic bezier curve.

```js
const layers = [
  [
    {
      x: 180,
      y: 120,
      shapes: 
    },
  ],
];
graph.updateQueue(0, layers);
```

```pty
ptyCubic
```

## Fold Line

Example of a fold line.

```js
const layers = [
  [
    {
      x: 180,
      y: 120,
      shapes: 
    },
  ],
];
graph.updateQueue(0, layers);
```

```pty
ptyFold
```

## Step Line

Example of a step line.

```js
const layers = [
  [
    {
      x: 180,
      y: 120,
      shapes: 
    },
  ],
];
graph.updateQueue(0, layers);
```

```pty
ptyStep
```

