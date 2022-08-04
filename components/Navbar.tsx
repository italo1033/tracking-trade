import style from "../styles/Navbar.module.css";
import { BiUserCircle } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';



export default function Navbar() {
    return(
      <nav className="navbar navbar-white bg-white justify-content-between">
      <div className="d-flex align-items-center">
        <AiOutlineMenu  size={17} className="ms-3 me-3"/>
        <div className={style.search}>
          <BiSearchAlt  size={17} className="ms-3"/>
          <input className={style.input_search} type="search" placeholder="Search..." aria-label="Search" />
        </div>
      </div>
      <div>
        <BiUserCircle size={50} />
      </div>
    </nav>
    );
  }