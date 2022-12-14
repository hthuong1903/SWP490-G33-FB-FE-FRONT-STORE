import productApi from '@/api/productApi'
import useDebounce from '@/hooks/useDebounce'
import { Checkbox, FormControl, FormControlLabel, FormGroup, Slider } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useParams, useSearchParams } from 'react-router-dom'

function FilterArea() {
    const [value, setValue] = useState([])
    const [value1, setValue1] = useState([])
    const [isChecked, setIsChecked] = useState([])
    const [woodTypes, setWoodTypes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    let { categoryId } = useParams()

    const debouncedRangeTerm = useDebounce(value, 600)

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue)
    }

    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            woodTypes: []
        }
    })

    const getMinMaxPrice = async () => {
        try {
            const response = await productApi.getMinMaxProduct()
            console.log('getMinMax', [response.data.data[0].min, response.data.data[0].max])
            setValue1([response.data.data[0].min, response.data.data[0].max])
            setValue([response.data.data[0].min, response.data.data[0].max])
        } catch (error) {
            console.log('Fail at getMinMaxPrice', error)
        }
    }

    const getAllMaterial = async () => {
        try {
            const response = await productApi.getAllMaterial()
            console.log('getAllMaterial', response)
            setWoodTypes(response.data.data)
        } catch (error) {
            console.log('fail at getAllMaterial', error)
        }
    }

    useEffect(() => {
        getAllMaterial()
        getMinMaxPrice()
    }, [])

    useEffect(() => {
        setSearchParams({
            price_from: searchParams.get('price_from'),
            price_to: searchParams.get('price_to'),
            wood_type: isChecked,
            ...(searchParams.get('search') ? { search: searchParams.get('search') } : null)
        })
    }, [value, isChecked, categoryId])

    useEffect(() => {
        setSearchParams({
            price_from: value[0],
            price_to: value[1],
            wood_type: searchParams.getAll('wood_type'),
            ...(searchParams.get('search') ? { search: searchParams.get('search') } : null)
        })
        console.log('-------minmax', value1)
    }, [debouncedRangeTerm, categoryId])
    return (
        <div className="bg-white w-full sticky top-3 rounded p-4 z-50">
            {value && (
                <div>
                    <div className="font-bold text-lg">Kho???ng gi??</div>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => (
                            <div>{value ? value.toLocaleString('vi-VN') : ' '}??</div>
                        )}
                        step={100000}
                        min={value1[0]}
                        max={value1[1]}
                        className="mt-3"
                    />

                    <div className="text-sm text-center mt-3">
                        T??? {value[0] ? value[0].toLocaleString('vi-VN') : ' '}?? ?????n{' '}
                        {value[1] ? value[1].toLocaleString('vi-VN') : ' '}??
                    </div>
                </div>
            )}

            <div>
                <div className="font-bold mt-5 text-lg">Lo???i g???</div>
                <FormControl component="div">
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <Controller
                            name="woodTypes"
                            control={control}
                            render={({ field }) => (
                                <>
                                    {woodTypes.map((item) => (
                                        <FormControlLabel
                                            value={item.id}
                                            key={item.id}
                                            label={item.name}
                                            control={
                                                <Checkbox
                                                    required
                                                    value={item.id}
                                                    checked={field.value.some(
                                                        (existingValue) => existingValue == item.id
                                                    )}
                                                    onChange={(event, checked) => {
                                                        if (checked) {
                                                            field.onChange([
                                                                ...field.value,
                                                                event.target.value
                                                            ])
                                                            setIsChecked([
                                                                ...isChecked,
                                                                event.target.value
                                                            ])
                                                        } else {
                                                            field.onChange(
                                                                field.value.filter(
                                                                    (value) =>
                                                                        value !== event.target.value
                                                                )
                                                            )
                                                            setIsChecked((oldVale) =>
                                                                oldVale.filter(
                                                                    (val) =>
                                                                        val !== event.target.value
                                                                )
                                                            )
                                                        }
                                                    }}
                                                />
                                            }
                                        />
                                    ))}
                                </>
                            )}
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default FilterArea
