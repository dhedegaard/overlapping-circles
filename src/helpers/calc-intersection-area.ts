const calcIntersectionArea = (
  r1: number,
  r2: number,
  distance: number
): number => {
  if (distance >= r1 + r2) {
    return 0;
  }

  const rr1 = r1 * r1;
  const rr2 = r2 * r2;

  if (distance <= Math.abs(r2 - r1)) {
    return Math.PI * Math.min(rr1, rr2);
  }

  const x0 = 0;
  const y0 = 0;
  const x1 = distance;
  const y1 = 0;

  const c = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
  const phi = Math.acos((rr1 + c * c - rr2) / (2 * r1 * c)) * 2;
  const theta = Math.acos((rr2 + c * c - rr1) / (2 * r2 * c)) * 2;
  const area1 = 0.5 * theta * rr2 - 0.5 * rr2 * Math.sin(theta);
  const area2 = 0.5 * phi * rr1 - 0.5 * rr1 * Math.sin(phi);
  return area1 + area2;
};

export default calcIntersectionArea;
