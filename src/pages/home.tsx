import React from "react";

import grid from "../styles/grid.module.scss";

import styles from "./home.module.scss";

const Home: React.FC = () => {
    return (
        <div className={grid.row}>
            <div className={grid["col-6"]}>
                <h1 className={styles.red}>typescript environment</h1>
            </div>
            <div className={grid["col-6"]}>
                <h1 className={styles.green}>this is right</h1>
            </div>
        </div>
    );
};

export {
    Home
};
