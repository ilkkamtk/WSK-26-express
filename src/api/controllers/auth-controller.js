import {findUserByUsername} from '../models/user-model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const postLogin = async (req, res) => {
  const {username, password} = req.body;
  const user = await findUserByUsername(username);
  if (!user) {
    res.sendStatus(401);
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.sendStatus(401);
    return;
  }

  delete user.password;

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '24h', // token expiration time, e.g. 24 hours, can be configured in .env too
  });

  res.json({user, token});
};

export {postLogin};
