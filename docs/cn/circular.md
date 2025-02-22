# 环形

## 扇面

扇面示例

```js
const n = {
  x: 180,
  y: 220,
  shapes: c.sector.shapes({ radius0: 64, radius1: 96, start: 60, end: 120 }, circularStyle.normal),
}
graph.updateQueue(0, [[n]]);
```

```pty
ptySector
```

## 饼

饼示例

```js
const n = {
  x: 180,
  y: 220,
  shapes: c.pie.shapes({ radius: 72, start: 30, end: 60 }, circularStyle.normal),
};
graph.updateQueue(0, [[n]]);
```

```pty
ptyPie
```