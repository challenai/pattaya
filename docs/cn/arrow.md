# 箭头

箭头提供多种类型的箭头头部。

## Basic Arrow

基本箭头示例

```js
const n = {
  x: 180,
  y: 120,
  shapes: arrow.basic.shapes({ width: 16, height: 20 }, arrowStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyBasicArrow
```

## Vee Arrow

Vee 箭头示例

```js
const n1 = {
  x: 180,
  y: 120,
  shapes: arrow.vee.shapes({ width: 16, low: -6, high: 12 }, arrowStyle.normal),
};
const n2 = {
  x: 180,
  y: 240,
  shapes: arrow.vee.shapes({ width: 12, low: 6, high: 18 }, arrowStyle.normal),
};
graph.updateQueue(0, [[n1, n2]]);
```

```pty
ptyVeeArrow
```

## Triangle Arrow

三角箭头示例:

```js
const n = {
  x: 180,
  y: 120,
  shapes: arrow.triangle.shapes({ width: 16, height: 20 }, arrowStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyTriangleArrow
```

## Bullet Arrow

子弹头箭头示例:

```js
const n = {
  x: 180,
  y: 120,
  shapes: arrow.bullet.shapes({ width: 12, height: 18 }, arrowStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyBulletArrow
```

## Blunt Arrow

钝箭头示例:

```js
const n = {
  x: 180,
  y: 120,
  shapes: arrow.blunt.shapes({ width: 16, low: 12, high: 24 }, arrowStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyBluntArrow
```

## Dome Arrow

穹顶箭头示例:

```js
const n = {
  x: 180,
  y: 120,
  shapes: arrow.dome.shapes({ width: 16, low: 12 }, arrowStyle.normal),
},
graph.updateQueue(0, [[n]]);
```

```pty
ptyDomeArrow
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
