import { toOpts, type ArrowStyles } from "./styles";
import type { Shapes } from "../../core";
import { arrow } from "impressionist";

export { toOpts } from "./styles";

export interface DomeProps {
    width: number;
    low: number;
}

export function applyStyle(shape: Shapes, style: ArrowStyles) {
    shape![0].opts = toOpts(style);
}

export function shapes(props: DomeProps, style: ArrowStyles): Shapes {
    return [
        {
            path: wireframe(props),
            opts: toOpts(style),
        },
    ];
}

export function wireframe({ width, low }: DomeProps): string {
    return arrow.dome(0, 0, width, low);
}

export function update(shapes: Shapes, props: DomeProps) {
    shapes![0].path = wireframe(props);
}

export default {
    shapes,
    update,
    wireframe,
    toOpts,
    applyStyle,
};
