export function renderRating(book) {
    const ratingBook = document.createElement('span');
    ratingBook.textContent = book.rating;
    ratingBook.classList.add('rating');

    return ratingBook;
}