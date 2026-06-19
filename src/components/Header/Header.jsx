import './Header.css'
import navItems from '../../data/nav-items.json'
import { useState } from 'react'


function Header(){
    const [isOpen, setIsOpen] = useState(false)


    function handleMenuClick(){
        setIsOpen(!isOpen)
    }


    return(
        <div className='header-container'>
            <header>
                <a href="#" className="nav-icon">
                    <img src="/images/placeholder.png" alt="" />
                    <span>GJSB</span>
                </a>                    
                <a onClick={handleMenuClick} className='custom-nav-btn'>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </a>
                <a className="nav-resume-btn" href="">Resume</a>
            </header>
            {isOpen && (
            <nav>
                <div className="nav-items">
                    {navItems.map((item) => (
                       <a href={item.href} key={item.label}>
                        {item.label}
                        </a> 
                    )) 
                    } 
                </div>
            </nav>
            )}
        </div>
        
        
    )
}
export default Header