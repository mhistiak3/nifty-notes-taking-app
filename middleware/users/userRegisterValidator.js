const { check, validationResult } = require("express-validator");

const userRegisterValidator = [
  check("username")
    .isLength({ min: 1 })
    .withMessage("username is required")
    .isAlpha("en-US", { ignore: "-" })
    .withMessage("Name must not contain anything other then alphabet")
    .trim(),
  check("email").isEmail().withMessage("Invalid email address").trim(),
  // .custom(async (email) => {
  //   try {
  //     const user = await People.find({ email });

  //     if (user.length > 0) {
  //       throw createHttpError("Email is already use");
  //     }
  //   } catch (error) {
  //     throw createHttpError(error.message);
  //   }
  // })
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 symbol & 1 number"
    ),
];
const userRagisterValidatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length > 0) {
    res.status(422).json({
      errors: mappedErrors,
    });
  } else {
    next();
  }
};
module.exports = { userRegisterValidator, userRagisterValidatorHandler };
