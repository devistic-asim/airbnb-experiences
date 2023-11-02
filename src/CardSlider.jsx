import data from './CardData'
import Card from './Card'
import './style.css'

// console.log(data);
const cardhtml = data.map(function (item) {
    return (
        <Card
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
            label={item.label}
        />
    )
})

function CardSlider() {

    return (
        <section className='slider--horizontal'>
            {cardhtml}
        </section>
    )

}

export default CardSlider
