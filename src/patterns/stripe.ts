/**
 * Stripe Propertities
 */
export interface StripeProps {
  /**
   * width of the stripe
   */
  width: number;
  /**
   * height of the stripe
   */
  height: number;
  /**
   * line width of the stripe
   */
  lineWidth: number;
  /**
   * margin between lines of the stripe
   */
  margin: number;
  /**
   * offset controls the stripe slope
   */
  offset: number;
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
 * draw a stripe
 */
export const drawStripe = (
  ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D,
  {
    width,
    height,
    lineWidth,
    margin,
    offset,
    lineColor,
    backgroundColor,
    segements,
  }: StripeProps,
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
  const unitWidth = lineWidth + margin;
  const num = (width + Math.abs(offset)) / unitWidth + 2;
  ctx.beginPath();
  for (let i = 0; i < num; i++) {
    if (offset < 0) {
      ctx.moveTo(i * unitWidth + offset, 0);
      ctx.lineTo(i * unitWidth, height);
    } else {
      ctx.moveTo(i * unitWidth, 0);
      ctx.lineTo(i * unitWidth - offset, height);
    }
  }
  ctx.stroke();

  ctx.restore();
};