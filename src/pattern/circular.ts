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
};

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

  // const p = new Path2D();
  // p.rect(0, 0, width, height);
  // ctx.clip(p);
  if (backgroundColor) ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  ctx.translate(offsetX, offsetY);

  for (let i = 0; i < 100; i++) {
    ctx.arc(0, 0, margin * i, 0, Math.PI, true);
    ctx.lineWidth = lineWidth;
    if (lineColor) ctx.strokeStyle = lineColor;
    if (segements) ctx.setLineDash(segements);
    ctx.stroke();
  }

  ctx.restore();
};