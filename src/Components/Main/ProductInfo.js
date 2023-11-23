import React from "react";
import Details from "./Details";

import styles from "./ProductInfo.module.css";
import DetailsList from "./DetailsList";
import Buttons from "./Buttons";
import Price from "./Price";
import Widgets from "./Widgets";

function ProductInfo() {
    const productDetails = [
        {
            title: "brand",
            info: "LG",
            id: "1",
        },
        {
            title: "model",
            info: "OLED42C2PSA",
            id: "2",
        },
        {
            title: "availability",
            info: "only 2 in stock",
            id: "3",
        },
    ];

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i === 4) {
            stars.push(
                <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 30 28'
                    fill='none'
                    className={styles.Product__stars}>
                    <path
                        d='M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z'
                        fill='#F4F5F8'
                    />
                </svg>
            );
        } else {
            stars.push(
                <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 30 28'
                    fill='none'
                    className={styles.Product__stars}>
                    <path
                        d='M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z'
                        fill='#E73C17'
                    />
                </svg>
            );
        }
    }

    const features = [
        "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
        "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
        "Hands-free Voice Control, Always Ready",
        "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
        "Eye Comfort Display: Low-Blue Light, Flicker-Free",
    ];

    const variants = [
        "106 cm (42)",
        "121 cm (48)",
        "139 cm (55)",
        "164 cm (65)",
        "196 cm (77)",
        "210 cm (83)",
    ];

    return (
        <div className={styles.Product__info}>
            <div className={styles.Product__details}>
                <Details info={productDetails} />
            </div>
            <h2 className={styles.Product__title}>
                LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
            </h2>
            <div className={styles.Product__stars_container}>{stars}</div>
            <ul className={styles.Product__list}>
                {features?.map((e) => {
                    return <DetailsList info={e} />;
                })}
            </ul>
            <div className={styles.Product__buttons}>
                {variants?.map((variant, index) => {
                    return <Buttons index={index} name={variant} />;
                })}
            </div>
            <Price />
            <Widgets />
        </div>
    );
}

export default ProductInfo;
