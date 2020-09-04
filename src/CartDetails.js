import React from 'react';

import Context from './AppContext';

const CartDetails = () => {
  return (
    <Context.Consumer>
      {
        context => {
          console.log(context)
          return (
            <div>
              {/* <h2>Total: {context.data.cart}</h2>
              <h2>Total Price: {context.data.cart}</h2> */}
            </div>
          )
        }
      }
    </Context.Consumer>
  )
}

export default CartDetails;
