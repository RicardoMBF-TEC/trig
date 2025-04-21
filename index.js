const express = require("express");
const app = express(); // Initialize Express app
const PORT = 3000; // Define server port

// Root route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});