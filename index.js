const express = require("express");
const { angleAHandler } = require("./Handlers/angleAHandler");
const { angleBHandler } = require("./Handlers/angleBHandler");
const { angleCHandler } = require("./Handlers/angleCHandler");

const app = express();
const PORT = 3000;

app.get("/angleA", angleAHandler); // Endpoint for Angle A
app.get("/angleB", angleBHandler); // Endpoint for Angle B
app.get("/angleC", angleCHandler); // Endpoint for Angle C

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});