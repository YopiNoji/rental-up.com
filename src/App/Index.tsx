import "core-js/stable";
// HMR対応するのためReactより先にインポートする必要あり
// https://github.com/gaearon/react-hot-loader#getting-started
import { hot } from "react-hot-loader/root";

import * as React from "react";
import rootRender from "@/service/rootRender";
import { Provider as Context } from "./Context";
import App from "./App";

import "css/index.scss";

const MainApp: React.FC = () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

rootRender(process.env.NODE_ENV === "development" ? hot(MainApp) : MainApp);

export default MainApp;
