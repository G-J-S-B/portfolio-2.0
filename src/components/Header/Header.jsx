import './Header.css'
import navItems from '../../data/nav-items.json'
import { useState, useEffect } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    function handleMenuClick() {
        setIsOpen(!isOpen)
    }

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        })

        setIsOpen(false)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                )

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id)
                }
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            }
        )

        navItems.forEach((item) => {
            const section = document.getElementById(item.id)

            if (section) {
                observer.observe(section)
            }
        })

        return () => observer.disconnect()
    }, [])

    return (
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

                <a className="nav-resume-btn" href="#contact">
                    Contact
                </a>
            </header>

            {isOpen && (
                <nav>
                    <div className="nav-items">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={
                                    activeSection === item.id
                                        ? 'active'
                                        : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.id)
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </div>
    )

}

export default Header