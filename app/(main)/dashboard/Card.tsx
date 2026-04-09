import { CardType } from './types'

function Card(item: CardType) {
    return (
        <div className="grid-span-1 bg-white h-[100%] p-6 rounded-xl">
            <div
                className="w-10 h-10"
                style={{
                    backgroundColor: item.color,
                    maskImage: `url("${item.icon}")`,
                    WebkitMaskImage: `url("${item.icon}")`,
                    maskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    marginBottom: '1em'
                }}
            />
            <span className="text-gray-400 text-sm my-2">{item.title}</span>
            <div>
                <span className="font-bold text-3xl">{item.quantity}</span>
            </div>
        </div>
    )
}

export default Card