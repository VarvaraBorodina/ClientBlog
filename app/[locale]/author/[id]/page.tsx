import React from 'react';

const Author = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <p>{`author: ${params.id}`}</p>
    </div>
  );
};

export default Author;
