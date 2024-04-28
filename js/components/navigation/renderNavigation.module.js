import { renderCheckboxFilter } from "./checkbox/renderCheckboxFilter.module.js";

export function renderNavigation() {
    const elementNavigation = document.createElement('nav');
    elementNavigation.classList.add('navigation');
    const checkboxFilterElement_1 = renderCheckboxFilter('Reading in 2023', 2023);
    const checkboxFilterElement_2 = renderCheckboxFilter(2022);

    elementNavigation.append(checkboxFilterElement_1, checkboxFilterElement_2);

    return elementNavigation;
}