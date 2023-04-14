import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const NoPage = React.lazy(() => import("../pages/404/NoPage"));
const App = React.lazy(() => import("../App"));
const Cars = React.lazy(() => import("../pages/cars/Cars"));
const Login = React.lazy(() => import("../pages/login/Login"));

const RouteList = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouteList;
