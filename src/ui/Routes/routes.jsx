import Homepage from "../pages/Homepage";
import { MainLayout } from "../layouts/MainLayout";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            }
        ]
    }, 
]

export default routes;