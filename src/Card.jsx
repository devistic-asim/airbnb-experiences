import cardImg from './assets/katie-zaferes.png'
import starImg from './assets/star.png'
import './style.css'

function Card(props) {
    return (
        <>
            <div className="card">
                <img src={`./src/assets/${props.img}`} className="card--image" />
                <span className='img--label'>{props.label}</span>
                <div className="card--stats">
                    <img src={starImg} className="card--star" />
                    &nbsp;<span>{props.rating}</span>
                    &nbsp;<span className="gray">({props.reviewCount}) • </span>
                    &nbsp;<span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    )
}

export default Card
