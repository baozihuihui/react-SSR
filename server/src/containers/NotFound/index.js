import React from "react";

const NotFound = (props) => {
  if (props.staticContext) {
    props.staticContext.NOT_FOUND = true;
  }
  return <div>Sorry ,page is not found</div>;
};

export default NotFound;
