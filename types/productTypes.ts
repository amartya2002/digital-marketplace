// types/productTypes.ts

export interface Review {
  reviewer?: string; // Optional
  rating?: number; // Optional
  comment?: string; // Optional
}

export interface OtherSpecifications {
  framework?: string; // Optional
  cssFramework?: string; // Optional
  responsive?: boolean; // Optional
  documentationIncluded?: boolean; // Optional
  fileFormat?: string; // Optional
  fileSize?: string; // Optional
}

export interface Product {
  id?: number; // Optional
  productUrl?: string; // Optional
  name?: string; // Optional
  price?: number; // Optional
  category?: string; // Optional
  createdBy?: string; // Optional
  creationDate?: string; // Optional
  genre?: string; // Optional
  noOfPages?: number; // Optional
  noOfSections?: number; // Optional
  noOfComponents?: number; // Optional
  image?: string; // Optional
  description?: string; // Optional
  figmaFileIncluded?: boolean; // Optional
  componentsUsed?: string[]; // Optional
  otherSpecifications?: OtherSpecifications; // Optional
  reviews?: Review[]; // Optional
}
