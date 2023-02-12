import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebase';

function Register() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [contactNumber, setContactNumber] = useState('');


  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Create user account
  //     const { user } = await dp.createUserWithEmailAndPassword(email, password);

  //     // Add user information to Firestore
  //     await db.collection('users').doc(user.uid).set({
  //       fullName,
  //       contactNumber,
  //     });

  //     console.log('Signed up successfully');
  //   } catch (error) {
  //     console.log('Error signing up', error);
  //   }
  // };

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
    // onSubmit={handleSubmit}
    >
      <div className="row d-flex justify-content-center align-items-center  mt-4">
      <div className="col-md-3 text-center">
        <label>Email:</label>
        </div>
        <div className="col-md-3 text-center">
        <input type="email" 
        //value={email} 
       // onChange={(event) => setEmail(event.target.value)} 
        />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center  mt-4">
      <div className="col-md-3 text-center">
        <label>Pawword:</label>
        </div>
        <div className="col-md-3 text-center">
        <input type="password" 
        //value={password} 
       // onChange={(event) => setPassword(event.target.value)}
         />
        </div>
      </div>
     
      <div className="row d-flex justify-content-center align-items-center  mt-4">
      <div className="col-md-3 text-center">
        <label>Full Name:</label>
        </div>
        <div className="col-md-3 text-center">
        <input type="text" 
        //value={fullName} 
       // onChange={(event) => setFullName(event.target.value)} 
        />
        </div>
      </div>
     
      <div className="row d-flex justify-content-center align-items-center  mt-4">
      <div className="col-md-3 text-center">
        <label>Contact Number:</label>
        </div>
        <div className="col-md-3 text-center">
        <input type="tel" 
        //value={contactNumber}
       // onChange={(event) => setContactNumber(event.target.value)}
         />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <button className="Get-Started-btn"> Sign In</button>
                </div>
        </div>
    </form>
    <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="row mt-4 ">
                        <div className="col-12 text-center">
                            <p className="sub-text">Already have an account? <Link to="/login"> Login  </Link></p>
                        </div>
                    </div>
                </div>
            </div>
</div>
  );
}

export default Register;
