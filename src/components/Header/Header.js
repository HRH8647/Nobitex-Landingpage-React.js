import React, {useState, useEffect} from "react";
//css
import styles from "./Header.module.css";

const Header = () => {

    const [textButton, setTextButton] = useState(false);

    const resizeHandler = () => {
        if(window.innerWidth > 768) {
            setTextButton(true)
        }
    }

    useEffect(() => {
        resizeHandler()
    }, [])
    window.addEventListener("resize", resizeHandler);
    
  return (
    <header>
      <div className={styles.container}>
        <p className={styles.heading_header}>
          خرید و فروش امن بیت کوین و ارزهای دیجیتال
        </p>
        <p className={styles.text_header}>
          به بزرگترین بازار ارز دیجیتال ایران بپیوندید
        </p>
        <div className={styles.input_box}>
          <form action="">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className={styles.input_field}
            />
            <button type="submit" className={styles.button_input}>
              {textButton ? "شروع کنید" : "همین حالا شروع کنید"}
            </button>
          </form>
        </div>
        <a href="/" className={styles.link_header}>
          <span>نوبیتکس چطور کار میکند؟</span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyIgdmlld0JveD0iMCAwIDI3IDI3Ij48cGF0aCBkPSJNMTMuNSwyN0ExMy41LDEzLjUsMCwxLDEsMjcsMTMuNSwxMy41MTUsMTMuNTE1LDAsMCwxLDEzLjUsMjdaTTExLjQ3OCw4LjFhLjY4LjY4LDAsMCwwLS42NzkuNjc4djkuNDVhLjY3OS42NzksMCwwLDAsLjY3OS42NzcuNjU5LjY1OSwwLDAsMCwuNC0uMTM4bDYuMy00LjcyNWEuNjcuNjcsMCwwLDAsMC0xLjA4bC02LjMtNC43MjVBLjY1OS42NTksMCwwLDAsMTEuNDc4LDguMVoiIGZpbGw9IiM3ODRlZDEiLz48L3N2Zz4="
            alt="img"
            className={styles.icon_play}
          />
        </a>
        <div className={styles.img_box}></div>
      </div>
    </header>
  );
};

export default Header;
