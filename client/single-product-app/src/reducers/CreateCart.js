export default function AddToCartReducer(state, action) {
    if (action.type === 'addedtoCart') {
        let { id, image, title, description, price, quantity } = action.payload;
        let TotalPrice = (parseInt(price) * parseInt(quantity));
        let cartProduct = {
            id: id + title,
            title,
            image,
            description,
            price,
            totalPrice: TotalPrice,
            quantity

        }
        // console.log(state.cart)
        return {
            ...state,
            cart: [
                ...state.cart,
                cartProduct
            ]
        };
    }
    if (action.type === 'deleteItem') {
        let updatedCart = state.cart.filter((currItem) => currItem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }
}