import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, user } = useAuth0();

  return (
    <nav className="flex justify-between p-4">
      <div className="basis-80">
        <img src="/assets/spacex.svg" alt="spacex logo" />
      </div>

      <div className="flex items-center gap-4">
        <span title={user?.name} className="text-xl">
          {user?.name}
        </span>
        <button
          title="Logout"
          className="text-xl"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
