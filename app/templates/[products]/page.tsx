"use client";

import React, { useState } from "react";
import { Product } from '@/types/productTypes';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductDetail from '@/components/sections/ProductDetails';

interface PageProps {
  params: {
    products: string;
  };
}

const BASE_URL = "http://localhost:3000/";

const fetchProductData = async (productId: string): Promise<Product> => {
  const response = await axios.get(`${BASE_URL}api/products/${productId}`);
  return response.data;
};

export default function Page({ params }: PageProps) {
  const [productId] = useState(params.products);

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductData(productId),
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100 text-center">
        <span className="loader"></span>
        <style jsx>{`
          .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #3b82f6;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  // Handle error state after loading
  if (isError) {
    return <div>Product not found</div>;
  }

  // Handle case when productData is not found (after loading)
  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      <ProductDetail product={productData} />
    </div>
  );
}
