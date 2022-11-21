import { render, screen } from "@testing-library/react";
import ListProducts from "pages/listProducts/ListProducts";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from 'redux/store';


function renderWithContext(element) {
  render(
    <Provider store={store}><BrowserRouter>{element}</BrowserRouter></Provider>
 );
 return { store };
}

const mock = {}

mock.listProducts = [
  { id: "sdfsdf234236s", brand: "Iphone", model: '11', imgUrl: 'http://xxx.com', price: 700},
  { id: "lkwe4jrio745,ds", brand: "Samsung", model: 'galaxy', imgUrl: 'http://xxx.com', price: 270 },
];


// const mock = {Games: null, GamesError: null};
jest.mock('../hooks/useListProducts.js', () => ({
  useListProducts: () => {
       return mock;
   },
}));

  it("should return data with a successful request", async () => {
    renderWithContext(<ListProducts />);
       const game1Element = screen.queryByText('Iphone');
       expect(game1Element).toBeInTheDocument();

       const game2Element = screen.queryByText('Samsung');
       expect(game2Element).toBeInTheDocument();
  });
