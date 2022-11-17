import { render, screen } from '@testing-library/react';
import App from 'App';
import Header from 'components/generic/Header/Header';
import SearchForm from 'components/generic/listProducts/SearchForm/SearchForm';
import ListProducts from 'pages/listProducts/ListProducts';
import { Provider } from 'react-redux';
import { addProductToCart } from 'redux/cartSlice/CartSlice';
import store from 'redux/store';
import { NAME_APP } from 'utilities/constants';

function renderWithContext(element) {
  render(
    <Provider store={store}>{element}</Provider>
 );
 return { store };
}

describe('cart test', () => {
  test('initial cart',  async () => {
    renderWithContext(<Header />);
    expect(store.getState().cart.length).toEqual(0);
  });
  test('put a product into cart',  async () => {
    renderWithContext(<Header />);
    const element = { id: 1, colorCode:1000, storageCode: 300 }
    await store.dispatch(addProductToCart(element))
    expect(store.getState().cart.length).toEqual(1);
  });
})
