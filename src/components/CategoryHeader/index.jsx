import { Link } from 'react-router-dom'

function CategoryTitle({ title, linkNav }) {
    return (
        <div className='flex justify-between text-white bg-ming p-3 rounded-t'>
            <div className='font-bold'>{title}</div>
            <Link to={linkNav} className="underline underline-offset-2">Xem thêm</Link>
        </div>
    )
}

export default CategoryTitle
