import DeleteIcon from '@mui/icons-material/Delete';
import { CartProvider, useCartContext } from "../../contexts/CartContext";
import { NavLink } from 'react-router-dom';

function ShoppingCart() {
    const { cart, clearCart } = useCartContext();
    const { DeleteItem } = useCartContext();
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.totalPrice), 0);
    // console.log(cart)
    // const CartItems= Cart.cart
    if (cart.length === 0) {
        return (
            <div className='mt-5' style={{ 'text-align': 'center' }}>
                <h3 className='mb-5'> No items in cart </h3>
                <NavLink to={'/products'} className=" mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Go To Products
                </NavLink>
            </div>
        );
    }
    return <>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 center p-10">Shopping Cart</h2>
        <div className="relative overflow-x-auto p-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((items, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {items.title}
                            </th>
                            <td className="px-6 py-4">
                                {items.quantity}
                            </td>
                            <td className="px-6 py-4">
                                ${items.price}
                            </td>
                            <td className="px-6 py-4">
                                ${items.totalPrice}
                            </td>
                            <td className="px-6 py-4">
                                <DeleteIcon onClick={() => DeleteItem(items.id)}></DeleteIcon>
                            </td>
                        </tr>
                    ))}
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4"><b>Total Amount</b></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">${totalAmount}</td>
                        <td>
                            <button onClick={() => clearCart()} className="flex items-center justify-center w-50 p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                                Clear Cart
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>
};
export default ShoppingCart;