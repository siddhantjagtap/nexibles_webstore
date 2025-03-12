import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';

export default function PCHeadingRoutes({ productDetails }) {   
    const categoryName = productDetails.product ? productDetails.product.category : '';
    return (
        <div className="h-14 bg-white border-t border-gray-300 py-20 ">
            <div className="flex flex-wrap items-center justify-start px-4 sm:px-8 py-3">
                <p className="text-gray-600 md:text-lg text-sm font-semibold cursor-pointer">Products</p>
                <GrFormNext className="text-gray-500 mx-2" size={20} />
                <Link href={`/category/${categoryName}`}>
                    <div className="flex items-center">
                        <p className="text-gray-600 md:text-lg text-sm font-semibold cursor-pointer mr-2">{productDetails.product ? productDetails.product.category :''}</p>
                        <GrFormNext className="text-gray-500" size={20} />
                    </div>
                </Link>
                <p className="text-black md:text-lg text-sm font-semibold cursor-pointer ml-2">{productDetails.product ? productDetails.product.name : ''}</p>
            </div>
        </div>
    );  
}
