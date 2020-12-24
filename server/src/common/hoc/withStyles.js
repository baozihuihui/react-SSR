import React from "react";

export default function withStyles(WrapComponent, styles) {
  return (props) => {
    if (props.staticContext && styles._getCss) {
      props.staticContext.cssArr.push(styles._getCss());
    }
    return <WrapComponent {...props} />;
  };
}
