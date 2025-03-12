import { GrFormNext } from "react-icons/gr";

export default function HeadingRoutes() {
    return (
        <div className="h-14 bg-white border-t border-gray-300 md:py-16 px-12 ">
            <div className="flex items-start justify-start px-4 sm:px-8 md:py-[5.5rem] py-[2.5rem] ">
                <div className="flex items-center">
                    <p className="text-black text-lg font-semibold cursor-pointer z-30">Shop</p>
                    <GrFormNext className="text-gray-500 ml-2 z-30" size={20} />
                </div>
                <p className="text-gray-600 text-lg font-semibold cursor-pointer z-30 ">All Categories</p>
            </div>
        </div>
    );
}
