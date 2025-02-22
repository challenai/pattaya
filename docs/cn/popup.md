# Popup

A popup to hold content

## Basic

Example of a basic popup.

```js
const n = {
  x: 180,
  y: 120,
  shapes: popup.blueprint.shape({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, popupStyle.normal),
};
graph.updateQueue(0, [[n]]);
```

```pty
ptyPopup
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
