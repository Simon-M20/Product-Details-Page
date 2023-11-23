import React from "react";
import styles from "./Footer.module.css";

function FooterLinks({ links }) {
    return (
        <>
            {links?.map((link, index) => {
                return (
                    <li
                        style={{ cursor: "pointer" }}
                        key={index}
                        className={styles.Footer__text}>
                        {link}
                    </li>
                );
            })}
        </>
    );
}

export default FooterLinks;
