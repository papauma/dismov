import ProductSnap from 'components/generic/listProducts/ProductSnap/ProductSnap';
import SearchForm from 'components/generic/listProducts/SearchForm/SearchForm';
import useListProducts from 'hooks/useListProducts';
import React, { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { INITIAL_PAGE, PRODS_PER_PAGE } from 'utilities/constants';



const ListProducts = () => {
    const {listProducts, setKeyword, loading} = useListProducts()
    const [page, setPage] = useState(INITIAL_PAGE)

    const handleSubmitSearchText = useCallback((textSearch) => {
      setKeyword(textSearch)
    }, [setKeyword] )

    const handleChangePaginator = (e, p) => {
      setPage(p)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SearchForm onSubmit={handleSubmitSearchText}/>
      <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!loading ? listProducts.slice(page * PRODS_PER_PAGE, page * PRODS_PER_PAGE + PRODS_PER_PAGE).map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <ProductSnap product={product} key={product.id}/>
            </Grid>
          )) : 'Loading...'}
      </Grid>
      <Grid container justifyContent="flex-end">
        <Stack spacing={2}>
          <Pagination count={parseInt(listProducts.length / PRODS_PER_PAGE) } variant="outlined" shape="rounded" onChange={handleChangePaginator}/>
        </Stack>
        </Grid>
  </Box>
  )
}

export default React.memo(ListProducts)