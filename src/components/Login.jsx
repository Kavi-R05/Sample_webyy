// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/login.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       console.log("Submitting Login Data to Render...", formData);

//       const response = await fetch(
//         "https://e-shopping-backend-m9je.onrender.com/api/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Invalid email or password. Please try again.");
//       }

//       const data = await response.json();

//       if (data.token) {
//         localStorage.setItem("authToken", data.token);
//       }

//       alert("Login Successful!");
//       navigate("/");
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(err.message || "Something went wrong during authentication.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="login-card">
//         <h2>LOGIN</h2>
//         <p>Enter your credentials to access your account.</p>

//         {error && (
//           <div
//             className="error-message"
//             style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
//           >
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="name@email.com"
//               value={formData.email}
//               onChange={handleChange}
//               disabled={loading}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//               disabled={loading}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button" disabled={loading}>
//             {loading ? "Signing In..." : "Sign In"}
//           </button>
//         </form>

//         <p className="footer-text">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             style={{
//               color: "#333",
//               fontWeight: "600",
//               textDecoration: "none",
//               marginLeft: "5px",
//             }}
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Submitting Login Data to Render...", formData);

      const response = await fetch(
        "https://e-shopping-backend-m9je.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password. Please try again.");
      }

      const data = await response.json();

      // 1. Crucial Debug Log: Look at your browser console to see what Spring Boot returns!
      console.log("Response data received from backend:", data);

      // 2. Fallback check for common Spring Boot JWT variable keys
      const tokenToSave =
        data.token || data.jwt || data.jwtToken || data.accessToken;

      if (tokenToSave) {
        // Save the authenticated token string safely to LocalStorage
        localStorage.setItem("authToken", tokenToSave);

        // 3. Redirect immediately so Navbar catches the location update and triggers rerender
        navigate("/", { replace: true });
      } else {
        console.error(
          "Auth success, but token key missing in response structure:",
          data
        );
        setError(
          "Token mapping error. Please check your browser developer console."
        );
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="login-card">
        <h2>LOGIN</h2>
        <p>Enter your credentials to access your account.</p>

        {/* Display backend errors visually to the user */}
        {error && (
          <div
            className="error-message"
            style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="footer-text">
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#333",
              fontWeight: "600",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
