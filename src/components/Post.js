import React from 'react';

function Post(prop) {
  return (
    <div class="post-layout">
      <h3>{prop.user}</h3>
      <p>{prop.post}</p>
      <hr />
    </div>
  );
}

export default Post;