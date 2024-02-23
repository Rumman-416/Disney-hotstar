import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault(); 


    if (email && password) {
      const loginSuccess = true;

      if (loginSuccess) {
        navigate("/playlist");
      }
    } else {
      console.log("Please fill in both email and password fields.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-sky-800 bg-opacity-20 border-2 border-sky-800 rounded-lg w-[20rem] min-h-[30rem] md:w-[22rem]">
          <div className="flex justify-center items-center">
            <img src="logo.png" alt="" className="h-20" />
          </div>
          <h1 className="text-center text-3xl text-sky-800 m-10">Login</h1>
          <form
            action=""
            className="flex flex-col gap-5 justify-center items-center"
          >
            <div className="flex justify-around items-center w-full">
              <label className="text-sm">Email : </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded w-56 bg-[#23253a] border border-sky-800"
              />
            </div>
            <span className="flex justify-around items-center w-full">
              <label className="text-sm">Password :</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded w-56 bg-[#23253a] border border-sky-800"
              />
            </span>

            <input
              type="submit"
              value="Login"
              onClick={loginHandler}
              className="bg-sky-800 w-20 h-10 rounded-md hover:bg-opacity-30 hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
