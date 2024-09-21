import { NextResponse } from 'next/server';
import { products } from '@/app/lib/productsData';

export async function GET() {
  return NextResponse.json(products);
}
