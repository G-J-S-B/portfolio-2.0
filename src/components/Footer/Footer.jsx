import './Footer.css'
import socials from '../../data/socials.json'

function Footer() {
    return(
        <footer>
            <div className="footer-icon">
                <h3>GJSB</h3>
            </div>
            <div className="social-icons">
                {socials.map((social) => (
                    <div className="social-icon">
                        <a href={social.link} target={social.target} rel={social.rel}>
                            <img  src={social.icon} alt="{social-label}" />
                        </a>
                    </div>
                ))}
            </div>
            <div>
                    
            </div>
        </footer>
    )
}

export default Footer