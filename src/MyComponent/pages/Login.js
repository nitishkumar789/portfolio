import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import theimage from "../../images/betbub12.png";
// import Dashbaord from "./dashbaord";
function Login() {
  const navigate = useNavigate();
  const [recaptchaToken, setRecaptchaToken] = useState("");

  function handleLoginFormSubmit(event) {
  event.preventDefault();
  console.log("Recaptcha token:", recaptchaToken);

  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  const data = {
    username,
    password,
    token: recaptchaToken
  };
  console.log("data", data);
  fetch('http://159.89.161.128:4444/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': true
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.success) {
      localStorage.setItem('token', data.authorization);
      navigate('/dashboard');
    }
  })
  .catch(error => console.error(error));
}



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/enterprise.js?render=6LcPyfAkAAAAAFARuVdxnnpTpvVtPLiGRoxyXPrv";
    script.async = true;
    document.body.appendChild(script);

    script.onload = function() {
      window.grecaptcha.enterprise.ready(function() {
        window.grecaptcha.enterprise.execute('6LcPyfAkAAAAAFARuVdxnnpTpvVtPLiGRoxyXPrv', {action: 'login'}).then(function(token) {
          console.log("Recaptcha token:", token);
          setRecaptchaToken(token);
        });
      });
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashbaord");
    }
  }, [navigate]);
  //login
  return (
    <>
      <div className="login">
        <div className="container Site_login text-center">
          <div className="row">
            <div className="col-md-4 m-auto p-0">
              <div className="bet">
                <h1 className="bet text-white ">BETHUB</h1>
                <div>
                  <img className="imagess" src={theimage} alt="" />
                </div>
              </div>
              <form onSubmit={handleLoginFormSubmit}>
                <div className="form_bg boarder all-content">
                  <div className="login_h">
                    {/*___________________________________login form______________________________________  */}
                    <input
                      type="text"
                      className="form-control mt-4"
                      autoComplete="off"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      className="form-control mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="login-btn">
                    <div className="d-grid  gap-2 my-3 mt-2">
                      <button
                      
                        className="btn btn-dark rounded-0  "
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className="container login-link text-center"
                style={{ backgroundColor: "#57d1ff" }}
              >
                {/*----------------------------------------End form------------------------------------------*/}
                <ul id="menu">
                  <li>
                    <Link className="text-dark"to="#">Privacy policy |</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">Terms Conditions |</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">Rules and Regulations |</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">KYC |</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">Responsible Gaming|</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">About Us|</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">Self-Exclusion Policy|</Link>{" "}
                  </li>
                  <li>
                    <Link className="text-dark" to="#">Underage Policy|</Link>{" "}
                  </li>
                </ul>
              </div>
              {/*______________________________________footer_______________________________________________*/}
              {/*
         </div>
         */}
              <div className="footer_i">
                <ul>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-telegram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </Link>{" "}
                  </li>
                </ul>
              </div>
              {/*  </form>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
