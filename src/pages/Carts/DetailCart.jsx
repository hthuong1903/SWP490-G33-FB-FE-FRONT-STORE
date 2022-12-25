import orderApi from '@/api/orderApi'
import productApi from '@/api/productApi'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import { Button, Collapse, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box } from '@mui/system'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import './style.css'
import StyledTableCell from '@/components/Table/StyledTableCell'
import StyledTableRow from '@/components/Table/StyledTableRow'

function DetailCarts() {
    const [productList, setProductList] = useState([])
    const [cartsDetail, setCartsDetail] = useState()
    const [rows, setRows] = useState([])
    const [isRender, setIsRender] = useState(true)
    const userId = JSON.parse(localStorage.getItem('fbm-user'))
        ? JSON.parse(localStorage.getItem('fbm-user')).userId
        : null

    const min = 1
    const max = 10

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

    const totalDiscount = useMemo(
        () => rows.reduce((result, value) => result + (value.discount)/100 * value.priceOutProduct * value.quantity, 0),
        [rows]
    )
    const totalAmount = rows.reduce(
        (result, value) => result + value.quantity * value.product.priceOut,
        0
    )
    const totalAmountAfter = rows.reduce(
        (result, value) => result + value.quantity * value.product.priceOut - value.changedPrice,
        0
    )

    useEffect(() => {
        console.log('rows', rows)
    }, [rows])
    // const resultDiscount = () => rows.reduce((result, value) => result + value.discount, 0)
    const handleCreate = async (data) => {
        const dataSubmit = {
            customerId: cartsDetail.customer.id,
            dateCreated: moment(new Date()).format('YYYY-MM-DD'),
            employeeSaleId: 2,
            id: cartsDetail.id,
            isOnline: true,
            orderProductDtos: data,
            status: 0
        }
        try {
            await orderApi.createOrderOnline(dataSubmit)
        } catch (error) {
            console.log(error)
        }
        console.log(dataSubmit)
    }

    const handleDelete = async (productId, userId) => {
        try {
            await orderApi.deleteCart(productId, userId)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ width: '80vw', m: '0 auto' }}>
            <Paper sx={{ p: 1 }}>
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Giỏ hàng
                    </Typography>
                </Box>
                {rows.length > 0 ? (
                    <>
                        <Grid container sx={{ px: 2, py: 1, mt: 1 }} spacing={3}>
                            <Grid item xs={8}>
                                <Collapse in={Boolean(rows)}>
                                    <TableContainer component={Paper} sx={{ maxHeight: '60vh' }}>
                                        <Table
                                            sx={{ minWidth: 700 }}
                                            stickyHeader
                                            aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell align="left">
                                                        Tên sản phẩm
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">
                                                        Giá bán
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        Số lượng
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">
                                                        Thành tiền
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center"></StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows &&
                                                    rows.map((row) => (
                                                        <StyledTableRow key={row.productId}>
                                                            <StyledTableCell align="left">
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        gap: '15px',
                                                                        alignItems: 'center'
                                                                    }}>
                                                                    <Box
                                                                        sx={{
                                                                            width: '10em',
                                                                            height: '10em',
                                                                            aspectRatio: '3/2'
                                                                        }}>
                                                                        <img
                                                                            src={`http://api.dinhtruong.live/api/storage_server/download/${row?.product.photoMain}`}
                                                                            alt="123"
                                                                            width="100%"
                                                                        />
                                                                    </Box>
                                                                    <Box>
                                                                        <Typography
                                                                            sx={{
                                                                                fontWeight: 'bold'
                                                                            }}>
                                                                            {row.product.name}
                                                                        </Typography>
                                                                        <Typography variant="button">
                                                                            MÃ SẢN PHẨM:{' '}
                                                                            {
                                                                                row.product
                                                                                    .productCode
                                                                            }
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </StyledTableCell>
                                                            <StyledTableCell align="left">
                                                                {row.priceOutProduct.toLocaleString(
                                                                    'vi-vn'
                                                                )}{' '}
                                                                VND
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                <Box sx={{ display: 'flex' }}>
                                                                    <IconButton
                                                                        onClick={() => {
                                                                            let newQuantity =
                                                                                Number(
                                                                                    row.quantity
                                                                                ) - 1
                                                                            if (newQuantity < 0)
                                                                                return
                                                                            const data = rows.map(
                                                                                (item) => {
                                                                                    if (
                                                                                        item.productId ===
                                                                                        row.productId
                                                                                    ) {
                                                                                        return {
                                                                                            ...item,
                                                                                            quantity:
                                                                                                newQuantity
                                                                                        }
                                                                                    }
                                                                                    return item
                                                                                }
                                                                            )
                                                                            handleCreate(data)
                                                                            setRows(data)
                                                                        }}>
                                                                        <RemoveIcon />
                                                                    </IconButton>

                                                                    <TextField
                                                                        type="number"
                                                                        size="small"
                                                                        id="outlined-basic"
                                                                        variant="outlined"
                                                                        inputProps={{ min, max }}
                                                                        value={row?.quantity}
                                                                        onChange={(event) => {
                                                                            const data = rows.map(
                                                                                (item) => {
                                                                                    if (
                                                                                        item.productId ===
                                                                                        row.productId
                                                                                    ) {
                                                                                        return {
                                                                                            ...item,
                                                                                            quantity:
                                                                                                Number(
                                                                                                    event
                                                                                                        .target
                                                                                                        .value
                                                                                                )
                                                                                        }
                                                                                    }
                                                                                    return item
                                                                                }
                                                                            )
                                                                            handleCreate(data)
                                                                            setRows(data)
                                                                            // setRows((oldRow) => {
                                                                            //     return oldRow.map(
                                                                            //         (item) => {
                                                                            //             if (
                                                                            //                 item.productId ===
                                                                            //                 row.productId
                                                                            //             ) {
                                                                            //                 return {
                                                                            //                     ...item,
                                                                            //                     quantity:
                                                                            //                         Number(
                                                                            //                             event
                                                                            //                                 .target
                                                                            //                                 .value
                                                                            //                         )
                                                                            //                 }
                                                                            //             }
                                                                            //             return item
                                                                            //         }
                                                                            //     )
                                                                            // })
                                                                        }}
                                                                        sx={{ width: '80px' }}
                                                                    />

                                                                    <IconButton
                                                                        onClick={() => {
                                                                            let newQuantity =
                                                                                Number(
                                                                                    row.quantity
                                                                                ) + 1
                                                                            const data = rows.map(
                                                                                (item) => {
                                                                                    if (
                                                                                        item.productId ===
                                                                                        row.productId
                                                                                    ) {
                                                                                        return {
                                                                                            ...item,
                                                                                            quantity:
                                                                                                newQuantity
                                                                                        }
                                                                                    }
                                                                                    return item
                                                                                }
                                                                            )
                                                                            handleCreate(data)
                                                                            setRows(data)
                                                                            // setRows((oldRow) => {
                                                                            //     return oldRow.map(
                                                                            //         (item) => {
                                                                            //             if (
                                                                            //                 item.productId ===
                                                                            //                 row.productId
                                                                            //             ) {
                                                                            //                 return {
                                                                            //                     ...item,
                                                                            //                     quantity:
                                                                            //                         newQuantity
                                                                            //                 }
                                                                            //             }
                                                                            //             return item
                                                                            //         }
                                                                            //     )
                                                                            // })
                                                                        }}>
                                                                        <AddIcon />
                                                                    </IconButton>
                                                                </Box>
                                                            </StyledTableCell>
                                                            <StyledTableCell align="left">
                                                                {(
                                                                    // row?.product.priceOut *
                                                                    //     row.quantity -
                                                                    // row.changedPrice
                                                                    (100 - row.discount)/100*row.priceOutProduct*row.quantity
                                                                ).toLocaleString('vi-VN')}{' '}
                                                                VND
                                                            </StyledTableCell>
                                                            <StyledTableCell align="left">
                                                                <IconButton
                                                                    onClick={() => {
                                                                        setRows((prev) =>
                                                                            prev.filter(
                                                                                (item) =>
                                                                                    item.productId !==
                                                                                    row.productId
                                                                            )
                                                                        )
                                                                        setProductList([
                                                                            {
                                                                                id: row.productId,
                                                                                name: row.product
                                                                                    .name,
                                                                                productPhoto: {
                                                                                    photoMainName:
                                                                                        row.product
                                                                                            .photoMain
                                                                                },
                                                                                productCode:
                                                                                    row.product
                                                                                        .productCode,
                                                                                priceOut:
                                                                                    row.product
                                                                                        .priceOut,
                                                                                quantity:
                                                                                    row.quantity,
                                                                                discount:
                                                                                    row.changedPrice
                                                                            },
                                                                            ...productList
                                                                        ])
                                                                        handleDelete(
                                                                            row.productId,
                                                                            userId
                                                                        )
                                                                    }}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Collapse>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper sx={{ p: 1, backgroundColor: '#e6e4e4' }}>
                                    <Typography>Tóm tắt</Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Tổng</td>
                                                <td>{totalAmount.toLocaleString('vi-VN')} VND</td>
                                            </tr>
                                            <tr>
                                                <td>Giảm giá</td>
                                                <td>{totalDiscount.toLocaleString('vi-VN')} VND</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Tổng đơn đặt hàng</b>
                                                </td>
                                                <td>
                                                    <b>
                                                        {(totalAmount - totalDiscount).toLocaleString('vi-VN')}{' '}
                                                        VND
                                                    </b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '12px',
                                            my: 1,
                                            justifyContent: 'space-around'
                                        }}>
                                        <Button variant="contained" component={Link} to="./create">
                                            Tiến hành đặt hàng
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </>
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
                            Bạn chưa có sản phẩm nào trong giỏ hàng
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    )
}

export default DetailCarts
