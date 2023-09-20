import { useGetCartProducts } from "../../hooks/query/useCart"

export default function OrderSummary() {
    const { data } = useGetCartProducts();
    console.log(data);

    const grantTotal = data?.reduce(
        (partialSum, a) => partialSum + a.quantity * a.price,
        0
    );

    const totalDiscount = data?.reduce(
        (partialSum, a) =>
            partialSum +
            (a?.quantity * ((a?.price * a?.discountPercentage) / 100).toFixed(2)),
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
                    <span>Discount:</span> <b>${totalDiscount}</b>
                </p>
            </div>
            <div className="order-total">
                <h6>Grant Total</h6>
                <h6>${(grantTotal - totalDiscount)?.toFixed(2)}</h6>
            </div>

            <button className="button button-primary">
                Proceed to Checkout
            </button>
        </div>
    )
}