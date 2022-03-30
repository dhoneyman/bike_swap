import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import {UserContext} from '../UserContext'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const { user, setUser } = useContext(UserContext);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const responce = await fetch('/api/users/signup',{
      method: 'POST',
      body: JSON.stringify( {first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password} ),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('user',user);

    window.location.assign('/profile');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <br></br>
          <input
            placeholder="First"
            name="first_name"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <br></br>
          <input
            placeholder="Last"
            name="last_name"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
      {JSON.stringify(user, null, 2)}
      </div>
    </div>
  );
}

export default Signup;
