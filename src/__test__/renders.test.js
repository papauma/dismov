import { render, screen } from '@testing-library/react';
import App from 'App';
import Header from 'components/generic/Header/Header';
import SearchForm from 'components/generic/listProducts/SearchForm/SearchForm';
import ListProducts from 'pages/listProducts/ListProducts';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import store from 'redux/store';
import { NAME_APP } from 'utilities/constants';

function renderWithContext(element) {
  render(
    <Provider store={store}>{element}</Provider>
 );
 return { store };
}

describe('Render components', () => {
  test('Render APP', () => {
    renderWithContext(<App />);
    const nameApp = NAME_APP
    const linkElement = screen.getAllByText(nameApp)
    expect(linkElement[0]).toBeInTheDocument();
  });

  test('Render Header', () => {
    renderWithContext(<Header />)
    const nameApp = NAME_APP
    const linkElement = screen.getByText(nameApp);
    expect(linkElement).toBeInTheDocument();
  })

  test('Render Search', () => {
    renderWithContext(<SearchForm />);
    const linkElement = screen.getByPlaceholderText('Search...')
    expect(linkElement).toBeInTheDocument()
  })

  test('Render ListProducts', () => {
    renderWithContext(<ListProducts />);
    const nameApp = 'Loading...'
    const linkElement = screen.getByText(nameApp);
    expect(linkElement).toBeInTheDocument()

  })

})
