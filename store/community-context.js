import { useEffect, useReducer, useState } from 'react';
import { fetchPosts } from '../util/http';

const { createContext } = require('react');

export const CommunityContext = createContext({
  posts: [],
  setPosts: (expenses) => {},
  addPost: ({ author, body, likes }) => {},
  deletePost: (id) => {},
  updatePost: (id, { author, body, likes }) => {},
});

function postReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatablePostIndex = state.find((post) => post.id === action.payload.id);
      const updatablePost = state[updatablePostIndex];
      const updatedItem = { ...updatablePost, ...action.payload.data };
      const updatedPosts = [...state];
      updatedPosts[updatablePostIndex] = updatedItem;
      return updatedPosts;
    case 'DELETE':
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
}

export default function CommunityContextProvider({ children }) {
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  useEffect(() => {
    async function getPosts() {
      setIsFetchingPosts(true);
      try {
        const posts = await fetchPosts();
        setPosts(posts);
        setIsFetchingPosts(false);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
    console.log('fetching rn...');
  }, []);

  const [postsState, dispatch] = useReducer(postReducer, []);
  function setPosts(posts) {
    dispatch({ type: 'SET', payload: posts });
  }

  function addPost(postData) {
    dispatch({ type: 'ADD', payload: postData });
  }

  function updatePost(id, postData) {
    dispatch({ type: 'UPDATE', payload: { id, data: postData } });
  }

  function deletePost(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  const value = {
    posts: postsState,
    addPost,
    deletePost,
    updatePost,
    setPosts,
    isFetchingPosts,
  };
  return <CommunityContext.Provider value={value}>{children}</CommunityContext.Provider>;
}
