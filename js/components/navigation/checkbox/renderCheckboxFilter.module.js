export function renderCheckboxFilter(title, year) {
    const labelElement = document.createElement('label');
    const inputCheckboxElement = document.createElement('input');
    const checkboxTitle = document.createElement('span');
    inputCheckboxElement.type = 'checkbox';
    //inputCheckboxElement.classList.add(`${className}`);
    inputCheckboxElement.value = `${year}`;

    if (title === '' || undefined) {
        checkboxTitle.textContent = `${year}`;
    } else {
        checkboxTitle.textContent = `${title}`;
    }

    labelElement.append(inputCheckboxElement, checkboxTitle);

    return labelElement;
}
