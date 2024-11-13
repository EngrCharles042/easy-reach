import { useRoutes } from "react-router-dom";
import { AuthenticationRoutes } from "./AppRoutes";

const Routes = () => useRoutes([AuthenticationRoutes]);

export default Routes;
