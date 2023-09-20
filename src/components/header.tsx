import { useGetCartProducts } from "../hooks/query/useCart";
import CartImage from "./image/CartImage";

export default function Header() {
    const { data } = useGetCartProducts();
    return (
        <div className="nav">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h3>Daraz</h3>
                    </div>
                    <div className="store">
                        <CartImage />
                        <div className="count">{data?.length || 0}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}