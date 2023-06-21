import React from 'react';
import './Header.css';

function Header() {
    return (
        <>

            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Sneaker
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ladies Sneaker</a></li>
                    <li><a class="dropdown-item" href="#">Mens Sneaker</a></li>
                    <li><a class="dropdown-item" href="#">Kids Sneakers</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Sales Shoes</a></li>
                </ul>
            </div>

        </>
    )
}

export default Header