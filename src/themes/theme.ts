import type { ArrowStyles } from "../components/arrow";
import type { CircularStyles } from "../components/circular";
import type { EdgeStyles } from "../components/edge";
import type { LineStyles } from "../components/line";
import type { NodeStyles } from "../components/nodes";
import type { PopupStyles } from "../components/popup";
import type { SliderStyles } from "../components/slider";
import type { SplitStyles } from "../components/split";
import type { TextStyles } from "../components/text";

export interface NodesTheme {
  muted: NodeStyles,
  normal: NodeStyles,
  active: NodeStyles,
  focus: NodeStyles,
};

export interface LineTheme {
  muted: LineStyles,
  normal: LineStyles,
  active: LineStyles,
  focus: LineStyles,
};

export interface ArrowTheme {
  muted: ArrowStyles,
  normal: ArrowStyles,
  active: ArrowStyles,
  focus: ArrowStyles,
};

export interface CircularTheme {
  muted: CircularStyles,
  normal: CircularStyles,
  active: CircularStyles,
  focus: CircularStyles,
};

export interface EdgeTheme {
  muted: EdgeStyles,
  normal: EdgeStyles,
  active: EdgeStyles,
  focus: EdgeStyles,
};

export interface PopupTheme extends PopupStyles { };

export interface SliderTheme extends SliderStyles { };

export interface SplitTheme {
  muted: SplitStyles,
  normal: SplitStyles,
  active: SplitStyles,
  focus: SplitStyles,
};

export interface TextTheme {
  muted: TextStyles,
  normal: TextStyles,
  active: TextStyles,
  focus: TextStyles,
};

export interface Theme {
  nodes: NodesTheme,
  line: LineTheme,
  arrow: ArrowTheme,
  circular: CircularTheme,
  popup: PopupTheme,
  edge: EdgeTheme,
  slider: SliderTheme,
  split: SplitTheme,
  text: TextTheme,
};