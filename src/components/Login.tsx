

const Login = () => {
  return (
    <div className="h-[500px] w-[420px] px-14 py-16 bg-gray-100 font-onest text-black text-base rounded-2xl shadow-lg flex flex-col items-center gap-2">
      <p className="text-3xl font-semibold">Sign in with email</p>
      <p className="text-center text-zinc-400 mb-4">
        Bring all your work, data and teams in one place. For free.
      </p>
      <input className="bg-gray-200 h-11 w-full px-4 mb-1 rounded-md" placeholder="✉    Email"></input>
      <input className="bg-gray-200 h-11 w-full px-4 rounded-md" placeholder="🔐   Password"></input>
      <p className="pl-40 text-sm">Forgot password?</p>
      <br/>
      <button className="bg-indigo-500 h-12 w-full rounded-2xl text-white cursor-pointer">Get Started</button>
    </div>
  );
};

export default Login;
