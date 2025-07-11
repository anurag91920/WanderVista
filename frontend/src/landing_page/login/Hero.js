import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_UR}/api/auth/login`, data);

      if (res.data.token) {
        alert("Login Success");
        localStorage.setItem("token", res.data.token);
      } else {
        alert(res.data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded shadow" style={{ minWidth: '300px' }} onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Password" 
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required 
          />
        </div>

        <div className="d-grid text-center">
          <button type="submit" className="btn btn-primary btn-square mx-auto">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
