const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usersResolvers = {
  Mutation: {
    signup: async (parent, { user }) => {
      user.password = await bcrypt.hash(user.password, 10);
      const newUser = await User.create(user);
      const token = jwt.sign({ id: newUser._id }, "shhhhh");
      return { token };
    },
    signin: async (parent, { googleId, email, password }) => {
      let user = await User.findOne({ email });
      if (user) {
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
          user = null;
        }
      }

      if (googleId) {
        user = await User.findOne({ googleId });
      }

      if (user) {
        const token = jwt.sign({ id: user._id }, "shhhhh");
        return { token };
      } else {
        return null;
      }
    },
  },
};

module.exports = {
  usersResolvers,
};
