import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../utils/Alert";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [loadig, setLoading] = useState<boolean>();

  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
      } else {
        Alert({
          title: "sorry",
          text: "Phone with this password is not valid",
          icon: "error",
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert({
        title: "sorry",
        text: "something is happend",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <>
      {loadig ? (
        <h1 className="text-center">Please wait</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};

export default Logout;
