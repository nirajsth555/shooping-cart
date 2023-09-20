import { storageKey } from "../constants/storageKey";
import { ICartProductList, IProductListType } from "../types";
import * as storage from "./../utils/storage";

export const addToCart = (product: IProductListType) => {
    return new Promise((resolve, reject) => {
        try {
            const products = storage.get("cart") || [];
            const productExistsInCart = products?.find((element: IProductListType) => element.id === product.id);
            if (productExistsInCart) {
                return reject("Product already exists in cart");
            }
            product.quantity = 1;
            products.push(product);
            storage.set(storageKey.CART, products);
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
            const products = getCartProducts();
            const productIndex = products?.findIndex((element: ICartProductList) => element.id === product.id);
            if (productIndex === -1) {
                return reject("Product already exists in cart");
            }
            products[productIndex].quantity = products[productIndex].quantity + 1;
            storage.set(storageKey.CART, products)
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
            const products = getCartProducts();
            const productIndex = products?.findIndex((element: ICartProductList) => element.id === product.id);
            if (productIndex === -1) {
                return reject("Product already exists in cart");
            }
            products[productIndex].quantity = products[productIndex].quantity - 1;
            storage.set(storageKey.CART, products)
            resolve(true);
            return;
        } catch (err) {
            reject("Error in update product quantity");
            return;
        }
    })
}

export const getCartProducts = () => {
    return storage.get(storageKey.CART) || [];
}

export const removeProductFromCart = (product: ICartProductList) => {
    return new Promise((resolve, reject) => {
        try {
            const products = getCartProducts();
            const productExistsInCart = products?.find((element: ICartProductList) => element.id === product.id);
            if (!productExistsInCart) {
                return reject("Product doesnot exists in cart");
            }
            const newProducts = products.filter((element: ICartProductList) => element.id !== product.id);
            storage.set("cart", newProducts);
            resolve(true);
            return;
        } catch (err) {
            reject("Error in update product quantity");
            return;
        }
    })
}