import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
    return (
        <form className={styles.Searchbar__form}>
            <input
                className={styles.Searchbar__input}
                placeholder='Search Products'
                type='search'
                autoComplete='off'
                required
                name='search'
                id='search'
            />
            <label for='search' className={styles.Searchbar__label}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <g clip-path='url(#clip0_36_715)'>
                        <path
                            d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M21 21L15 15'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_36_715'>
                            <rect width='24' height='24' fill='white' />
                        </clipPath>
                    </defs>
                </svg>
            </label>
        </form>
    );
}

export default Searchbar;
