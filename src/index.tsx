import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";
import "normalize.css";
import "./styles/base.module.scss";
import "./styles/grid.module.scss";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
