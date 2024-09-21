import { NextResponse } from 'next/server';
import { products } from '@/app/lib/productsData';

export async function GET(request: Request, { params }: { params: { name: string } }) {
  const { name } = params;

  // Find the product by name (case-sensitive check)
  const product = products.find((prod) => prod.name === name);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}


// app/api/products/[name]/route.ts

// import { NextResponse } from 'next/server';
// import { products } from '@/app/lib/productsData';

// // This API route will respond to GET requests for products
// export async function GET(request: Request, { params }: { params: { name: string } }) {
//   const { name } = params;

//   // Find the product by name (case-sensitive check)
//   const product = products.find((prod) => prod.name === name);

//   if (!product) {
//     return NextResponse.json({ message: "Product not found" }, { status: 404 });
//   }

//   return NextResponse.json(product);
// }

// // Generate static paths for export if needed
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     name: product.name,
//   }));
// }
