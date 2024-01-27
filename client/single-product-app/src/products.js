import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MakeSearch from './components/search/search';
import ProductsList from './productlists/Productlist';
import Zoom from '@mui/material/Zoom';
import { NavLink } from 'react-router-dom';

function Products() {
    const [SearchProduct, SetSearch] = useState("");
    const [seachedProducts, SetSearchedProducts] = useState(ProductsList);
    const [AllProducts, SetAllProducts] = useState(ProductsList);
    // useEffect( ()=>{
    //     ProductsListFetch();

    // },[])
    // const ProductsListFetch = async () => {
    //     await fetch('https://fakestoreapi.com/products?limit=8')
    //         .then(res => res.json())
    //         .then((data) => {
    //             SetAllProducts(data);
    //             SetSearchedProducts(data)
    //         })
    //         .catch(err => console.log(err))
    // };
    function SearchItems(event) {
        const ToSeach = event.target.value;
        SetSearch(ToSeach);
        // lower case searched item
        const SearchedItemLower = ToSeach.toLowerCase();
        // get matching record
        const MatchingProducts = AllProducts.filter(product => product.title.toLowerCase().includes(SearchedItemLower));
        // update products list to display
        SetSearchedProducts(MatchingProducts);
    }
    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 center">Products</h2>
            <MakeSearch SearchItems={SearchItems} SearchProduct={SearchProduct} />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {seachedProducts.map((product) => (

                    <div key={product.id} className="group relative shadow-md p-1">
                        <Zoom in={true} >
                            <div className="mt-4 h-10 flex justify-between">
                                <h3 className="font-bold text-center">
                                    <NavLink to={`/product/${product.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </NavLink>
                                </h3>
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: '200ms' }}>
                            <div className="aspect-h-1 mt-4 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
                            <div className="mt-4 flex justify-center">
                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
                            <div className="mt-4 flex justify-center">
                                <NavLink to={`/product/${product.id}`} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    Details
                                </NavLink>
                            </div>
                        </Zoom>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Products;