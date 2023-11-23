import React, { useState } from "react";
import styles from "./DropDown.module.css";
import Drops from "./Drops";

function DropDown({ dropItems }) {
    const [showItems, setShowItems] = useState(
        new Array(dropItems.length).fill(false)
    );

    const toggleDropDown = (index) => {
        const updatedShowItems = [...showItems];
        updatedShowItems[index] = !updatedShowItems[index];
        setShowItems(updatedShowItems);
    };

    return (
        <>
            {dropItems?.map((drop, index) => {
                return (
                    <div
                        className={`${styles.Dropdown__div} ${styles.DropDown__text}`}
                        key={drop.id}>
                        <div onClick={() => toggleDropDown(index)}>
                            <span className={styles.DropDown__title}>
                                {drop.name}
                            </span>
                            {showItems[index] ? (
                                <ul className={`DropDown__menu Dropdown__show`}>
                                    {drop?.values?.map((value) => {
                                        return <Drops value={value} />;
                                    })}
                                </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        <figure>
                            <img
                                className={styles.Dropdown__image}
                                src={drop.image}
                                alt='Arrow down Icon'
                            />
                        </figure>
                    </div>
                );
            })}
        </>
    );
}

export default DropDown;
