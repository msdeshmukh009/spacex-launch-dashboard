import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, user } = useAuth0();

  return (
    <nav className="flex justify-between p-2">
      <div className="basis-40">
        <img src="/assets/spacex.svg" alt="spacex logo" />
      </div>
      <div className="flex items-center gap-4">
        <span>{user?.name}</span>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
      </div>
    </nav>
  );
};

export { Navbar };
