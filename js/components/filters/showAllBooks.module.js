export function showAllBooks() {
    const allBooks = document.querySelectorAll('.book');
    allBooks.forEach(book => {
        book.classList.remove('hide');
        book.classList.add('show');
    });
}