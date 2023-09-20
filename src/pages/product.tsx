import { useState } from "react";
import ProductCard from "../components/product/card";
import { useGetProductList } from "../hooks/query/useProduct";
import { IProductListType } from "../types";

export default function Product() {
    const [limit, setLimit] = useState(8);
    const { products, isLoading } = useGetProductList(limit);

    const increaseLimit = () => {
        const newLimit = limit + 4;
        setLimit(newLimit);
    }

    return (
        <div className="container">
            <div className="home">
                <h2>Products</h2>
                <div className="card-container">
                    {
                        products?.map((element: IProductListType, index: number) => (
                            <ProductCard key={index} product={element} />
                        ))
                    }
                </div>
                {!isLoading && <div className="show-more">
                    <button className="button button-primary" onClick={increaseLimit}>
                        Show More
                    </button>
                </div>}
            </div>
        </div>
    )
}