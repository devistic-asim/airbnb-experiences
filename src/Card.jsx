import cardImg from './assets/katie-zaferes.png'
import startImg from './assets/star.png'
import './style.css'

function Nav() {
    return (
        <>
            <div className="card">
                <img src={cardImg} className="card--image" />
                <span className='img--label'>Sold Out</span>
                <div className="card--stats">
                    <img src={startImg} className="card--star" />
                    &nbsp;<span>5.0</span>
                    &nbsp;<span className="gray">(6) • </span>
                    &nbsp;<span className="gray">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </>
    )
}

export default Nav
