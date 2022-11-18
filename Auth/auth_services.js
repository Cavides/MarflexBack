const jwt = require('jsonwebtoken');

const { getUserByEmail } = require('../Users/user_services');


const { key } = process.env;

async function verifyToken(token) {
  try {
    const payload = await jwt.verify(token, key);
    return payload;
  } catch (e) {
    return null;
  }
}

async function signToken(payload) {
  const token = await jwt.sign(payload, key, { expiresIn: '3h' });
  return token;
}

async function isAuthenticated(req, res, next) {
  const auth = req.headers ? req.headers.authorization : null;

  if (!auth) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = auth.split(' ')[1];
  const decoded = await verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'unAuthorized' });
  }
  const { email } = decoded;
  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  req.user = user;

  console.log(
    '🚀 ~ file: auth.services.js ~ line 49 ~ isAuthenticated ~ user',
    user
  );
  next();
  return null;
}

module.exports = {
  isAuthenticated,
  signToken,
  verifyToken,
};