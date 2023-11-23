import React from "react";

import styles from "./DetailsList.module.css";

function DetailsList({ info }) {
    return (
        <li className={styles.List}>
            <svg
                className={styles.List__svg}
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='8'
                viewBox='0 0 8 8'
                fill='none'>
                <circle cx='4' cy='4' r='4' fill='#191919' />
            </svg>
            {info}
        </li>
    );
}

export default DetailsList;
