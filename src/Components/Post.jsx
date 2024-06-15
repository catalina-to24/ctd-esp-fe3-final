import React from "react";

export const Post = ({ user }) => {
  const { name } = user;
  return (
    <div>
      <h3>Gracias {name}, te contactaremos cuanto antes via email. </h3>
    </div>
  );
};


export default Post;
