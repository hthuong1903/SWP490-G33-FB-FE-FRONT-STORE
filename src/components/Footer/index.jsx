import logo from '@/assets/img/logo.png'
import { Divider } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-white mt-12">
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-3 bg-white justify-items-center pt-7">
                    <div>
                        <img src={logo} alt="logo" className="w-6/12" />
                        <ul className="mt-4">
                            <li className="text-lg mb-2">Đồ gỗ ABC</li>
                            <li className="text-lg mb-2">Địa chỉ: xyz</li>
                            <li className="text-lg mb-2">Điện thoại: 0968.888.888</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">Liên hệ & Thanh toán</h4>
                        <p>
                            <a href="tel:0968888888">Hotline: 0968.888.888</a>
                        </p>
                        <h5 className="text-lg font-bold">Ngân hàng: BIDV</h5>
                        <p>Chủ tài khoản: Nghiêm Văn A</p>
                        <p>Số tài khoản: 123456789</p>
                        <p>Chi nhánh: ABC</p>
                        <h5 className="text-lg font-bold">Ngân hàng: Viettinbank</h5>
                        <p>Chủ tài khoản: Nghiêm Văn A</p>
                        <p>Số tài khoản: 123456789</p>
                        <p>Chi nhánh: ABC</p>
                    </div>
                    <div className=''>
                        <h4 className="text-xl font-bold">Hỗ trợ khách hàng</h4>
                        <p>
                            {' '}
                            <a href="/introduce">Giới thiệu</a>
                        </p>
                        <p>
                            <a href="/salePolicy">Chính sách bán hàng</a>
                        </p>
                        <p>
                            <a href="/shippingPolicy">Chính sách vận chuyển</a>
                        </p>
                        <p>
                            <a href="/paymentInfo">Thông tin thanh toán</a>
                        </p>
                        <p>
                            <a href="/guide">Hướng dẫn mua hàng</a>
                        </p>
                        <p>
                            <a href="/contract">Liên hệ</a>
                        </p>
                        <p>
                            <a href="#">Kênh youtube</a>
                        </p>
                    </div>
                </div>
            </Container>
            <Divider />
            <div className="mt-2">
                <div className="flex justify-center gap-5 text-md">
                    <Link to="/introduce">Giới thiệu</Link>
                    <Link to="/salePolicy">Chính sách bán hàng</Link>
                    <Link to="/shippingPolicy">Vận chuyển</Link>
                    <Link to="/paymentInfo">Thanh toán</Link>
                    <Link to="/guide">Hướng dẫn mua hàng</Link>
                    <Link to="/contract">Liên hệ</Link>
                </div>
                <div className='text-center pb-3'>Copyright 2022 by Đồ gỗ ABC</div>
            </div>
        </div>
    )
}

export default Footer
