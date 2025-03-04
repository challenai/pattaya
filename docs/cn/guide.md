# Quick Start

Pattaya 可以和任何框架一起工作，比如 Vue, React, Svelte, Web components，纯粹 HTML Javascript 页面，甚至 electron 或者 webview。

## Install

Pattaya 选择 [Depict](https://github.com/challenai/depict) 来处理底层事件和渲染。
所以你需要先安装 Depict。

`npm install @pattaya/depict --save`

然后从 npm 安装 Pattaya。

`npm install @pattaya/pattaya --save`

## Run Pattaya in React 

这里有一个 React 开始的示例

> 你可以在 Depict 的 Github 找到更多其他框架的示例。

```tsx
import { NonWorkerDepict } from "@pattaya/depict/nonworker";
import { Graph } from "@pattaya/depict/graph";
import { nodes } from "@pattaya/pattaya/components";
import { mayk } from "@pattaya/pattaya/themes";
import { useEffect, useRef, useState } from "react";

function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [graph, setGraph] = useState<NonWorkerDepict | undefined>(undefined);

  useEffect(() => {
    let g = graph;
    if (!g) {
      const canvas = rootRef.current;
      if (canvas === null) return;
      g = new NonWorkerDepict({
        root: canvas,
        maxLayers: 1,
        graph: new Graph(),
      });
      setGraph(g);
      g.start();

      g.graph.resetGraph([[{
        x: 240,
        y: 130,
        shapes: nodes.circle.shapes({ radius: 48 }, mayk.nodes.normal),
      }]])
    }
    return () => g?.destroy();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "400px",
      }}
      ref={rootRef}
    ></div>
  );
}
```
