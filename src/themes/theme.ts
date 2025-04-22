import type { ArrowStyles } from "../components/arrow";
import type { CircularStyles } from "../components/circular";
import type { EdgeStyles } from "../components/edge";
import type { LabelStyles } from "../components/label";
import type { LineStyles } from "../components/line";
import type { NodeStyles } from "../components/nodes";
import type { PopupStyles } from "../components/popup";
import type { ScaleStyles } from "../components/scale";
import type { SliderStyles } from "../components/slider";
import type { SplitStyles } from "../components/split";
import type { TextStyles } from "../components/text";
import type { TickStyles } from "../components/tick";
import type { ToggleStyles } from "../components/toggle";

export interface NodesTheme {
    muted: NodeStyles;
    normal: NodeStyles;
    active: NodeStyles;
    focus: NodeStyles;
}

export interface LineTheme {
    muted: LineStyles;
    normal: LineStyles;
    active: LineStyles;
    focus: LineStyles;
}

export interface ArrowTheme {
    muted: ArrowStyles;
    normal: ArrowStyles;
    active: ArrowStyles;
    focus: ArrowStyles;
}

export interface CircularTheme {
    muted: CircularStyles;
    normal: CircularStyles;
    active: CircularStyles;
    focus: CircularStyles;
}

export interface EdgeTheme {
    muted: EdgeStyles;
    normal: EdgeStyles;
    active: EdgeStyles;
    focus: EdgeStyles;
}

export interface PopupTheme extends PopupStyles {}

export interface SliderTheme extends SliderStyles {}

export interface SplitTheme {
    muted: SplitStyles;
    normal: SplitStyles;
    active: SplitStyles;
    focus: SplitStyles;
}

export interface ScaleTheme {
    normal: ScaleStyles;
    active: ScaleStyles;
}

export interface TickTheme extends TickStyles {}

export interface ToggleTheme {
    normal: ToggleStyles;
    active: ToggleStyles;
}

export interface LabelTheme {
    normal: LabelStyles;
    active: LabelStyles;
}

export interface TextTheme {
    muted: TextStyles;
    normal: TextStyles;
    active: TextStyles;
    focus: TextStyles;
}

export interface Theme {
    nodes: NodesTheme;
    line: LineTheme;
    arrow: ArrowTheme;
    circular: CircularTheme;
    popup: PopupTheme;
    edge: EdgeTheme;
    slider: SliderTheme;
    split: SplitTheme;
    text: TextTheme;
    scale: ScaleTheme;
    tick: TickTheme;
    toggle: ToggleTheme;
    label: LabelTheme;
}
