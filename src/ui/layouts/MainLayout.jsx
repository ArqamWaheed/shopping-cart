import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

export const MainLayout = () => {
  const [cartAmount, setCartAmount] = useState(0);
  return (
    <div className="app">
      <NavigationBar cartAmount={cartAmount}/>
      <main>
        <Outlet context={[cartAmount, setCartAmount]}/>
      </main>
    </div>
  );
};


