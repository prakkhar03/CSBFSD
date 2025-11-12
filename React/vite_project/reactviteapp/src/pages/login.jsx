import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{useNavigate} from 'react-router-dom';

function Login(logData) {
  const[email,setEmail]=React.useState();
  const[password,setPassword]=React.useState();

  const navigate=useNavigate();
  function verification(e){
    e.preventDefault();
    // console.log(logData.name);
    if(logData.email===email){
      if(logData.password===password){
        alert("login successful and navigateing to dasdhboard");
        navigate('/dashboard');
      }
       else{
           alert("incorrect password");
          }
    }
    else{
      alert("email not registered");
    }
    }
  return(
    <div>
        <h2>Login Form</h2>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verification} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}


export default Login