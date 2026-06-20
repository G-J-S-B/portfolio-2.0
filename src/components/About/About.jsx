import './About.css'
import experiences from '../../data/experience.json'

function About(){
    return(
        <section className='about-container' id='experience'>
            <div className='section-title'>
                <h2>My journey thus far</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.</p>
            </div>

            {experiences.map((experience) => (
                <div className="exp-card" key={experience.company}>
                <div className='exp-header'>
                    <img src={experience.logo} alt={experience.company} />
                        <div className='flex'>
                            <div className="exp-title">
                                <h3>{experience.position}</h3>
                                <span>{experience.period}</span>
                            </div>
                            <span className='make-blue'>{experience.company}</span>
                        </div>
                            
                </div>
                <p>{experience.description}</p>
                    <div className='exp-skills'>
                        {experience.skills.map((skill) =>(
                            <span key={skill}>{skill}</span>
                        )
                        )}
                    </div>
                </div>
            ))}

        </section>
    )
}

export default About