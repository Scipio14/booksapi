//Se puede importar usando import porque se está usando webpack

import "./styles/app.css";
import UI from "./UI";
const d = document;


d.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBooks();

});

d.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = d.getElementById("title").value;
  const author = d.getElementById("author").value;
  const isbn = d.getElementById("isbn").value;
  const image = d.getElementById("image").files;

  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title)
  formData.append("author", author);
  formData.append("isbn", isbn);

  const ui = new UI();
  ui.addANewBook(formData);
  ui.renderMessage('New Book Added','success', 3000);
});

d.getElementById('books-cards').addEventListener('click',(e)=>{

  if(e.target.classList.contains('delete')){
    const ui = new UI()
    //console.log(e.target.getAttribute('_id'));
    ui.deleteBook(e.target.getAttribute('_id'));
    ui.renderMessage('Book Removed','danger',3000);
    
  };
 
});