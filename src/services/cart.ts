import { ICartProductList, IProductListType } from "../types";
import * as storage from "./../utils/storage";

export const addToCart = (product: any) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.find(element => element.id === product.id);
            if (productExistsInCart) {
                return reject("Product already exists in cart");
            }
            product.quantity = 1;
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

export const updateProductQuantity = (product: ICartProductList) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.findIndex((element: ICartProductList) => element.id === product.id);
            if (productExistsInCart === undefined) {
                return reject("Product already exists in cart");
            }
            products[productExistsInCart].quantity = products[productExistsInCart].quantity + 1;
            storage.set("cart", products)
            resolve(true);
            return;
        } catch (err) {
            reject("Error in update product quantity");
            return;
        }
    })
}

export const decreaseProductQuantity = (product: ICartProductList) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.findIndex((element: ICartProductList) => element.id === product.id);
            if (productExistsInCart === undefined) {
                return reject("Product already exists in cart");
            }
            products[productExistsInCart].quantity = products[productExistsInCart].quantity - 1;
            storage.set("cart", products)
            resolve(true);
            return;
        } catch (err) {
            reject("Error in update product quantity");
            return;
        }
    })
}

export const getCartProducts = () => {
    return storage.get("cart");
}

export const removeProductFromCart = (product) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.find((element: ICartProductList) => element.id === product.id);
            if (!productExistsInCart) {
                return reject("Product doesnot exists in cart");
            }
            const newProducts = products.filter(element => element.id !== product.id);
            storage.set("cart", newProducts);
            // products[productExistsInCart].quantity = products[productExistsInCart].quantity + 1;
            // storage.set("cart", products)
            resolve(true);
            return;
        } catch (err) {
            reject("Error in update product quantity");
            return;
        }
    })
}