import { useAddProductToCart } from "../../hooks/query/useCart";
import { IProductListType } from "../../types";
import CartImage from "../image/CartImage";

type TProductCardProps = {
    product: IProductListType
}

export default function ProductCard({ product }: TProductCardProps) {
    const { mutateAsync: addToCart } = useAddProductToCart();


    return (
        <div className="featured__product">
            <div className="featured__box">
                {product.discountPercentage > 0 &&
                    <div className="featured__new">
                        {product.discountPercentage}%OFF
                    </div>
                }
                <div
                    className="featured__cart"
                    title="Add to cart"
                    onClick={() => addToCart(product)}
                >
                    <CartImage />
                </div>
                <img src={product.thumbnail}></img>
            </div>

            <div className="featured__data">
                <h3 className="featured__name">{product.title}</h3>
                <div className="featured__price">Rs.{product.price}</div>
            </div>
        </div>
    )
}