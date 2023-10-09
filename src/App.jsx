// import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import SignUpPage from "./Component/SignUpPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/loginPage" />}></Route>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
