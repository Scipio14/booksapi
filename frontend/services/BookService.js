class BookService {
  constructor() {
    this.URL = "/api/books";
  }

  async getBooks() {
    const response = await fetch(this.URL);
    const books = await response.json();
    return books;
  }

  async postBook(book) {
    const res = await fetch(this.URL, {
      method: "POST",
      body: book,
    });
    const data = await res.json();
    console.log(data);
  }

  async deleteBook(bookid) {
    const res = await fetch(`${this.URL}/${bookid}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
  }
}
export default BookService;
