import './About.css'

function About(){
    return(
        <section className='about-container' id='about'>
            <div className='section-title'>
                <h2>My journey thus far</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.</p>
            </div>

            <div className="exp-card">
                <div className='exp-header'>
                    <img src="/images/iplex.png" alt="" />
                        <div className='flex'>
                            <div className="exp-title">
                                <h3>Project Manager</h3>
                                <span>2025 - 2026</span>
                            </div>
                            <span className='make-blue'>iPlex Pvt Ltd</span>
                        </div>
                            
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut eum explicabo perferendis consequuntur, quod voluptate molestias porro sequi. Officia, quaerat ex. Voluptatem quod nemo velit qui quis sequi possimus recusandae ex rerum ipsam. Repellat, harum. Alias quis doloremque aliquam. Deleniti quisquam praesentium nulla corrupti beatae quasi ullam quis esse?</p>
                    <div className='exp-skills'>
                        <span>Skill</span>
                        <span>skill</span>
                        <span>skill</span>
                    </div>
                </div>    
        </section>
    )
}

export default About