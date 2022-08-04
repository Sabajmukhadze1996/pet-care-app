import '../scss/navbar.css'
import { NavLink, Outlet } from 'react-router-dom'


export const Navbar = () => {

return (
<>
<nav className="navbar w-100 navbar-expand-md sticky-top pt-1 navbar-dark px-2">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" >
        &#128054; Pet Care
    </a>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" 
    id="navbarNavAltMarkup">
      <div className="navbar-nav nav-links d-flex gap-1 mt-3 fs-5 fw-bold">
         <NavLink to="/homepage">Home</NavLink>
         <NavLink to="/dogcare">Dog care</NavLink>
         <NavLink to="/catcare">Cat care</NavLink>
         <NavLink to="/features">Features</NavLink>
      </div>
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}


