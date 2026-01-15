import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

export const MainLayout = () => {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  return (
    <div className="app">
      <NavigationBar cartAmount={cartAmount}/>
      <main>
        <Outlet context={[cartAmount, setCartAmount, cartItems, setCartItems]}/>
      </main>
    </div>
  );
};


