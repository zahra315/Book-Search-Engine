const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: String!
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input inputBook {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: inputBook): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
