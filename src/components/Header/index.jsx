import logo from '@/assets/img/logo.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import { Avatar, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput'

function Header() {
    return (
        <div>
            <div className="bg-white text-sm">
                <Container>
                    <div className="flex justify-between p-1">
                        <Link to="/">Nội thất ABC - Xưởng đồ gỗ</Link>
                        <nav className="flex gap-3">
                            <a href="">Giới thiệu</a>
                            <a href="">Chính sách bán hàng</a>
                            <a href="">Vận chuyển</a>
                            <a href="">Thanh toán</a>
                            <a href="">Hướng dẫn mua hàng</a>
                            <a href="">Liên hệ</a>
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
                                <span className="font-medium">Zalo: 0968.888.888</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <PhoneIcon className="text-base" color="primary" />
                                <span className="font-medium">
                                    <a href="tel:0986666666">Hotline: 0986.666.666</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SearchInput />
                    </div>
                    <div className="flex gap-3 justify-end">
                        <div className="flex items-center gap-2">
                            <Avatar />
                            <div>
                                <div>Le Anh Tuan</div>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined">Đăng Xuất</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header
