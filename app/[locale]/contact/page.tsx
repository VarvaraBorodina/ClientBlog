import React from 'react';

const Contact = () => {
  const t = [];
  for (let i = 0; i < 10_000; i += 1) {
    t.push(i);
  }
  return (
    <div>
      {t.map(() => (
        <p>Contact</p>
      ))}
      <p>Contact</p>
    </div>
  );
};

export default Contact;
