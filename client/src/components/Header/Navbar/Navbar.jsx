import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tai-khoan/dang-nhap" className="nav-link" aria-current="page">
                  Đăng nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tai-khoan/dang-ky" className="nav-link">
                  Đăng ký
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
