export function points2Degrees(x0: number, y0: number, x1: number, y1: number): number {
  return points2Radians(x0, y0, x1, y1) / Math.PI * 180;
}

export function points2Radians(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x1 - x0;
  const dy = y1 - y0;
  if (dx === 0) {
    return y0 <= y1 ? Math.PI / 2 : - Math.PI / 2;
  }
  const r = Math.atan(dy / dx);
  if (dx < 0) return r + Math.PI;
  return r;
}