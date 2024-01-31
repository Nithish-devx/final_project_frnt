import React, { useState } from "react";
import Navbar from "../components/NavBar";

function StaffLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    console.log("Logging in with", username, password);
  };

  return (
    <div>
    <Navbar/>
    <div className="staff-login-container">
      <div className="staff-login-form">
        <h2>Staff Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default StaffLogin;