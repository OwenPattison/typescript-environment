import React from "react";

import grid from "../styles/grid.module.scss";

import styles from "./home.module.scss";

const Home: React.FC = () => {
    return (
        <div className={grid.container}>
            <div className={grid.row}>
                <div className={grid["col-12"]}>
                    <h1 className={styles.red}>Home</h1>
                </div>
            </div>
        </div>
    );
};

export {
    Home
};
