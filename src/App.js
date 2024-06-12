import React, { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 chars, 1 lowercase, 1 uppercase, 1 digit
  const emailRegex = /^\S+@\S+\.\S+$/; // Basic email validation

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.')
      return;
    }
    alert('Successful Login')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="headers">
          <h3>devtools.tech</h3>
          <h2>Welcome to Devtools Tech</h2>
          <h1>Login</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <div className="password-input-box">
              <input
                name="password"
                className="password"
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                onChange={handleInputChange}
              />
              <FontAwesomeIcon
                className="eye-icon"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
              />
            </div>
          </form>
          <div className="validation">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <a href="#" className="forgot-password">forgot Password?</a>
          </div>
          <button
            className="login-button"
            onClick={handleSubmit}
            type="submit">Login
          </button>
          <p className="no-account">Don't have an account?
            <a href="#" className="get-started">Get Started</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
