'use client'
import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
import ModifierGroups from './ModifierGroups';
import QuantityDropdown from './QuantityDropdown';
import AddToCartButton from './AddToCartButton';
import Overview from './Overview';
import ReviewSection from './ReviewSection';
import RelatedProducts from './RelatedProducts';
import { toast } from 'react-toastify';
import Loader from '@/components/comman/Loader';
export default function PCCardDetails({ productDetails }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modifierGroups, setModifierGroups] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [productPrice, setProductPrice] = useState(null);
  //const [ productQuantity , setproductQuantity] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const productId = productDetails.product?.id;
    if (productId) {
      setLoading(true);
      setError(null);

      const fetchProductConfig = fetch(`${APIURL}/api/productconfig/config/${productId}`, {
        headers: {
          'Content-type': 'application/json',
          'API-Key': apiKey
        }
      })
        .then(res => res.json())
        .catch(error => ({ status: 'error', error }));

      const fetchDefaultOptions = fetch(`${APIURL}/options/${productId}`, {
        headers: {
          'Content-type': 'application/json',
          'API-Key': apiKey
        }
      })
        .then(res => res.json())
        .catch(error => ({ status: 'error', error }));

      const fetchAdditionalImages = fetch(`${APIURL}/api/productimages/${productId}`, {
        headers: {
          'Content-type': 'application/json',
          'API-Key': apiKey
        }
      })
        .then(res => res.json())
        .catch(error => ({ status: 'error', error }));

      Promise.all([fetchProductConfig, fetchDefaultOptions, fetchAdditionalImages])
        .then(([configData, defaultOptionsData, additionalImagesData]) => {
          if (configData.status === 'success' && configData.data && configData.data.length > 0) {
            // Use product config data
            const configGroups = configData.data;
            const quantities = configGroups
              .flatMap(group => group.options)
              .filter(option => option.size)
              .map(option => ({
                quantity: parseInt(option.size),
                price: parseFloat(option.price),
                option_name: option.option_name
              }))
              .sort((a, b) => a.quantity - b.quantity);

            setQuantityOptions(quantities);
            setModifierGroups(configGroups);
          } else if (defaultOptionsData.status === 'success') {
            if (defaultOptionsData.options && defaultOptionsData.options.length > 0) {
              const defaultOption = defaultOptionsData.options[0];
              const quantity = parseInt(defaultOption.size);
              const price = parseFloat(defaultOption.price);

              setQuantityOptions([{ quantity, price, option_name: defaultOption.option_name }]);
            } else {
              setProductPrice(parseFloat(defaultOptionsData.product.price));
            }
            setModifierGroups([]);
          } else {
            console.warn('No valid product configuration or options data');
          }

          if (quantityOptions.length > 0) {
            setSelectedQuantity(quantityOptions[0].quantity);
          }

          const defaultImage = productDetails?.product?.image
            ? `${APIURL}/uploads/${productDetails.product.image}`
            : null;

          const additionalImages = additionalImagesData.status === 'success' && additionalImagesData.data
            ? additionalImagesData.data.map(img => `${APIURL}/uploads/${img.image_url}`)
            : [];

          setProductImages([defaultImage, ...additionalImages].filter(Boolean));
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
          setError('Failed to load product options. Please try again later.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [productDetails?.product?.id, apiKey]);

  const priceAfterCalculation = productDetails.product.price * productDetails.product.qty;

  const toggleDropdown = (groupName) => {
    setSelectedOptions(prev => ({
      ...prev,
      [`isDropdownOpen_${groupName}`]: !prev[`isDropdownOpen_${groupName}`],
    }));
  };

  const selectOption = (groupName, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupName]: JSON.stringify(option),
      [`isDropdownOpen_${groupName}`]: false,
    }));

    const newSelectedOptions = {
      ...selectedOptions,
      [groupName]: JSON.stringify(option)
    };

    const selectedModifiers = Object.entries(newSelectedOptions)
      .filter(([key, value]) => !key.startsWith('isDropdownOpen_') && value)
      .map(([key, value]) => JSON.parse(value));

    if (selectedModifiers.length === modifierGroups.length) {
      const newQuantities = selectedModifiers.map(modifier => ({
        quantity: parseInt(modifier.size),
        price: parseFloat(modifier.price),
        option_name: modifier.option_name
      }));

      setQuantityOptions(newQuantities);

      if (newQuantities.length > 0) {
        setSelectedQuantity(newQuantities[0].quantity);
      }
    } else {
      setQuantityOptions([]);
      setSelectedQuantity(null);
    }
  };

  const allOptionsSelected = modifierGroups.every(group =>
    selectedOptions[group.name] && JSON.parse(selectedOptions[group.name]).option_name
  );

  const handleAddToCart = () => {
    if (modifierGroups.length > 0 && !allOptionsSelected) {
      toast.error('Please select all options before adding to cart');
      return;
    }

    let subtotal;
    if (productPrice !== null) {
      subtotal = productPrice;
    } else {
      subtotal = Object.entries(selectedOptions).reduce((sum, [key, value]) => {
        const parsedValue = JSON.parse(value);
        if (parsedValue && parsedValue.option_name && parsedValue.price) {
          return sum + parseFloat(parsedValue.price);
        }
        return sum;
      }, 0);
    }

    const selectedOptionsDetails = Object.entries(selectedOptions).reduce((acc, [key, value]) => {
      const parsedValue = JSON.parse(value);
      if (parsedValue && parsedValue.option_name && parsedValue.price) {
        acc[key] = {
          optionName: parsedValue.option_name,
          price: parsedValue.price,
          subtotal: parseInt(parsedValue.price),
        };
      }
      return acc;
    }, {});

    const firstImage = productImages && productImages.length > 0 ? productImages[0] : '';

    const productToAdd = {
      id: productDetails.product.id,
      name: productDetails.product.name,
      image: firstImage,
      price: priceAfterCalculation,
      selectedOptions: selectedOptionsDetails,
      quantity: productDetails.product.qty,
      totalPrice: priceAfterCalculation,
    };
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const productIndex = existingCartItems.findIndex(item => item.id === productToAdd.id);
    if (productIndex !== -1) {
      existingCartItems[productIndex].quantity += productToAdd.quantity;
      existingCartItems[productIndex].totalPrice += productToAdd.totalPrice;
    } else {
      existingCartItems.push(productToAdd);
    }

    setCartItemCount(existingCartItems.length);

    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    //toast.success('Product added to cart successfully');
  };

  if (loading) {
    return <div><Loader /></div>;
  }

  return (
    <div>
      <div className="bg-white h-auto">
        <div className="flex flex-col md:flex-row">
          <ProductImages
            productImages={productImages}
            defaultImage={productImages[0] || `https://nexiblesapp.barecms.com/uploads/${productDetails.product.image}`}
            onImageClick={() => setIsModalOpen(true)}
          />
          <div className="w-full md:w-1/2 md:ml-16 mt-8 md:mt-0 relative">
            <ProductDetails
              name={productDetails.product.name}
              description={productDetails.product.description}
              price={productPrice}
            />
            {modifierGroups.length > 0 && (
              <ModifierGroups
                modifierGroups={modifierGroups}
                selectedOptions={selectedOptions}
                toggleDropdown={toggleDropdown}
                selectOption={selectOption}
              />
            )}
            <div className='md:mt-4'></div>
            {quantityOptions.length > 0 ? (
              <QuantityDropdown
                quantityOptions={quantityOptions}
                selectedQuantity={selectedQuantity}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                setSelectedQuantity={setSelectedQuantity}
              />
            ) : productPrice !== null && (
              <div className="mb-4 flex justify-between">
                <label className="block text-lg font-semibold text-gray-700">Price</label>
                <p className="mt-1 text-lg font-semibold"> ₹ {productPrice} X {productDetails.product.qty} = {priceAfterCalculation}</p>
              </div>
            )}
            <AddToCartButton onClick={handleAddToCart} allOptionsSelected={allOptionsSelected} />
          </div>
        </div>
        <br />
        <hr className="border-gray-300" />
        <Overview productDetails={productDetails} productImages={productImages} />
        <br />
        <hr className="border-gray-300" />
        <ReviewSection productDetails={productDetails} />
        {/* <RelatedProducts /> */}
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productDetails={productDetails}
        productImages={productImages}
      />
    </div>
  );
}