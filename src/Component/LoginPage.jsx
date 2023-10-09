import React from "react";
import "../CSS/LoginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Open_eye from "../Img/openEye-icon.png";
import Close_eye from "../Img/closeEye-icon.png";
import Error_icon from "../Img/error-icon.png";
import Tick_mark from "../Img/tickMark-icon.png";

const LoginPage = () => {
  const initialState = {
    email: "",
    password: "",
  };

  // Form Validation
  const emailReg = /^[a-z][a-z0-9]{3,}@gmail[.a-z]{2,}[.a-z]{2,}$/;
  const passwordReg = /^[A_Za-z0-9@#$]{5,20}$/;

  // States
  const [state, setState] = useState(initialState);
  const [value, setValue] = useState([]);
  const [styleState, setStyleState] = useState({
    password_type: "password",
    email_borderColor: "#ccd0d5",
    password_borderColor: "#ccd0d5",
    email_visibility: "hidden",
    password_eye_visibility: "hidden",
    password_error_visibility: "hidden",
    eye_icon: Open_eye,
  });
  const [popUp, setPopUp] = useState({
    display: "none",
  });

  // onChange Event
  const emailInputChange = (event) => {
    setState({ ...state, email: event.target.value });
    setStyleState({ ...styleState, email_borderColor: "#1b74e4" });
  };
  const passwordInputChange = (event) => {
    setState({ ...state, password: event.target.value });
    setStyleState({
      ...styleState,
      password_error_visibility: "hidden",
      password_borderColor: "#1b74e4",
      password_eye_visibility: "visible",
    });
  };

  // onBlur Event
  const emailInputBlur = () => {
    if (!emailReg.test(state.email) === true) {
      setStyleState({
        ...styleState,
        email_borderColor: "red",
        email_visibility: "visible",
      });
    } else {
      setStyleState({
        ...styleState,
        email_borderColor: "#ccd0d5",
        email_visibility: "hidden",
      });
    }
  };
  const passwordInputBlur = () => {
    if (!passwordReg.test(state.password) === true) {
      setStyleState({
        ...styleState,
        password_eye_visibility: "hidden",
        password_borderColor: "red",
        password_error_visibility: "visible",
      });
    } else {
      setStyleState({
        ...styleState,
        password_borderColor: "#ccd0d5",
        password_error_visibility: "hidden",
      });
    }
  };

  // Password Click
  // Correct password is compulsory.
  const passwordFunc = () => {
    if (styleState.password_type === "password") {
      setStyleState({
        ...styleState,
        password_type: "text",
        eye_icon: Close_eye,
      });
    } else {
      setStyleState({
        ...styleState,
        password_type: "password",
        eye_icon: Open_eye,
      });
    }
  };

  // onSubmit Event
  const submitFunc = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("userDetails"));

    for (let index = 0; index < data.length; index++) {
      if (
        data[index].email === state.email &&
        data[index].password === state.password
      ) {
        setPopUp({ display: "flex" });
        setValue([...value, { ...state }]);
        setStyleState({ ...styleState, password_eye_visibility: "hidden" });
        setState(initialState);
        console.log("Your information is submitted !");
        break;
      } else if (
        data[index].email !== state.email &&
        data[index].password !== state.password
      ) {
        setStyleState({
          email_borderColor: "red",
          email_visibility: "visible",
          password_borderColor: "red",
          password_eye_visibility: "hidden",
          password_error_visibility: "visible",
        });
        alert("Check email & password");
        break;
      } else if (data[index].email !== state.email) {
        setStyleState({
          ...styleState,
          email_borderColor: "red",
          email_visibility: "visible",
        });
        alert("Check email!");
        break;
      } else if (data[index].password !== state.password) {
        setStyleState({
          ...styleState,
          password_borderColor: "red",
          password_eye_visibility: "hidden",
          password_error_visibility: "visible",
        });
        alert("Check password!");
        break;
      } else {
        alert("Check email & password!");
        break;
      }
    }
  };

  // Pop-up event
  let onPopUp = () => {
    setPopUp({ display: "none" });
  };

  return (
    <>
      <section className="loginPage">
        <section className="loginPage-box">
          <aside className="loginPage-left-box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"
              alt=""
            />
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </aside>

          <aside className="loginPage-right-box">
            {/* Email input */}
            <div
              style={{
                borderColor: styleState.email_borderColor,
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={emailInputChange}
                onBlur={emailInputBlur}
                placeholder="Email address or phone number"
              />
              <img
                src={Error_icon}
                style={{ visibility: styleState.email_visibility }}
                alt=""
              />
            </div>

            {/* Password input */}
            <div
              style={{
                borderColor: styleState.password_borderColor,
              }}
            >
              <input
                type={styleState.password_type}
                id="password"
                name="password"
                value={state.password}
                onChange={passwordInputChange}
                onBlur={passwordInputBlur}
                placeholder="Password"
              />
              <img
                className="eye-icon"
                src={styleState.eye_icon}
                style={{ visibility: styleState.password_eye_visibility }}
                onClick={passwordFunc}
                alt=""
              />
              <img
                className="error-icon"
                src={Error_icon}
                style={{ visibility: styleState.password_error_visibility }}
                alt=""
              />
            </div>

            {/* Login button */}
            <button className="login-btn" onClick={submitFunc}>
              Log In
            </button>

            {/* Create-account button */}
            <button className="create-account-btn">
              <Link to="/signUpPage">Create new account</Link>
            </button>
          </aside>

          {/* Login Successfully PopUp Section*/}
          <aside id="popUp" style={{ display: popUp.display }}>
            <img src={Tick_mark} alt="" />
            <h1>Login Successfully</h1>
            <div className="popUpBtn-div">
              <button id="popUpBtn" onClick={onPopUp}>
                OK
              </button>
            </div>
          </aside>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
