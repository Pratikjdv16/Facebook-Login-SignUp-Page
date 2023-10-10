import React from "react";
import "../CSS/SignUpPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Error_icon from "../Img/error-icon.png";
import Tick_mark from "../Img/tickMark-icon.png";
import Triangle_icon from "../Img/triangle-icon.png";

const SignUpPage = () => {
  const initialState = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  };

  // Month Name
  const fullDate = new Date();
  let currDate = fullDate.getDate();
  let currMonth = fullDate.getMonth();
  let currYear = fullDate.getFullYear();

  let func = (index) => {
    let arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return arr[index];
  };

  // Form Validation
  const firstNameReg = /^[A-Za-z. ]{3,}$/;
  const surnameReg = /^[A-Za-z. ]{3,}$/;
  const emailReg = /^[a-z][a-z0-9]{3,}@gmail[.a-z]{2,}[.a-z]{2,}$/;
  const passwordReg = /^[A_Za-z0-9@#$]{5,20}$/;

  // States
  const [state, setState] = useState(initialState);
  const [saveValue, setSaveValue] = useState([]);
  const [styleState, setStyleState] = useState({
    firstName_borderColor: "#ccd0d5",
    surname_borderColor: "#ccd0d5",
    email_borderColor: "#ccd0d5",
    password_borderColor: "#ccd0d5",
    birth_borderColor: "#ccd0d5",
    gender_borderColor: "#ccd0d5",

    firstName_visibility: "hidden",
    surname_visibility: "hidden",
    email_visibility: "hidden",
    password_visibility: "hidden",
    birth_visibility: "hidden",
    gender_visibility: "hidden",

    firstName_error_massage: "none",
    surname_error_massage: "none",
    email_error_massage: "none",
    password_error_massage: "none",
    birth_error_massage: "none",
  });
  const [popUp, setPopUp] = useState({
    display: "none",
  });

  // onChange events
  const firstNameInputChange = (event) => {
    setState({ ...state, firstName: event.target.value });
    setStyleState({
      ...styleState,
      firstName_borderColor: "#ccd0d5",
      firstName_visibility: "hidden",
      firstName_error_massage: "flex",
    });
  };
  const surnameInputChange = (event) => {
    setState({ ...state, surname: event.target.value });
    setStyleState({
      ...styleState,
      surname_borderColor: "#ccd0d5",
      surname_visibility: "hidden",
      surname_error_massage: "flex",
    });
  };
  const emailInputChange = (event) => {
    setState({ ...state, email: event.target.value });
    setStyleState({
      ...styleState,
      email_borderColor: "#ccd0d5",
      email_visibility: "hidden",
      email_error_massage: "flex",
    });
  };
  const passwordInputChange = (event) => {
    setState({ ...state, password: event.target.value });
    setStyleState({
      ...styleState,
      password_borderColor: "#ccd0d5",
      password_visibility: "hidden",
      password_error_massage: "flex",
    });
  };
  const birthDateInputChange = (event) => {
    setState({
      ...state,
      birthDate: event.target.value,
    });
    setStyleState({
      ...styleState,
      birth_borderColor: "#ccd0d5",
      birth_visibility: "hidden",
      birth_error_massage: "none",
    });
  };
  const birthMonthInputChange = (event) => {
    setState({
      ...state,
      birthMonth: event.target.value,
    });
    setStyleState({
      ...styleState,
      birth_borderColor: "#ccd0d5",
      birth_visibility: "hidden",
      birth_error_massage: "none",
    });
  };
  const birthYearInputChange = (event) => {
    setState({
      ...state,
      birthYear: event.target.value,
    });
    setStyleState({
      ...styleState,
      birth_borderColor: "#ccd0d5",
      birth_visibility: "hidden",
      birth_error_massage: "none",
    });
  };
  const genderInputChange = (event) => {
    setState({ ...state, gender: event.target.value });
    setStyleState({
      ...styleState,
      gender_borderColor: "#ccd0d5",
      gender_visibility: "hidden",
    });
  };

  // onBlur Events
  const firstNameBlur = () => {
    if (!firstNameReg.test(state.firstName)) {
      setStyleState({
        ...styleState,
        firstName_borderColor: "red",
        firstName_visibility: "visible",
        firstName_error_massage: "none",
      });
    } else {
      setStyleState({
        ...styleState,
        firstName_borderColor: "#ccd0d5",
        firstName_visibility: "hidden",
        firstName_error_massage: "none",
      });
    }
  };
  const surnameBlur = () => {
    if (!surnameReg.test(state.surname)) {
      setStyleState({
        ...styleState,
        surname_borderColor: "red",
        surname_visibility: "visible",
        surname_error_massage: "none",
      });
    } else {
      setStyleState({
        ...styleState,
        surname_borderColor: "#ccd0d5",
        surname_visibility: "hidden",
        surname_error_massage: "none",
      });
    }
  };
  const emailBlur = () => {
    if (!emailReg.test(state.email)) {
      setStyleState({
        ...styleState,
        email_borderColor: "red",
        email_visibility: "visible",
        email_error_massage: "none",
      });
    } else {
      setStyleState({
        ...styleState,
        email_borderColor: "#ccd0d5",
        email_visibility: "hidden",
        email_error_massage: "none",
      });
    }
  };
  const passwordBlur = () => {
    if (!passwordReg.test(state.password)) {
      setStyleState({
        ...styleState,
        password_borderColor: "red",
        password_error_massage: "none",
        password_visibility: "visible",
      });
    } else {
      setStyleState({
        ...styleState,
        password_borderColor: "#ccd0d5",
        password_visibility: "hidden",
        password_error_massage: "none",
      });
    }
  };
  const birthBlur = () => {
    if (
      state.birthDate === "" ||
      (state.birthMonth === "" && state.birthYear === "")
    ) {
      setStyleState({
        ...styleState,
        birth_borderColor: "red",
        birth_visibility: "visible",
        birth_error_massage: "flex",
      });
    } else {
      setStyleState({
        ...styleState,
        birth_borderColor: "#ccd0d5",
        birth_visibility: "hidden",
        birth_error_massage: "none",
      });
    }
  };
  const genderBlur = () => {
    if (state.gender === "") {
      setStyleState({
        ...styleState,
        gender_borderColor: "red",
        gender_visibility: "visible",
      });
    } else {
      setStyleState({
        ...styleState,
        gender_borderColor: "#ccd0d5",
        gender_visibility: "hidden",
      });
    }
  };

  // Sign up
  const submitFunc = (event) => {
    event.preventDefault();
    console.log(event);
    if (
      state.firstName === "" ||
      state.surname === "" ||
      state.email === "" ||
      state.password === "" ||
      state.birthDate === "" ||
      state.birthMonth === "" ||
      state.birthYear === "" ||
      state.gender === ""
    ) {
      alert("Fill this form then sign up!"); //Pop Up
      setStyleState({
        ...styleState,
        firstName_borderColor: "red",
        firstName_visibility: "visible",
        surname_borderColor: "red",
        surname_visibility: "visible",
        email_borderColor: "red",
        email_visibility: "visible",
        password_borderColor: "red",
        password_visibility: "visible",
        birth_borderColor: "red",
        birth_visibility: "visible",
        gender_borderColor: "red",
        gender_visibility: "visible",
      });
    } else {
      setSaveValue([...saveValue, { ...state }]);
      localStorage.setItem(
        "userDetails",
        JSON.stringify([...saveValue, { ...state }])
      );
      setPopUp({ display: "flex" });
      console.log("Your information is submitted !");
    }
  };

  // Pop-up event
  let onPopUp = () => {
    setPopUp({ display: "none" });
    setState(initialState);
  };

  return (
    <>
      <section className="signUpPage">
        <section className="signUpPage-box">
          <div className="signUpPage-top-box">
            <p className="top-box-firstPara">Create a new account</p>
            <p className="top-box-secondPara">It's a quick and easy.</p>
          </div>

          <div className="signUpPage-bottom-box">
            {/* Username */}
            <div className="userName-box">
              {/* First name */}
              <div>
                <input
                  type="text"
                  id="firstName"
                  className="firstName inputField"
                  style={{
                    borderColor: styleState.firstName_borderColor,
                  }}
                  name="firstName"
                  value={state.firstName}
                  onChange={firstNameInputChange}
                  onBlur={firstNameBlur}
                  placeholder="First name"
                  autoComplete="off"
                />
                <img
                  className="error_icon"
                  src={Error_icon}
                  style={{ visibility: styleState.firstName_visibility }}
                  alt=""
                />
              </div>
              {/* error-massage */}
              <div
                id="firstName-error"
                className="error-massage"
                style={{ display: styleState.firstName_error_massage }}
              >
                <p>What's your name?</p>
                <div>
                  <img src={Triangle_icon} alt="" />
                </div>
              </div>

              {/* Surname */}
              <div>
                <input
                  type="text"
                  id="surname"
                  style={{
                    borderColor: styleState.surname_borderColor,
                  }}
                  name="surname"
                  value={state.surname}
                  onChange={surnameInputChange}
                  onBlur={surnameBlur}
                  className="surname inputField "
                  placeholder="Surname"
                  autoComplete="off"
                />
                <img
                  className="error_icon"
                  src={Error_icon}
                  style={{ visibility: styleState.surname_visibility }}
                  alt=""
                />
              </div>
              {/* error-massage */}
              <div
                id="surname-error"
                className="error-massage"
                style={{ display: styleState.surname_error_massage }}
              >
                <p>What's your name?</p>
                <div>
                  <img src={Triangle_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="input-box">
              <input
                type="email"
                id="email"
                className="email inputField "
                style={{
                  borderColor: styleState.email_borderColor,
                }}
                name="email"
                value={state.email}
                onChange={emailInputChange}
                onBlur={emailBlur}
                placeholder="Email address or phone number"
                autoComplete="off"
              />
              <img
                className="error_icon"
                src={Error_icon}
                style={{ visibility: styleState.email_visibility }}
                alt=""
              />
              <div
                id="email-error"
                className="error-massage"
                style={{ display: styleState.email_error_massage }}
              >
                <p>
                  You'll use this when you log in and if you ever need to reset
                  your password.
                </p>
                <div>
                  <img src={Triangle_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="input-box">
              <input
                type="password"
                id="password"
                style={{
                  borderColor: styleState.password_borderColor,
                }}
                name="password"
                value={state.password}
                onChange={passwordInputChange}
                onBlur={passwordBlur}
                className="password inputField"
                placeholder="New Password"
                autoComplete="off"
              />
              <img
                className="error_icon"
                src={Error_icon}
                style={{ visibility: styleState.password_visibility }}
                alt=""
              />
              <div
                id="password-error"
                className="error-massage"
                style={{ display: styleState.password_error_massage }}
              >
                <p>
                  Enter a combination of at least six numbers, letters and
                  punctuation marks (such as ! and &).
                </p>
                <div>
                  <img src={Triangle_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Birth */}
            <div className="birth-box">
              <div className="birth-title-box">
                <p>Date of birth</p>
                <img
                  className="error_icon"
                  src={Error_icon}
                  style={{ visibility: styleState.birth_visibility }}
                  alt=""
                />
              </div>

              <div className="birth-select-box">
                <div
                  style={{
                    borderColor: styleState.birth_borderColor,
                  }}
                >
                  <select
                    name="birthDate"
                    id="birthDate"
                    value={state.birthDate}
                    onChange={birthDateInputChange}
                    onBlur={birthBlur}
                  >
                    <option value="" disabled>
                      {currDate}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>

                <div
                  style={{
                    borderColor: styleState.birth_borderColor,
                  }}
                >
                  <select
                    name="birthMonth"
                    id="birthMonth"
                    value={state.birthMonth}
                    onChange={birthMonthInputChange}
                  >
                    <option value="" disabled>
                      {func(currMonth)}
                    </option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="July">July</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </select>
                </div>

                <div
                  style={{
                    borderColor: styleState.birth_borderColor,
                  }}
                >
                  <select
                    name="birthYear"
                    id="birthYear"
                    value={state.birthYear}
                    onChange={birthYearInputChange}
                  >
                    <option value="" disabled>
                      {currYear}
                    </option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                  </select>
                </div>
              </div>
              <div
                id="birth-error"
                className="error-massage"
                style={{ display: styleState.birth_error_massage }}
              >
                <p>
                  It looks like you've entered the wrong info. Please make sure
                  that you use your real date of birth.
                </p>
                <div>
                  <img src={Triangle_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="gender-box">
              <div className="gender-title-box">
                <p>Gender</p>
                <img
                  className="error_icon"
                  src={Error_icon}
                  style={{ visibility: styleState.gender_visibility }}
                  alt=""
                />
              </div>
              <div className="gender-items">
                <div
                  style={{
                    borderColor: styleState.gender_borderColor,
                  }}
                >
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={genderInputChange}
                    onBlur={genderBlur}
                    autoComplete="off"
                    checked={state.gender === "female" ? true : false}
                  />
                </div>
                <div
                  style={{
                    borderColor: styleState.gender_borderColor,
                  }}
                >
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={genderInputChange}
                    onBlur={genderBlur}
                    autoComplete="off"
                    checked={state.gender === "male" ? true : false}
                  />
                </div>
                <div
                  style={{
                    borderColor: styleState.gender_borderColor,
                  }}
                >
                  <label htmlFor="other">Other</label>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={genderInputChange}
                    onBlur={genderBlur}
                    autoComplete="off"
                    checked={state.gender === "other" ? true : false}
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <p className="terms">
              People who use our service may have uploaded your contact
              information to Facebook.
            </p>
            <p className="terms">
              By clicking Sign Up, you agree to our{" "}
              <a href="https://www.facebook.com/legal/terms/update">Terms</a>,
              <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
                {" "}
                Privacy Policy
              </a>{" "}
              and
              <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
                {" "}
                Cookies Policy.
              </a>{" "}
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>

            {/* Buttons */}
            <button onClick={submitFunc}>Sign Up</button>
            <div className="route-to-loginPage">
              <Link to="/loginPage">Already have an account?</Link>
            </div>
          </div>

          {/* Sign Up Successfully PopUp Section*/}
          <aside id="popUp" style={{ display: popUp.display }}>
            <img src={Tick_mark} alt="" />
            <h1>Sign Up Successfully</h1>
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

export default SignUpPage;
