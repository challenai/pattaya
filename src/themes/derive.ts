import type { BaseStyles } from "./base";
import type { ArrowTheme, CircularTheme, EdgeTheme, LabelTheme, LineTheme, NodesTheme, PopupTheme, ScaleTheme, SliderTheme, SplitTheme, TextTheme, Theme, TickTheme, ToggleTheme } from "./theme";

export function deriveNodesTheme(styles: BaseStyles): NodesTheme {
  return {
    muted: {
      border: styles.muted.border,
      background: styles.muted.background,
      shadow: styles.muted.shadow,
      shadowBlur: styles.muted.shadowBlur,
    },
    normal: {
      border: styles.normal.border,
      background: styles.normal.background,
      shadow: styles.normal.shadow,
      shadowBlur: styles.normal.shadowBlur,
    },
    active: {
      border: styles.active.border,
      background: styles.active.background,
      shadow: styles.active.shadow,
      shadowBlur: styles.active.shadowBlur,
    },
    focus: {
      border: styles.focus.border,
      background: styles.focus.background,
      shadow: styles.focus.shadow,
      shadowBlur: styles.focus.shadowBlur,
    },
  };
}

export function deriveLineTheme(styles: BaseStyles): LineTheme {
  return {
    muted: {
      color: styles.muted.border,
      width: styles.muted.lineWidth,
    },
    normal: {
      color: styles.normal.border,
      width: styles.normal.lineWidth,
    },
    active: {
      color: styles.active.border,
      width: styles.active.lineWidth,
    },
    focus: {
      color: styles.focus.border,
      width: styles.focus.lineWidth,
    },
  };
}

export function deriveArrowTheme(styles: BaseStyles): ArrowTheme {
  return {
    muted: {
      border: styles.muted.border,
      background: styles.muted.background,
      width: styles.muted.lineWidth,
    },
    normal: {
      border: styles.normal.border,
      background: styles.normal.background,
      width: styles.normal.lineWidth,
    },
    active: {
      border: styles.active.border,
      background: styles.active.background,
      width: styles.active.lineWidth,
    },
    focus: {
      border: styles.focus.border,
      background: styles.focus.background,
      width: styles.focus.lineWidth,
    },
  };
}

export function deriveCircularTheme(styles: BaseStyles): CircularTheme {
  return {
    muted: {
      border: styles.muted.border,
      background: styles.muted.background,
      shadow: styles.muted.shadow,
      shadowBlur: styles.muted.shadowBlur,
    },
    normal: {
      border: styles.normal.border,
      background: styles.normal.background,
      shadow: styles.normal.shadow,
      shadowBlur: styles.normal.shadowBlur,
    },
    active: {
      border: styles.active.border,
      background: styles.active.background,
      shadow: styles.active.shadow,
      shadowBlur: styles.active.shadowBlur,
    },
    focus: {
      border: styles.focus.border,
      background: styles.focus.background,
      shadow: styles.focus.shadow,
      shadowBlur: styles.focus.shadowBlur,
    },
  };
}

export function deriveEdgeTheme(styles: BaseStyles): EdgeTheme {
  const lineTheme = deriveLineTheme(styles);
  const arrowTheme = deriveArrowTheme(styles);
  return {
    muted: {
      line: lineTheme.muted,
      arrow: arrowTheme.muted,
    },
    normal: {
      line: lineTheme.normal,
      arrow: arrowTheme.normal,
    },
    active: {
      line: lineTheme.active,
      arrow: arrowTheme.active,
    },
    focus: {
      line: lineTheme.focus,
      arrow: arrowTheme.focus,
    },
  };
}

export function derivePopupTheme(styles: BaseStyles): PopupTheme {
  return {
    border: styles.active.border,
    background: styles.active.background,
    shadow: styles.active.shadow,
    shadowBlur: styles.active.shadowBlur,
  };
}

// TODO: improve ?
export function deriveSliderTheme(styles: BaseStyles): SliderTheme {
  return {
    barBackground: styles.normal.border,
    barBorder: styles.normal.border,
    buttonBackground: styles.backgroundColor,
    buttonBorder: styles.active.border,
    slideBackground: styles.active.border,
    slideBorder: styles.active.border,
    buttonBorderWidth: 4,
  };
}

export function deriveSplitTheme(styles: BaseStyles): SplitTheme {
  return {
    muted: {
      border: styles.muted.border,
      background: styles.muted.background,
      shadow: styles.muted.shadow,
      shadowBlur: styles.muted.shadowBlur,
    },
    normal: {
      border: styles.normal.border,
      background: styles.normal.background,
      shadow: styles.normal.shadow,
      shadowBlur: styles.normal.shadowBlur,
    },
    active: {
      border: styles.active.border,
      background: styles.active.background,
      shadow: styles.active.shadow,
      shadowBlur: styles.active.shadowBlur,
    },
    focus: {
      border: styles.focus.border,
      background: styles.focus.background,
      shadow: styles.focus.shadow,
      shadowBlur: styles.focus.shadowBlur,
    },
  };
}

export function deriveTextTheme(styles: BaseStyles): TextTheme {
  return {
    muted: {
      color: styles.muted.fontColor,
    },
    normal: {
      color: styles.normal.fontColor,
    },
    active: {
      color: styles.active.fontColor,
    },
    focus: {
      color: styles.focus.fontColor,
    },
  };
}

export function deriveToggleTheme(styles: BaseStyles): ToggleTheme {
  return {
    normal: {
      buttonBackground: styles.normal.border,
      buttonBorder: styles.normal.border,
      pannelBackground: styles.backgroundColor,
      pannelBorder: styles.normal.border,
    },
    active: {
      buttonBackground: styles.active.border,
      buttonBorder: styles.active.border,
      pannelBackground: styles.backgroundColor,
      pannelBorder: styles.active.border,
    },
  };
}

export function deriveScaleTheme(styles: BaseStyles): ScaleTheme {
  return {
    normal: {
      border: styles.normal.border,
    },
    active: {
      border: styles.active.border,
    },
  };
}

export function deriveLabelTheme(styles: BaseStyles): LabelTheme {
  return {
    normal: {
      border: styles.normal.border,
    },
    active: {
      border: styles.active.border,
    },
  };
}

export function deriveTickTheme(styles: BaseStyles): TickTheme {
  return {
    borderTick: styles.active.border,
    borderBaseline: styles.muted.border,
  };
}

export function deriveTheme(styles: BaseStyles): Theme {
  return {
    nodes: deriveNodesTheme(styles),
    line: deriveLineTheme(styles),
    arrow: deriveArrowTheme(styles),
    circular: deriveCircularTheme(styles),
    edge: deriveEdgeTheme(styles),
    popup: derivePopupTheme(styles),
    slider: deriveSliderTheme(styles),
    split: deriveSplitTheme(styles),
    text: deriveTextTheme(styles),
    scale: deriveScaleTheme(styles),
    toggle: deriveToggleTheme(styles),
    label: deriveLabelTheme(styles),
    tick: deriveTickTheme(styles),
  }
}
