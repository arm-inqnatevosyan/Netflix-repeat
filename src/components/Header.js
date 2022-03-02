import React from 'react';
import logo from "../img/Logonetflix.png";

const Header = () => {
  return (
    <header>
        <div className='header-opacity'>
        <nav>
            <div className='logo'><img src={logo} width="150" height="50" /></div>
            <div className='last-div'>
                <div>
                <select>
                    <option>English</option>
                    <option>Russian</option>
                </select>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        </nav>
        <div className='header-aside'>
            <h3>Unlimeted movies, TV</h3>
            <h3>shows,and more.</h3>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <h6>Ready to watch? Enter your email to create or restart your membership</h6>
            <div>
                <input type="text" placeholder='Email address' />
                <button>Get Started <i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
