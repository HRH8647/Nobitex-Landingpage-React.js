import React from 'react'
//css
import styles from './NavItem.module.css'

const NavItem = ({ setShow }) => {

    const showHandler = () => {
        setShow(false);
    }
    return (
        <div className={styles.container}>
            <div className={styles.btn_back}>
                <span onClick={showHandler}><i className="fas fa-arrow-left"></i></span>
                <button className={styles.login} type="button">ورود</button>
                <button className={styles.signin} type="button">ثبت نام</button>
            </div>
        </div>
    )
}

export default NavItem
