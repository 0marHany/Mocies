import { NavLink } from 'react-router-dom'
import './NavStyle.module.css'


export default function NavBar({ userData, LogOut }) {
    return (
        <>
            <nav  className="navbar navbar-expand-lg  p-0">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white fs-3 ms-2" href="#"> Movies </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNav">
                        <ul className="navbar-nav justify-content-end w-100  ">
                             <ul className='list-unstyled  d-md-flex justify-content-md-center align-items-md-center me-4 '>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded mx-md-4 "
                                                : "text-white nav-link  mx-md-4"
                                        }
                                        to={'/'} >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white  nav-link"
                                        }
                                        to={'/Movies'} >
                                        Movies
                                    </NavLink>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
