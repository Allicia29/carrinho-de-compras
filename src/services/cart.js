//quais ações meu carrinho pode realizar?

//casos de uso:
//. Adicionar um item ao carrinho
async function addItem(userCart, item){
  userCart.push(item);
};

//.Calcular o valor total do carrinho
async function calculateTotal(userCart){
const result = userCart.reduce((total, item) => total + item.subtotal(), 0); 
console.log(result);
};

//. Deletar um item do carrinho
async function deleteItem(userCart, name){
 const index = userCart.findIndex(item => item.name === name);
 if (index !== -1) {
   userCart.splice(index, 1);
 };
};

//.Remover um item do carrinho - diminuir a quantidade
async function removeItem(userCart, index){
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}

async function displayCart(userCart){

  const deleteIndex = index - 1;
  userCart.forEach((item, index) => 
    console.log(`${index + 1}. ${item.name} - $${item.price} x ${item.quantity} = $${item.subtotal()}`));
}

 console.log("Your cart contains:");
export { addItem, calculateTotal, deleteItem, removeItem, displayCart };