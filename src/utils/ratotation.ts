export function points2Degrees(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x0 - x1;
  const dy = y0 - y1;
  if (dy === 0) {
    return x0 <= x1 ? 0 : 180;
  }
  if (dx === 0) {
    return y0 <= y1 ? 90 : 270;
  }
  return Math.atan(dy / dx) / Math.PI * 180;
}

export function points2Radians(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x0 - x1;
  const dy = y0 - y1;
  if (dy === 0) {
    return x0 <= x1 ? 0 : Math.PI;
  }
  if (dx === 0) {
    return y0 <= y1 ? Math.PI * 0.5 : Math.PI * 1.5;
  }
  return Math.atan(dy / dx);
}