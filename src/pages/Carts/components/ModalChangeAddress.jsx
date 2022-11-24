import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, MenuItem, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Controller, useForm } from 'react-hook-form'

import provincesApi from '@/api/provincesApi'
import schema from '../validation'

function ModalChangeAddress({ title, isOpen, handleClose, handleConfirm }) {
    const [selectedProvince, setSelectedProvince] = useState(1)
    const [selectedDistrict, setSelectedDistrict] = useState(1)
    const [selectedWard, setSelectedWard] = useState(1)
    const [provinceList, setProvinceList] = useState([])
    const [districtList, setDistrictList] = useState([])
    const [wardList, setWardList] = useState([])

    const {
        register,
        handleSubmit,
        resetField,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    const getAllProvince = async () => {
        try {
            const response = await provincesApi.getAllProvince()
            setProvinceList(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllDistrictByProvinceId = async (provinceId) => {
        try {
            const response = await provincesApi.getAllDistrictByProvinceId(provinceId)
            setDistrictList(response.data.districts)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllWardsByDistrictId = async (districtId) => {
        try {
            const response = await provincesApi.getAllWardsByDistrictId(districtId)
            setWardList(response.data.wards)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProvince()
    }, [])

    useEffect(() => {
        getAllDistrictByProvinceId(selectedProvince)
        resetField('district')
        resetField('ward')
    }, [selectedProvince])

    useEffect(() => {
        getAllWardsByDistrictId(selectedDistrict)
        resetField('ward')
    }, [selectedDistrict])

    const onSubmit = async (data) => {
        console.log(data)
        const provinceName = await provincesApi.getProvinceById(Number(data.province))
        const districtName = await provincesApi.getDistrictById(Number(data.district))
        const wardName = await provincesApi.getWardsById(Number(data.ward))
        const submitData = {
            addressDetail: data.address,
            provinceId: Number(data.province),
            provinceName: provinceName,
            districtId: Number(data.district),
            districtName: districtName,
            wardId: Number(data.ward),
            wardName: wardName
        }
        console.log(submitData)
        handleConfirm && handleConfirm(submitData)
        handleClose && handleClose()
    }
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="lg">
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

            <DialogContent>
                <Box sx={{ display: 'flex', gap: '20px', mt: 2 }}>
                    <Box>
                        <Controller
                            name="province"
                            variant="outlined"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    size="small"
                                    label="Tỉnh/Thành phố"
                                    value={value}
                                    onChange={(event) => {
                                        setSelectedProvince(event.target.value)
                                        onChange(Number(event.target.value))
                                    }}
                                    sx={{ width: '12rem' }}
                                    error={!!error}
                                    helperText={error ? error.message : null}>
                                    {provinceList.map((province) => {
                                        return (
                                            <MenuItem key={province.code} value={province.code}>
                                                {province.name}
                                            </MenuItem>
                                        )
                                    })}
                                </TextField>
                            )}
                        />
                    </Box>

                    <Box>
                        <Controller
                            name="district"
                            variant="outlined"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    size="small"
                                    label="Quận/Huyện"
                                    value={value}
                                    onChange={(event) => {
                                        setSelectedDistrict(event.target.value)
                                        onChange(Number(event.target.value))
                                    }}
                                    sx={{ width: '12rem' }}
                                    error={!!error}
                                    helperText={error ? error.message : null}>
                                    {districtList.map((district) => {
                                        return (
                                            <MenuItem key={district.code} value={district.code}>
                                                {district.name}
                                            </MenuItem>
                                        )
                                    })}
                                </TextField>
                            )}
                        />
                    </Box>

                    <Box>
                        <Controller
                            name="ward"
                            variant="outlined"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    size="small"
                                    label="Phường/Xã"
                                    value={value}
                                    onChange={(event) => {
                                        setSelectedWard(event.target.value)
                                        onChange(Number(event.target.value))
                                    }}
                                    sx={{ width: '12rem' }}
                                    error={!!error}
                                    helperText={error ? error.message : null}>
                                    {wardList.map((ward) => {
                                        return (
                                            <MenuItem key={ward.code} value={ward.code}>
                                                {ward.name}
                                            </MenuItem>
                                        )
                                    })}
                                </TextField>
                            )}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '20px', mt: 2 }}>
                    <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        label="Địa chỉ chi tiết"
                        variant="outlined"
                        {...register('address')}
                        error={errors.address ? true : false}
                        helperText={errors.address?.message}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose}>
                    Hủy bỏ
                </Button>
                <Button variant="contained" onClick={handleSubmit(onSubmit)} autoFocus>
                    Đồng ý
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalChangeAddress
