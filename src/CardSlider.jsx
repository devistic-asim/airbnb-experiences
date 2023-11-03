import data from './CardData'
import Card from './Card'
import './style.css'

// console.log(data);
const cardhtml = data.map(function (item) {
    return (
        <Card
            key={item.id}
            // item={item}
            {...item}
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
