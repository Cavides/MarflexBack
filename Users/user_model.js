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
        "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1670819061/imagenes/person-circle_hnumte.svg",
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
      default: true,
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

userSchema.virtual('profile').get(function profile() {
  const {  name, lastName, email, avatar } = this;

  return {
    name,
    lastName,
    email,
    avatar,
  };
});


const User = model("User", userSchema);

module.exports = User;
