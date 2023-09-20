import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";
import { useGetCartProducts } from "../hooks/query/useCart";
import { ICartProductList } from "../types";

export default function Cart() {
    const { data } = useGetCartProducts();

    return (
        <div className="container">
            <div className="cart-details">
                <h4>Cart</h4>
                <div className="cart-wrap">
                    <div className="cart-left">
                        {data?.map((element: ICartProductList) => <CartList product={element} />)}
                    </div>
                    <div className="cart-right">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}