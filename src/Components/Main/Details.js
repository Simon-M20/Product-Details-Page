import React from "react";

import styles from "./Details.module.css";

function Details({ info }) {
    return (
        <>
            {info?.map((e) => {
                return (
                    <p key={e.id} className={styles.Details__title}>
                        {e.title}:{" "}
                        <span className={styles.Details__desc}>{e.info}</span>
                    </p>
                );
            })}
        </>
    );
}

export default Details;
