export interface BaseStylesUnit {
    line: string;
    lineWidth?: number;
    border: string;
    background: string | CanvasGradient | CanvasPattern;
    fontColor: string;
    shadow?: string;
    shadowBlur?: number;
}

export interface BaseStyles {
    background: string | CanvasGradient | CanvasPattern;
    backgroundColor: string;
    muted: BaseStylesUnit;
    normal: BaseStylesUnit;
    active: BaseStylesUnit;
    focus: BaseStylesUnit;
}
