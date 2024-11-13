'use client';
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Stage, Layer, Image as KonvaImage, Text as KonvaText, Transformer } from "react-konva";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [draggableTexts, setDraggableTexts] = useState([
    {
      id: "name",
      x: 50,
      y: 100,
      text: "",
      fontSize: 24,
      fontFamily: "Arial",
      fill: "black",
    },
    {
      id: "message",
      x: 50,
      y: 200,
      text: "",
      fontSize: 20,
      fontFamily: "Arial",
      fill: "black",
    }
  ]);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedColor, setSelectedColor] = useState("black");
  const router = useRouter();
  const [shippingCost, setShippingCost] = useState(0);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [selectedTextId, setSelectedTextId] = useState("name");

  const fonts = ["Arial", "Georgia", "Times New Roman", "Courier New", "Verdana"];
  const colors = ["black", "red", "blue", "green", "purple", "gold", "white"];

  useEffect(() => {
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    };
    loadCartItems();
  }, []);

  const loadUploadedImages = (uploadedPictures) => {
    if (!uploadedPictures) return;
    
    const imagePromises = uploadedPictures.map((picturePath) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = picturePath;
        img.onload = () => {
          resolve({
            image: img,
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            id: `uploaded-${Math.random().toString(36).substr(2, 9)}`,
            isDragging: false,
          });
        };
      });
    });

    Promise.all(imagePromises).then((loadedImages) => {
      setUploadedImages(loadedImages);
    });
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + Number(item.totalPrice),0
    );
    if (typeof window !== "undefined") {
      localStorage.setItem("subtotal", subtotal.toString());
    }
    return subtotal;
  };

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const calculateTotal = () => {
    return calculateSubtotal() + parseFloat(shippingCost);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const openModal = (imageUrl, customerName, customText, uploadedPictures) => {
    const img = new window.Image();
    img.src = `https://nexiblesapp.barecms.com/uploads/${imageUrl}`;
    img.onload = () => {
      setModalImage(img);
      setDraggableTexts([
        {
          ...draggableTexts[0],
          text: customerName || "Your Name",
          x: 150,
          y: 100
        },
        {
          ...draggableTexts[1],
          text: customText || "Your Message",
          x: 150,
          y: 200
        }
      ]);
      loadUploadedImages(uploadedPictures);
      setIsModalOpen(true);
    };
  };

  const handleTextDragEnd = (e, id) => {
    const updatedTexts = draggableTexts.map(text =>
      text.id === id ? {
        ...text,
        x: e.target.x(),
        y: e.target.y()
      } : text
    );
    setDraggableTexts(updatedTexts);
  };

  const handleImageDragEnd = (e, id) => {
    const updatedImages = uploadedImages.map(img =>
      img.id === id ? {
        ...img,
        x: e.target.x(),
        y: e.target.y(),
        isDragging: false,
      } : img
    );
    setUploadedImages(updatedImages);
  };

  const handleImageTransform = (id, newProps) => {
    const updatedImages = uploadedImages.map(img =>
      img.id === id ? {
        ...img,
        ...newProps,
      } : img
    );
    setUploadedImages(updatedImages);
  };

  const updateTextProperties = (property, value) => {
    const updatedTexts = draggableTexts.map(text =>
      text.id === selectedTextId ? {
        ...text,
        [property]: value
      } : text
    );
    setDraggableTexts(updatedTexts);
  };
  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  };
  const createOrder = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      toast.error("You need to login first");
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-20 sm:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-4 text-center lg:text-left lg:ml-14">
              Cart
            </h2>
            {cartItems.map((item, index) => (
              <div className="border border-[#db5c3c] p-4 rounded-xl" key={index}>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <h3 className="text-xl font-semibold text-[#db5c3c]">
                      {item.name || "Product Name"}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]">
                        {item.quantity || "Quantity"}
                      </button>
                      <button onClick={() => handleRemoveItem(index)} className="text-red-600">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mt-4 space-y-4 sm:space-y-0">
                    <div className="flex-1 space-y-2 w-full sm:w-auto">
                      <h3 className="font-semibold text-[#db5c3c]">Details</h3>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.productSize || "Size"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.customer_name || "Name (From)"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.custom_message || "Custom Message"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_picture || "Uploaded Picture"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_receivers || "Uploaded Receivers"}
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                      <div className="w-full sm:w-48 h-48 flex items-center justify-center rounded-xl overflow-hidden">
                        {item.image ? (
                          <img
                            src={`https://nexiblesapp.barecms.com/uploads/${item.image}`}
                            alt="Product"
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <span className="text-[#464087]">No Image</span>
                        )}
                      </div>
                      <button
                        className="mt-2 bg-[#db5c3c] text-white px-4 py-2 rounded-full font-semibold"
                        onClick={() => openModal(item.image, item.customer_name, item.custom_message, item.uploaded_pictures)}
                      >
                        View Mockup
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <div className="w-full sm:w-auto p-1  py-1 text-md rounded-xl text-sm font-semibold text-[#db5c3c] mt-4">
                      Product Price : ₹ {item.price}
                    </div>
                    <div className="w-full sm:w-auto p-1  py-1 text-md rounded-xl text-sm font-semibold text-[#db5c3c] mt-4">
                      Quantity : {item.quantity}
                    </div>
                    <div className="w-full sm:w-auto p-1  py-1 text-md rounded-xl text-sm font-semibold text-[#db5c3c] mt-4">
                      Product Total : ₹ {item.totalPrice}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
            <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
              Subtotal: ₹{calculateSubtotal()}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
                    Shipping Cost : {shippingCost || "Free"}
                  </h3>
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
                Total: ₹{calculateTotal()}
              </h2>
              <div className="flex justify-between items-center mt-4">
                <img
                  src="/Home/Proceed to Cart Illustration.svg"
                  alt="SVG"
                  className="w-28 h-40 hidden sm:block"
                />
                <button
                  onClick={createOrder}
                  className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-[5rem] w-full mb-20"
                  disabled={isProcessingOrder}
                >
                  {isProcessingOrder ? "Processing Order..." : "Proceed to Checkout"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-3xl w-full">
              <button
                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <Stage width={500} height={500} className="border rounded-lg">
                    <Layer>
                      {modalImage && (
                        <KonvaImage
                          image={modalImage}
                          width={500}
                          height={500}
                          alt="Product Mockup"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      )}
                      {uploadedImages.map((img) => (
                        <React.Fragment key={img.id}>
                          <KonvaImage
                            image={img.image}
                            x={img.x}
                            y={img.y}
                            width={img.width}
                            height={img.height}
                            draggable
                            onClick={() => setSelectedId(img.id)}
                            onDragStart={() => {
                              const updatedImages = uploadedImages.map(i =>
                                i.id === img.id ? { ...i, isDragging: true } : i
                              );
                              setUploadedImages(updatedImages);
                            }}
                            onDragEnd={(e) => handleImageDragEnd(e, img.id)}
                          />
                          {selectedId === img.id && (
                            <Transformer
                              boundBoxFunc={(oldBox, newBox) => {
                                // Limit resize
                                const minSize = 20;
                                const maxSize = 400;
                                if (
                                  newBox.width < minSize ||
                                  newBox.height < minSize ||
                                  newBox.width > maxSize ||
                                  newBox.height > maxSize
                                ) {
                                  return oldBox;
                                }
                                return newBox;
                              }}
                              onTransformEnd={(e) => {
                                const node = e.target;
                                handleImageTransform(img.id, {
                                  x: node.x(),
                                  y: node.y(),
                                  width: node.width() * node.scaleX(),
                                  height: node.height() * node.scaleY(),
                                });
                              }}
                            />
                          )}
                        </React.Fragment>
                      ))}
                      {draggableTexts.map((text) => (
                        <KonvaText
                          key={text.id}
                          text={text.text}
                          x={text.x}
                          y={text.y}
                          fontSize={text.fontSize}
                        fontFamily={text.fontFamily}
                          fill={text.fill}
                          draggable
                          onDragEnd={(e) => handleTextDragEnd(e, text.id)}
                          onClick={() => setSelectedTextId(text.id)}
                        />
                      ))}
                    </Layer>
                  </Stage>
                </div>

                <div className="w-full md:w-64 space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Select Text</label>
                    <select
                      value={selectedTextId}
                      onChange={(e) => setSelectedTextId(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      <option value="name">Name</option>
                      <option value="message">Message</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Font</label>
                    <select
                      value={draggableTexts.find(t => t.id === selectedTextId)?.fontFamily}
                      onChange={(e) => updateTextProperties("fontFamily", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      {fonts.map((font) => (
                        <option key={font} value={font}>{font}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Color</label>
                    <select
                      value={draggableTexts.find(t => t.id === selectedTextId)?.fill}
                      onChange={(e) => updateTextProperties("fill", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      {colors.map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Font Size</label>
                    <input
                      type="range"
                      min="12"
                      max="48"
                      value={draggableTexts.find(t => t.id === selectedTextId)?.fontSize}
                      onChange={(e) => updateTextProperties("fontSize", parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Uploaded Images</label>
                    <div className="space-y-2">
                      {uploadedImages.map((img, index) => (
                        <div key={img.id} className="flex items-center justify-between">
                          <span className="text-sm">Image {index + 1}</span>
                          <button
                            onClick={() => setSelectedId(img.id)}
                            className={`px-3 py-1 rounded ${
                              selectedId === img.id
                                ? 'bg-[#db5c3c] text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            Select
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedId && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Image Size</label>
                        <div className="flex gap-2">
                          <input
                            type="range"
                            min="20"
                            max="400"
                            value={uploadedImages.find(img => img.id === selectedId)?.width || 100}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              handleImageTransform(selectedId, {
                                width: value,
                                height: value,
                              });
                            }}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const updatedImages = uploadedImages.filter(img => img.id !== selectedId);
                          setUploadedImages(updatedImages);
                          setSelectedId(null);
                        }}
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <button
                      onClick={() => {
                        // Save the current state to localStorage if needed
                        const updatedCartItems = cartItems.map(item => ({
                          ...item,
                          textCustomizations: draggableTexts,
                          uploadedImageCustomizations: uploadedImages,
                        }));
                        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
                        setIsModalOpen(false);
                      }}
                      className="w-full bg-[#db5c3c] text-white py-2 rounded-lg hover:bg-[#c54c2f]"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;