export function renderAuthor(book) {
    const authorBook = document.createElement('div');
    const authorFirstName = document.createElement('span');
    const authorMiddleName = document.createElement('span');
    const authorLastName = document.createElement('span');

    authorBook.classList.add('author');

    authorFirstName.textContent = book.author.firstName;
    authorMiddleName.textContent = book.author.middleName;
    authorLastName.textContent = book.author.lastName;

    authorBook.append(authorFirstName, authorMiddleName, authorLastName);

    return authorBook;
}