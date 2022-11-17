
import { useEffect, useState } from "react"
import { getProductById } from "services/productsServices"

const useProduct = (id) => {
    const [product, setProduct] = useState()

    useEffect(() => {

        getProductById(id)
        .then(res => res.json())
        .then(
            (result) => {
            setProduct(result)
            },
            (error) => {
            // acciones a realizar al recibir un KO
            }
        )

    }, [id])

    return {product}
}

export default useProduct;
