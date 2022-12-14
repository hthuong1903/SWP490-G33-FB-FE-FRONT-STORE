import orderApi from '@/api/orderApi'
import productApi from '@/api/productApi'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Container } from '@mui/system'
import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { Context } from '@/contexts/Cart/contexts'
import { Link, useLocation, useParams } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

function Banner() {
    const [state, dispatch] = useContext(Context)
    const [categoryList, setCategoryList] = useState([])
    const [numberCarts, setNumberCarts] = useState(0)
    let { categoryId } = useParams()
    let { pathname } = useLocation()
    const { auth, setAuth } = useAuth()

    const userId = JSON.parse(localStorage.getItem('fbm-user'))
        ? JSON.parse(localStorage.getItem('fbm-user')).userId
        : null

    // console.log('render', auth)
    useEffect(() => {
        const getOrderById = async (userId) => {
            try {
                const response = await orderApi.getOrdersByCustomer(userId)
                console.log('hihi')
                if (response.data.data.length > 0) {
                    setNumberCarts(response.data.data[0].orderProductDtos?.length)
                }
            } catch (error) {
                console.log('fail when getAllProduct', error)
            }
        }
        const getAllCategory = async () => {
            try {
                const response = await productApi.getAllCategory()
                setCategoryList(response.data.data)
            } catch (error) {
                console.log('fail at getAllCategory', error)
            }
        }
        getAllCategory()
        userId && getOrderById(userId)
    }, [state])

    return (
        <>
            <Container className="">
                <div className="bg-white px-3 pt-3 rounded-t pb-3">
                    <div className="flex">
                        <div className="group inline-block relative">
                            <button className="bg-ming text-white font-semibold py-2 px-4 rounded inline-flex items-center gap-2">
                                <MenuIcon />
                                <span className="">Danh m???c s???n ph???m</span>
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block z-[100] w-72 drop-shadow-lg">
                                {categoryList.map((category) => {
                                    return (
                                        <li key={category.id}>
                                            <Link
                                                // className=" bg-white py-2 px-4 block whitespace-no-wrap pointer-events-none"
                                                className={clsx(
                                                    'bg-white',
                                                    'py-2',
                                                    'px-4',
                                                    'block',
                                                    'whitespace-no-wrap',
                                                    Number(categoryId) === category.id
                                                        ? 'bg-gray-300'
                                                        : 'null',
                                                    Number(categoryId) === category.id
                                                        ? 'pointer-events-none'
                                                        : null,
                                                    'hover:bg-gray-300'
                                                )}
                                                to={`/products/${category.id}`}>
                                                {category.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="ml-4">
                            <Link
                                to="/introduce"
                                // className="font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400">
                                className={clsx(
                                    'font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400',
                                    pathname === '/introduce' ? 'bg-ming text-white' : null
                                )}>
                                Gi???i thi???u
                            </Link>
                            <Link
                                to="/guide"
                                className={clsx(
                                    'font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400',
                                    pathname === '/guide' ? 'bg-ming text-white' : null
                                )}>
                                H?????ng d???n mua h??ng
                            </Link>
                            <Link
                                to="/contact"
                                className={clsx(
                                    'font-semibold py-2 px-4 rounded inline-flex items-center mr-4 hover:bg-ming hover:text-white transition ease-in-out duration-400',
                                    pathname === '/contact' ? 'bg-ming text-white' : null
                                )}>
                                Li??n h???
                            </Link>
                        </div>
                        <div className="group/cart hover:bg-ming hover:text-white ml-auto rounded transition ease-in-out duration-400">
                            <Link
                                to="/cart"
                                className="font-semibold py-2 px-4 inline-flex items-center gap-2">
                                <ShoppingCartOutlinedIcon className="origin-bottom group-hover/cart:-rotate-6 group-hover/cart:translate-x-2 transition-transform" />
                                Gi??? h??ng {numberCarts > 0 ? '(' + numberCarts + ')' : null}
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner
