import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate=useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  const login=async (event)=>{
    event.preventDefault()
    var req = await axios.post("http://127.0.0.1:3001/login",{
      // email:email,
      // password:password
      email, password
    })
    // console.log(req)
    console.log(req.data)
    var isLoginSuccessful = req.data.isLoggedIn
    console.log(isLoginSuccessful);
    if(isLoginSuccessful){
      navigate('/')
      var message = req.data.isLoggedIn
      console.log(message);
    }
    else{
      alert("Check your Credentials again!")
    }
    
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;