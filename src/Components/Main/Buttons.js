import React, { useState } from "react";
import styles from "./Buttons.module.css";

function Buttons({ name, index }) {
    const [focus, setfocus] = useState(index === 0);

    return (
        <button
            className={`${styles.Button} ${focus ? styles.Button__focus : ""}`}
            onClick={() => setfocus(!focus)}>
            <span
                className={`${styles.Button__text} ${
                    focus ? styles.Button__text_focus : ""
                }`}>
                {name}
            </span>
        </button>
    );
}

export default Buttons;
