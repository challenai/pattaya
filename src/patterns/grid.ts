/**
 * Grid Propertities
 */
export interface GridProps {
  /**
   * width of the grid
   */
  width: number;
  /**
   * height of the grid
   */
  height: number;
  /**
   * line width of the grid
   */
  lineWidth: number;
  /**
   * margin between lines of the grid
   */
  marginX: number;
  /**
   * margin between lines of the grid
   */
  marginY: number;
  /**
   * offset controls the grid slope
   */
  offsetX: number;
  /**
   * offset controls the grid slope
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
 * draw a grid
 */
export const drawGrid = (
  ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D,
  {
    width,
    height,
    lineWidth,
    marginX,
    marginY,
    offsetX,
    offsetY,
    lineColor,
    backgroundColor,
    segements,
  }: GridProps,
) => {
  ctx.save();

  const p = new Path2D();
  p.rect(0, 0, width, height);
  ctx.clip(p);

  if (backgroundColor) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }

  ctx.lineWidth = lineWidth;
  if (lineColor) ctx.strokeStyle = lineColor;
  if (segements) ctx.setLineDash(segements);

  const unitWidthX = lineWidth + marginX;
  const unitWidthY = lineWidth + marginY;
  offsetX %= unitWidthX;
  offsetY %= unitWidthY;
  const numX = width / unitWidthX + 2;
  const numY = height / unitWidthY + 2;
  ctx.beginPath();
  for (let i = 0; i < numX; i++) {
    ctx.moveTo(offsetX, 0);
    ctx.lineTo(offsetX, height);
    offsetX += unitWidthX;
  }
  for (let i = 0; i < numY; i++) {
    ctx.moveTo(0, offsetY);
    ctx.lineTo(width, offsetY);
    offsetY += unitWidthY;
  }
  ctx.stroke();

  ctx.restore();
};