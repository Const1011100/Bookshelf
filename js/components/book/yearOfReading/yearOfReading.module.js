export function renderYearOfReading(book) {
    const yearOfReading = document.createElement('span');
    yearOfReading.textContent = book.yearOfReading;
    yearOfReading.classList.add('year__reading');

    return yearOfReading;
}