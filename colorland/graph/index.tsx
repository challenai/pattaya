'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";
import { NonWorkerDepict } from "@pattaya/depict/nonworker";
import { LayerOptions, ShadowElement } from "@pattaya/depict/graph";

export interface GraphProps {
  styles: CSSProperties;
  width?: number;
  height?: number;
  options: LayerOptions[];
  layers: ShadowElement[][];
};

function Graph({ width, height, layers, options, styles }: GraphProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [depict, setGraph] = useState<NonWorkerDepict | undefined>(undefined);

  useEffect(() => {
    let d = depict;
    if (!d) {
      const canvas = rootRef.current;
      if (canvas === null) return;
      d = new NonWorkerDepict({
        root: canvas,
        maxLayers: layers.length || 1,
        offscreenCanvas: true
      });
      setGraph(d);
      d.start();

      options.forEach((opt, idx) => d?.graph.updateLayerOptions(idx, opt));
      d.graph.resetGraph(layers);
      d.graph.updateQueue
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

export default Graph;