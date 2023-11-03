import cardImg from './assets/katie-zaferes.png'
import starImg from './assets/star.png'
import './style.css'

function Card(props) {
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <>
            <div className="card">
                <img src={`./src/assets/${props.coverImg}`} className="card--image" />
                {/* {props.openSpots === 0 && <span className='img--label'>Sold Out</span>} */}
                {badgeText && <span className='img--label'>{badgeText}</span>}
                <div className="card--stats">
                    <img src={starImg} className="card--star" />
                    &nbsp;<span>{props.stats.rating}</span>
                    &nbsp;<span className="gray">({props.stats.reviewCount}) • </span>
                    &nbsp;<span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    )
}

export default Card
