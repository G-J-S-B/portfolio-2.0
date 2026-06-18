import './Header.css'

function Header(){
    return(
        <div className="container">
            <nav>
                <a href="#" className="nav-icon">
                    <img src="/images/placeholder.png" alt="" />
                    <span>GJSB</span>
                </a>                    
                <div className='nav-btn'>
                    <span>XXXX</span>
                </div>
                    <a className="nav-resume-btn" href="">Resume</a>
            </nav>
        </div>
    )
}

export default Header