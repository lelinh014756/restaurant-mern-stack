import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../core/redux/actions/authCustomerActions";
import { showErrorMessage } from "../../../helpers/message";
import { messageSignInCustomerSelector as messageSelector } from "../../../core/redux/selectors/authSelectors";

const SignIn = () => {
  const dispatch = useDispatch();
  const message = useSelector(messageSelector);
  let errorMsg = {};
  const initState = {
    Email: "",
    MatKhau: "",
    msg: {},
    redirectToDashboard: false,
  };

  const [formData, setFormData] = useState({ ...initState });

  const { Email, MatKhau, msg, redirectToDashboard } = formData;

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // e.target.classList.add("was-validated");
    if (isEmpty(Email)) {
      errorMsg.email = "Vui lòng nhập Email!";
    }
    if (isEmpty(MatKhau)) {
      errorMsg.password = "Vui lòng nhập mật khẩu!";
    }
    if (!isEmail(Email)) {
      errorMsg.isvalidEmail = "Vui lòng nhập Email hợp lệ";
    } else {
      if (!Object.keys(errorMsg).length) {
        const { Email, MatKhau } = formData;
        const data = { Email, MatKhau };
        dispatch(signInAction(data));
      }
    }
    setFormData({
      ...formData,
      msg: { ...errorMsg },
    });
  };
  return (
    <section id="signin">
      <form className="signin-form" noValidate onSubmit={HandleSubmit}>
        {message.error && showErrorMessage(message.error)}
        <div className="mb-2">
          <div>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                name="Email"
                id="form-signup-email"
                placeholder="Email"
                value={Email}
                onChange={HandleChange}
              />
            </div>
            <div className="error-message">{msg.email || msg.isvalidEmail}</div>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="MatKhau"
                id="form-signup-password"
                placeholder="Mật khẩu"
                value={MatKhau}
                onChange={HandleChange}
              />
            </div>
            <div className="error-message">{msg.password}</div>
          </div>
        </div>
        <div className="form-group d-flex mb-2">
          <button className="btn mx-auto text-white !bg-blue-600" type="submit">
            Sign In
          </button>
        </div>
        <p className="text-center text-white font-medium">
          Bạn chưa có tài khoản?{" "}
          <Link to="/tai-khoan/dang-ky" className="text-blue-600">
            Đăng ký
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignIn;
