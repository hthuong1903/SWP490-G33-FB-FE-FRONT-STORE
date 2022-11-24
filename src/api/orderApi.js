import axiosClient from "./axiosClient"
import axios from 'axios'
import { BASE_URL } from "@/constraint"


const orderApi = {
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

    ///==========Cart============///

    getOrdersByCustomer: (userId) => {
        const url = `${BASE_URL}/orders/by_customer`
        return axios.get(url, { params: { userId } })
    },

    createCart: (params) => {
        const url = `${BASE_URL}/orders/add_to_cart`
        return axios.post(url, params)
    },

    createOrderOnline: (params) => {
        const url = `${BASE_URL}/orders/online`
        return axios.post(url, params)
    },

    deleteCart: (productId, userId) => {
        const url = `${BASE_URL}/orders/delete_product_to_cart`
        return axios.post(url, null, { params: { productId, userId } })
    }
}

export default orderApi
