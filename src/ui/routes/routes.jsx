import Homepage from "../pages/Homepage";
import { MainLayout } from "../layouts/MainLayout";
import ErrorPage from "../pages/Errorpage";
import SalePage from "../pages/SalePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import FAQPage from "../pages/FAQPage";
import CartPage from "../pages/CartPage";

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
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "faq",
                element: <FAQPage />,
            },
            {
                path: "cart",
                element: <CartPage />,
            }
        ]
    }, 
]

export default routes;