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
                <img src={product.thumbnail}></img>
            </div>

            <div className="featured__data">
                <h3 className="featured__name">{product.title}</h3>
                <div className="featured__price">${product.price}</div>
                <button className="button-add" onClick={() => addToCart(product)}>
                    Add to Cart
                    <CartImage />
                </button>
            </div>
        </div>
    )
}