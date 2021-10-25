import React from 'react';
import styles from "./ShowField.module.css";

const ShowField = () => {
    return (
        <ul className={styles.item_list_price}>
                                <li className={styles.item_nav_price}>
                                    <a href="/" className={styles.item_link_price}>
                                        بیت کوین
                                    </a>
                                </li>
                                <li className={styles.item_nav_price}>
                                    <a href="/" className={styles.item_link_price}>
                                        اتریوم
                                    </a>
                                </li>
                                <li className={styles.item_nav_price}>
                                    <a href="/" className={styles.item_link_price}>
                                        کاردانو
                                    </a>
                                </li>
                                <li className={styles.item_nav_price}>
                                    <a href="/" className={styles.item_link_price}>
                                        تتر
                                    </a>
                                </li>
                                <li className={styles.item_nav_price}>
                                    <a href="/" className={styles.item_link_price}>
                                        سایر ارزهای دیجیتال
                                    </a>
                                </li>
                            </ul>
    )
}

export default ShowField
