// import { useState } from "react";
import styles from "./DropDown.module.css";

function Drops({ value }) {
    return (
        <li key={value} className={styles.DropDown__item}>
            {value}
        </li>
    );
}

export default Drops;
