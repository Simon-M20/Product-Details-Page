import React from "react";
import DropDown from "../DropDown";
import Login from "./Login";
import ArrowIcon from "../../Assets/Icons/Arrow_down-black.svg";
// import MenuIcon from "../../Assets/Icons/Menu_icon.svg";
import styles from "./NavBar.module.css";
import Searchbar from "./Searchbar";
// import HeartIcon from "../../Assets/Icons/Heart_icon.svg";
// import CartIcon from "../../Assets/Icons/Cart_icon.svg";

function NavBar() {
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
    return (
        <div className={styles.NavBar__container}>
            <figure className={styles.NavBar__menu}>
                {/* <img src={MenuIcon} alt='Hamburger icon' /> */}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'>
                    <path
                        d='M2.75 13.75V12.375H19.25V13.75H2.75ZM2.75 8.25H19.25V9.625H2.75V8.25ZM19.25 4.125V5.5H2.75V4.125H19.25ZM2.75 16.5V17.875H19.25V16.5H2.75Z'
                        fill='white'
                    />
                </svg>
            </figure>
            <span className={styles.NavBar__logo}>
                Needus <span className={styles.NavBar__logo_dot}>.</span>
            </span>
            <div className={styles.NavBar__div}>
                <section className={styles.NavBar__section}>
                    <section className={styles.NavBar__boxes}>
                        <Searchbar />
                    </section>
                    <section
                        className={`${styles.NavBar__boxes} ${styles.NavBar__box_mobile}`}>
                        <DropDown dropItems={dropItems} />
                        <Login />
                    </section>
                </section>
                <section className={styles.NavBar__icons}>
                    <figure className={styles.NavBar__figure}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'>
                            <path
                                d='M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z'
                                stroke='#191919'
                                stroke-width='0.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </figure>
                    <figure>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'>
                            <g clip-path='url(#clip0_36_672)'>
                                <path
                                    d='M4.99998 17.5001C5.92045 17.5001 6.66665 16.7539 6.66665 15.8334C6.66665 14.9129 5.92045 14.1667 4.99998 14.1667C4.07951 14.1667 3.33331 14.9129 3.33331 15.8334C3.33331 16.7539 4.07951 17.5001 4.99998 17.5001Z'
                                    stroke='black'
                                    stroke-width='0.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M14.1667 17.5001C15.0871 17.5001 15.8333 16.7539 15.8333 15.8334C15.8333 14.9129 15.0871 14.1667 14.1667 14.1667C13.2462 14.1667 12.5 14.9129 12.5 15.8334C12.5 16.7539 13.2462 17.5001 14.1667 17.5001Z'
                                    stroke='black'
                                    stroke-width='0.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M14.1666 14.1667H4.99998V2.5H3.33331'
                                    stroke='black'
                                    stroke-width='0.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M5 4.16675L16.6667 5.00008L15.8333 10.8334H5'
                                    stroke='black'
                                    stroke-width='0.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_36_672'>
                                    <rect width='20' height='20' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </figure>
                </section>
            </div>
        </div>
    );
}

export default NavBar;
