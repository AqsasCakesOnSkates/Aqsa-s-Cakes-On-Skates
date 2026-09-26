export type DietaryType = 'eggless' | 'egg' | 'keto' | 'gluten-free';

export type ProductCategory =
  | 'all'
  | 'bestsellers'
  | 'recipes'
  | 'bombolone'
  | 'cheesecakes'
  | 'cakes'
  | 'bento'
  | 'pastries'
  | 'breads'
  | 'macarons'
  | 'cookies'
  | 'brownies'
  | 'healthy'
  | 'tubs';

export interface Product {
  id: string;
  name: string;
  category: string;
  dietary: DietaryType;
  price: number;
  description: string;
  image: string;
  badge?: string;
  portionNote?: string;
  sizes?: { label: string; price: number }[];
  isChefSpecial?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  unitPrice: number;
  selectedSize?: { label: string; price: number };
}

export interface CustomerDetails {
  fullName: string;
  mobileNumber: string;
  deliveryAddress: string;
  deliveryDate: string;
  timeSlot: string;
  chefNotes?: string;
}

export interface Order {
  orderId: string;
  timestamp: string;
  customer: CustomerDetails;
  items: CartItem[];
  totalAmount: number;
  utrNumber: string;
  status: 'confirmed' | 'pending';
  paymentMethod: 'UPI_DIRECT';
  // Optional convenience aliases
  id?: string;
  createdAt?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
