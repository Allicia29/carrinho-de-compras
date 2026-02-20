import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const cart = [];
const myWhishList = [];

console.log("Welcome to the shopping pink cart!");

const item1 = await createItem("Pink Shirt", 29.99,1);
const item2 = await createItem("Pink Pants", 49.99,4);
const item3 = await createItem("Pink Shoes", 79.99,10);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(cart, item3);

await cartService.deleteItem(cart, item2.name);
await cartService.deleteItem(cart, item1.name);
await cartService.deleteItem(cart, item3.name);


console.log("Pink cart total:");
await cartService.calculateTotal(cart);
  