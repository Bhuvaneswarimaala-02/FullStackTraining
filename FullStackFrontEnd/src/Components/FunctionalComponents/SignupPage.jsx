import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate=useNavigate();

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   console.log('First Name:', firstName);
  //   console.log('Last Name:', lastName);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };
  const signup=async (event)=>{
    event.preventDefault() //to prevent refresh of the whole page on submit
    var req = await axios.post("https://rampexfullstack.onrender.com/signup",{ //before deploying bakcend server "http://127.0.0.1:3001/signup"
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    })
    console.log(req);
    navigate('/LoginPage')
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;