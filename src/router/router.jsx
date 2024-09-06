import { Route, Routes, Outlet } from "react-router-dom";
import MainBanner from "../components/main_banner/MainBanner";
import Login from "../pages/login/login";
import Navbar from "../components/navbar/Navbar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="" element={<MainBanner />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
