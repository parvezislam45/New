"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/product/${id}/`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err); // Set error state for rendering
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error fetching product details: {error.message}</div>; // Informative error message
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white text-black py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="md:flex-1">
              <div className="h-[460px] rounded-lg  mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={`http://127.0.0.1:8000${product.images}`}
                  alt={product.product_name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-4xl font-bold text-gray-950 mb-2">
                Maerad {product.product_name}
              </h2>
              <div className="mr-4 mt-3">
                <span className="font-bold text-gray-950">Price:</span>
                <span className="text-gray-950 mx-5 text-xl font-black">
                  ${product.price}.00
                </span>
              </div>
              <div className="mt-5">
                <span className="font-bold text-gray-950">Availability:</span>
                <span className="text-gray-950 mx-5">In Stock</span>
              </div>
              <div className="mt-4">
                <span className="font-bold text-gray-950">Select Size:</span>
                <div className="flex items-center mt-4">
                  <button className="bg-gray-950 text-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-950 text-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-950 text-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-950 text-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-950 text-gray-100 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-bold text-gray-950 text-xl">
                  Product Description:
                </span>
                <p className="text-gray-950 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
