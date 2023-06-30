import React from 'react'
import './Top.css';

function Top() {
    return (
        <>
            <div className='container'>
                <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none ">
                    Find a store
                </a>
                <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none">
                    Help
                </a>
                <a href="/Joinus" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none">
                    Join Us
                </a>

                <li className="nav-item dropdown">
                    <a className="d-inline-flex focus-ring py-1 px-2 text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sign IN
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/register">Register</a></li>

                    </ul>
                </li>
            </div>
        </>
    )
}

export default Top