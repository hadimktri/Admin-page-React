import { useLocation } from "react-router-dom";
import "./App.css";
import AdminContent from "./layouts/admin";
import AuthLayaout from "./layouts/auth/AuthLayaout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/auth") ? <AuthLayaout /> : <AdminContent />}
    </>
  );
}

export default App;
