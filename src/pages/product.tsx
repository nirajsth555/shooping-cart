import { useState } from "react";
import ProductCard from "../components/product/card";
import { useGetProductList } from "../hooks/query/useProduct";
import { IProductListType } from "../types";
import Loader from "../components/loader";
import CompoundCard from "../components/product/CompoundCard";

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
                {isLoading && (
                    <div className="loader-container">
                        <Loader size="lg" />
                    </div>
                )}
                <div className="card-container">
                    {
                        products?.map((element: IProductListType, index: number) => (
                            // <ProductCard key={index} product={element} />
                            <CompoundCard clx='featured__product'>
                                <CompoundCard.Content clx={'featured__box'}>
                                    <CompoundCard.Content clx="featured__new">
                                        {element.discountPercentage}%OFF
                                    </CompoundCard.Content>
                                    <CompoundCard.Image image={element.thumbnail} />
                                </CompoundCard.Content>
                                <CompoundCard.Content clx={'featured__data'}>
                                    <CompoundCard.Content tag="h3" clx='featured__name'>{element.title}</CompoundCard.Content>
                                    <CompoundCard.Title clx={'featured__name'} title={element.title} />
                                    <CompoundCard.Price clx="featured__price" price={element.price} />
                                </CompoundCard.Content>
                            </CompoundCard>
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