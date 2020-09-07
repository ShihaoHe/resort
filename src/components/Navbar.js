import React from 'react'
import { Link } from 'react-router-dom'

import { FaAlignRight } from "react-icons/fa";

import logo from '../images/logo.svg'

class Navbar extends React.Component {
    state = {
        isOpen: false
    }
    
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/resort'>
                            <img src={logo} alt='resort beach' />
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to='/resort'>Home</Link>
                        </li>
                        <li>
                            <Link to='/resort/rooms'>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;