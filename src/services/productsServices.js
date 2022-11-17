import {URL_PRODUCT} from 'utilities/constants'
import {URL_CART} from 'utilities/constants'

export const getAllProducts = () => {
    return fetch(URL_PRODUCT)
}

export const getProductById = (id) => {
    return fetch(URL_PRODUCT + '/' + id)
}

export const putProductIntoCart = (product, thunkAPI) => {
    return fetch(URL_CART, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
        signal: thunkAPI.signal,
    })
}
