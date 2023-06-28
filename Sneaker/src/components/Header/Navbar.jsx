import React from 'react'
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid ">
                    <a class="navbar-brand " href="#">
                        <Logo />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse float-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">New & Featured</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Men</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Women</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kids</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sale</a>
                            </li>
                            <nav class="navbar bg-body-tertiary">
                                <div class="container-fluid">
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar