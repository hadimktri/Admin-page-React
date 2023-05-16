import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/login";
import { useIsLogin } from "../../hook/authHook";

const AuthLayaout = () => {
  const [loadig, isLogin] = useIsLogin();
  return (
    <div className="limiter">
      {loadig ? (
        <h1 className="text-center">Please Wait</h1>
      ) : !isLogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayaout;
