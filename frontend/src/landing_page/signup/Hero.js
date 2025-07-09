import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", data);
      alert(res.data.status || "Signup complete");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form 
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          minWidth: "300px"
        }} 
        onSubmit={handleSubmit}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h3>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Full Name</label>
          <input 
            type="text"
            id="name"
            placeholder="Enter name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email address</label>
          <input 
            type="email"
            id="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
