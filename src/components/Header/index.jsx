import { Avatar, Button, Container, InputAdornment, TextField } from '@mui/material'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import SearchIcon from '@mui/icons-material/Search'
import logo from '@/assets/img/logo.png'

function Header() {
    return (
        <div>
            <div className="bg-white text-sm">
                <Container>
                    <div className="flex justify-between p-1">
                        <div>Nội thất ABC - Xưởng đồ gỗ</div>
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
                        <img src={logo} alt="logo" className='w-3/12'/>
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
                        <TextField
                            size="small"
                            className="bg-white rounded-none w-96"
                            placeholder="Tìm kiếm sản phẩm..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
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
