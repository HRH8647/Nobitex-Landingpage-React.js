import React, { useState } from 'react'
//css
import styles from './NavItem.module.css'
import ShowField from './ShowField';

const NavItem = ({ setShow }) => {
    const [showField, setShowField] = useState(false);

    const showHandler = () => {
        setShow(false);
    }
    const showFieldPrice = () => {
        setShowField(!showField);
    }
    return (
        <div className={styles.container}>
            <div className={styles.btn_back}>
                <span onClick={showHandler}><i className="fas fa-arrow-left"></i></span>
                <button className={styles.login} type="button">ورود</button>
                <button className={styles.signin} type="button">ثبت نام</button>
                <nav>
                    <ul className={styles.list_item}>
                        <li className={styles.item_nav}>
                            <a href="/" className={styles.item_link}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE2IDIwIj48cGF0aCBkPSJNMTg2LDI2NEgxNzMuOTlhMiwyLDAsMCwxLTEuOTktMlYyNDZhMiwyLDAsMCwxLDItMmg3LjE3YTIsMiwwLDAsMSwxLjQyLjU5bDQuODE5LDQuODNhMS45NzQsMS45NzQsMCwwLDEsLjU5LDEuNDFWMjYyQTIsMiwwLDAsMSwxODYsMjY0Wm0tOS02YTEsMSwwLDAsMCwwLDJoNmExLDEsMCwwLDAsMC0yWm0wLTRhMSwxLDAsMCwwLDAsMmg2YTEsMSwwLDAsMCwwLTJabTQtOC41VjI1MGExLDEsMCwwLDAsMSwxaDQuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzIgLTI0NCkiIGZpbGw9IiM4NTg4OGYiLz48L3N2Zz4=" alt="img-icon" />
                                راهنمای استفاده
                            </a>
                        </li>
                        <li onClick={showFieldPrice} className={styles.item_nav}>
                            <a href="/" className={styles.item_link} onClick={(e) => e.preventDefault()}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5Ij48cGF0aCBkPSJNMTYuODg5LDE5SDIuMTExQTIuMTEzLDIuMTEzLDAsMCwxLDAsMTYuODg5VjIuMTEyQTIuMTE0LDIuMTE0LDAsMCwxLDIuMTExLDBIMTYuODg5QTIuMTE0LDIuMTE0LDAsMCwxLDE5LDIuMTEyVjE2Ljg4OUEyLjExMywyLjExMywwLDAsMSwxNi44ODksMTlabS0zLjE2Ni04LjQ0NWExLjA1NywxLjA1NywwLDAsMC0xLjA1NSwxLjA1NXYyLjExMmExLjA1NSwxLjA1NSwwLDEsMCwyLjExMSwwVjExLjYxMUExLjA1NywxLjA1NywwLDAsMCwxMy43MjMsMTAuNTU1Wk05LjUsNC4yMjNBMS4wNTcsMS4wNTcsMCwwLDAsOC40NDUsNS4yNzh2OC40NDVhMS4wNTUsMS4wNTUsMCwxLDAsMi4xMTEsMFY1LjI3OEExLjA1NywxLjA1NywwLDAsMCw5LjUsNC4yMjNaTTUuMjc4LDcuMzg5QTEuMDU3LDEuMDU3LDAsMCwwLDQuMjIzLDguNDQ1djUuMjc4YTEuMDU1LDEuMDU1LDAsMSwwLDIuMTExLDBWOC40NDVBMS4wNTcsMS4wNTcsMCwwLDAsNS4yNzgsNy4zODlaIiBmaWxsPSIjODU4ODhmIi8+PC9zdmc+" alt="img-icon" />
                                قیمت لحظه ای رمزارزها
                                <i className="fas fa-caret-down"></i>
                            </a>
                            {showField && <ShowField />}
                        </li>
                        <li className={styles.item_nav}>
                            <a href="/" className={styles.item_link}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj48cGF0aCBkPSJNMTAuNSwyMUExMC41LDEwLjUsMCwxLDEsMjEsMTAuNSwxMC41MTIsMTAuNTEyLDAsMCwxLDEwLjUsMjFaTTkuNDUsMTUuNzVoMHYyLjFoMi4xdi0yLjFaTTEwLjUsNS4yNWEyLjIzNiwyLjIzNiwwLDAsMSwuNi4wODRBMi4wOTQsMi4wOTQsMCwwLDEsMTIuNTU4LDYuOTRhMi4wNzIsMi4wNzIsMCwwLDEtLjU3NywxLjg5bC0xLjMsMS4zMjNBNC4yMTIsNC4yMTIsMCwwLDAsOS40NSwxMy4xMjV2LjUyNGgyLjFhNC44MjQsNC44MjQsMCwwLDEsLjEzNi0xLjIsMy42ODUsMy42ODUsMCwwLDEsMS4wOTItMS43NzRsLjk0NS0uOTY2YTMuNDY2LDMuNDY2LDAsMCwwLC4yLTQuNjIsNC40LDQuNCwwLDAsMC0zLjQ5LTEuOTM1QTMuNjgsMy42OCwwLDAsMCw5Ljg2LDMuMiw0LjIxOSw0LjIxOSwwLDAsMCw2LjQ2OCw2LjE3NC45MjkuOTI5LDAsMCwwLDYuNjE3LDdhLjg4NC44ODQsMCwwLDAsLjcxMi4zNTRoLjMxNUEuOTIyLjkyMiwwLDAsMCw4LjUsNi42NjcsMi4xMTIsMi4xMTIsMCwwLDEsMTAuNSw1LjI1WiIgZmlsbD0iIzg1ODg4ZiIvPjwvc3ZnPg==" alt="img-icon" />
                                سوالی دارید؟
                            </a>
                        </li>
                        <li className={styles.item_nav}>
                            <a href="/" className={styles.item_link}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI0IDE1Ij48cGF0aCBkPSJNMjMuNSwxNUgyMC45NWEzLjYyLDMuNjIsMCwwLDAsLjA1LS41NzdWMTIuNjkzYTQuNTQyLDQuNTQyLDAsMCwwLTEuMzgtMy4yNzhDMjEuNjQxLDkuODIxLDI0LDEwLjkyNSwyNCwxMi42OTN2MS43MzFBLjUzNy41MzcsMCwwLDEsMjMuNSwxNVpNMTgsMTVIOGExLjA4NiwxLjA4NiwwLDAsMS0xLTEuMTU0VjEyLjY5M2MwLTIuMjczLDMuOTA2LTMuNDYzLDYtMy40NjNzNiwxLjE5LDYsMy40NjN2MS4xNTRBMS4wODYsMS4wODYsMCwwLDEsMTgsMTVaTTQsMTEuNTM5YTEuMDg3LDEuMDg3LDAsMCwxLTEtMS4xNTVWOC4wNzZIMUExLjA4NiwxLjA4NiwwLDAsMSwwLDYuOTIzLDEuMDg2LDEuMDg2LDAsMCwxLDEsNS43NjlIM1YzLjQ2MUExLjA4NiwxLjA4NiwwLDAsMSw0LDIuMzA4LDEuMDg2LDEuMDg2LDAsMCwxLDUsMy40NjFWNS43NjlIN0ExLjA4NiwxLjA4NiwwLDAsMSw4LDYuOTIzLDEuMDg2LDEuMDg2LDAsMCwxLDcsOC4wNzZINXYyLjMwN0ExLjA4NywxLjA4NywwLDAsMSw0LDExLjUzOVpNMTgsNi45MjNhMi42MSwyLjYxLDAsMCwxLS45MS0uMTYxLDYuNDgzLDYuNDgzLDAsMCwwLC45LTMuMyw2LjMzMyw2LjMzMywwLDAsMC0uOS0zLjNBMi42MDcsMi42MDcsMCwwLDEsMTgsMGEzLjI1NiwzLjI1NiwwLDAsMSwyLjk5LDMuNDYxQTMuMjU2LDMuMjU2LDAsMCwxLDE4LDYuOTIzWm0tNS0uMDExYTMuMjUzLDMuMjUzLDAsMCwxLTMtMy40NUEzLjI1MSwzLjI1MSwwLDAsMSwxMywuMDEzYTMuMjUxLDMuMjUxLDAsMCwxLDMsMy40NDlBMy4yNTIsMy4yNTIsMCwwLDEsMTMsNi45MTJaIiBmaWxsPSIjODU4ODhmIi8+PC9zdmc+" alt="img-icon" />
                                معرفی به دوستان
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavItem
