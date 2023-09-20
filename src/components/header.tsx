import CartImage from "./image/CartImage";

export default function Header() {
    return (
        <div className="nav">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h3>Daraz</h3>
                    </div>
                    <div className="store">
                        <CartImage />
                        <div className="count">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}