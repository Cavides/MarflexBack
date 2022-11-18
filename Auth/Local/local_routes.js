const { Router } = require('express');

const { isAuthenticated } = require('../auth_services');

const {
  loginUserHandler,
  changePasswordHandler,
  forgotPasswordHandler,
  veryfyAccountHandler,
  resetPasswordHandler,
} = require('./local_controller');

const {
  validateLogin,
  changePasswordValidation,
} = require('../../Users/user_joiScheme');

const router = Router();

router.post('/login', validateLogin, loginUserHandler);
router.post(
  '/change-password/:token',
  changePasswordValidation,
  changePasswordHandler
);
router.post('/forgot-password', forgotPasswordHandler);
router.get('/reset-password', isAuthenticated, resetPasswordHandler);
router.patch('/verify-account/:token', veryfyAccountHandler);

module.exports = router;