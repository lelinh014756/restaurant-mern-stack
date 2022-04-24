const { check, validationResult } = require("express-validator");

const minLength = 6;

exports.signupValidator = [
  check("TenDangNhap").not().isEmpty().trim().withMessage("All field required"),
  check("Email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("MatKhau")
    .isLength({ min: minLength })
    .withMessage(`Password must be at least ${minLength} characters long`),
];

exports.signinValidator = [
  check("Email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("MatKhau")
    .isLength({ min: minLength })
    .withMessage(`Password must be at least ${minLength} characters long`),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({
      errorMessage: firstError,
    });
    // console.log('hasErrors:', hasErrors);
    // console.log('result:', result);
  }

  next();
};
