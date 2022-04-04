 //import JWT from "jsonwebtoken";
//const User = require("../models/User.model");
import Token from "../models/token.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
//import sendEmail from ""
import userModel from "../models/userModel.js"
//const JWTSecret = process.env.JWT_SECRET;
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;


/*const signup = async (data) => {
  let user = await User.findOne({ email: data.email });
  if (user) {
    throw new Error("Email already exist", 422);
  }
  user = new User(data);
  const token = JWT.sign({ id: user._id }, JWTSecret);
  await user.save();

  return (data = {
    userId: user._id,
    email: user.email,
    name: user.name,
    token: token,
  });
}; */

export const requestPasswordReset = async (email) => {
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("Email does not exist");

  let token = await Token.findOne({ userId: user._id });
  if (token) await token.deleteOne();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  //const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
  const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;

  sendEmail(
    user.email,
    "Password Reset Request",
    {
      first: user.first,
      link: link,
    },
    "./template/requestResetPassword.handlebars"
  );
  return link;
};

export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await Token.findOne({ userId });

  if (!passwordResetToken) {
    throw new Error("Invalid or expired password reset token");
  }

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }

  const hash = await bcrypt.hash(password, Number(bcryptSalt));

  await User.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await userModel.findById({ _id: userId });

  sendEmail(
    user.email,
    "Password Reset Successfully",
    {
      first: user.first,
    },
    "../utils/template/resetPassword.handlebars"
  );
  

  await passwordResetToken.deleteOne();

  return true;
};

/*module.exports = {
  signup,
  requestPasswordReset,
  resetPassword,
}; */