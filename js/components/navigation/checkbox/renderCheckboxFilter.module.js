export function renderCheckboxFilter(year, title) {
    const labelElement = document.createElement('label');
    const inputCheckboxElement = document.createElement('input');
    const checkboxTitle = document.createElement('span');
    inputCheckboxElement.type = 'checkbox';
    //inputCheckboxElement.classList.add(`${className}`);
    inputCheckboxElement.value = `${year}`;
    checkboxTitle.textContent = `${year}`;
    if (title !== undefined) { checkboxTitle.textContent = `${title}` };

    labelElement.append(inputCheckboxElement, checkboxTitle);

    return labelElement;
}
