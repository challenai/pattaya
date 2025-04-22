/**
 * Circular Propertities
 */
export interface CircularProps {
    /**
     * width of the pattern
     */
    width: number;
    /**
     * height of the pattern
     */
    height: number;
    /**
     * line width of the pattern
     */
    lineWidth: number;
    /**
     * margin between lines of the circular pattern
     */
    margin: number;
    /**
     * offset x
     */
    offsetX: number;
    /**
     * offset y
     */
    offsetY: number;
    /**
     * line color
     */
    lineColor?: string;
    /**
     * background color
     */
    backgroundColor?: string;
    /**
     * segements for dotted line, for example: [12, 3]
     */
    segements?: number[];
}

/**
 * draw a circular pattern
 */
export const drawCircular = (
    ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D,
    {
        width,
        height,
        lineWidth,
        margin,
        offsetX,
        offsetY,
        lineColor,
        backgroundColor,
        segements,
    }: CircularProps,
) => {
    ctx.save();

    const p = new Path2D();
    p.rect(0, 0, width, height);
    ctx.clip(p);

    if (backgroundColor) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
    }

    ctx.translate(offsetX, offsetY);
    ctx.lineWidth = lineWidth;
    if (lineColor) ctx.strokeStyle = lineColor;
    if (segements) ctx.setLineDash(segements);

    const x1 = Math.abs(offsetX);
    const y1 = Math.abs(offsetY);
    const x2 = Math.abs(offsetX - width);
    const y2 = Math.abs(offsetY - height);
    const minR = Math.min(x1, y1, x2, y2);
    const mx = Math.max(x1, x2);
    const my = Math.max(y1, y2);
    const maxR = Math.sqrt(mx * mx + my * my) + margin;
    let r = minR - (minR % margin);
    ctx.beginPath();
    while (r <= maxR) {
        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        r += margin;
        ctx.moveTo(r, 0);
    }
    ctx.stroke();

    ctx.restore();
};
