import type { Mesh, Text } from "@pattaya/depict/graph";

export interface Fragment {
  x: number;
  y: number;
  shapes: Mesh[] | undefined;
}

export type Fragments = Fragment[];

export type Shapes = Mesh[] | undefined;

export type Texts = Text[] | undefined;