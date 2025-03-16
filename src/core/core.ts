import type { Mesh, Text } from "@challenai/depict/graph";

export interface Fragment {
  x: number;
  y: number;
  shapes: Shapes;
}

export type Fragments = Fragment[];

export type Shapes = Mesh[] | undefined;

export type Texts = Text[] | undefined;