import { PUBLIC_ROUTES } from "../constants/routes";
import { useGetCartProducts } from "../hooks/query/useCart";
import CartImage from "./image/CartImage";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { data } = useGetCartProducts();
    const navigate = useNavigate();
    return (
        <div className="nav">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h3 onClick={() => navigate(PUBLIC_ROUTES.HOME)}>Daraz</h3>
                    </div>
                    <div className="store" onClick={() => navigate(PUBLIC_ROUTES.CART)}>
                        <CartImage />
                        <div className="count">{data?.length || 0}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}