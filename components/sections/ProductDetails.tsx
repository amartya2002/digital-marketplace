/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Star, ShoppingCart, Play, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Product } from '@/types/productTypes';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

    const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
    const getAvatarColor = (name: string) => {
        const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];
        return colors[name.length % colors.length];
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
            <Card className="max-w-7xl mx-auto overflow-hidden dark:bg-gray-800 shadow-none border-none">
                <div className="md:flex">
                    <div className="md:w-1/2 p-6 lg:p-8">
                        <img
                            src={product.image || '/fallback-image.png'} // Use a fallback image
                            alt={product.name}
                            className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                        />
                    </div>
                    <CardContent className="md:w-1/2 p-6 lg:p-8 space-y-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">{product.name}</h1>
                            <div className="flex items-center space-x-2 mb-4">
                                {product.category && (
                                    <Badge variant="secondary" className="text-sm">{product.category}</Badge>
                                )}
                                {product.genre && (
                                    <Badge variant="outline" className="text-sm dark:border-gray-600 dark:text-gray-300">{product.genre}</Badge>
                                )}
                            </div>
                        </div>
                        <p className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
                        <div className="flex space-x-4">
                            <Button className="w-1/2" size="lg">
                                <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
                            </Button>
                            <Button variant="outline" className="w-1/2" size="lg">
                                <Play className="mr-2 h-5 w-5" /> Live Demo
                            </Button>
                        </div>
                        {product.figmaFileIncluded && (
                            <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
                                <Check className="w-5 h-5 mr-2" />
                                Figma file included for easy customization!
                            </div>
                        )}
                    </CardContent>
                </div>

                <Separator className="my-8 dark:border-gray-700 bg-zinc-100" />

                <CardContent className="p-6 lg:p-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Specifications</h2>
                        <ul className="space-y-2">
                            {product.createdBy && (
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Created By</span>
                                    <span className="font-medium dark:text-gray-200">{product.createdBy}</span>
                                </li>
                            )}
                            {product.creationDate && (
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Creation Date</span>
                                    <span className="font-medium dark:text-gray-200">{product.creationDate}</span>
                                </li>
                            )}
                            {product.otherSpecifications && Object.entries(product.otherSpecifications).map(([key, value]) => (
                                <li key={key} className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">{key.replace(/([A-Z])/g, ' $1')}</span>
                                    <span className="font-medium dark:text-gray-200">{value.toString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Components Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {product.componentsUsed?.map((component, index) => (
                                <Badge key={index} variant="secondary" className="text-sm py-1 px-2">{component}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>

                <Separator className="my-8 dark:border-gray-700 bg-zinc-100" />

                <CardContent className="p-6 lg:p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Customer Reviews</h2>
                    <div className="space-y-6">
                        {product.reviews?.map((review, index) => (
                            <Card key={index} className="p-4 transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600 shadow-none border-none">
                                <div className="flex items-start space-x-4">
                                    <Avatar className={`w-12 h-12 ${getAvatarColor(review.reviewer || '')}`}>
                                        <AvatarFallback>{getInitials(review.reviewer || 'Unknown')}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{review.reviewer || 'Anonymous'}</span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-5 w-5 ${i < (review.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{review.comment || 'No comment'}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductDetail;
