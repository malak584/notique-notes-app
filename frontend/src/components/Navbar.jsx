import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar bg-[#e8dfd6] shadow-md px-6">
      <div className="navbar-start">
        <a className="btn btn-ghost text-3xl font-ebgaramond">Notique</a>
      </div>
      <div className="navbar-end">
        <Link to="/create" className="btn font-ebgaramond gap-2 text-xl">
          <Plus size={18} /> New Note
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
