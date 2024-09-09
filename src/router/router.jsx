import { Route, Routes, Outlet } from "react-router-dom";
import MainBanner from "../components/main_banner/MainBanner";
import Login from "../pages/login/login";
import Navbar from "../components/navbar/Navbar";
import Benefits from "../components/benefits/Benefits";

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
        <Route
          path=""
          element={
            <>
              <MainBanner />
              <Benefits />
            </>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
