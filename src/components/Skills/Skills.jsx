import './Skills.css'
import skills from '../../data/skills.json'

function Skills(){
    return(
        <section className='skills-container' id='skills'>
            <div className='section-title'>
                <h2>Here's what I'm good at</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.</p>
            </div>

            <div className='skills-section'>
                {skills.map((category) => (
                    <div className="skills-card" key={category.title}>
                        <h3 className='make-blue'>{category.title}</h3>
                        <div className='skills-listing'>
                            {category.skills.map((skill) => (
                            <span className='skill-pill' key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div>

            </div>
        </section>
    )
}

export default Skills