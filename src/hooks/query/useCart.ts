import { useQueryClient, useMutation, useQuery } from "react-query";
import { addToCart, decreaseProductQuantity, getCartProducts, updateProductQuantity } from "../../services/cart";
import { queryKey } from "../../constants/queryKey";

export const useAddProductToCart = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((product) => {
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
    const mutation = useMutation((product) => {
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
    const mutation = useMutation((product) => {
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