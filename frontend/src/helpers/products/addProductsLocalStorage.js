import { useState } from "react"


const handleProductsToShoppingCart = (id, name, precio, shoppingData) => {

    const [shoppingData, setShoppingData] = useState();

    const itemData = {
        id,
        name,
        precio,
        count:1
    }

    const cartItems  = shoppingData;

    cartItems.push(itemData);

    localStorage.setItem('shopping_cart',JSON.stringify(cartItems));
    
}