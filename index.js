const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
require("./config/mongoConnect");
const jwt = require("jsonwebtoken");

function getUser(token) {
  if (token) {
    const decoded = jwt.verify(token, "shhhhh");
    return decoded;
  }
  return null;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    // try to retrieve a user with the token
    const user = getUser(token);

    // add the user to the context
    return { user };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
