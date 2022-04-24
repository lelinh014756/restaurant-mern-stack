const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys");

exports.signupController = async (req, res) => {
  const { TenDangNhap, Email, MatKhau } = req.body;

  try {
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({
        errorMessage: "Email đã tồn tại.",
      });
    }
    const newUser = new User();
    newUser.TenDangNhap = TenDangNhap;
    newUser.Email = Email;

    const salt = await bcrypt.genSalt(10);
    newUser.MatKhau = await bcrypt.hash(MatKhau, salt);

    await newUser.save();

    res.json({
      successMessage: "Registration success. Please! signin.",
    });
  } catch (err) {
    console.log("SignUp Controller Error:", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.signinController = async (req, res) => {
  const { Email, MatKhau } = req.body;

  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(400).json({
        errorMessage: "Thông tin đăng nhập không hợp lệ.",
      });
    }
    const isMatch = await bcrypt.compare(MatKhau, user.MatKhau);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Thông tin đăng nhập không hợp lệ.",
      });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      if (err) console.log("jwt error", err);
      const { _id, TenDangNhap, Email, role } = user;

      res.json({
        token,
        user: { _id, TenDangNhap, Email, role },
      });
    });
  } catch (err) {
    console.log("SignIn Controller Error:", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};
