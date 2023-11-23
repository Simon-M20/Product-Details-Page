import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

function Footer() {
    const footerLink = [
        {
            name: "Information",
            links: [
                "AboutAbout",
                "Delivery information",
                "Privacy Policy",
                "Sales",
                "Terms & Conditions ",
                "EMI Payment",
            ],
        },
        {
            name: "ACCOUNT",
            links: [
                "My Account",
                "My Orders",
                "Returns",
                "Shipping",
                "Wishlist",
                "Account Details",
            ],
        },
        {
            name: "Store",
            links: [
                "Affiliate",
                "Discounts",
                "Sale",
                "Contact",
                "All Collections",
            ],
        },
    ];
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__container}>
                <div className={styles.Footer__div}>
                    <div className={styles.Footer__link}>
                        <span className={styles.Footer__title}>About us</span>
                        <p className={styles.Footer__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris aliquet lacinia nulla ut laoreet.
                            Quisque ultricies et tortor nec laoreet.{" "}
                        </p>
                        <div className={styles.Footer__icons}>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'>
                                    <g clip-path='url(#clip0_36_906)'>
                                        <path
                                            d='M8.75 12.5V17.5H12.5V26.25H17.5V17.5H21.25L22.5 12.5H17.5V10C17.5 9.66848 17.6317 9.35054 17.8661 9.11612C18.1005 8.8817 18.4185 8.75 18.75 8.75H22.5V3.75H18.75C17.0924 3.75 15.5027 4.40848 14.3306 5.58058C13.1585 6.75269 12.5 8.3424 12.5 10V12.5H8.75Z'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_36_906'>
                                            <rect
                                                width='30'
                                                height='30'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'>
                                    <g clip-path='url(#clip0_36_909)'>
                                        <path
                                            d='M3.75 26.25L5.8125 21.5C4.23458 19.2601 3.52833 16.5213 3.82631 13.7976C4.12428 11.074 5.40598 8.55267 7.43088 6.70689C9.45579 4.86112 12.0847 3.81776 14.8242 3.77262C17.5638 3.72747 20.2256 4.68365 22.3102 6.46171C24.3948 8.23976 25.7589 10.7175 26.1465 13.4298C26.534 16.1422 25.9184 18.9028 24.4151 21.1935C22.9119 23.4842 20.6243 25.1475 17.9817 25.8714C15.3392 26.5952 12.5233 26.3298 10.0625 25.125L3.75 26.25'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M11.25 12.5C11.25 12.6658 11.3158 12.8247 11.4331 12.9419C11.5503 13.0592 11.7092 13.125 11.875 13.125C12.0408 13.125 12.1997 13.0592 12.3169 12.9419C12.4342 12.8247 12.5 12.6658 12.5 12.5V11.25C12.5 11.0842 12.4342 10.9253 12.3169 10.8081C12.1997 10.6908 12.0408 10.625 11.875 10.625C11.7092 10.625 11.5503 10.6908 11.4331 10.8081C11.3158 10.9253 11.25 11.0842 11.25 11.25V12.5ZM11.25 12.5C11.25 14.1576 11.9085 15.7473 13.0806 16.9194C14.2527 18.0915 15.8424 18.75 17.5 18.75H18.75C18.9158 18.75 19.0747 18.6842 19.1919 18.5669C19.3092 18.4497 19.375 18.2908 19.375 18.125C19.375 17.9592 19.3092 17.8003 19.1919 17.6831C19.0747 17.5658 18.9158 17.5 18.75 17.5H17.5C17.3342 17.5 17.1753 17.5658 17.0581 17.6831C16.9408 17.8003 16.875 17.9592 16.875 18.125C16.875 18.2908 16.9408 18.4497 17.0581 18.5669C17.1753 18.6842 17.3342 18.75 17.5 18.75'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_36_909'>
                                            <rect
                                                width='30'
                                                height='30'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'>
                                    <g clip-path='url(#clip0_36_917)'>
                                        <path
                                            d='M20 5H10C7.23858 5 5 7.23858 5 10V20C5 22.7614 7.23858 25 10 25H20C22.7614 25 25 22.7614 25 20V10C25 7.23858 22.7614 5 20 5Z'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M20.625 9.375V9.376'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_36_917'>
                                            <rect
                                                width='30'
                                                height='30'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'>
                                    <g clip-path='url(#clip0_36_913)'>
                                        <path
                                            d='M21.25 6.25H8.75C5.98858 6.25 3.75 8.48858 3.75 11.25V18.75C3.75 21.5114 5.98858 23.75 8.75 23.75H21.25C24.0114 23.75 26.25 21.5114 26.25 18.75V11.25C26.25 8.48858 24.0114 6.25 21.25 6.25Z'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M12.5 11.25L18.75 15L12.5 18.75V11.25Z'
                                            stroke='white'
                                            stroke-width='2.5'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_36_913'>
                                            <rect
                                                width='30'
                                                height='30'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.Footer__box}>
                    {footerLink?.map((link, index) => {
                        return (
                            <div className={styles.Footer__link} key={index}>
                                <span className={styles.Footer__title}>
                                    {link.name}
                                </span>
                                <ul className={styles.Footer__nav}>
                                    <FooterLinks links={link.links} />
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className={styles.Footer__link}>
                        <span className={styles.Footer__title}>CONTACT US</span>
                        <p className={styles.Footer__text}>
                            If you have any query, please contact us
                            <span>needus24@gmail.com</span>
                        </p>
                        <div className={styles.Footer__icons_container}>
                            <figure className={styles.Footer__icons}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='40'
                                    height='40'
                                    viewBox='0 0 40 40'
                                    fill='none'>
                                    <path
                                        d='M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9053 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9053 15 16.6667C15 19.4281 17.2386 21.6667 20 21.6667Z'
                                        stroke='white'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                    <path
                                        d='M20.0001 3.33334C16.4639 3.33334 13.0725 4.7381 10.572 7.23859C8.07151 9.73907 6.66675 13.1305 6.66675 16.6667C6.66675 19.82 7.33675 21.8833 9.16675 24.1667L20.0001 36.6667L30.8334 24.1667C32.6634 21.8833 33.3334 19.82 33.3334 16.6667C33.3334 13.1305 31.9287 9.73907 29.4282 7.23859C26.9277 4.7381 23.5363 3.33334 20.0001 3.33334V3.33334Z'
                                        stroke='white'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                    />
                                </svg>
                                <figcaption className={styles.Footer__text}>
                                    California, USA
                                </figcaption>
                            </figure>
                            <figure className={styles.Footer__icons}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='40'
                                    height='40'
                                    viewBox='0 0 40 40'
                                    fill='none'>
                                    <g clip-path='url(#clip0_36_956)'>
                                        <path
                                            d='M27.7778 4.44446H12.2222C11.6329 4.44446 11.0676 4.67858 10.6509 5.09533C10.2341 5.51208 10 6.07731 10 6.66668V33.3333C10 33.9227 10.2341 34.4879 10.6509 34.9047C11.0676 35.3214 11.6329 35.5556 12.2222 35.5556H27.7778C28.3671 35.5556 28.9324 35.3214 29.3491 34.9047C29.7659 34.4879 30 33.9227 30 33.3333V6.66668C30 6.07731 29.7659 5.51208 29.3491 5.09533C28.9324 4.67858 28.3671 4.44446 27.7778 4.44446ZM12.2222 6.66668H27.7778V26.6667H12.2222V6.66668ZM12.2222 33.3333V28.8889H27.7778V33.3333H12.2222Z'
                                            fill='white'
                                        />
                                        <path
                                            d='M18.8889 30H21.1111V32.2222H18.8889V30Z'
                                            fill='white'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_36_956'>
                                            <rect
                                                width='40'
                                                height='40'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <figcaption className={styles.Footer__text}>
                                    +12012987481
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Footer__small}>
                <small>Copyright. 2023 All Right Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;
