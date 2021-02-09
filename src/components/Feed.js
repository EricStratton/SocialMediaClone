import React from 'react';
import Post from './Post';

const userPosts = [
  {
    user: "Betty Crocker",
    post: "Today was sick"
  },
  {
    user: "Todd Senderson",
    post: "What's good"
  },
  {
    user: "Garry Squarepants",
    post: "I like snails"
  }
]

function Feed() {
  return (
    <>
    {userPosts.map((post, index) =>
        <Post
          user={post.user}
          post={post.post}
          key={index}/> 
    )}
    </>
  )
}

export default Feed;