const pageRouter = require("path");
const router = require("express").Router();

// Route to get to notes page.
pageRouter.get("/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Route to get to homepage and send to user.
pageRouter.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = { pageRouter };
