const express = require("express");
const { pageRouter } = require("./routes/pages");
const { notesRouter } = require("./routes/notes");
const PORT = process.env.PORT || 8080;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", pageRouter);
app.use("/api", notesRouter);
app.use(express.static("public"));

app.listen(PORT, () =>
 console.log(`Server started on http://localhost:${PORT}`)
);
