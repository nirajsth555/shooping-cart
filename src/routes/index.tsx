import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes"

export const AppRoutes = () => {
    const routes = [...publicRoutes];
    const element = useRoutes([...routes]);
    return <>{element}</>
}