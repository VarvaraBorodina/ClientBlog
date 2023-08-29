import React from 'react';

const Post = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <p>{`post: ${params.id}`}</p>
    </div>
  );
};

export default Post;
