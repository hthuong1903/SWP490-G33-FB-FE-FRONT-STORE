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
                            <li className="text-lg mb-2">Đồ gỗ nội thất Hoàng Sơn</li>
                            <li className="text-lg mb-2">Địa chỉ: Làng Nghề Vạn Điểm, huyện Thường Tín, Hà Nội</li>
                            <li className="text-lg mb-2">Điện thoại: 0989.887.300</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">Liên hệ & Thanh toán</h4>
                        <p>
                            <a href="tel:0968888888">Hotline: 0989.887.300</a>
                        </p>
                        <h5 className="text-lg font-bold">Ngân hàng: BIDV</h5>
                        <p>Chủ tài khoản: Trần Đức Sơn</p>
                        <p>Số tài khoản: 123456789</p>
                        <p>Chi nhánh: Thường Tín</p>
                        <h5 className="text-lg font-bold">Ngân hàng: Viettinbank</h5>
                        <p>Chủ tài khoản: Trần Đức Quang</p>
                        <p>Số tài khoản: 123456789</p>
                        <p>Chi nhánh: Thường Tín</p>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-bold">Hỗ trợ khách hàng</h4>
                        <p>
                            {' '}
                            <Link to="/introduce">Giới thiệu</Link>
                        </p>
                        <p>
                            <Link to="/salePolicy">Chính sách bán hàng</Link>
                        </p>
                        <p>
                            <Link to="/shippingPolicy">Chính sách vận chuyển</Link>
                        </p>
                        <p>
                            <Link to="/paymentInfo">Thông tin thanh toán</Link>
                        </p>
                        <p>
                            <Link to="/guide">Hướng dẫn mua hàng</Link>
                        </p>
                        <p>
                            <Link to="/contact">Liên hệ</Link>
                        </p>
                        <p>
                            <Link to="#">Kênh youtube</Link>
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
                    <Link to="/contact">Liên hệ</Link>
                </div>
                <div className="text-center pb-3">Copyright 2022 by Đồ gỗ mỹ nghệ Hoàng Sơn</div>
            </div>
        </div>
    )
}

export default Footer
