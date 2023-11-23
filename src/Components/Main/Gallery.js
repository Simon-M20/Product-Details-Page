import React from "react";
import LG from "../../Assets/TV_Lg.png";
import Tv2 from "../../Assets/Tv_2.png";
import Tv3 from "../../Assets/Tv_3.png";
import Tv4 from "../../Assets/Tv_4.png";
import Tv5 from "../../Assets/Tv_5.png";

import styles from "./Gallery.module.css";

function Gallery() {
    return (
        <div className={styles.Gallery}>
            <div className={styles.Gallery__column}>
                <figure className={styles.Gallery__item}>
                    <img className={styles.Gallery__image} src={Tv2} alt='Tv' />
                </figure>
                <figure className={styles.Gallery__item}>
                    <img className={styles.Gallery__image} src={Tv3} alt='Tv' />
                </figure>
                <figure className={styles.Gallery__item}>
                    <img className={styles.Gallery__image} src={Tv4} alt='Tv' />
                </figure>
                <figure className={styles.Gallery__item}>
                    <img className={styles.Gallery__image} src={Tv5} alt='Tv' />
                </figure>
                <div className={styles.Gallery__pagination}>
                    <button className={styles.Gallery__button}>
                        <svg
                            className={styles.Gallery__prev}
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='17'
                            viewBox='0 0 16 17'
                            fill='none'>
                            <g clip-path='url(#clip0_36_500)'>
                                <path
                                    d='M10 4.5L6 8.5L10 12.5'
                                    stroke='white'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_500'>
                                    <rect
                                        width='16'
                                        height='16'
                                        fill='white'
                                        transform='matrix(-1 0 0 1 16 0.5)'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button className={styles.Gallery__button}>
                        <svg
                            className={styles.Gallery__next}
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='17'
                            viewBox='0 0 16 17'
                            fill='none'>
                            <g clip-path='url(#clip0_36_497)'>
                                <path
                                    d='M6 4.5L10 8.5L6 12.5'
                                    stroke='white'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_497'>
                                    <rect
                                        width='16'
                                        height='16'
                                        fill='white'
                                        transform='translate(0 0.5)'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.Gallery__column}>
                <figure className={styles.Gallery__main_item}>
                    <img
                        className={styles.Gallery__main_image}
                        src={LG}
                        alt='Tv'
                    />
                    <figcaption className={styles.Gallery__main_text}>
                        *LG C2 42 (106cm) 4K Smart OLED evo TV
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Gallery;
