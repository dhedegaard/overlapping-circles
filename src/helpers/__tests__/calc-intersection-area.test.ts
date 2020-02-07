import "../calc-intersection-area";
import calcIntersectionArea from "../calc-intersection-area";

describe("calc-intersection-area", () => {
  it("should return 0, if the circles are not overlapping", () => {
    expect(calcIntersectionArea(5, 5, 10)).toBe(0);
    expect(calcIntersectionArea(5, 5, 20)).toBe(0);
  });
  it("should return PI, if one circle is within the other, and the small circle has a radius of 1", () => {
    expect(calcIntersectionArea(1, 10, 2)).toBeCloseTo(Math.PI);
  });

  it("should calculate some examples", () => {
    // <https://www.analyzemath.com/Geometry/circles_problems.html>
    expect(calcIntersectionArea(10, 10, 10)).toBeCloseTo(122.836);
    // <https://codegolf.stackexchange.com/questions/162324/circle-intersection-area>
    expect(calcIntersectionArea(5, 5, 7)).toBeCloseTo(14.7749);
    expect(calcIntersectionArea(3, 3, 0)).toBeCloseTo(28.274);
    expect(calcIntersectionArea(3, 3, 10)).toBe(0);
  });
});
