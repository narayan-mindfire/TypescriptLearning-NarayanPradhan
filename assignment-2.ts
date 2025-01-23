// Shopping Cart
//input -> keeping it global so that it can be accessed with reference(to make changes to the original array object)
interface CartItem{
    name? : string,
    price? : number,
    quantity? : number
}
let cart : CartItem[] = [
{ name: "Apple", price: 120, quantity: 3 },
{ name: "Milk", price: 60, quantity: 2 },
{ name: "Bread", price: 40, quantity: 1 },
];

//functionality to display the current cart
const displayCart = () => {
if(!cart.length){
    console.log("Your cart is empty")
    return
}
for(let item of cart)
    console.log(`name : ${item.name}  price : ${item.price} quantity : ${item.quantity} subTotal : ${(item.quantity || 0) * (item.price || 0)}`)
}

//functionality to add item
const addItem = (name : string, price: number, qty: number) => {
    if(typeof(price) !== "number" || typeof(qty) !== "number"){
        console.log("Invalid item type, please enter valid numbers")
        return
    }
    if(price < 0 || qty < 0 || qty-Math.floor(qty) !== 0){
        console.log("Invalid item quantity or price")
        return
    }
    //checking if item with the same name already exists
    if(cart.some(item => item.name === name)){
        console.log(`Item already exists in your cart, consider updating item count for ${name}`)
        return
    }
    var tempObj : CartItem = {}
    tempObj.name = name
    tempObj.price = price
    tempObj.quantity = qty
    cart.push(tempObj)
}

//functionality to update quantity
const updateQty = (name: string, newQty: number) : void => {
    if(newQty < 0 || newQty - Math.floor(newQty) !== 0){
        console.log("Quantity provided is invalid, enter positive integer")
        return
    }
    let idx = cart.findIndex(item=>item.name === name)
    if(idx === -1){
        console.log(`Item with the name : ${name} was not found in your cart!`)
    }else{
        cart[idx].quantity = newQty
        console.log(`Item quantity for ${name} is updated successfully`)
    }
    console.log()
}

// functionality to remove an item from cart
const removeItemFromCart = (name : string) : void => {
    if(!cart.length){
        console.log("No items in your cart!")
        return
    }
    let removeIndex: number= cart.findIndex(item => item.name === name)
    if(removeIndex === -1){
        console.log(`Item with the name : ${name} was not found in your cart!`) 
    }else{
        cart.splice(removeIndex, 1);
        console.log(`Item ${name} removed successfully`)
    }
}

// functionality to calculate the total price
const totalPrice = () : number => {
    let res : number = 0
    for(let item of cart) res += (item.price || 0)*(item.quantity || 0)
    return res
}

//displaying the cart
console.log("displaying the cart")
displayCart()
//adding item to the cart
console.log("adding item into the cart")
addItem("Cycle", 21782, 1)
displayCart()
console.log("Updating quantity in cart")
//updating quantity 
updateQty("Cycle", 2)
displayCart()
console.log("removing item from cart")
//removing item from cart
removeItemFromCart("Apple")
displayCart()
console.log("finding total price of items in cart currently")
//calculating total price
console.log(totalPrice())
displayCart()