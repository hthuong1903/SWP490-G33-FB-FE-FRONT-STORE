import axiosClient from "./axiosClient"
import axios from 'axios'
import { BASE_URL } from "@/constraint"


const productApi = {
    getAllProductByFilter: (payload) => {
        const url = `${BASE_URL}/products/paging/by_category_filter`
        return axios.post(url, payload)
    },

    getAllProduct: () => {
        const url = `${BASE_URL}/products`
        return axios.get(url)
    },

    getAllCategory: () => {
        const url = `${BASE_URL}/categorys`
        return axios.get(url)
    },
    getProductById:(productId)=>{
        const url = `${BASE_URL}/products/${productId}`
        return axios.get(url)
    },
    getAllMaterial:()=>{
        const url = `${BASE_URL}/materials`
        return axios.get(url)
    }
}

export default productApi
