import React, { useState } from "react";
import "../assets/css/UserLogin.css"; 
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate=useNavigate();

  const handleLogin = () => {
    // Reset previous errors
    setError("");

   
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Additional constraints
    if (username.length < 10) {
      setError("Username must be at least 10 characters.");
      return;
    }

    // Password constraint: At least 6 characters
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // You can add more specific constraints for username and password as needed

    // Add your authentication logic here
    console.log("Logging in with", username, password);
    Navigate("/UCourses");
  };

  return (
    <div>
    <Navbar/>
    <div className="user-login-container">
      <div className="user-login-form">
        <h2>User Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error-message">{error}</p>

          <button type="button" onClick={handleLogin}>
          Login
          
          </button>
          <p><a href="/signup" style={{color:'black'}}>Sign up here!</a></p>
          </form>
      </div>
      </div>
    </div>
  );
}

export default UserLogin;