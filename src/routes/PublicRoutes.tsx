import { PUBLIC_ROUTES } from "../constants/routes";
import Cart from "../pages/cart";
import Product from "../pages/product";

export const publicRoutes = [
    {
        path: PUBLIC_ROUTES.HOME,
        element: <Product />
    },
    {
        path: PUBLIC_ROUTES.CART,
        element: <Cart />
    }
]