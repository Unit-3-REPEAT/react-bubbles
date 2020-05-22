import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';



const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState(initialState);
  const history = useHistory();
  // console.log(`history`, history)


  //Handle changes
  const handleChanges = e => {
    e.persist();
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    })
  }

  //Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/api/login", credentials)
    .then(response => {
      // console.log(`response Login.js -->`, response)
      //response.data.payload
      localStorage.setItem('token', response.data.payload)
      history.push('/bubblepage')
    })
    .catch(error => console.log(`There was a problem with login`, error.response))


  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please log in.</p>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChanges}

        />
        <br/>
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChanges}
        />

        <br/>
        <button>Login</button>
        

      </form>

    </>
  );
};

export default Login;
