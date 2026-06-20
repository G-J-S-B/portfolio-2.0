import './Projects.css'

function Projects(){
    return(
        <section className='projects-section' id='projects'>
            <div className='section-title'>
                <h2>Section name</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, eveniet?</p>
            </div>

            <div className='active-project'>
                <div className='project-content'>
                    <div className="section-title">
                        <h2>Section name</h2>
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, eveniet?</p>
                            <a href="" className='project-link'>View-more<img src="/images/placeholder.png" alt="" /></a>
                        </div>          
                    </div>
                </div>
                <div className='project-images'>
                    <div className="laptop-image">
                        <img src="/images/laptop-frame.png" alt="" />
                    </div>
                    <div className="phone-image">
                        <img src="/images/phone-frame.png" alt="" />
                    </div>   
                </div>
            </div>

            <div className='projects'>
                
            </div>

        </section>
    )
}

export default Projects