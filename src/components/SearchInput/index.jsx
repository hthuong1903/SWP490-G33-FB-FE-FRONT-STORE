import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import useDebounce from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'
import productApi from '@/api/productApi'

function SearchInput() {
    const [searchParams, setSearchParams] = useSearchParams('')
    const [searchValue, setSearchValue] = useState()
    const debouncedSearchTerm = useDebounce(searchValue, 600)
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [value1, setValue1] = useState([])

    const handleOnchangeSearch = (value) => {
        setSearchValue(value)
    }

    // console.log()
    const getMinMaxPrice = async () => {
        try {
            const response = await productApi.getMinMaxProduct()
            console.log('getMinMax', [response.data.data[0].min, response.data.data[0].max])
            setValue1([response.data.data[0].min, response.data.data[0].max])
        } catch (error) {
            console.log('Fail at getMinMaxPrice', error)
        }
    }

    useEffect(() => {
        getMinMaxPrice()
    }, [])

    // console.log('--*****---', value1[0])
    useEffect(() => {
        const price_from = searchParams.get('price_from') || value1[0]
        const price_to = searchParams.get('price_to') || value1[1]
        const wood_type = searchParams.getAll('wood_type')

        if (debouncedSearchTerm) {
            setSearchParams({
                price_from: price_from,
                price_to: price_to,
                wood_type: wood_type,
                search: debouncedSearchTerm
            })
            if (pathname === '/' || pathname.split('/').includes('details')) {
                navigate(`/products/all/?search=${debouncedSearchTerm}`)
            }
            console.log('debound', debouncedSearchTerm)
        } else if (debouncedSearchTerm === '') {
            searchParams.delete('search')
            setSearchParams(searchParams)
        }

        console.log("price_from", price_from)
        console.log("price_to", price_to)
    }, [debouncedSearchTerm])
    return (
        <TextField
            size="small"
            className="bg-white rounded-none w-96"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchValue}
            onChange={(event) => handleOnchangeSearch(event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchInput
