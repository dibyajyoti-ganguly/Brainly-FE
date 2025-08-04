/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export interface click {
  homeClick: number;
  setHomeClick: any;
}

const Login = (props: click) => {
  const navigate = useNavigate();
  const { homeClick, setHomeClick } = props;
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    const username = ref1.current?.value;
    const password = ref2.current?.value;

    const response = await fetch("http://localhost:3000/api/v1/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.status != 200) alert("Invalid creds");
    else {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/browse");
    }
  };

  return (
    <div className="h-[500px] w-[420px] px-14 py-16 bg-gray-100 font-onest text-black text-base rounded-2xl shadow-lg flex flex-col items-center gap-2">
      <p className="text-3xl font-semibold">Sign in with creds</p>
      <p className="text-center text-zinc-400 mb-4">
        Bring all your work, data and teams in one place. For free.
      </p>
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          ✉
        </span>
        <input
          ref={ref1}
          className="bg-gray-200 h-11 w-full px-12 mb-1 rounded-md"
          placeholder="Username"
        ></input>
      </div>
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          🔐
        </span>
        <input
          ref={ref2}
          className="bg-gray-200 h-11 w-full px-12 rounded-md"
          placeholder="Password"
        ></input>
      </div>

      <p className="pl-40 text-sm mb-2">
        Fisrt time?{" "}
        <span
          onClick={() => {
            setHomeClick(!homeClick);
          }}
          className="text-indigo-500 cursor-pointer"
        >
          Sign up
        </span>
      </p>
      <br />
      <button
        onClick={handleLogin}
        className="bg-indigo-500 h-12 w-full rounded-2xl text-white cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
