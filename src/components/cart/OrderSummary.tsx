import { useGetCartProducts } from "../../hooks/query/useCart"
import { ICartProductList } from "../../types";

export default function OrderSummary() {
    const { data } = useGetCartProducts();

    const grantTotal = data?.reduce(
        (partialSum: number, a: ICartProductList) => partialSum + a.quantity * a.price,
        0
    );

    const totalDiscount = data?.reduce(
        (partialSum: number, a: ICartProductList) =>
            partialSum +
            (a?.quantity * ((a?.price * a?.discountPercentage) / 100)),
        0
    );

    return (
        <div className="order">
            <h5>Order Summary</h5>
            <div className="order-info">
                <p>
                    <span>
                        Selected {data?.length} item{data?.length > 1 ? "(s)" : ""}{" "}
                        Price:
                    </span>{" "}
                    <b>${grantTotal?.toFixed(2)}</b>
                </p>
                <p>
                    <span>Discount:</span> <b>${totalDiscount?.toFixed(2)}</b>
                </p>
            </div>
            <div className="order-total">
                <h6>Grant Total</h6>
                <h6>${(grantTotal - totalDiscount)?.toFixed(2)}</h6>
            </div>
        </div>
    )
}