const { calculateAngleC } = require("../Controllers/angleCController");

function angleCHandler(req, res) {
    const angleC = calculateAngleC();
    res.json({ angleC });
}

module.exports = { angleCHandler };