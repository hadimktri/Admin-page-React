import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar fixed-top top_navbar py-0">
      <div className="container-fluid h-100">
        <div className="left_content h-100 ps-2 ">
          <a className="navbar-brand h-100" href="/">
            <img src="./src/assets/images/logo.png" className="h-100" />
          </a>
        </div>

        <div className="right_content position-relative">
          <i className="fas fa-search fa-2x mx-3 pointer"></i>

          <i className="far fa-bell fa-2x mx-3 pointer position-relative">
            <span className="alarm_count">4</span>
          </i>

          <i
            className="fas fa-grip-vertical fa-2x mx-4 pointer"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>

          <ul
            className="dropdown-menu mini_menu mt-2"
            aria-labelledby="dropdownMenuButton1"
          >
            <li className="my-2">
              <a className="dropdown-item d-block text-center fw-bold">
                Hadi Mokhtari
              </a>
            </li>
            <li className="my-2 d-flex justify-content-center align-items-center px-2">
              <a className="dropdown-item" href="#">
                Dashboard
              </a>
              <i className="fas fa-tachometer-alt"></i>
            </li>
            <li className="my-2 d-flex justify-content-center align-items-center px-2">
              <a className="dropdown-item" href="#">
                Tickets
              </a>
              <i className="fas fa-paper-plane"></i>
            </li>
            <li className="my-2 d-flex justify-content-center align-items-center px-2">
              <a className="dropdown-item" href="#">
                Messages
              </a>
              <i className="fas fa-envelope"></i>
            </li>
            <hr />
            <li className="d-flex justify-content-center align-items-center px-2">
              <Link className="dropdown-item" to={"/logout"}>
                Logout
              </Link>
              <i className="fas fa-power-off"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
