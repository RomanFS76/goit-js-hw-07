const categoryItemsEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach((el) => {
    console.log(
        `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
    );
});
