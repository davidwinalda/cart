import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Context from './AppContext';

import ProductList from './ProductList';
import CartDetails from './CartDetails';

const App = () => {

  // Setting Provider
  const Provider = Context.Provider;

  // Store Data
  const initialCart = {
    cart: 0,
  }

  const initialWallet = {
    wallet: 0,
  }

  const initialBeverages = [
    {
      id: 1,
      name: 'Coffe Mocha',
      price: 30000,
      stock: 20,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1593233608091-9b77dff2438a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1455&q=80'
    },
    {
      id: 2,
      name: 'Tea',
      price: 50000,
      stock: 30,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    }
  ]

  const order = [];

  // Local State
  const [cart, setCart] = useState(initialCart.cart);


  // Action
  const handleCart = (action, id) => {
    console.log(id)
    const product = initialBeverages.find(item => item.id === id)
    console.log(product)

    if (action === 'add') {
      setCart(cart + 1)
    } else if (action === 'remove') {
      setCart(cart - 1)
    }
  }

  return (
    <Router>
      <Provider value={
        {
          data: {
            cart: cart,
            wallet: initialWallet,
            beverages: initialBeverages,
            totalOrder: order,
          },
          dispatch: {
            handleCart: handleCart,
          }
        }
      }>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Cart Details</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail">
            <CartDetails />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Provider>
  </Router>
  );
}

export default App;
