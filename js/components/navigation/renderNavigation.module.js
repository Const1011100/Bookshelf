import { renderCheckboxFilter } from "./checkbox/renderCheckboxFilter.module.js";

export function renderNavigation(allBooks, target) {
    const elementNavigation = document.createElement('nav');
    elementNavigation.classList.add('navigation');

    // список унікальних цілей для фільтрування (в доному випадку унікальні yearOfReading)
    const targets = allBooks.reduce((uniqueArr, book) => {
        if (!uniqueArr.includes(book[target])) {
            uniqueArr.push(book[target]);
        }
        return uniqueArr;
    }, []);
    targets.sort((a, b) => { return a - b });
    targets.forEach(target => { elementNavigation.append(renderCheckboxFilter(target)) });

    return elementNavigation;
}