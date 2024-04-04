import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Registration"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout> 
      {isRefreshing ? (
        <b>Refreshing user, please wait....</b>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
      )}
      <Toaster />
    </Layout> 
  );
}

export default App;