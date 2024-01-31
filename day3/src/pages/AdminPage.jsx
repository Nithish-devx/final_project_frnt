import React, { useState } from "react";
import "../assets/css/AdminPage.css"; 
import { useNavigate } from "react-router-dom";

function AdminPage() {
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
    Navigate("/dashboard");
  };

  return (
    <div className="user-login-container">
      <div className="user-login-form">
        <h2>AdminPage</h2>
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
         </button>
          Login
          
          
          </form>
      </div>
    </div>
  );
}

export default AdminPage;