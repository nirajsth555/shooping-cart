import config from "../config";
import http from "../utils/http";

export const getProductList = async (limit: number) => {
    return await http.get(config.apiEndpoints.GET_PRODUCTS_LIST, {
        params: {
            limit
        }
    })
}