import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../core/redux/actions/authCustomerActions";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/message";
import { messageSignUpCustomerSelector as messageSelector } from "../../../core/redux/selectors/authSelectors";

const SignUp = () => {
  const dispatch = useDispatch();
  const message = useSelector(messageSelector);
  let errorMsg = {};
  const initState = {
    TenDangNhap: "",
    Email: "",
    MatKhau: "",
    MatKhauNhapLai: "",
    msg: {},
  };

  const [formData, setFormData] = useState({ ...initState });

  const { TenDangNhap, Email, MatKhau, MatKhauNhapLai, msg } = formData;

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
    if (isEmpty(TenDangNhap)) {
      errorMsg.userName = "Vui lòng nhập tên đăng nhập!";
    }
    if (isEmpty(Email)) {
      errorMsg.email = "Vui lòng nhập Email!";
    }
    if (isEmpty(MatKhau)) {
      errorMsg.password = "Vui lòng nhập mật khẩu!";
    }
    if (isEmpty(MatKhauNhapLai)) {
      errorMsg.confirmPass = "Vui lòng nhập lại mật khẩu!";
    }
    if (!isEmail(Email)) {
      errorMsg.isvalidEmail = "Vui lòng nhập Email hợp lệ";
    }
    if (!equals(MatKhau, MatKhauNhapLai)) {
      errorMsg.isvalidPass = "Mật khẩu nhập lại không chính xác";
    } else {
      if (!Object.keys(errorMsg).length) {
        const { TenDangNhap, Email, MatKhau } = formData;
        const data = { TenDangNhap, Email, MatKhau };

        dispatch(signUpAction(data));
      }
    }
    setFormData({
      ...formData,
      msg: { ...errorMsg },
    });
  };
  useEffect(() => {
    if (message.success) {
      setFormData({
        ...formData,
        ...initState,
        // msg: {},
      });
    }
    // if(message.error) {
    //   // errorMsg.email = message.error
    //   setFormData({
    //     ...formData,
    //     // msg: { ...errorMsg },
    //   });
    // }
  }, [message]);
  return (
    <form className="signup-form" onSubmit={HandleSubmit} noValidate>
      {message.success && showSuccessMessage(message.success)}
      {message.error && showErrorMessage(message.error)}
      <div className="mb-2">
        <div>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="TenDangNhap"
              id="form-signup-username"
              placeholder="Tên đăng nhập"
              value={TenDangNhap}
              onChange={HandleChange}
            />
          </div>
          <div className="error-message">{msg.userName}</div>
        </div>
      </div>
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
      <div className="mb-2">
        <div>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend">
              <i className="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="MatKhauNhapLai"
              id="form-signup-confirmPass"
              placeholder="Nhập lại mật khẩu"
              value={MatKhauNhapLai}
              onChange={HandleChange}
            />
          </div>
          <div className="error-message">
            {msg.confirmPass || msg.isvalidPass}
          </div>
        </div>
      </div>
      <div className="form-group d-flex mb-2">
        <button className="btn mx-auto text-white !bg-blue-600" type="submit">
          Sign Up
        </button>
      </div>
      <p className="text-center text-white font-medium">
        Bạn đã có tài khoản?{" "}
        <Link to="/tai-khoan/dang-nhap" className="text-blue-600">
          Đăng nhập
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
