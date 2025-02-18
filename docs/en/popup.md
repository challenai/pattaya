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
ptyBasicPopup
```

## Event

Example of a popup with event listeners.

```js
const n = {
  x: 180,
  y: 120,
  shapes: popup.blueprint.shape({ width: 120, height: 75, radius: 9, triangleWidth: 18, triangleHeight: 10 }, popupStyle.normal),
  contain(x, y) {
    return x > 0 && y > 0 && x < 120 && y < 90;
  },
  onMouseenter(render) {
    popup.blueprint.applyStyle(this.shapes, popupStyle.active);
    render();
  },
  onMouseleave(render) {
    popup.blueprint.applyStyle(this.shapes, popupStyle.normal);
    render();
  },
};
graph.updateQueue(0, [[n]]);
```

Hover the popup to trigger an event.

```pty
ptyPopupToggle
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
