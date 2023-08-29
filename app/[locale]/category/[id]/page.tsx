import React from 'react';

const Category = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <p>{`category: ${params.id}`}</p>
    </div>
  );
};

export default Category;
