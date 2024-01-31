import React from "react";
import '..//assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar";

function Login() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to go to the desired route
    navigate('/UserLogin');
  };
  const handleButton_Click = () => {
    // Use navigate to go to the desired route
    navigate('/stafflogin');
  };

  return (
    <div>
    <Navbar/>
    <div className="login-container">
    
      <div className="login">
        <button onClick={handleButtonClick}>User</button>
        <button onClick={handleButton_Click}>Staff</button>


      </div>
      </div>
    </div>
  );
}

export default Login;
// // Login.js
// import React, { useState } from "react";
// import './login.css';
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = () => {
//     // Perform login logic here
//     // For simplicity, let's just check if the username and password are not empty
//     if (username.trim() === "" || password.trim() === "") {
//       setErrorMessage("Please enter both username and password.");
//     } else {
//       // Perform your authentication logic here (e.g., API call, validation)
//       // For this example, let's assume a successful login and clear the form
//       setErrorMessage("");
//       setUsername("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
