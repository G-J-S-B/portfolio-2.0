import './Footer.css'
import socials from '../../data/socials.json'

function Footer() {
    return(
        
        <div className="social-icons">
            {socials.map((social) => (
                <div className="social-icon">
                    <a href={social.link} target={social.target} rel={social.rel}>
                    <img src={social.icon} alt="" />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Footer