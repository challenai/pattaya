import { Graph, type ShadowElement, type Text } from "@challenai/depict/graph";
import theme from "../theme";
import { nodes, label } from "@pattaya/pattaya/components";
import { rectContain } from "@pattaya/pattaya/core";

const ident = "ptySeperationChart";

const state = {
  active: -1,
  x: 0,
  y: 0,
};

const data = [
  {
    name: "Photos",
    width: 118.2,
    color: "rgba(0, 114, 0, 1)",
    mutedColor: "rgba(0, 114, 0, 0.35)",
  },
  {
    name: "Apps",
    width: 80.3,
    color: "rgba(0, 128, 0, 1)",
    mutedColor: "rgba(0, 128, 0, 0.35)",
  },
  {
    name: "Videos",
    width: 31.4,
    color: "rgba(56, 176, 0, 1)",
    mutedColor: "rgba(56, 176, 0, 0.35)",
  },
  {
    name: "Game",
    width: 18.9,
    color: "rgba(112, 224, 0, 1)",
    mutedColor: "rgba(112, 224, 0, 0.35)",
  },
  {
    name: "Data",
    width: 13.1,
    color: "rgba(158, 240, 26, 1)",
    mutedColor: "rgba(158, 240, 26, 0.35)",
  },
  {
    name: "System",
    width: 8.5,
    color: "rgba(204, 255, 51, 1)",
    mutedColor: "rgba(204, 255, 51, 0.35)",
  }
];

const offsetX = 24;
const offsetY = -32;
const underline = 64;

const hintText: Text = {
  x: offsetX + underline / 2,
  y: offsetY - 12,
  content: "",
  opts: {
    font: "14px Arial",
    fill: theme.ptr.text.active.color,
    textAlign: "center",
  }
}

const hint: ShadowElement = {
  x: 0,
  y: 0,
  shapes: label.blueprint.shapes({ offsetX, offsetY, underline }, theme.ptr.label.active),
  texts: [hintText],
  hidden: true,
  update() {
    this.hidden = state.active < 0;
    if (state.active >= 0) {
      const active = data[state.active];
      this.x = state.x;
      this.y = state.y;
      // change label color
      label.blueprint.applyStyle(hint.shapes, { border: active.color })
      // change text of label
      hintText.content = `${active.width}GB`;
      hintText.opts!.fill = active.color;
    }
  }
};

const height = 30;
let sum = 0;
const ns: ShadowElement[] = data.map((item, idx): ShadowElement => {
  let radius;
  if (idx === 0) {
    radius = { tl: 5, bl: 5, br: 0, tr: 0 };
  } else if (idx === data.length - 1) {
    radius = { tl: 0, bl: 0, br: 5, tr: 5 };
  } else {
    radius = undefined;
  }
  const n = {
    x: sum,
    y: 0,
    shapes: nodes.rectangle.shapes({ width: item.width, height, radius, aligned: true }, { background: item.color }),
    contain: rectContain(item.width, height, true),
    onMouseenter(render, x, y) {
      state.x = x + this.x + item.width / 2;
      state.y = y - 6;
      state.active = idx;
      render();
    },
    onMouseleave(render) {
      state.active = -1;
      render();
    },
    update() {
      let background = item.color;
      if (state.active >= 0 && state.active !== idx) {
        background = item.mutedColor;
      }
      nodes.rectangle.applyStyle(this.shapes, { background });
    },
  };
  sum += item.width;
  return n;
});

const bs: ShadowElement[] = data.map((item, idx): ShadowElement => {
  return {
    x: idx * 72,
    y: 0,
    shapes: nodes.circle.shapes({ radius: 5 }, { background: item.color }),
    contain: rectContain(item.width, height, true),
    texts: [{
      x: 13,
      content: item.name,
      opts: {
        fill: item.color,
        font: "12px Arial",
        textBaseline: "middle"
      }
    }],
  };
});

const graph = new Graph();
graph.onReady(() => graph.resetGraph([[hint, { x: 120, y: 120, children: ns }, { x: 125, y: 190, children: bs }]]));

function applyTheme() { }

export default {
  ident,
  graph,
  applyTheme,
}