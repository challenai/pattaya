# Nodes

Basic shapes include circle, rectangle, diamond and more...

## Circle

Example of a cricle.

```js
const layers = {
  x: 180,
  y: 120,
  shapes: nodes.circle.shapes({ radius: 64 }, nodeStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyCircle
```

## Diamond

Example of a diamond.

```js
const n = {
  x: 180,
  y: 120,
  shapes: nodes.diamond.shapes({ width: 120, height: 90 }, nodeStyle.normal),
};
graph.updateQueue(0, [[n]]);
```

```pty
ptyDiamond
```

## Rectangle

Example of a rectangle.

```js
const n = {
  x: 180,
  y: 120,
  shapes: nodes.rectangle.shapes({ width: 120, height: 90, radius: 9 }, nodeStyle.normal),
};
graph.updateQueue(0, [[n]]);
```

```pty
ptyRectangle
```