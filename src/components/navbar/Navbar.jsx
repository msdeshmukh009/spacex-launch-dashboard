const Navbar = () => {
  return (
    <nav className="flex justify-between p-2">
      <div className="basis-40">
        <img src="/assets/spacex.svg" alt="spacex logo" />
      </div>
      <div className="flex items-center gap-4">
        <span>Mahesh</span>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export { Navbar };
