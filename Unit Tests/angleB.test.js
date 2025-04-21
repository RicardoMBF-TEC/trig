const { calculateAngleB } = require("../Controllers/angleBController");

describe("Angle B Calculation", () => {
    test("should return a valid angle in degrees", () => {
        const result = calculateAngleB();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(180);
    });
});