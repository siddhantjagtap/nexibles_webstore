import React from 'react'
import categoryimg from '../../../public/cards/categorybgimg.jpg'
function CategoryImageBg() {
    return (
        <div className=''>
            <div>
            <div className="left-4 md:left-15 md:top-[30%] right-4 md:right-0 mt-10 md:mt-6 py-6 flex flex-col text-white md:text-5xl text-xl font-bold text-start px-20 absolute">All Categories</div>
            <div className='md:h-[20rem]'>
                <img src={categoryimg.src} ></img>
                </div>
            </div>
        </div>
    )
}

export default CategoryImageBg


// import React from 'react';

// function CategoryImageBg() {
//     return (
//         <div className='relative'>
//             <div className="absolute top-0 left-0 right-0 px-4 py-6 flex flex-col text-white text-2xl font-bold text-center md:text-5xl md:text-start md:px-20 md:top-[30%] md:left-15 md:right-0">
//                 All Categories
//             </div>
//             <div className='relative'>
//                 <img 
//                     src={`https://nexiblesapp.barecms.com/uploads/categorybgimg.png`} 
//                     alt="Category Background"
//                     className='w-full h-auto md:h-[20rem] object-cover'
//                 />
//             </div>
//         </div>
//     );
// }

// export default CategoryImageBg;
