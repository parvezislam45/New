"use client";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { data: session } = useSession();  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/product/${id}/`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = async (productId) => {
    if (!session) {
      console.error("No session available. Please log in.");
      return;
    }
  
    const token = session.accessToken;
    if (!token) {
      console.error("JWT token is not available. Aborting add to cart.");
      return;
    }
  
    const csrfToken = await getCsrfToken();  // Still fetch CSRF, although now exempt
    if (!csrfToken) {
      console.error("CSRF token is null. Aborting add to cart.");
      return;
    }
  
    await addToCart(productId, token, csrfToken);
  };
  
  const addToCart = async (productId, token, csrfToken) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/add-to-cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  // Pass JWT token
          "X-CSRFToken": csrfToken,  // Still pass CSRF token if necessary
        },
        body: JSON.stringify({ product_id: productId }),  // Ensure it's 'product_id'
        credentials: "include",
      });
  
      if (!response.ok) {
        console.error("Failed to add to cart:", response.statusText);
        return;
      }
  
      const result = await response.json();
      console.log("Added to cart:", result);
    } catch (error) {
      console.error("Error during add to cart:", error);
    }
  };
  

  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
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
              <div className="h-[460px] rounded-lg mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={`http://127.0.0.1:8000${product.images}`}
                  alt={product.product_name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
              <button onClick={() => handleAddToCart("someProductId")}>
      Add to Cart
    </button>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => addToCart(product.id)}
                  >
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
                {product.product_name}
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

async function getCsrfToken() {
  try {
    const response = await fetch("http://127.0.0.1:8000/csrf/", {
      method: "GET",
      credentials: "include", // Ensure the cookies are sent
    });

    if (!response.ok) {
      console.error("Failed to fetch CSRF token:", response.statusText);
      return null;
    }

    const data = await response.json();
    console.log("CSRF Token fetched:", data.csrfToken); // Ensure the token is logged
    return data.csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return null;
  }
}
