import { renderCover } from "./cover/renderCover.module.js";
import { renderTitle } from "./title/renderTitle.module.js";
import { renderAuthor } from "./author/renderAuthor.module.js";
import { renderRating } from "./rating/renderRating.module.js";
import { renderYearOfReading } from "./yearOfReading/yearOfReading.module.js";

export function renderBook(informationAboutOneBook) {
    const book = document.createElement('div');
    book.classList.add('book');

    const cover = renderCover(informationAboutOneBook);
    const title = renderTitle(informationAboutOneBook);
    const author = renderAuthor(informationAboutOneBook);
    const rating = renderRating(informationAboutOneBook);
    const yearOfReading = renderYearOfReading(informationAboutOneBook);

    const elementsBook = [ cover, title, author, rating, yearOfReading ];
    elementsBook.forEach(element => book.append(element));

    return book;
}