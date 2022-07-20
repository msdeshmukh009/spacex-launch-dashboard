import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <main className="bg-zinc-900 text-slate-50 min-h-screen flex justify-center flex-col items-center gap-10 p-4">
      <div>
        <img src="/assets/spacex.svg" alt="spacex logo" />
      </div>

      <div>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-[#054B83] p-4 rounded-md text-2xl"
        >
          Login
        </button>
      </div>
    </main>
  );
};
export { Login };
