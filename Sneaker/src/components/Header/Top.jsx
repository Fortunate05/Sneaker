import React from 'react'
import './Top.css';

function Top() {
    return (
        <>
            <div>
                <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Find a store
                </a>
                <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Help
                </a>
                <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Join Us
                </a>

                <li class="nav-item dropdown">
                    <a class="nd-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sign IN
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Login</a></li>
                        <li><a class="dropdown-item" href="#">Register</a></li>

                    </ul>
                </li>
            </div>
        </>
    )
}

export default Top