import React from 'react';
import './signin.css';
import {useState} from 'react';

const Signin = () => {
  const [data,setData] = useState({
    username:"",
    password:""
  });
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  const changeHandler = e => {

    setData({...data,[e.target.name]:[e.target.value]});
    
  }
  const {username,password} = data;

  return (
<form onSubmit={submitHandler}>
<input type="text" name="username" value={username}
onChange={changeHandler}/><br />
<input type="password" name="password" value={password}
onChange={changeHandler}/><br />
<input type="submit" name="submit" />
</form>
  );
};
  
export default Signin;