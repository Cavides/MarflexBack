const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = process.env;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1665526729/imagenes/monki-monkey_kixf6d.gif",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },

    passwordResetActivationToken: String,
    passwordResetActivationExpires: Date,
  },

  {
    timestamps: true,
  }
);

//methods

userSchema.pre("save", async function save(next) {
  const user = this;

  try {
    if (!user.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(Number(SALT_ROUNDS));
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (e) {
    next(e);
  }
});

userSchema.methods.comparePassword = async function comparepassword(
  enteredPassword,
  next
) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(enteredPassword, user.password);
    return isMatch;
  } catch (e) {
    next(e);
    return false;
  }
};

const User = model("User", userSchema);

module.exports = User;
