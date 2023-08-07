import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header">
        <Link className="logo" to={"/"}>
          | POPULAR SHOWS |
        </Link>
      </div>
    </header>
  );
}
