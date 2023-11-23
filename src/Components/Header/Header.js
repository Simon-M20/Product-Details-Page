import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

import styles from "./Header.module.css";
import DropDown from "../DropDown";
import ArrowIcon from "../../Assets/Icons/Arrow_down.svg";
import HeadsetIcon from "../../Assets/Icons/Headset_icon.png";

function Header() {
    const dropItems = [
        {
            name: "all categories",
            id: "categories",
            values: [
                "category 1",
                "category 2",
                "category 3",
                "category 4",
                "category 5",
            ],
            image: ArrowIcon,
        },
    ];
    const secondDrop = [
        {
            name: "home",
            id: "home",
            values: ["category 1", "category 2", "category 3"],
            image: ArrowIcon,
        },
        {
            name: "about",
            id: "about",
            values: ["category 1", "category 2", "category 3"],
            image: ArrowIcon,
        },
        {
            name: "product",
            id: "product",
            values: ["category 1", "category 2", "category 3"],
            image: ArrowIcon,
        },
        {
            name: "pages",
            id: "pages",
            values: ["category 1", "category 2", "category 3"],
            image: ArrowIcon,
        },
        {
            name: "contact",
            id: "contact",
            values: ["category 1", "category 2", "category 3"],
            image: ArrowIcon,
        },
    ];
    return (
        <header>
            <Banner />
            <NavBar />
            <section className={styles.Header__section}>
                <div className={styles.Header__section1}>
                    <span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                            fill='none'>
                            <g clip-path='url(#clip0_36_725)'>
                                <path
                                    d='M11.25 7.5H25'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M11.25 15H25'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M11.25 22.5H25'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M6.25 7.5V7.5125'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M6.25 15V15.0125'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M6.25 22.5V22.5125'
                                    stroke='white'
                                    stroke-width='2.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_725'>
                                    <rect width='30' height='30' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <DropDown dropItems={dropItems} />
                </div>
                <section className={styles.Header__section2}>
                    <DropDown dropItems={secondDrop} />
                    <div className={styles.Header__border}>
                        <figure className={styles.Header__figure}>
                            <img
                                className={styles.Header__image}
                                src={HeadsetIcon}
                                alt='Help Icon'
                            />
                            <figcaption className={styles.Header__figcaption}>
                                <span>Contact Us 24/7</span>
                                <span>+12012987481</span>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </section>
        </header>
    );
}

export default Header;
