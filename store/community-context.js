const { createContext } = require('react');

const CommunityContext = createContext({
  posts: [],
  setPosts: (expenses) => {},
  addPost: ({ author, body, reactions }) => {},
  deletePost: (id) => {},
  updatePost: (id, { author, body, reactions }) => {},
});
