import React, { useState } from 'react';
//css
import styles from './Navbar.module.css';
//components
import NavItem from './NavItem';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.Nav_container}>
                <div className={styles.logo_brand}>
                    <img src="https://nobitex.ir/_nuxt/img/nobitex-logo-1.77b6afd.webp" alt="Nobitext-logo" />
                    <span>نوبیتکس</span>
                </div>
                <ul className={styles.list_item}>
                    <li className={styles.item_nav}>
                        <a href="/" className={styles.item_link}>
                            راهنمای استفاده
                        </a>
                    </li>
                    <li className={styles.item_nav}>
                            قیمت لحظه ای رمزارزها
                            <i className="fas fa-caret-down"></i>
                        <ul className={styles.list_item_Price}>
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
                    </li>
                    <li className={styles.item_nav}>
                        <a href="/" className={styles.item_link}>
                            سوالی دارید؟
                        </a>
                    </li>
                    <li className={styles.item_nav}>
                        <a href="/" className={styles.item_link}>
                            معرفی به دوستان
                        </a>
                    </li>
                </ul>
                <div className={styles.bars_signin}>
                    <button type="button">
                        ورود
                    </button>
                    <button type="button">
                        ثبت نام
                    </button>
                    <span onClick={showHandler}>
                        <i className="fas fa-bars"></i>
                    </span>
                </div>
            </div>
            {show && <NavItem show={show} setShow={setShow} />}
        </div>
    )
}

export default Navbar
