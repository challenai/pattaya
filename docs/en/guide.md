# Quick Start

Pattaya can be built with any framework, from Vue, React, Svelte, web components, to Vanilla Javascript or even electron and Webview.  

Here is an example to run Pattaya in React.

> you can find more examples in Depict Github repo.

## run Pattaya in React 

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
