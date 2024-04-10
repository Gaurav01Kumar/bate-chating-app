import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoder } from "./components/layout/Loader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Notfound = lazy(() => import("./pages/NotFound"));
let user = true;
const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoder/>}>
    <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
};

export default App;
