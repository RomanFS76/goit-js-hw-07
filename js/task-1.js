// const itemCategories = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${itemCategories.length}`);




// itemCategories.forEach((el) => {
//     console.log(
//         `Category: ${el.firstElementChild.textContent}\n Elements: ${el.lastElemetChild.children.length}`
//     );
// });


const categoryItemsEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach((el) => {
    console.log(
        `Category: ${el.firstElementChild.textContent}\n Elements: ${el.lastElemetChild.length}`
    );
});