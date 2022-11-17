import { Container } from '@mui/material'
import BreadCrumb from 'components/generic/BreadCrumb/BreadCrumb'
import Header from 'components/generic/Header/Header'
import DetailProduct from 'pages/detailProduct/DetailProduct'
import ListProducts from 'pages/listProducts/ListProducts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASE_URL, DETAIL_URL } from 'utilities/constants'
import './App.css'


function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
          <BreadCrumb />
          <Routes>
            <Route path={BASE_URL} element={<ListProducts />} />
            <Route path={DETAIL_URL} element={<DetailProduct />  }></Route>
          </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
