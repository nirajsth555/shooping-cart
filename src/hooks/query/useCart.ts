import { useQueryClient, useMutation, useQuery } from "react-query";
import { addToCart, decreaseProductQuantity, getCartProducts, removeProductFromCart, updateProductQuantity } from "../../services/cart";
import { queryKey } from "../../constants/queryKey";
import { ICartProductList, IProductListType } from "../../types";

export const useAddProductToCart = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((product: IProductListType) => {
        return addToCart(product)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.CART)
        }
    });
    return {
        ...mutation
    }
}

export const useGetCartProducts = () => {
    const key = [queryKey.CART];
    const query = useQuery(key, () => getCartProducts());
    return {
        ...query
    }
}

export const useUpdateProductQuantity = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((product: ICartProductList) => {
        return updateProductQuantity(product)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.CART)
        }
    });
    return {
        ...mutation
    }
}

export const useDecreaseProductQuantity = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((product: ICartProductList) => {
        return decreaseProductQuantity(product)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.CART)
        }
    });
    return {
        ...mutation
    }
}

export const useRemoveProductFromCart = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((product: ICartProductList) => {
        return removeProductFromCart(product)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.CART)
        }
    });
    return {
        ...mutation
    }
}