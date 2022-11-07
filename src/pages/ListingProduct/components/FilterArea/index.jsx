import { Checkbox, FormControl, FormControlLabel, FormGroup, Slider } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

// function valuetext(value) {
//     return `${value}°C`
// }
const woodTypes = [
    { label: 'Gu', value: 1 },
    { label: 'Cam', value: 2 },
    { label: 'Trac', value: 3 },
    { label: 'Huong', value: 4 },
    { label: 'Lim', value: 5 }
]

function FilterArea() {
    const [value, setValue] = useState([3000000, 7000000])
    const [isChecked, setIsChecked] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            woodTypes: []
        }
    })

    useEffect(() => {
        console.log(isChecked)
    }, [isChecked])

    useEffect(() => {
        setSearchParams({
            price_from: value[0],
            price_to: value[1],
            wood_type: isChecked,
            search: searchParams.get('search')
        })
    }, [value, isChecked])

    return (
        <div className="bg-white w-full sticky top-3 rounded p-4 z-50">
            <div>
                <div className="font-bold text-lg">Khoảng giá</div>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => <div>{value.toLocaleString('vi-VN')}đ</div>}
                    step={10000}
                    min={1000000}
                    max={10000000}
                    className="mt-3"
                />
                <div className="text-sm text-center mt-3">
                    Từ {value[0].toLocaleString('vi-VN')}đ đến {value[1].toLocaleString('vi-VN')}đ
                </div>
            </div>
            <div>
                <div className="font-bold mt-5 text-lg">Loại gỗ</div>
                {/* {woodTypes.map((checkbox, index) => {
                    return (
                        <FormControlLabel
                            key={index + checkbox.value}
                            className="twocolelement"
                            control={
                                <Checkbox
                                    name={checkbox.label}
                                    value={checkbox.value}
                                    checked={isChecked[index]}
                                    color="primary"
                                    onChange={(e) => isCheckboxChecked(index, e.target.value)}
                                />
                            }
                            label={checkbox.name}
                        />
                    )
                })} */}
                <FormControl component="div">
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <Controller
                            name="woodTypes"
                            control={control}
                            render={({ field }) => (
                                <>
                                    {woodTypes.map((item) => (
                                        <FormControlLabel
                                            value={item.value}
                                            key={item.value}
                                            label={item.label}
                                            control={
                                                <Checkbox
                                                    required
                                                    value={item.value}
                                                    checked={field.value.some(
                                                        (existingValue) =>
                                                            existingValue == item.value
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
                    {/* error={errors.maxQuantityComitee ? true : false}
                                helperText={errors.maxQuantityComitee?.message} */}
                </FormControl>
            </div>
        </div>
    )
}

export default FilterArea
