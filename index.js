const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: ID!
    name: String
    email: String
    password: String
    posts: [Post]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Post {
    id: ID!
    title: String
    author: Person
  }
 
  type Query {
    allUsers: [User]
    allPosts: []
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User! 
    updateUser(id: ID!, name: String, email: String, password: String): User!
    deleteUser(id: ID!): User!
    createPost(title: String): Post!
    updatePost(id:ID!, title: String): Post!
    deletePost(id: ID!): Post!
  }

  type Subscription { 
    newUser: User!
    updatedUser: User!
    deletedUser: User!
    newPost: Post!
    updatedPost: Post!
    deletedPost: Post!
  }
`;


  const users = []

  const posts = []

  const resolvers = {
    Query: {
      users: () => users,
      posts: () => posts
    },
  };

function createPost(){

}

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
  