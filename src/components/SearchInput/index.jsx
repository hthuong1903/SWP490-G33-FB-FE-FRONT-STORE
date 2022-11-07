import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'

function SearchInput() {
    const [searchParams, setSearchParams] = useSearchParams('')
    const [searchValue, setSearchValue] = useState()
    const debouncedSearchTerm = useDebounce(searchValue, 600)

    const handleOnchangeSearch = (value) => {
        setSearchValue(value)
    }

    useEffect(() => {
        const price_from = searchParams.get('price_from') || 100000
        const price_to = searchParams.get('price_to') || 100000
        const wood_type = searchParams.getAll('wood_type')

        if (debouncedSearchTerm) {
            setSearchParams({
                price_from: price_from,
                price_to: price_to,
                search: debouncedSearchTerm,
                wood_type: wood_type
            })
            console.log('debound', debouncedSearchTerm)
        }
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