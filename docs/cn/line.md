# Line

Lines, fold lines, curves, step lines

## Line

Example of a simple line.

```js
const n = {
  x: 180,
  y: 120,
  shapes: line.basic.shapes({
    start: { x: 20, y: 20 }, 
    end: { x: 200, y: 180 },
  }, theme.line.normal),
};

graph.updateQueue(0, [[n]]);
```

```pty
ptyLine
```

## Quadratic Bezier Curve

Example of a quadratic bezier curve.

```js
const n = {
  x: 120,
  y: 100,
  shapes: line.quadratic.shapes([
    { x: 20, y: 20 },
    { x: 60, y: 40 },
    { x: 120, y: 10 },
    { x: 240, y: 80 },
    { x: 360, y: 60 },
  ], theme.line.normal),
};

graph.updateQueue(0, [[n]]);
```

```pty
ptyQuadratic
```

## Cubic Bezier Curve

Example of a cubic bezier curve.

```js
const n = {
  x: 100,
  y: 120,
  shapes: line.cubic.shapes([
    { x: 20, y: 60 },
    { x: 60, y: -20 },
    { x: 120, y: 90 },
    { x: 180, y: 60 },
    { x: 240, y: -20 },
    { x: 320, y: 50 },
    { x: 400, y: 90 },
    { x: 480, y: 10 },
  ], theme.ptr.line.normal),
};

graph.updateQueue(0, [[n]]);
```

```pty
ptyCubic
```

## Fold Line

Example of a fold line.

```js
const n = {
  x: 100,
  y: 120,
  shapes: line.fold.shapes([
    { x: 20, y: 60 },
    { x: 60, y: -20 },
    { x: 120, y: 90 },
    { x: 180, y: 60 },
    { x: 240, y: -20 },
    { x: 320, y: 50 },
    { x: 400, y: 90 },
    { x: 480, y: 10 },
  ], theme.ptr.line.normal),
};

graph.updateQueue(0, [[n]]);
```

```pty
ptyFold
```

## Step Line

Example of a step line.

```js
const n = {
  x: 120,
  y: 220,
  shapes: line.step.shapes({
    pathes: [130, -50, 120, -50, 90, 140, 140, -150],
    radius: 9
  }, theme.ptr.line.normal),
};

graph.updateQueue(0, [[n]]);
```

```pty
ptyStep
```

