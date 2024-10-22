'use client'

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllPage = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from Django backend
    axios
      .get("http://127.0.0.1:8000/all/")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
    return (
        <div>
             <h1>Products</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {products.map((product) => (
         <Link key={product.id}  href={`/all/${product.id}`}>
          <div  className="bg-white">
             <img
               className=" p-8"
               src={product.images}
               alt={product.product_name}
             />
           <div className="">
             <div className="flex items-center justify-between px-12 -mt-5">
               <h4 className="text-md font-bold text-gray-900">
                 Maerad {product.product_name}
               </h4>
               <h4 className="text-black text-md font-bold">
                 $ 54-0 - $ 90.0
               </h4>
             </div>
             <p className="text-md font-medium px-12">{product.category}</p>
           </div>
         </div>
         </Link>
         
     ))}
        </div>
        </div>
    );
};

export default AllPage;