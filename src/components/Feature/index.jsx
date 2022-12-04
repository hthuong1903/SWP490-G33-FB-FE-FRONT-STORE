import { Avatar, Button } from '@mui/material'
import { Container } from '@mui/system'

function Feature() {
    return (
        <Container className="py-14">
            <div className="flex gap-10 justify-between">
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-mistyrose hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://xuongdogogiagoc.com/wp-content/uploads/2022/08/duc-tay.png" />
                    <div className="text-xl font-bold my-3">Nghệ nhân gỗ Việt</div>
                    <p className="text-center">
                        Nắm giữ nhiều bí quyết, kỹ năng chạm khắc trên gỗ vô cùng tinh xảo, sẽ tạo
                        nên những tác phẩm đồ gỗ mỹ nghệ đẳng cấp!
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-mistyrose hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://xuongdogogiagoc.com/wp-content/uploads/2022/08/xuong.png" />
                    <div className="text-xl font-bold my-3">Giá rẻ tận gốc</div>
                    <p className="text-center">
                        Chúng tôi là xưởng sản xuất không qua trung gian, sẽ mang đến cho bạn sản
                        phẩm đồ gỗ nội thất tốt nhất với giá tranh nhất thị trường!
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-mistyrose hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://xuongdogogiagoc.com/wp-content/uploads/2022/08/hai-long.png" />
                    <div className="text-xl font-bold my-3">Đảm bảo tiến độ</div>
                    <p className="text-center">
                        Luôn hoàn thành sản phẩm đúng hẹn, chất lượng sản phẩm đúng với cam kết.
                        Khách hàng không hài lòng có thể trả lại hàng!
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-mistyrose hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://xuongdogogiagoc.com/wp-content/uploads/2022/08/van-chuyen.png" />
                    <div className="text-xl font-bold my-3">Giao hàng toàn quốc</div>
                    <p className="text-center">
                        Vận chuyển và lắp đặt đồ nội thất tận nhà quý khách. Bạn được kiểm tra hàng
                        và hoàn toàn hài lòng về sản phẩm mới phải thanh toán!
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 p-4 mt-14 flex items-center">
                <p>
                    <b>Đồ gỗ mỹ nghệ</b> từ lâu đã trở thành thú vui tao nhã và là niềm đam mê của rất nhiều người. Nó không chỉ mang lại giá trị thẩm mỹ, mà hơn thế khi được coi như là những vật phẩm phong thủy để cầu mong may mắn, sức khỏe, tài lộc và bình an.
                        Nhắc tới Đồ Gỗ Mỹ Nghệ, hầu hết mọi người đều nhắc tới <strong>Đồng Kỵ </strong>– một địa điểm nổi tiếng về các loại đồ gỗ cao cấp. Nhưng bên cạnh đó, không thể không nhắc tới <a href="" className='text-blue-600 visited:text-blue-600'>làng nghề Đồ Gỗ Vạn Điểm</a>. Và cơ sở uy tín là <a href="" className='text-blue-600 visited:text-blue-600'>Xưởng gỗ đồ gỗ mỹ nghệ Hoàng Sơn </a> – Một trong những xưởng sản xuất đồ gỗ mỹ nghệ hàng đầu, có uy tín và đáng tin cậy nhất tại làng Vạn Điểm.
                </p>
                <div className="flex-initial w-96">
                    <a href='/introduce' className='text-blue-600 visited:text-blue-600'>
                        Giới thiệu
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Feature
