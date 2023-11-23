import React from "react";
import styles from "./Newsletter.module.css";
import { useState } from "react";

function Newsletter() {
    const [isClick, setIsClick] = useState(false);

    return (
        <div className={styles.News__div}>
            <div className={styles.News__container}>
                <p className={styles.News}>
                    Join our newsletter and get offers
                </p>
                <span className={styles.News__text}>
                    Sign up our newsletter
                </span>
            </div>
            <div style={{ width: "100%" }}>
                <form action='search' className={styles.News__form}>
                    <input
                        className={styles.News__input}
                        type='email'
                        name='email'
                        id='email'
                        required
                        autoComplete='off'
                        placeholder={`${
                            isClick ? "joedoe@gmail.com" : "Enter your email"
                        }`}
                    />
                    <label
                        onClick={() => setIsClick(!isClick)}
                        className={`${styles.News__label} ${
                            isClick ? styles.News__label_hover : ""
                        }`}
                        for='email'>
                        {isClick ? "SUBSCRIBE!" : "SUBSCRIBE"}
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;
