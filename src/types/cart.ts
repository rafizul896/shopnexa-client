export interface IOrderProduct {
  product: string;
  quantity: number;
  color?: string;
}

export interface IOrder {
  products: IOrderProduct[];
  coupon?: string;
  shippingAddress: string;
  paymentMethod: string;
}
