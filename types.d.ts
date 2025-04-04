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
  title?: string | null | undefined;
  category?:  string | null | undefined;
  description?:  string | null | undefined;
  features?:  string | null | undefined;
  featuredDesc?:  string | null | undefined;
  isNew?: boolean | undefined | null;
  inclusions?: InclusionType[] | undefined | null;
  image?: ProductImageType | undefined | null;
  price?: number | undefined | null;
}

type ProductDBType = Product & {
  images?: ImageSet[];
  inclusions?: Inclusion[];
}
