import React, { useContext } from "react";
import { StylecssContext } from "../context/StylecssContext";

export default function withStyles(WrapComponent, styles) {
  return (props) => {
    if (styles._getCss) {
      const cssContext = useContext(StylecssContext);
      cssContext.push(styles._getCss());
    }
    return <WrapComponent {...props} />;
  };
}
