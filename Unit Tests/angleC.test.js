const { calculateAngleC } = require("../Controllers/angleCController");

describe("Angle C Calculation", () => {
    test("should return a valid angle in degrees", () => {
        const result = calculateAngleC();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(180);
    });
});