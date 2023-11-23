import React, { useState } from "react";
import styles from "./Widgets.module.css";

function Widgets() {
    const [selectedTab, setSelectedTab] = useState("desc");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className={styles.Widget}>
            <div className={styles.Widget__tabs}>
                <button
                    className={`${
                        selectedTab === "desc" ? styles.Widget__active : ""
                    }`}
                    onClick={() => handleTabClick("desc")}>
                    Description
                </button>
                <button
                    className={
                        selectedTab === "spec" ? styles.Widget__active : ""
                    }
                    onClick={() => handleTabClick("spec")}>
                    Specification
                </button>
                <button
                    className={
                        selectedTab === "reviews" ? styles.Widget__active : ""
                    }
                    onClick={() => handleTabClick("reviews")}>
                    Reviews
                </button>
            </div>
            <div className={styles.Widget__content}>
                {selectedTab === "desc" && (
                    <div
                        className={`${
                            selectedTab ? styles.Widget__content_active : ""
                        }`}>
                        <p>
                            The LG C2 42 (106cm) 4K Smart OLED evo TV is the
                            best all around OLED TV we've tested. Although all
                            OLEDs deliver similar fantastic picture quality,
                            this one stands out for its value because it has
                            many gaming oriented features that are great for
                            gamers.
                        </p>
                        <p>
                            *Only 65G2 is shown in the image for example
                            purposes. All 2022 LG OLED models feature
                            eco-friendly packaging.
                        </p>
                        <p>
                            **65C2 Stand model is at a minimum 39% lighter than
                            the C1 series.
                        </p>
                        <span>More...</span>
                    </div>
                )}
                {selectedTab === "spec" && (
                    <div
                        className={`${
                            selectedTab ? styles.Widget__content_active : ""
                        }`}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam iaculis, metus eu rhoncus efficitur,
                            turpis sem tempus massa, id consectetur nunc purus
                            in lectus. Donec non velit a odio volutpat volutpat
                            in in nisi. Maecenas aliquet turpis lacus, id
                            pharetra elit sagittis vel.{" "}
                        </p>
                        <p>
                            Ut consectetur nisi quis ullamcorper pellentesque.
                            Integer efficitur interdum nunc, ut elementum nulla.
                        </p>

                        <p>
                            Phasellus feugiat nulla et rhoncus porttitor. Nullam
                            at lectus sed turpis porttitor viverra accumsan
                            hendrerit lorem. Praesent tincidunt nisi at nunc
                            suscipit malesuada.
                        </p>
                    </div>
                )}
                {selectedTab === "reviews" && (
                    <div
                        className={`${
                            selectedTab ? styles.Widget__content_active : ""
                        }`}>
                        <p>
                            Suspendisse potenti. Sed dapibus bibendum orci, eget
                            semper diam tincidunt eget. Nulla a mi non nulla
                            fermentum molestie. Aenean magna massa, tempus quis
                            risus nec, sollicitudin consectetur mi.
                        </p>
                        <p>
                            Donec dictum nulla sed nulla semper elementum. Nulla
                            dictum ultrices risus, id ornare arcu rutrum vel.
                            Curabitur vestibulum id nisi at pellentesque. Aenean
                            a lacinia tellus.
                        </p>
                        <p>
                            Aliquam iaculis odio sit amet velit laoreet, non
                            feugiat tellus elementum.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Widgets;
