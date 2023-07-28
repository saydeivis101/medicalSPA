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
          <span>|</span>
          <NavLink to="medical/doctors">Carrers</NavLink>
          <span>|</span>
          <NavLink to="medical/blog">News</NavLink>
          <span>|</span>
          <NavLink to="medical/#">Privacy Policy</NavLink>
        </nav>

        <div className="login">
          <NavLink>LOGIN</NavLink>
        </div>
      </div>
      <header className="hero">
        <div className="brand">
          <div className="logo_brand">
            <img src="https://picsum.photos/100/100" alt="MedLife Logo" />
          </div>
          <div className="text_brand">
            <h1>MEDLIFE</h1>
          </div>
        </div>


          <nav className="nav_menu">
            <NavLink to="">CLINICS</NavLink>
            <NavLink to="">SERVICES</NavLink>
            <NavLink to="">DOCTORS</NavLink>
            <NavLink to="">TIMETABLE</NavLink>
            <NavLink to="">PAGES</NavLink>
            <NavLink to="">BLOG</NavLink>
            <NavLink to="">SHOP</NavLink>
            <NavLink to="">CONTACT</NavLink>
          </nav>

        <nav className="nav_menu-right">
            <button className="btn btn-primary">
              <i className="fa-solid fa-phone"></i> +44 725-555-1234
            </button>
            <NavLink to="">
              <i className="fa-solid fa-cart-plus"></i>
            </NavLink>
          </nav>
      </header>
    </>
  );
};
