const jwt = require('jsonwebtoken');

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  return console.error('Missing arguments');
}

const signToken = (payload, secret) => {
  return jwt.sign(payload, secret);
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

if (option === 'sign') {
  console.info(signToken({ sub: nameOrToken }, secret));
} else if (option === 'verify') {
  console.info(verifyToken(nameOrToken, secret));
} else {
  console.error('Options needs to be "sign"or "verify"');
}
