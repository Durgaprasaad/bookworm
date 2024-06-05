import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <section className='main'>
            <div className='logo-container'>
                <h3 className='logo'>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><i class="ri-book-line"></i> 𝘽𝙤𝙤𝙠𝙒𝙤𝙧𝙢</Link>  </h3>
            </div>
            <div className='bookshelf-container'>
                <h3 className='bookshelf-title'> <Link to="/bookshelf" style={{textDecoration:"none"}}>View Bookshelf</Link></h3>
                <img
                    src="https://w7.pngwing.com/pngs/361/1012/png-transparent-bookcase-cartoon-books-on-a-bookshelf-angle-comic-book-logo.png"
                    height={50}
                    alt=""
                    className='bookshelf-image'
                />
            </div>
        </section>
    );
};

export default NavBar;
