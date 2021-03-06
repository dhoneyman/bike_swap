import React, { useState, useContext } from 'react';
import {UserContext} from '../UserContext';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/users/login',{
        method: 'POST',
        body: JSON.stringify( {email: formState.email, password: formState.password} ),
        headers: { 'Content-Type': 'application/json' },
      });
      setIsLoggedIn(true);
      
      if (response.ok) {
        document.location.replace('/profile');}
        const user = formState.email;
        setUser(user);
        console.log('user', user)
      // const token = mutationResponse.data.login.token;
      // Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
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
        {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
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

export default Login;
