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
import { useNavigate, Navigate } from 'react-router-dom'
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
                : 'Kh??ch h??ng ch??a c?? ?????a ch???'
        }
    }

    const totalAmount =
        cartsDetail &&
        cartsDetail.orderProductDtos.reduce(
            (result, value) =>
                result + value.priceOutProduct * value?.quantity,
            0
        )

    const totalAmountAfter =
        cartsDetail &&
        cartsDetail.orderProductDtos.reduce(
            (result, value) =>
                result +
                value.priceOutProduct * (100-value.discount) / 100 * value?.quantity,
            0
        )
    
    const totalDiscount =
    cartsDetail &&
    cartsDetail.orderProductDtos.reduce(
        (result, value) =>
            result +
            value.priceOutProduct * (value.discount) / 100 * value?.quantity,
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
            navigate("/cart")
        } catch (error) {
            console.log(error)
        }
        console.log(dataSubmit)
    }

    return (
        <Box sx={{ width: '80vw', m: '0 auto', p: 1 }}>
            {checkedCustomer && (
                <ModalChangeAddress
                    isOpen={checkedCustomer}
                    title={'Thay ?????i ?????a ch???'}
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
                    Thanh to??n
                </Typography>
                <Divider />
                <Typography variant="body1">
                    Vui l??ng nh???p th??ng tin chi ti???t c???a b???n v??o b??n d?????i ????? ho??n t???t vi???c mua h??ng
                    c???a b???n
                </Typography>
            </Box>
            {cartsDetail ? (
                <Grid container spacing={2} minHeight="60vh">
                    <Grid item xs={3}>
                        <Box sx={{ p: 3, height: '100%' }} className="bg-white rounded">
                            <Typography variant="subtitle1">
                                <b>TH??NG TIN KH??CH H??NG</b>
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle1">
                                {cartsDetail.customer.username}
                            </Typography>
                            <Typography variant="subtitle1">
                                <b>?????a ch???: </b> {addressDetails()}
                            </Typography>
                            <Typography variant="subtitle1">
                                <b>S??T: </b> {cartsDetail?.customer.phone}
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
                                Th??m ?????a ch???
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl
                            sx={{ width: '100%', p: 3, height: '100%' }}
                            component={Box}
                            className="bg-white rounded">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="1"
                                name="timesheet"
                                value={value}
                                onChange={handleSelect}>
                                <Typography variant="subtitle1">
                                    <b>H??NH TH???C THANH TO??N</b>
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <FormControlLabel value={1} control={<Radio />} label="Ti???n m???t" />
                                <FormControlLabel
                                    value={2}
                                    control={<Radio />}
                                    label="Chuy???n kho???n"
                                />
                                {/* <FormControlLabel value={3} control={<Radio />} label="Qu???t th???" />
                                <FormControlLabel value={4} control={<Radio />} label="COD" /> */}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer component={Box} sx={{ p: 3, height: '100%' }} className="bg-white rounded">
                            <Typography variant="subtitle1">
                                <b>T???NG QUAN ????N H??NG</b>
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Table stickyHeader aria-label="sticky table" sx={{ maxHeight: '60%' }}>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#e6e4e4' }}>
                                        <StyledTableCell
                                            sx={{ backgroundColor: '#e6e4e4' }}
                                            align="left">
                                            S???n ph???m
                                        </StyledTableCell>
                                        <StyledTableCell
                                            sx={{ backgroundColor: '#e6e4e4' }}
                                            align="left">
                                            Gi?? b??n
                                        </StyledTableCell>
                                        <StyledTableCell
                                            sx={{ backgroundColor: '#e6e4e4' }}
                                            align="left">
                                            Gi???m gi??
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
                                                                M?? S???N PH???M: {row?.product.productCode}
                                                            </Typography>
                                                            <br />
                                                            <Typography variant="button">
                                                                S??? l?????ng: {row?.quantity}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {(
                                                        row.priceOutProduct
                                                    ).toLocaleString('vi-vn')}{' '}
                                                    VND
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {row.discount}%
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
                                            <td className="td">T???ng</td>
                                            <td>{totalAmount?.toLocaleString('vi-VN')} VND</td>
                                        </tr>
                                        <tr>
                                            <td>T???ng ti???n gi???m gi??</td>
                                            <td>
                                                {totalDiscount?.toLocaleString(
                                                    'vi-VN'
                                                )}{' '}
                                                VND
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>T???ng ti???n</b>
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
                                    Ti???n h??nh ?????t h??ng
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
                        B???n ch??a c?? s???n ph???m n??o trong gi??? h??ng!
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default CreateCarts
