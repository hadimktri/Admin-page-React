import AdminContextContainer from "../../assets/context/adminLayoutContext";
import Content from "../../pages/Content";
import Header from "./header";
import Sidebar from "./sidebar/Index";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hook/authHook";

const AdminContent = () => {
  const [loadig, isLogin] = useIsLogin();
  return (
    <AdminContextContainer>
      {loadig ? (
        <h1>Please Wait</h1>
      ) : isLogin ? (
        <>
          <Content />
          <Header />
          <Sidebar />
        </>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};
export default AdminContent;
