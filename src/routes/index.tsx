import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import Header from "../components/header";

export const AppRoutes = () => {
    const routes = [...publicRoutes];
    const element = useRoutes([...routes]);
    return (
        <div className="App">
            <Header />
            {element}
        </div>
    )

}