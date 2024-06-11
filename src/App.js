import React, { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    if (!passwordRegex.test(newPassword)) {
      return;
    } else {
      setPasswordError('')
    }
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    if (!emailRegex.test(newEmail)) {
      return;
    } else {
      return setEmailError('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (emailError || passwordError) {
      alert('Sucessful Login')
    } else {
      alert('error, invalid Password or Email')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="headers">
          <h3 className="dev-tools">devtools.tech</h3>
          <div className="login-container">
            <h2>Welcome to Devtools Tech</h2>
            <h1>Login</h1>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <div className="password-input-box">
              <input
                className="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={handlePasswordChange}
              />
              <FontAwesomeIcon className="eye-icon"
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
            type="submit">Login</button>
          <p className="no-account">
            Don't have an account?
            <a href="#" className="get-started"> Get Started</a></p>
        </div>
      </header >
    </div >
  );
}

export default App;
