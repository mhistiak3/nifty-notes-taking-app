const { check, validationResult } = require("express-validator");

const userLoginValidator = [
  check("username")
    .isLength({ min: 1 })
    .withMessage("username is required")
    .isAlpha("en-US", { ignore: "-" })
    .withMessage("Name must not contain anything other then alphabet")
    .trim(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 symbol & 1 number"
    ),
];

const userLoginValidatorHandler = (req, res, next) => {

    const errors = validationResult(req)
    const mappedErrors = errors.mapped()
     if (Object.keys(mappedErrors).length > 0) {
       res.status(422).json({
         errors: mappedErrors,
       });
     } else {
       next();
     }

};

module.exports = { userLoginValidator, userLoginValidatorHandler };
