# Pattaya

**Pattaya** is a modern JavaScript graphics library designed for simplicity, flexibility, and performance.  
It provides **primitives** such as lines, squares, and bubbles instead of a predefined charts with too many parameters, allowing you to create custom graphics effortlessly.  

Whether you're building **data visualizations, diagrams, architectural drawings, or UI components**, Pattaya is the lightweight solution you need.

## ✨ Features

- **Minimalist API** – Learn less, build more.
- **Composition Over Inheritance** – Construct graphics from simple primitives, not input parameters to black box.
- **Native JavaScript First** – state-driven? command-driven? data-driven? No, use it however you like.
- **Incremental Integration** – Import and pack only what you need.
- **High Performance** – Optimized for interactivity and smooth rendering.

## 📦 Installation

```sh
npm install @pattaya/pattaya
```

## 🚀 Quick Start

```js
// a popup
const n = {
    x: 10,
    y: 20,
    shapes: popup.blueprint.shape({
        width: 120,
        height: 75,
        radius: 9,
        triangleWidth: 18,
        triangleHeight: 10,
    }, {
        border: "#000"
    }),
};

// render it
graph.updateQueue(0, [[n]]);
```

## 📄 License

Pattaya is licensed under the **MIT License**.

## 💡 Explore Pattaya:

- [Documentation](https://pattaya.depict.wiki/en/introduction/)
- [Quick Start](https://pattaya.depict.wiki/en/guide/)
- [Design Philosophy](https://pattaya.depict.wiki/en/design/)
