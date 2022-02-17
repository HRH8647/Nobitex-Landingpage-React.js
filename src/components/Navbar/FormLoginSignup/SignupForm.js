import React, {useState, useEffect} from 'react';
//functions
import { validate } from './function/validate';
//css
import styles from './SignupForm.module.css';
// react router dom
import { Link } from 'react-router-dom';

const SignupForm = () => {

  //Hooks

  const [showPass, setShowPass] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState({});
  const [focus, setFocus] = useState({
    email: false,
    password: false,
    confirmPassword: false
  })


  useEffect(() => {
    setError(validate(data, "signup"));
  }, [data])

  //functions 

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(Object.keys.length !== 0) {
      setFocus({
        email: true,
        password: true,
        confirmPassword: true
      })
    }
  }

  const focusHandler = (e) => {
    setFocus({
      ...focus,
      [e.target.name]: true
    })
  }
  //show or hide password
  const clickEyeHandler = () => {
    setShowPass(!showPass);

    let inp = document.getElementById("inppass2");

    if(showPass) {
      inp.setAttribute("type", "text");
    } else {
      inp.setAttribute("type", "password");
    }
  }

  const clickEye2Handler = () => {
    setShowPass(!showPass);

    let inp = document.getElementById("inppass");

    if(showPass) {
      inp.setAttribute("type", "text");
    } else {
      inp.setAttribute("type", "password");
    }
  }

  //destructuring
  const {email, password, confirmPassword} = data;
  return (
    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={submitHandler}>
        <h4>ثبت نام</h4>
        <label>
          ایمیل
        </label>
        <div className={styles.emailBox}>
          <input type="email" name="email" value={email} placeholder="ایمیل را وارد کنید" onChange={changeHandler} onClick={focusHandler}  />
          <i className='fas fa-envelope'></i>
        </div>
        {error.email && focus.email && <p className={styles.warning_validate}>{error.email}</p>}
        <label>
          رمز عبور
        </label>
        <div className={styles.passBox}>
          <input type="password"  id='inppass' name="password" placeholder="رمز عبور را وارد کنید" value={password} onChange={changeHandler} onClick={focusHandler} />
          <i className='fas fa-eye' onClick={clickEye2Handler}></i>
        </div>
        {error.password && focus.password && <p className={styles.warning_validate}>{error.password}</p>}
        <label>
          تکرار رمز عبور 
        </label>
        <div className={styles.passBox}>
          <input type="password"  id='inppass2' name="confirmPassword" placeholder="رمز عبور را تکرار کنید" value={confirmPassword} onChange={changeHandler} onClick={focusHandler} />
          <i className='fas fa-eye' onClick={clickEyeHandler}></i>
        </div>
        {error.confirmPassword && focus.confirmPassword && <p className={styles.warning_validate}>{error.confirmPassword}</p>}
        <button type='submit' className={styles.btn_signup}>ثبت نام</button>
        <Link to="/login" type='button' className={styles.btn_login}>ورود</Link>
        <button className={styles.btn_google}>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNDQuNSAyMEgyNHY4LjVoMTEuOEMzNC43IDMzLjkgMzAuMSAzNyAyNCAzN2MtNy4yIDAtMTMtNS44LTEzLTEzczUuOC0xMyAxMy0xM2MzLjEgMCA1LjkgMS4xIDguMSAyLjlsNi40LTYuNEMzNC42IDQuMSAyOS42IDIgMjQgMiAxMS44IDIgMiAxMS44IDIgMjRzOS44IDIyIDIyIDIyYzExIDAgMjEtOCAyMS0yMiAwLTEuMy0uMi0yLjctLjUtNHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjRkJCQzA1IiBkPSJNMCAzN1YxMWwxNyAxM3oiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiNFQTQzMzUiIGQ9Ik0wIDExbDE3IDEzIDctNi4xTDQ4IDE0VjBIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMzNEE4NTMiIGQ9Ik0wIDM3bDMwLTIzIDcuOSAxTDQ4IDB2NDhIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiM0Mjg1RjQiIGQ9Ik00OCA0OEwxNyAyNGwtNC0zIDM1LTEweiIvPjwvc3ZnPg==' alt="google" ></img>
          <p>با گوگل وارد شوید</p>
        </button>

      </form>
    </div>
  )
}

export default SignupForm