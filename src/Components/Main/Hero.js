import React from "react";
import styles from "./Hero.module.css";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";

function Hero() {
    return (
        <section>
            <section className={styles.Hero__section}>
                <h1 className={styles.Hero__title}>TV Collection</h1>
                <h2 className={styles.Hero__subtitle}>
                    Home / Product / Tv Collection
                </h2>
            </section>
            <section className={styles.Hero__product}>
                <Gallery />
                <ProductInfo />
            </section>
        </section>
    );
}

export default Hero;
