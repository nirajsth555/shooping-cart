export interface IProductListType {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    cartQuantity: number;
    thumbnail: string;
    stock: number;
}

export interface ICartProductList extends IProductListType {
    quantity: number
}