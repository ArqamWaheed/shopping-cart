import Homepage from "../pages/Homepage";
import { MainLayout } from "../layouts/MainLayout";
import ErrorPage from "../pages/Errorpage";

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
                element: null,
            }
        ]
    }, 
]

export default routes;