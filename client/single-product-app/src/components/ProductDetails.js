
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../products';
// import AddToCartReducer from '../reducers/CreateCart';
import { useCartContext } from '../contexts/CartContext';
import ProductsList from '../productlists/Productlist';
import SuccessToast from './toasts/SuccessToast';
// const InitialCart = [];
function ProductDetails() {
    const ProductId = useParams();
    const { AddToCart, cart, itemAdded, clearToast } = useCartContext();
    // const { clearCart } = useCartContext();
    const ProductDescription = ProductsList.filter(record => record.id == ProductId.id);
    const [ItemQuantity, SetItemQuantity] = useState(1);
    const [DisplayToast, SetDisplayToast] = useState(false);
    return (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">

            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-1/4 ">
                                <img
                                    src={ProductDescription[0].image}
                                    alt=""
                                    className="object-cover w-full lg:h-full "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20 mt-10">
                            <div className="mb-8 ">
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {ProductDescription[0].title}
                                </h2>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                {ProductDescription[0].description}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span>{ProductDescription[0].price}</span>
                                {/* <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">$150.99</span> */}
                            </p>

                        </div>
                        <div className=" w-40 mb-8 lg:pl-20">
                            <label
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button onClick={() => { ItemQuantity > 1 && SetItemQuantity(ItemQuantity - 1) }}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    value={ItemQuantity} />
                                <button onClick={() => { ItemQuantity < 10 && SetItemQuantity(ItemQuantity + 1) }}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:pl-20 flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button onClick={() => AddToCart(ProductDescription[0].id, ProductDescription[0].image, ProductDescription[0].title, ProductDescription[0].description, ProductDescription[0].price, ItemQuantity)} className="flex items-center justify-center w-full p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                                    Add to Cart
                                </button>
                                <SuccessToast Message={'Item Added Successfully'} DisplayProperty={itemAdded} onClose={clearToast} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </section>
    )
}
export default ProductDetails;