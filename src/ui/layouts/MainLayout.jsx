import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar";

export const MainLayout = () => {
  return (
    <div className="app">
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};