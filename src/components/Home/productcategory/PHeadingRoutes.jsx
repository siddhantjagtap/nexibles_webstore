

import { GrFormNext } from "react-icons/gr";

export default function PHeadingRoutes({ product }) {
    console.log("headingproduct", product);
    const categoryName =product && product.length > 0 ? product[0].category : ""; 

    return (
        <div className="h-14 bg-white border-t border-gray-300">
            <div className="flex sm:flex-row items-center justify-start px-4 sm:px-8 py-3">
                <p className="text-gray-600 text-lg font-semibold cursor-pointer">Products</p>
                <GrFormNext className="text-gray-500 mx-2" size={20} />
                <p className="text-black text-lg font-semibold cursor-pointer mt-1 sm:mt-0">{categoryName}</p>
            </div>
        </div>
    );  
}