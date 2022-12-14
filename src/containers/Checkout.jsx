import React from 'react'
import "../styles/components/Checkout.css"
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Checkout = () => {
  const { state: { cart }, removeFromCart } = React.useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ?
          <h3>Lista de pedidos:</h3>
          :
          <h3>Sin pedidos</h3>
        }
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <NavLink
            to="/checkout/information"
            end
          >
            <button type="button">Continuar Pedido</button>
          </NavLink>

        </div>
      )}
    </div>
  )
}

export { Checkout };