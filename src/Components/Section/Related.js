import React from "react";
import ProductCard from "./ProductCard";

import styles from "./Related.module.css";

import Product1 from "../../Assets/Product_1.png";
import Product2 from "../../Assets/Product_2.png";
import Product3 from "../../Assets/Product_3.png";
import Product4 from "../../Assets/Product_4.png";
import CartIcon from "../../Assets/Icons/Cart_icon.svg";
import Dots from "./Dots";

function Related() {
    const productInfo = [
        {
            id: 1,
            title: "Sony BRAVIA XR Android Tv",
            price_regular: "$800.22",
            price_sale: "$1000.66",
            label: "NEW",
            icon: true,
            image: Product1,
            cart: CartIcon,
            color: "#12A05C",
        },
        {
            id: 2,
            title: "Mi P1 Smart Android HD TV",
            price_regular: "$400.00",
            price_sale: "",
            label: "-10%",
            icon: false,
            image: Product2,
            cart: CartIcon,
            color: "#E73C17",
        },
        {
            id: 3,
            title: "Konka OLED Android Tv",
            price_regular: "$700.00",
            price_sale: "",
            label: "HOT",
            icon: false,
            image: Product3,
            cart: CartIcon,
            color: "#FF9900",
        },
        {
            id: 4,
            title: "TCL Roku Android Tv",
            price_regular: "$800.00",
            price_sale: "",
            label: "2 Years Warranty",
            icon: false,
            image: Product4,
            cart: CartIcon,
            color: "#7F7CF6",
        },
    ];

    const dotsArray = [0, 1, 2, 3];

    return (
        <div className={styles.Related}>
            <h3 className={styles.Related__title}>Related Products</h3>
            <div className={styles.Related__container}>
                {productInfo?.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                })}
            </div>
            <div className={styles.Related__dots}>
                {dotsArray.map((index) => (
                    <Dots key={index} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Related;
