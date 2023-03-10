import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../../contexts/UserAuthContext";

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   db.signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       console.log('Logged in successfully');
  //     })
  //     .catch((error) => {
  //       console.log('Error logging in', error);
  //     });
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
<div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="row mt-4 ">
                        <div className="col-12 text-center">
                            <h2 className="main-heading lh-base">SAYLANI WELFARE</h2>
                            <h6 className="sub-heading">ONLINE DISCOUNT STORE</h6>
                        </div>
                    </div>
                </div>
            </div>
    <form 
    onSubmit={handleSubmit}
    >
        {error && <Alert variant="danger">{error}</Alert>}
    <div className="row d-flex justify-content-center align-items-center  mt-4">  
        <div className="col-md-3 text-center">
        <label>Email:</label>
        </div>
        <div className="col-md-3 justify-content-center">
        <input type="email" 
       // value={email} 
       onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row d-flex justify-content-center align-items-center  mt-4">  
      <div className="col-md-3 text-center">
        <label>Password:</label>
        </div>
        <div className="col-md-3 justify-content-center">
        <input type="password"
        // value={password} 
        onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      </div>
      <div className="row justify-content-center mt-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <button className="Get-Started-btn"> Sign In</button>
                </div>
        </div>
        <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="row mt-4 ">
                        <div className="col-12 text-center">
                            <p className="sub-text">Don't have an account click here for <Link to="/register"> signup </Link></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </form>
    </div>
  );
}

export default Login;
