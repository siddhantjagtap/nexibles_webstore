'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function PCCarddetails({ productDetails }) {
    console.log("productdetails", productDetails);
    const [overviewOpen, setOverviewOpen] = useState(false);
    const [specificationOpen, setSpecificationOpen] = useState(false);
    const [shippingOpen, setShippingOpen] = useState(false);
    const [paymentReturnsOpen, setPaymentReturnsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        productDetails && productDetails.options && productDetails.options.length > 0
            ? productDetails.options[0].option_name
            : 'Default'
    );

    // const [selectedPrice, setSelectedPrice] = useState(
    //     productDetails && productDetails.options && productDetails.options.length > 0
    //         ? `${productDetails.options[0].size}-${productDetails.options[0].price}`
    //         : productDetails.product.price
    // );

    const [selectedPrice, setSelectedPrice] = useState(
        productDetails && productDetails.options && productDetails.options.length > 0
            ? `${productDetails.options[0].size}-${productDetails.options[0].price}`
            : `${productDetails.product.qty}-${productDetails.product.price}`
    );

    const handleAddToCart = () => {
        // const productToAdd = {
        //     id: productDetails.product.id,
        //     name: productDetails.product.name,
        //     image: productDetails.product.image,
        //     size: selectedPrice.includes('-') ? selectedPrice.split('-')[0] : 'Default',
        //     price: selectedPrice.includes('-') ? selectedPrice.split('-')[1] : selectedPrice,
        //     type: productDetails.options.length > 0 ? productDetails.options[0].option_type : 'Default',
        //     typeName: selectedOption,
        // };
        const productToAdd = {
            id: productDetails.product.id,
            name: productDetails.product.name,
            image: productDetails.product.image,
            size: selectedPrice.includes('-') ? selectedPrice.split('-')[0] : productDetails.product.qty,
            price: selectedPrice.includes('-') ? selectedPrice.split('-')[1] : selectedPrice,
            type: productDetails.options.length > 0 ? productDetails.options[0].option_type : 'Default',
            typeName: selectedOption,
        };
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingCartItems.push(productToAdd);
        const updatedCartItemsJSON = JSON.stringify(existingCartItems);
        localStorage.setItem('cartItems', updatedCartItemsJSON);
    };



    useEffect(() => {
        if (productDetails && productDetails.options && productDetails.options.length > 0) {
            setSelectedOption(productDetails.options[0].option_name);
            setSelectedPrice(`${productDetails.options[0].size}-${productDetails.options[0].price}`);
        } else if (productDetails && productDetails.product) {
            setSelectedPrice(productDetails.product.price);
        }
    }, [productDetails]);






    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        const selectedOptionObj = productDetails.options.find(option => option.option_name === event.target.value);
        setSelectedPrice(`${selectedOptionObj.size}-${selectedOptionObj.price}`);
    };

    const toggleOverview = () => {
        setOverviewOpen(!overviewOpen);
    };


    const toggleSpecification = () => {
        setSpecificationOpen(!specificationOpen);
    };

    const toggleShipping = () => {
        setShippingOpen(!shippingOpen);
    };

    const togglePaymentReturns = () => {
        setPaymentReturnsOpen(!paymentReturnsOpen);
    };

    return (
        <div>
            <div className="bg-white h-auto">
                <div className="md:flex md:p-10 p-4">
                    <div className="md:flex w-full" key={productDetails.product.id}>
                        <div className="md:w-1/2 w-full">
                            {productDetails.product?.image && (
                                <img src={`https://nexiblesapp.barecms.com/uploads/${productDetails.product?.image}`} alt={productDetails.product?.name} className="w-full h-[400px]" />
                            )}

                            <div className="flex space-x-4 py-4">
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full md:ml-16 md:mt-0 mt-8">
                            <div className="md:h-[210px]">
                            <h2 className="text-gray-900 text-xl font-bold">{productDetails.product.name}</h2>
                            <p className="text-gray-900" dangerouslySetInnerHTML={{ __html: productDetails.product.description }} />
                            </div>
                            <hr className="border-gray-300 mt-4 md:mt-48" />
                            <h2 className="text-gray-900 py-3 font-semibold">Price Below is MRP (Inclusive of all taxes)</h2>


                            <div className="mb-2">
                                {productDetails.options && productDetails.options.length > 0 && (
                                    <select className="border border-gray-500 text-blue-1 rounded-lg px-4 w-full outline-none py-2" value={selectedOption} onChange={handleOptionChange}>
                                        {productDetails.options.map((option, index) => (
                                            <option key={index} value={option.option_name}>{option.option_type} - {option.option_name}</option>
                                        ))}
                                    </select>
                                )}
                            </div>
                            <div>
                                {productDetails.options && productDetails.options.length > 0 ? (
                                    <select className="border border-gray-500 text-blue-1  rounded-lg px-4 w-full outline-none py-2" value={selectedPrice} onChange={handleOptionChange}>
                                        {productDetails.options.map((option, index) => (
                                            <option key={index} value={`${option.size}-${option.price}`}>{`${option.size} - ${option.price}`}</option>
                                        ))}
                                    </select>
                                ) : (
                                    // <div className="border border-gray-500 text-blue-1 rounded-lg px-4 w-full outline-none py-2">
                                    //     &#8377;{productDetails.product.price}
                                    // </div>
                                    <div className="border border-gray-500 text-blue-1 rounded-lg px-4 w-full outline-none py-2">
                                        &#8377;{productDetails.product.price}
                                    </div>

                                )}

                            </div>

                            <div className="mt-4 md:mt-8">
                                <Link href="/my-cart">
                                    <button onClick={handleAddToCart} className="bg-[#30384E] rounded-md px-6 md:px-14 py-3 text-white text-sm md:text-sm uppercase w-full md:w-auto">
                                        add to cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr className="border-gray-300" />
                <div className="px-10">
                    <div className="flex space-x-6 py-2">
                         <div>
                          <p className="text-gray-900 cursor-pointer" onClick={toggleSpecification}>
                                {specificationOpen ? '[-]' : '[+]'}
                             </p>
                        </div>
                         <div>
                            <h3 className="text-gray-900 uppercase font-semibold text-sm cursor-pointer" onClick={toggleSpecification}>specification</h3>
                         </div>
                     </div>
                     {specificationOpen && (
                         <div className="px-12">
                             <h4 className="text-gray-900 font-semibold">{productDetails?.product?.name}</h4> <br />
                          <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi nesciunt distinctio ipsa dolore similique assumenda, nam aliquid animi quisquam error commodi a necessitatibus deserunt inventore culpa dicta sit accusamus!</p>                            <br /><br />
                         </div>
                     )}
                 </div>
                 <hr className="border-gray-300" />
                 <div className="px-10">
                     <div className="flex space-x-6 py-2">
                         <div>
                             <p className="text-gray-900 cursor-pointer" onClick={toggleShipping}>
                                 {shippingOpen ? '[-]' : '[+]'}
                             </p>
                         </div>
                         <div>
                             <h3 className="text-gray-900 uppercase font-semibold text-sm cursor-pointer" onClick={toggleShipping}>shipping</h3>
                         </div>
                     </div>
                     {shippingOpen && (
                         <div className="px-12">
                             <h4 className="text-gray-900 font-semibold">{productDetails?.product?.name}</h4> <br />
                             <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi nesciunt distinctio ipsa dolore similique assumenda, nam aliquid animi quisquam error commodi a necessitatibus deserunt inventore culpa dicta sit accusamus!</p>
                             <br /><br />
                         </div>
                     )}
                 </div>
                 <hr className="border-gray-300" />
                 <div className="px-10">
                     <div className="flex space-x-6 py-2">
                         <div>
                             <p className="text-gray-900 cursor-pointer" onClick={togglePaymentReturns}>
                                 {paymentReturnsOpen ? '[-]' : '[+]'}
                             </p>
                         </div>
                         <div>
                             <h3 className="text-gray-900 uppercase font-semibold text-sm cursor-pointer" onClick={togglePaymentReturns}>payment & returns</h3>
                         </div>
                     </div>
                     {paymentReturnsOpen && (
                        <div className="px-12">
                             <h4 className="text-gray-900 font-semibold">{productDetails?.product?.name}</h4> <br />
                             <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi nesciunt distinctio ipsa dolore similique assumenda, nam aliquid animi quisquam error commodi a necessitatibus deserunt inventore culpa dicta sit accusamus!</p>
                             <br /><br />
                         </div>
                     )}
                 </div>
                <hr className="border-gray-300" />
                <div className="px-10">
                    <div className="flex space-x-6 py-2">
                        <div>
                            <p className="text-gray-900 cursor-pointer" onClick={toggleOverview}>
                                {overviewOpen ? '[-]' : '[+]'}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-900 uppercase font-semibold text-sm cursor-pointer" onClick={toggleOverview}>overview</h3>
                        </div>
                    </div>
                    {overviewOpen && (
                        <div className="px-12">
                            <h4 className="text-gray-900 font-semibold">{productDetails?.product?.name}</h4> <br />
                            <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi nesciunt distinctio ipsa dolore similique assumenda, nam aliquid animi quisquam error commodi a necessitatibus deserunt inventore culpa dicta sit accusamus!</p>
                            <br /><br />
                        </div>
                    )}
                </div>
                <hr className="border-gray-300" />
                <br />
            </div>
        </div>
    )
}


