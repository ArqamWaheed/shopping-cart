import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import { useState, useEffect } from "react";
import LoadingPage from "../pages/LoadingPage";

export const MainLayout = () => {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToPreload = [
      new URL('../../assets/Wallpaper.png', import.meta.url).href
    ];

    const preloadImages = imagesToPreload.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; 
      });
    });

    Promise.all(preloadImages).then(() => {
    });
  }, []);

  if (isLoading) {
    return <LoadingPage onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="app">
      <NavigationBar cartAmount={cartAmount}/>
      <main>
        <Outlet context={[cartAmount, setCartAmount, cartItems, setCartItems]}/>
      </main>
    </div>
  );
};


