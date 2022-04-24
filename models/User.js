const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    TenDangNhap: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    MatKhau: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;