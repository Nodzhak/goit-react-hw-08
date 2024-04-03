import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));

function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);
  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user, please wait....</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
}

export default App;