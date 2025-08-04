import React, { useContext, useState } from "react";
import "./signup.css";
import { NavLink, useHistory } from "react-router-dom"; // ⬅️ changed from useNavigate
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign_in = () => {
  const { setAccount } = useContext(Logincontext);
  const history = useHistory(); // ⬅️ changed from useNavigate

  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    if (!email || !password) {
      toast.warning("Please fill all fields ⚠️", {
        position: "top-center",
      });
      return;
    }

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        toast.error("Invalid Credentials 👎", {
          position: "top-center",
        });
      } else {
        setAccount(data);
        localStorage.setItem("user", JSON.stringify(data));
        setData({ email: "", password: "" });

        toast.success("Login Successful 🎉", {
          position: "top-center",
        });

        setTimeout(() => {
          history.push("/"); // ⬅️ changed from navigate("/")
        }, 1000);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Server error. Try again later.", {
        position: "top-center",
      });
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazon-logo" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={logdata.email}
                id="email"
              />
            </div>

            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={logdata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>

            <button type="submit" className="signin_btn" onClick={senddata}>
              Continue
            </button>
          </form>
          <ToastContainer />
        </div>

        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            <NavLink to="/signup">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;
