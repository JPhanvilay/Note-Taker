const notesRouter = require("express").Router();
const { v4: uuidv4 } = require("uuid");

let db = require("../db/db.json");
const fs = require("fs");

notesRouter.get("/notes", (req, res) => {
 res.json(db);
});

notesRouter.post("/notes", (req, res) => {
 let newNote = { title: req.body.title, text: req.body.text, id: uuidv4() };

 db.push(newNote);
 fs.writeFileSync("./db/db.json", JSON.stringify(db));
 res.json(db);
});

module.exports = { notesRouter };
