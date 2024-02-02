import Form from "react-bootstrap/Form";
import "./Styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const nav = useNavigate();

  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);

  let data = { name, email, password };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      axios
        .post("http://localhost:8080/member", data)
        .then((res) => {
          alert("User Account Created Sucessfully");
          console.log(res);

          nav("/expense");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    } else {
      alert("Please fill all the fields in the form");
    }
  };

  return (
    <>
      <Navbar />
      <div id="box-parent">
        <div id="box-child">
          <Form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label id="checkbox">
              <input type="checkbox" /> I have read and agree to the terms and
              services
            </label>{" "}
            <br />
            <button id="signupbutton" onClick={handleSubmit}>
              Create Free Account
            </button>{" "}
            <br />
            <p>or</p>
            <Link to="/login-via-email">
              <button id="loginbutton">Login</button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
