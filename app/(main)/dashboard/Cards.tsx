import Card from "./Card"
import { items } from "./consts"

function Cards() {
    return (
        <div className="my-5 grid grid-cols-7 gap-10">
            {items.map(item => 
                <Card 
                    key={item.title}
                    quantity={item.quantity} 
                    color={item.color} 
                    title={item.title} 
                    icon={item.icon} 
                />)}
        </div>
    )
}

export default Cards