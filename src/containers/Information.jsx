import React from 'react'
import '../styles/components/Information.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Information = () => {

  const { state: { cart }, addToBuyer } = React.useContext(AppContext);
  const form = React.useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Información de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='text' placeholder='Correo electrónico' name='email' />
            <input type='text' placeholder='Dirección' name='address' />
            <input type='text' placeholder='Apto.' name='apto' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='País' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Código postal' name='cp' />
            <input type='text' placeholder='Teléfono' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <NavLink
            to="/checkout"
            end
          >
            <button className='Information-back'>Regresar</button>
          </NavLink>
          <button className='Information-next' onClick={() => handleSubmit()}>Pagar</button>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className='Information-item' key={item.title}>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Information };