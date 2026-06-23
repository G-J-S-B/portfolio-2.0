import './Contact.css'
import socials from '../../data/socials.json'
import { label } from 'framer-motion/client'

function Contact(){
    return (

        <section className='contact-container' id='contact'>
            <div className='section-title'>
                <h2>Get in touch with me</h2>
                <p>I'm looking forward to hearing from you</p>
            </div>
            <div className='contact-content-container'>
                <div className="contact-section">
                    <div className="contact-sec-left">
                        <h2>Let's connect and create something great together.</h2>
                        <h3>or just say Hello!</h3>
                    </div>
                    <div className="contact-sec-right">
                        <a href="mailto:hello@gerrardbarrows.com" className='contact-email make-blue'>Hello@gerrardbarrows.com</a>
                        <div className="contact-social-icons">
                            {socials.map((social) => (
                                <a href={social.link} key={social.label} target={social.target}><img src={social.icon} alt={label} />{social.label}</a>    
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact