import React from 'react';

import Context from './AppContext';
import './productList.css';

const ProductList = () => {
  return (
    <Context.Consumer>
      {
        context => {
          console.log(context)
          return (
            <div className="App">
              <div className="totalCart">
                Total Cart: {context.data.cart}
              </div>
                  {
                    context.data.beverages.map((item) => (
                      <div className="wrapperCard" style={{ paddingBottom: '50px', }} key={item.id}>
                        <img src={item.image} alt="coffee" />
                        <div>
                          <h2>{item.name}</h2>
                          <h2>{item.price}</h2>
                          <div className="cardAction">
                            <button onClick={() => context.dispatch.handleCart('remove', item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => context.dispatch.handleCart('add', item.id)}>+</button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
            </div>
          )
        }
      }
    </Context.Consumer>
  );
}

export default ProductList;
