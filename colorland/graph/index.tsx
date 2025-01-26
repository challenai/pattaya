'use client';

import { CSSProperties, useEffect, useRef, useState } from "react";
import { NonWorkerDepict } from "@pattaya/depict/nonworker";
import { LayerOptions, ShadowElement } from "@pattaya/depict/graph";

export interface GraphProps {
  styles: CSSProperties;
  width: number;
  height: number;
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
        maxLayers: layers.length,
        offscreenCanvas: true
      });
      setGraph(d);
      d.start();

      options.forEach((opt, idx) => d?.graph.updateLayerOptions(idx, opt));
      d.graph.resetGraph(layers);
    }

    return () => d?.destroy();
  }, []);

  return (
    <div
      style={{
        ...styles,
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
      ref={rootRef}
    ></div>
  )
};

export default Graph;