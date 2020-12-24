import React from "react";

export function createContext() {
  this.cssArr = [];
  this.push = function (css) {
    this.cssArr.push(css);
  };
  this.getCssString = function () {
    return this.cssArr.join("\n");
  };
}

export const StylecssContext = React.createContext();
