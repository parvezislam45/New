"use client";

import { fetchProductsByCategory } from "@/utils/Product";
import Link from "next/link";
import { useEffect, useState } from "react";



const ApparelPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apparelProducts = await fetchProductsByCategory("Apparel");
      setProducts(apparelProducts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black">Apparel</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {products.map((product) => (
         <Link key={product.id}  href={`/apparel/${product.id}`}>
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
    </div>
  );
};

export default ApparelPage;
