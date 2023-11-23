import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    console.log({ product });
    return (
        <>
            {product ? (
                <div className={styles.Product__card}>
                    <div className={styles.Product}>
                        <div className={styles.Product__label_container}>
                            <span
                                style={{ background: `${product.color}` }}
                                className={styles.Product__label}>
                                {product.label}
                            </span>
                            {product.icon ? (
                                <span className={styles.Product__svg}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='60'
                                        height='60'
                                        viewBox='0 0 60 60'
                                        fill='none'>
                                        <circle
                                            cx='30'
                                            cy='30'
                                            r='29.5'
                                            stroke='#D7D7D7'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='30'
                                        height='30'
                                        viewBox='0 0 30 30'
                                        fill='none'>
                                        <path
                                            d='M27.041 8.30861C26.6483 7.39935 26.0821 6.57538 25.374 5.88283C24.6654 5.18822 23.83 4.63622 22.9131 4.25686C21.9623 3.86191 20.9426 3.65976 19.9131 3.66213C18.4688 3.66213 17.0596 4.05764 15.835 4.80471C15.542 4.98342 15.2637 5.17971 15 5.39358C14.7363 5.17971 14.458 4.98342 14.165 4.80471C12.9404 4.05764 11.5312 3.66213 10.0869 3.66213C9.04688 3.66213 8.03906 3.86135 7.08691 4.25686C6.16699 4.63772 5.33789 5.18557 4.62598 5.88283C3.91698 6.5746 3.35062 7.39876 2.95898 8.30861C2.55176 9.2549 2.34375 10.2598 2.34375 11.294C2.34375 12.2696 2.54297 13.2862 2.93848 14.3203C3.26953 15.1846 3.74414 16.0811 4.35059 16.9863C5.31152 18.419 6.63281 19.9131 8.27344 21.4278C10.9922 23.9385 13.6846 25.6729 13.7988 25.7432L14.4932 26.1885C14.8008 26.3848 15.1963 26.3848 15.5039 26.1885L16.1982 25.7432C16.3125 25.6699 19.002 23.9385 21.7236 21.4278C23.3643 19.9131 24.6855 18.419 25.6465 16.9863C26.2529 16.0811 26.7305 15.1846 27.0586 14.3203C27.4541 13.2862 27.6533 12.2696 27.6533 11.294C27.6563 10.2598 27.4482 9.2549 27.041 8.30861Z'
                                            fill='#E73C17'
                                        />
                                    </svg>
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <figure className={styles.Product__figure}>
                            <img src={product.image} alt='Product' />
                        </figure>
                        <button className={styles.Product__button}>
                            <img src={product.cart} alt='Add to card' />
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <p className={styles.Product__title}>{product.title}</p>
                        {product.price_regular ? (
                            <p className={styles.Product__regular}>
                                {product.price_regular}
                                {product.price_sale ? (
                                    <span className={styles.Product__sale}>
                                        {product.price_sale}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default ProductCard;
