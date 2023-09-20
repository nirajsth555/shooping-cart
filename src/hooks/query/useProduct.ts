import { queryKey } from "../../constants/queryKey"
import { useQuery } from "react-query";
import { getProductList } from "../../services/product";

export const useGetProductList = (limit = 10) => {
    const key = [queryKey.PRODUCTS, limit];
    const query = useQuery(key, () => getProductList(limit), {
        keepPreviousData: true
    });
    const products = query?.data?.data?.products;
    return {
        ...query,
        products
    }
}
