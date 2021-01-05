// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Product = {
  productName: string;
  productDescription: string;
  price: number;
  quantity: number;
  sizetypecolor: string;
  sku: string;
  slug: string;
  website: string;
  sys: {
    id: string;
  };
};

export type Story = {
  storyName: string;
  storyShortDescription: string;
  storyLongDescription: {
    json: any;
  };
  slug: string;
  coverImage: {
    url: string;
  };
  sys: {
    id: string;
  };
};
