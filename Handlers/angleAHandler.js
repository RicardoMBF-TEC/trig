const { calculateAngleA } = require("../Controllers/angleAController");

function angleAHandler(req, res) {
    const angleA = calculateAngleA();
    res.json({ angleA });
}

module.exports = { angleAHandler };