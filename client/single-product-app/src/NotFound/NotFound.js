import Navbar from "../layouts/nav-bar";
import Products from "../products";

 function NotFound(){
    return <div>
        <Navbar />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-3">404 Not Found</h1>
        <Products />
    </div>
 }
 export default NotFound;