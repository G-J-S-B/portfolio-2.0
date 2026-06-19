import './Footer.css'
import socials from '../../data/socials.json'

function Footer() {
    return(
        <footer>
            <div className='footer-containter'>
                <div className="footer-icon">
                    <span>G<span className='make-blue'>JS</span>B</span>
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
                <div className='footer-blurb'>
                    <h3>
                        Creating Connections, <br /> Embracing Challenges,<br /> Always Learning.
                    </h3>
                </div>
                <div className='footer-content'>
                    <p>
                        I'm driven by cursiosity, motivated by overcoming challenges, <br />
                        and always looking to connect with people who share <br />my passion for innovation and creativity. 
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer