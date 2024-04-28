export function renderCover(book) {
    const containerCoverBook = document.createElement('div');
    containerCoverBook.classList.add('cover');
    containerCoverBook.classList.add('_ibg');

    const coverBook = document.createElement('img');
    coverBook.src = book.coverImageUrl;
    containerCoverBook.append(coverBook);

    return containerCoverBook;
}