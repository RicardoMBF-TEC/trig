const { calculateAngleA } = require("../Controllers/angleAController");

describe("Angle A Calculation", () => {
    test("should return a valid angle in degrees", () => {
        const result = calculateAngleA();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(180);
    });
});