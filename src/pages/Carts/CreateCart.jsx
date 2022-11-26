import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import orderApi from '@/api/orderApi'
import './style.css'
import Constants from '@/components/Constants'
import StyledTableCell from '@/components/Table/StyledTableCell'
import StyledTableRow from '@/components/Table/StyledTableRow'
import productApi from '@/api/productApi'
import ModalChangeAddress from './components/ModalChangeAddress'
import { Add } from '@mui/icons-material'
import moment from 'moment/moment'
// import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function CreateCarts() {
    const [checkedCustomer, setCheckedCustomer] = useState(false)
    const [productList, setProductList] = useState([])
    const [cartsDetail, setCartsDetail] = useState()
    const [rows, setRows] = useState([])
    const [isRender, setIsRender] = useState(true)
    const [value, setValue] = useState(1)
    const [changeAddress, setChangeAddress] = useState({ isAddAddress: false })
    const userId = JSON.parse(localStorage.getItem('fbm-user'))
        ? JSON.parse(localStorage.getItem('fbm-user')).userId
        : null
    const navigate = useNavigate()

    const handleSelect = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const response = await productApi.getAllProduct()
                setProductList(response.data.data)
            } catch (error) {
                console.log('fail at getAllUser', error)
            }
        }
        const getOrderById = async (userId) => {
            try {
                const response = await orderApi.getOrdersByCustomer(userId)
                if (response.data.data.length > 0) {
                    setCartsDetail(response.data.data[0])
                    setRows(response.data.data[0].orderProductDtos)
                }
            } catch (error) {
                console.log('fail when getAllProduct', error)
            }
        }
        isRender && getOrderById(userId)
        isRender && getAllProduct()
        setIsRender(false)
    }, [isRender, productList, rows, cartsDetail])

    const addressDetails = () => {
        if (changeAddress.isAddAddress) {
            return `${changeAddress.addressDetail}, ${changeAddress.wardName},  ${changeAddress.districtName}, ${changeAddress.provinceName}`
        } else {
            return cartsDetail?.customer.address
                ? `${cartsDetail?.customer.address}, ${cartsDetail?.customer.wardName}, ${cartsDetail?.customer.districtName}, ${cartsDetail?.customer.provinceName}`
                : 'Khách hàng chưa có địa chỉ'
        }
    }

    const totalAmount =
        cartsDetail &&
        cartsDetail.orderProductDtos.reduce(
            (result, value) =>
                result + value.product.priceOut * (value.product.discount / 100) * value?.quantity,
            0
        )

    const totalAmountAfter =
        cartsDetail &&
        cartsDetail.orderProductDtos.reduce(
            (result, value) =>
                result +
                value.product.priceOut * (value.product.discount / 100) * value?.quantity -
                value?.changedPrice,
            0
        )

    const handleCreate = async () => {
        const dataSubmit = {
            ...changeAddress,
            customer: cartsDetail.customer,
            customerId: cartsDetail.customer.id,
            dateCreated: moment(new Date()).format('YYYY-MM-DD'),
            dateRequired: moment(new Date()).format('YYYY-MM-DD'),
            employeeSaleId: 2,
            id: cartsDetail.id,
            numberOfProducts: rows.length,
            orderProductDtos: rows,
            status: 1,
            totalOrderPrice: totalAmount,
            totalOrderPriceAfter: totalAmountAfter,
            typeOfPay: value
        }
        try {
            const response = await orderApi.createOrderOnline(dataSubmit)
            if (response.data.data.length > 0) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
        console.log(dataSubmit)
    }

    return (
        <Box sx={{ width: '80vw', m: '0 auto', backgroundColor: 'white', p: 1 }}>
            {checkedCustomer && (
                <ModalChangeAddress
                    isOpen={checkedCustomer}
                    title={'Thay đổi địa chỉ'}
                    handleClose={() => {
                        setCheckedCustomer(false)
                        // setIsRender(true)
                    }}
                    handleConfirm={(data) => {
                        setChangeAddress({ ...data, isAddAddress: true })
                        setIsRender(true)
                    }}
                    isEdit={isRender}
                />
            )}
            <Box
                sx={{
                    my: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Thanh toán
                </Typography>
                <Divider />
                <Typography variant="body1">
                    Vui lòng nhập thông tin chi tiết của bạn vào bên dưới để hoàn tất việc mua hàng
                    của bạn
                </Typography>
            </Box>
            {cartsDetail ? (
                <Grid container spacing={2} minHeight="60vh">
                    <Grid item xs={3}>
                        <Paper sx={{ p: 1, height: '100%', backgroundColor: '#e6e4e4' }}>
                            <Typography variant="subtitle1">
                                <b>THÔNG TIN KHÁCH HÀNG</b>
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle1">
                                {cartsDetail.customer.username}
                            </Typography>
                            <Typography variant="subtitle1">
                                <b>Địa chỉ: </b> {addressDetails()}
                            </Typography>
                            <Typography variant="subtitle1">
                                <b>SĐT: </b> {cartsDetail?.customer.phone}
                            </Typography>
                            <Typography variant="subtitle1">
                                <b>Email: </b> {cartsDetail?.customer.email}
                            </Typography>
                            <Button
                                variant="outlined"
                                startIcon={<Add />}
                                onClick={() => {
                                    setCheckedCustomer(true)
                                }}>
                                Thêm địa chỉ
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl
                            sx={{ width: '100%', p: 1, height: '100%', backgroundColor: '#e6e4e4' }}
                            component={Paper}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="1"
                                name="timesheet"
                                value={value}
                                onChange={handleSelect}>
                                <Typography variant="subtitle1">
                                    <b>HÌNH THỨC THANH TOÁN</b>
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <FormControlLabel value={1} control={<Radio />} label="Tiền mặt" />
                                <FormControlLabel
                                    value={2}
                                    control={<Radio />}
                                    label="Chuyển khoản"
                                />
                                <FormControlLabel value={3} control={<Radio />} label="Quẹt thẻ" />
                                <FormControlLabel value={4} control={<Radio />} label="COD" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer
                            component={Paper}
                            sx={{ p: 1, height: '100%', backgroundColor: '#e6e4e4' }}>
                            <Typography variant="subtitle1">
                                <b>TỔNG QUAN ĐƠN HÀNG</b>
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Table stickyHeader aria-label="sticky table" sx={{ maxHeight: '60%' }}>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#e6e4e4' }}>
                                        <StyledTableCell
                                            sx={{ backgroundColor: '#e6e4e4' }}
                                            align="left">
                                            Sản phẩm
                                        </StyledTableCell>
                                        <StyledTableCell
                                            sx={{ backgroundColor: '#e6e4e4' }}
                                            align="left">
                                            Giá bán
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows &&
                                        rows.map((row, index) => (
                                            <StyledTableRow key={index}>
                                                <StyledTableCell align="left">
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            gap: '15px',
                                                            alignItems: 'center'
                                                        }}>
                                                        <img
                                                            src={
                                                                Constants.baseAPI +
                                                                `api/storage_server/download/${row?.product.photoMain}`
                                                            }
                                                            alt="123"
                                                            width="100rem"
                                                        />
                                                        <Box>
                                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                                {row?.product.name}
                                                            </Typography>
                                                            <Typography variant="button">
                                                                SKU: {row?.product.productCode}
                                                            </Typography>
                                                            <br />
                                                            <Typography variant="button">
                                                                Số lượng: {row?.quantity}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {(
                                                        row.product.priceOut *
                                                        (row.product.discount / 100)
                                                    ).toLocaleString('vi-vn')}{' '}
                                                    VND
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                </TableBody>
                            </Table>
                            <Divider />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    my: 2,
                                    pt: 1
                                }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="td">Tổng</td>
                                            <td>{totalAmount?.toLocaleString('vi-VN')} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Tổng tiền chiết khấu</td>
                                            <td>
                                                {cartsDetail.totalOrderPriceAfter.toLocaleString(
                                                    'vi-VN'
                                                )}{' '}
                                                VND
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Tổng tiền</b>
                                            </td>
                                            <td>
                                                <b>
                                                    {totalAmountAfter?.toLocaleString('vi-VN')} VND
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '12px',
                                    my: 1,
                                    justifyContent: 'space-around'
                                }}>
                                <Button variant="contained" onClick={() => handleCreate()}>
                                    Tiến hành đặt hàng
                                </Button>
                            </Box>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : (
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <Typography variant="body1">
                        Bạn chưa có sản phẩm nào trong giỏ hàng!
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default CreateCarts
