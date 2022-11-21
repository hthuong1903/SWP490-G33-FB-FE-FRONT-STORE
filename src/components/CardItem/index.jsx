function CardItem({ img, title, price, discount, afterDiscount }) {
    return (
        <a
            href="#"
            className="group bg-cultured rounded-b rounded-t drop-shadow-md flex flex-col justify-between hover:drop-shadow-xl hover:scale-105 ease-in-out duration-300">
            <div className="">
                <div className="aspect-square w-full overflow-hidden rounded-t bg-gray-200">
                    <img
                        src={img}
                        alt="123"
                        className="h-full w-full object-cover object-center group-hover:scale-110 transition ease-in-out duration-500"
                    />
                </div>
                <h3 className="p-2 pl-4 text-lg font-medium text-gray-900">{title}</h3>
            </div>
            <div>
                {discount ? (
                    <>
                        <span className="pl-4 text-sm line-through text-gray-900">{price} VND</span>
                        <span className="ml-2 font-semibold text-base">-{discount}%</span>
                    </>
                ) : null}
                <h3 className="pb-3 pl-4 text-lg font-bold text-gray-900">{afterDiscount} VND</h3>
            </div>
        </a>
    )
}

export default CardItem
