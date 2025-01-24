import { NonWorkerDepict } from "@pattaya/depict/nonworker";
import { useEffect, useRef, useState } from "react";

export interface GraphContainerProps {
  count: number;
};

function GraphContainer({ count }: GraphContainerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [depict, setGraph] = useState<NonWorkerDepict | undefined>(undefined);

  useEffect(() => {
    let d = depict;
    if (!d) {
      const canvas = rootRef.current;
      if (canvas === null) return;
      d = new NonWorkerDepict({
        root: canvas,
        maxLayers: 2,
      });
      setGraph(d);
      d.start();
    }

    return () => d?.destroy();
  }, []);

  useEffect(() => {
    depict?.graph.renderAll();
  }, [count]);

  return (
    <div
      style={{
        position: "relative",
        width: "900px",
        height: "600px",
        border: "1px solid #333",
        borderRadius: "20px",
      }}
      ref={rootRef}
    ></div>
  )
};

export default GraphContainer;