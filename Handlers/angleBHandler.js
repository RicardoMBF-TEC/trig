const { calculateAngleB } = require("../Controllers/angleBController");

function angleBHandler(req, res) {
    const angleB = calculateAngleB();
    res.json({ angleB });
}

module.exports = { angleBHandler };