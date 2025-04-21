const { getTriangleSides } = require("../Database/fakedb");

function calculateAngleB() {
    const { side_a, side_b, side_c } = getTriangleSides();
    const cosB = (Math.pow(side_a, 2) + Math.pow(side_c, 2) - Math.pow(side_b, 2)) / (2 * side_a * side_c);
    return Math.acos(cosB) * (180 / Math.PI); // Convert radians to degrees
}

module.exports = { calculateAngleB };