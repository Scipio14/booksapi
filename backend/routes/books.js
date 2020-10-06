const { Router } = require("express");
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');

const Book = require("../models/Book");

//Primera ruta
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

//Segunda ruta
router.post("/", async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = "/uploads/" + req.file.filename;
  const newBook = new Book({ title, author, isbn, imagePath });
  await newBook.save();
  //console.log(newBook);
  res.json({ message: "Book Saved" });
});

//Tercera ruta
router.delete("/:id", async (req, res) => {
  //console.log(req.params.id);

  const book = await Book.findByIdAndDelete(req.params.id);
  unlink(path.resolve('./backend/public' + book.imagePath))

  res.send("Book Deleted");
});

module.exports = router;
