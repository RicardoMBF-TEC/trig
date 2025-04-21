const { getTriangleSides } = require("../Database/fakedb");

function calculateAngleC() {
    const { side_a, side_b, side_c } = getTriangleSides();
    const cosC = (Math.pow(side_a, 2) + Math.pow(side_b, 2) - Math.pow(side_c, 2)) / (2 * side_a * side_b);
    return Math.acos(cosC) * (180 / Math.PI); // Convert radians to degrees
}

module.exports = { calculateAngleC };