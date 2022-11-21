import { useEffect, useState } from 'react'
import { getAllProducts } from 'services/productsServices'
import { LIST_STORAGE } from 'utilities/constants'
import { hoursUntilNow } from 'utilities/utilities'

const responseToProductList = (response, keyword = null) => {
    if (!keyword) return response
    return response.filter(product => product.brand.toLowerCase().includes(keyword.toLowerCase()) || product.model.toLowerCase().includes(keyword.toLowerCase()))
}

const useListProducts = () => {
    const [listProducts, setListProducs] = useState([])

    const [keyword, setKeyword] = useState(null)
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)


    useEffect(() => {

      const fetchListProducts = () => {
        getAllProducts()
          .then(res => res.json())
          .then(
            (result) => {
                setLoading(false)
                if (!keyword) {
                  localStorage.setItem(LIST_STORAGE, JSON.stringify({list: result, data: new Date()}))
                }
                setListProducs(responseToProductList(result, keyword))
            },
            (error) => {
              setError(true)
            })
      }
      setLoading(true)
      const localData = localStorage.getItem(LIST_STORAGE)
      if (!localData) {
        fetchListProducts()
      } else {
        const localDataParsed = JSON.parse(localData)
        if (hoursUntilNow(localDataParsed.data) < 1) {
          setListProducs(responseToProductList(localDataParsed.list, keyword))
          setLoading(false)
        } else {
          fetchListProducts()
        }
      }
    }, [keyword])

  return {listProducts, setKeyword, loading, error}
}

export {useListProducts};
