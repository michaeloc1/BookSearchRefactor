const { User, Book } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      // Populate the classes subdocument on every instance of Professor
      return await User.find({});
    },
  },
};

module.exports = resolvers;