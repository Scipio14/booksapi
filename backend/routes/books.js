const { Router } = require("express");
const router = Router();

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

  await Book.findByIdAndDelete(req.params.id);
  res.send("Book Deleted");
});

module.exports = router;
