import logo from '@/assets/img/logo.png'
import useAuth from '@/hooks/useAuth'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import { Avatar, Button, Container } from '@mui/material'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmModal from '../ConfirmModal'
import SearchInput from '../SearchInput'

function Header() {
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false)
    let navigate = useNavigate()
    const { auth, setAuth } = useAuth()

    return (
        <div>
            <ConfirmModal
                title="Đăng xuất"
                content="Bạn muốn đăng xuất?"
                isOpen={isOpenConfirmDialog}
                handleClose={() => setIsOpenConfirmDialog(false)}
                handleConfirm={() => {
                    localStorage.removeItem('fbm-user')
                    toast('Đăng xuất thành công'
                    // , {
                    //     icon: '😏'
                    // }
                    )
                    navigate('/')
                    setAuth({})
                    setIsOpenConfirmDialog(false)
                }}
            />
            <div className="bg-white text-sm">
                <Container>
                    <div className="flex justify-between p-1">
                        <Link to="/">Nội thất Hoàng Sơn - Xưởng đồ gỗ</Link>
                        <nav className="flex gap-3">
                            <Link to="/introduce">Giới thiệu</Link>
                            <Link to="/salePolicy">Chính sách bán hàng</Link>
                            <Link to="/shippingPolicy">Vận chuyển</Link>
                            <Link to="/paymentInfo">Thanh toán</Link>
                            <Link to="/guide">Hướng dẫn mua hàng</Link>
                            <Link to="/contact">Liên hệ</Link>
                        </nav>
                    </div>
                </Container>
            </div>
            <div>
                <Container className="grid grid-cols-3 mt-3 mb-3 items-center">
                    <div className="logo flex items-center gap-3">
                        {/* <FacebookTwoToneIcon className="text-8xl" color="primary" /> */}
                        <Link to="/" className="w-3/12">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div>
                            <div className="flex items-center gap-1">
                                <MailOutlineIcon className="text-base" color="primary" />
                                <span className="font-medium">Zalo: 0989.887.300</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <PhoneIcon className="text-base" color="primary" />
                                <span className="font-medium">
                                    <a href="tel:0986666666">Hotline: 0989.887.300</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SearchInput />
                    </div>
                    <div className="flex gap-3 justify-end">
                        {Object.keys(auth).length === 0 && auth.constructor === Object ? (
                            <div>
                                <Button
                                    className="mr-3"
                                    variant="contained"
                                    onClick={() => navigate('/registor')}>
                                    Đăng ký
                                </Button>
                                <Button variant="outlined" onClick={() => navigate('/login')}>
                                    Đăng nhập
                                </Button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <Avatar />
                                    <div>
                                        <div>{auth.name}</div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setIsOpenConfirmDialog(true)}>
                                        Đăng Xuất
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header
