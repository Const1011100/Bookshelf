export function showFilteredBook(filteredBooks) {
    const allBooks = document.querySelectorAll('.book');
    for(let i = 0; i < allBooks.length; i++) {
        const categoryInBook = allBooks[i].querySelector('.year__reading');
        const valueCategoryInBook = categoryInBook.textContent;

        for(let j = 0; j < filteredBooks.length; j++) {
            if(valueCategoryInBook == filteredBooks[j].yearOfReading) {
                allBooks[i].classList.remove('hide');
                allBooks[i].classList.add('show');
            }
        }
    }
}