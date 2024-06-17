import React from "react";

export const Post = ({ user }) => {
  const { name } = user;
  return (
    <div>
      <h3>Thanks {name}, We will contact you as soon as possible! </h3>
    </div>
  );
};


export default Post;
