import { Navbar } from "../../components";
import { LaunchBoard } from "../../features/launch-board/components";

const Home = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-slate-50">
      <Navbar />
      <LaunchBoard />
    </div>
  );
};

export { Home };
