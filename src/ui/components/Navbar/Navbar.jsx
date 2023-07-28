import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="hero__top">
        <div className="hero_schedule">
          <i className="fa-regular fa-clock"></i>
          <p> OPENED ON WEEKDAYS FROM 8:30 AM TO 6:30 PM</p>
        </div>

        <nav className="nav_top">
          <NavLink to="medical/#">History</NavLink>
          <NavLink to="medical/doctors">Carrers</NavLink>
          <NavLink to="medical/blog">News</NavLink>
          <NavLink to="medical/#">Privacy Policy</NavLink>
        </nav>

        <div className="login">
          <NavLink>LOGIN</NavLink>
        </div>
      </div>
      <header className="hero">
        <div className="logo-brand">
          <img src="https://picsum.photos/100/100" alt="MedLife Logo" />
        </div>
        <div className="text-brand">
          <h1>MEDLIFE</h1>
        </div>
        <nav className="nav-menu">
          <NavLink>CLINICS</NavLink>
          <NavLink>SERVICES</NavLink>
          <NavLink>DOCTORS</NavLink>
          <NavLink>TIMETABLE</NavLink>
          <NavLink>PAGES</NavLink>
          <NavLink>BLOG</NavLink>
          <NavLink>SHOP</NavLink>
          <NavLink>CONTACT</NavLink>
        </nav>
        <button className="btn btn-primary">
          <i className="fa-solid fa-phone"></i> +44 725-555-1234
        </button>
      </header>
    </>
  );
};
