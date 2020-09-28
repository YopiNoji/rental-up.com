import "core-js/stable";

import React from "react";
import { render } from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

type PropsType = (App: React.FC) => void;

const rootRender: PropsType = (App) => {
  render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById("root")
  );
};

export default rootRender;
