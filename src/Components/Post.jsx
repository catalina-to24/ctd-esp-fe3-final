import React from "react";

const Post = ({ user }) => {
  const { name } = user;
  return (
    <>
       <h3>Gracias {name}, te contactaremos cuanto antes via email. </h3>
    </>
  );
};

export default Post;