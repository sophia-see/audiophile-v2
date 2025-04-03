interface CreateUserParams {
  clerkId: string
  firstName: string
  lastName: string
  email: string
}

interface UpdateUserParams {
  firstName: string
  lastName: string
}

interface DeleteUserParams {
  id: string
}

interface ImageType {
  base?: string;

  gallery?: string[];
  preview: string;
  full: string;

}

interface InclusionType {
  quantity: number;
  name: string;
}

interface ItemType {
  id: string;
  isNew?: boolean;
  title: string;
  featuredDesc?: string;
  description: string;
  image: ImageType;
  features: string;
  inclusions: InclusionType[];
  price: number;
}

interface ProductImageType {
  desktop: ImageType;
  tablet: ImageType;
  mobile: ImageType;
}

interface ProductType {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string;
  featuredDesc?: string;
  isNew?: boolean;
  inclusions: InclusionType[];
  image: ProductImageType;
  price: number;
}