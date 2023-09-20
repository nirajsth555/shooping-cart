import { IProductListType } from "../types";
import * as storage from "./../utils/storage";

export const addToCart = (product: any) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.find(element => element.id === product.id);
            if (productExistsInCart) {
                return reject("Product already exists in cart");
            }
            products.push(product);
            storage.set("cart", products);
            resolve(true);
            return;
        } catch (err) {
            reject("Error in add product to cart");
            return;
        }
    })

}

export const getCartProducts = () => {
    return storage.get("cart");
}

export const removeProductFromCart = (productId: string) => {

}