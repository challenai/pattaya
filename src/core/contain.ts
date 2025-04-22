import type { ContainCallback } from "@challenai/depict/graph";

export function rectContain(
    width: number,
    height: number,
    aligned?: boolean,
): ContainCallback {
    if (aligned) {
        return (x: number, y: number) =>
            x >= 0 && y >= 0 && x <= width && y <= height;
    }
    return (x: number, y: number) =>
        x >= -width / 2 &&
        y >= -height / 2 &&
        x <= width / 2 &&
        y <= height / 2;
}
