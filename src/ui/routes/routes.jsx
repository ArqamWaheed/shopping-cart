import Homepage from "../pages/Homepage";
import { MainLayout } from "../layouts/MainLayout";
import ErrorPage from "../pages/Errorpage";
import SalePage from "../pages/SalePage";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "shop",
                element: <SalePage />,
            }
        ]
    }, 
]

export default routes;