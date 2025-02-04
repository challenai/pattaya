'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";
import { NonWorkerDepict } from "@pattaya/depict/nonworker";
import { Graph } from "@pattaya/depict/graph";

export interface GraphProps {
  styles: CSSProperties;
  width?: number;
  height?: number;
  maxLayers: number;
  graph: Graph;
};

function GraphContainer({ width, height, styles, maxLayers, graph }: GraphProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [depict, setDepict] = useState<NonWorkerDepict | undefined>(undefined);

  useEffect(() => {
    let d = depict;
    if (!d) {
      const canvas = rootRef.current;
      if (canvas === null) return;
      d = new NonWorkerDepict({
        root: canvas,
        maxLayers,
        graph,
        offscreenCanvas: true,
      });
      setDepict(d);
      d.start();
    }

    return () => d?.destroy();
  }, []);

  return (
    <div
      style={{
        ...styles,
        position: "relative",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
      className="bg-fd-secondary/50 rounded-lg border"
      ref={rootRef}
    ></div>
  )
};

export default GraphContainer;