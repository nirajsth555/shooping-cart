import { useDecreaseProductQuantity, useUpdateProductQuantity } from "../../hooks/query/useCart";
import DeleteImage from "../image/DeleteImage";

export default function CartList({ product }: any) {
    const { mutateAsync: addQuantity } = useUpdateProductQuantity();
    const { mutateAsync: decreaseQuantity } = useDecreaseProductQuantity();
    return (
        <div className="cardList">
            <div className="cardList-left">
                <div className="cardList-image">
                    <div className="img-box">
                        <img src={product?.thumbnail} />
                    </div>
                    <div className="remove">
                        <DeleteImage />
                    </div>
                </div>
                <div className="cardList-details">
                    <h6>{product?.title}</h6>
                    <div className="qty">
                        <p>Qty: {product?.quantity}</p>
                        <div className="qty-total">
                            <button
                                className="increment"
                                type="button"
                                onClick={() => decreaseQuantity(product)}
                                disabled={product?.quantity === 1}
                            >
                                -
                            </button>
                            <button
                                className="increment"
                                type="button"
                                onClick={() =>
                                    addQuantity(product)}
                                disabled={product?.stock === product?.quantity}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="price">Price: NPR {product?.price}</div>
                </div>
            </div>
            <div className="cardList-right">
                <h5>
                    Sub Total: NPR
                    {(product?.price * product?.quantity)}
                </h5>
                <h5>
                    Sub Total Discount: NPR
                    {(((product?.price * product?.discountPercentage) / 100) * product?.quantity).toFixed(2)}
                </h5>
            </div>
        </div>
    )
}