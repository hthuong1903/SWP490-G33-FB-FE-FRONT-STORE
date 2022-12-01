import { Container } from '@mui/system'
export default function ShoppingGuide() {
    return (
        <div className='mt-6'>
            <Container>
                <div>
                    <h1 className="text-xl font-bold text-green-600">Hướng dẫn mua hàng</h1>
                    <div className='flex mt-4'>
                        <div className='pr-3'>
                            <h1 className="text-xl font-bold">Với khách hàng mua online: </h1>
                            <div>
                                <p className='mt-3'>
                                    Quý khách liên hệ với Xưởng Đồ Gỗ Mỹ Nghệ Hoàng Sơn qua điện thoại, Zalo, 
                                    hoặc Fanpage để chúng tôi lắng nghe về nhu cầu và tư vấn cho quý khách.
                                </p>
                                <ul className="marker:text-green-400 list-disc pl-5 space-y-3 mt-3">
                                    <li>
                                        Chúng tôi sẽ quay video trực tiếp phần Mộc của sản phẩm để gửi khách hàng đồng thời ký tên 
                                        (đóng dấu bằng máy khắc trực tiếp lên sản phẩm) của khách hàng.
                                    </li>
                                    <li>
                                        Khách hàng đồng ý mua hàng thì chuyển khoản đặt cọc để Đồ Gỗ  Hoàng Sơn gia công và hẹn ngày trả khách tận nhà.
                                    </li>
                                    <li>
                                        Khách hàng nhận hàng tại nhà mới cần thanh toán số tiền còn lại.
                                    </li>
                                </ul>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='pl-3'>
                            <h1 className="text-xl font-bold">Với khách hàng mua trực tiếp: </h1>
                            <p className='mt-3'>
                                Quý khách đến một trong các cơ sở của Xưởng Đồ Gỗ Mỹ Nghệ Hoàng Sơn để xem mộc trực tiếp
                            </p>
                            <ul className="marker:text-green-400 list-disc pl-5 space-y-3 mt-3">
                                <li>
                                Khách hàng đến trực tiếp xưởng (Kho hàng) của Đồ Gỗ Hoàng Sơn để xem trực tiếp hàng mộc. Trước khi đi quý khách nên liên hệ trước để gặp chính chủ (Mr.Sơn).
                                </li>
                                <li>
                                Khách đặt tiền cọc và tự ký tên trực tiếp lên sản phẩm.
                                </li>
                                <li>
                                Xưởng gỗ  Hoàng Sơn sẽ gia công hoàn thiện như thỏa thuận với quý khách hàng và giao hàng đúng hẹn.
                                </li>
                                <li>
                                Khách hàng nhận hàng tại nhà mới cần thanh toán số tiền còn lại.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-10'>Thông Tin Liên Hệ</h1>
                    <ul className='marker:text-black-400 list-disc pl-5 space-y-3 mt-3'>
                        <li>
                        Địa chỉ: Thường Tín, Hà Nội
                        </li>
                        <li>
                        Hotline: (+84) 0989.887.300 - 0915.116.177
                        </li>
                        <li>
                        Zalo: 0989.887.300
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}