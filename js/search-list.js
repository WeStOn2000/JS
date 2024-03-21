const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
if(inStock.includes(search)){
message = `yes, we have <strong>${search}</strong> `;
} else {
    message =`sorry,we do not have <strong>${search}</strong>`;
}
document.querySelector(`main`).innerHTML=`<p>${message}</p>`;