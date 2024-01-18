const apiUrl = "https://openlibrary.org/subjects/fiction.json?limit=10";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => displayBooks(data.works))
  .catch((error) => console.error("Error fetching books:", error));
function displayBooks(books) {
  const booksContainer = document.getElementById("booksContainer");
  booksContainer.innerHTML = "";

  if (books) {
    books.forEach((book) => {
      const card = document.createElement("div");
      card.className = "card col-md-4";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = book.title || "Title not available";

      const author = document.createElement("p");
      author.className = "card-text";
      author.textContent = `Author: ${
        book.authors ? book.authors[0].name : "Unknown"
      }`;

      const coverId = book.cover_id || "";
      const image = document.createElement("img");
      image.src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
      image.alt = "Book Cover";

      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(image);

      card.appendChild(cardBody);
      booksContainer.appendChild(card);
    });
  } else {
    booksContainer.innerHTML = "<p>No books found</p>";
  }
}
