import 'animate.css'

function Skill({source, alt, title}) {
    return <img className='animate__animated animate__flipInX animate__slow skill-icon' src={source} alt={alt} title={title} />
}

export default Skill