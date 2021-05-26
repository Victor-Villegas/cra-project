import React from 'react';

function User (props) {
  return (
    <>
      {props.avatar}
      <h1>{props.name}</h1>
      <p>Hello, I have {props.age} years old. {props.description}</p>
    </>
  );
}

export default User;
