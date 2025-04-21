const { getTriangleSides } = require("../Database/fakedb");

function calculateAngleA() {
    const { side_a, side_b, side_c } = getTriangleSides();
    const cosA = (Math.pow(side_b, 2) + Math.pow(side_c, 2) - Math.pow(side_a, 2)) / (2 * side_b * side_c);
    return Math.acos(cosA) * (180 / Math.PI); // Convert radians to degrees
}

module.exports = { calculateAngleA };