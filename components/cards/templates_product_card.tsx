/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import { Product } from '@/types/productTypes';


const ProductCard: FC<Product> = ({ name, genre, price, image }) => {
  return (
    <div className="max-w-xs mx-auto bg-white overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative group">
        {/* Image */}
        <div className='border p-1 rounded-lg gradient-bg'>
          <img
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-72 h-48 object-cover rounded-lg "
          />
        </div>


        {/* Genre Badge */}
        <div className="absolute top-3 right-3 bg-zinc-800 text-white px-3 py-1 rounded">
          <p className="text-xs">{genre}</p>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl border-4 border-red-50">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">{name}</h4>
            <p className="text-sm text-gray-200 p-4">A mini description has to come here, it is important, and shows how important our product is, and how much value it can add. A short but crisp description is all it takes. </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Flexbox container for Name and Price */}
        <div className="flex justify-between items-center mb-1">
          {/* Product Name on the Left */}
          <h3 className="text-md font-semibold text-zinc-900">
            {name}
          </h3>

          {/* Product Price on the Right */}
          <p className="text-md text-zinc-600">
            ${price}
          </p>
        </div>

        {/* Theme Details Link below */}
        <div>
          <Link href={`/templates/${name}`} className="text-sm text-zinc-500 hover:text-blue-500 transition duration-300">
            Theme Details &#10143;
          </Link>
        </div>
      </div>


    </div>
  );
};

export default ProductCard;