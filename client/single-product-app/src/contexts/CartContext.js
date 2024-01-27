import { createContext, useContext, useReducer, useEffect, useState } from "react";
import AddToCartReducer from "../reducers/CreateCart";
import SuccessToast from "../components/toasts/SuccessToast";
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    console.log(localCartData)
    if (localCartData.length === 0) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};
// console.log(localStorage.getItem("cartItems").length)
const initialstate = {
    // cart: [],
    cart: getLocalCartData(),

};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddToCartReducer, initialstate);
    const [itemAdded, setItemAdded] = useState(false);
    // console.log(state.cart)
    const clearToast = () => {
        setItemAdded(false);
    };
    const AddToCart = (id, image, title, description, price, ItemQuantity) => {
        dispatch({
            type: 'addedtoCart',
            payload: {
                id: title + id,
                image,
                title,
                description,
                price,
                quantity: ItemQuantity,
            }
        });
        setItemAdded(true)
    }
    const DeleteItem = (id) => {
        dispatch({
            type: 'deleteItem',
            payload: id
        })
    }
    // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    // to add the data in localStorage
    // get vs set

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, AddToCart, DeleteItem, clearCart, itemAdded, clearToast }}>
            {children}
        </CartContext.Provider>
    )
}
const useCartContext = () => {
    return useContext(CartContext);
}
export { CartProvider, useCartContext }