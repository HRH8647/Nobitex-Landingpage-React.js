import React, {useState} from 'react';
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
                <div className={styles.bars_signin}>
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
