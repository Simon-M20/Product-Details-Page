import React from "react";
import styles from "./Price.module.css";

function Price() {
    return (
        <div className={styles.Price__container}>
            <div className={styles.Price__box}>
                <span className={styles.Price__span}>
                    USD(incl. of all taxes)
                </span>
                <p className={styles.Price__regular}>
                    $600.72<span className={styles.Price__sale}>$800.00</span>
                </p>
                <button className={styles.Price__buy_btn}>Buy Now</button>
            </div>
            <div className={styles.Price__box}>
                <div className={styles.Price__add_more}>
                    <button className={styles.Price__more_btn}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'>
                            <g clip-path='url(#clip0_36_805)'>
                                <path
                                    d='M5 12H19'
                                    stroke='#191919'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_805'>
                                    <rect width='24' height='24' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button className={styles.Price__more_btn}>1</button>
                    <button className={styles.Price__more_btn}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'>
                            <g clip-path='url(#clip0_36_808)'>
                                <path
                                    d='M12 5V19'
                                    stroke='#191919'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M5 12H19'
                                    stroke='#191919'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_808'>
                                    <rect width='24' height='24' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <button className={styles.Price__cart_btn}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Price;
