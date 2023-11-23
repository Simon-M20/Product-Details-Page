import React from "react";
import DropDown from "../DropDown";
import ArrowIcon from "../../Assets/Icons/Arrow_down.svg";

import styles from "./Banner.module.css";

function Banner() {
    const dropItems = [
        {
            name: "en",
            id: "language",
            values: ["fr", "ch", "es", "gr", "kr"],
            image: ArrowIcon,
        },
        {
            name: "usd",
            id: "currency",
            values: ["ars", "eur", "gbp", "bs", "krw"],
            image: ArrowIcon,
        },
    ];

    return (
        <div className={styles.Banner__container}>
            <span className={styles.Banner__text}>
                Welcome to Needus & Get the best product
            </span>
            <div className={styles.Banner__dropdown}>
                <DropDown dropItems={dropItems} />
            </div>
        </div>
    );
}

export default Banner;
