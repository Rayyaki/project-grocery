import { Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import NotFound from "../page/NotFound";
import ProtectedPage from "./ProtectedPage";
import Dummy from "../page/Dummy";
import Home from "../page/LandingPage";
import VerifyPage from "../page/VerifyPage";
import HomeAdmin from "../page/HomeAdmin";
import Dashboard from "../page/Dashboard";
import Login from "../components/Login";
import NotFoundComp from "../components/NotFoundComp";
import LandingPage from "../page/LandingPage";

const routes = [
  <Route
    path="/dashboard"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <Dashboard />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <LandingPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true}>
        <LoginPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/register"
    element={
      <ProtectedPage guestOnly={true}>
        <RegisterPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/verify/:token"
    element={
      <ProtectedPage>
        <VerifyPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/*"
    element={
      <ProtectedPage guestOnly={true} needLogin={true} adminOnly={true}>
        <NotFoundComp />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/dummy"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <Dummy />
      </ProtectedPage>
    }
  ></Route>,

  // <Route path="/home" element={<Home />}></Route>,
  // <Route path="/homeadmin" element={<HomeAdmin />}></Route>,
  // <Route path="/" element={<Dummy />}></Route>,
  // <Route path="/login" element={<LoginPage />}></Route>,
  // <Route path="/register" element={<RegisterPage />}></Route>,
  // <Route path="/verify/:token" element={<VerifyPage />}></Route>,
  // <Route path="/*" element={<NotFound />}></Route>,
];

export default routes;
