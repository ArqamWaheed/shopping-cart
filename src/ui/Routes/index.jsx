import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";

const routes = [
    {
        path: "/",
        element: <Homepage />,
    }, 
    {
        path: "shop",
        element: null,
    },
]

const router = createBrowserRouter(routes);
export default router;
