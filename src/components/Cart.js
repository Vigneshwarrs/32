import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './Redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total+item.quantity, 0);
    }
    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="row bg-dark p-3 text-light m-3" style={{ height: "400px" }}>
              <div className="col">
                <img width={400} height={350} src={product.images[0]} alt={product.title} />
              </div>
              <div className="col">
                <h1>{product.title}</h1>
                <h6>{product.category}</h6>
                <p>{product.description}</p>
              </div>
              <div className="col d-flex flex-column justify-content-between text-center">
                <div className='row d-block'>
                    <div className='col'>
                    <h6>Quantity:</h6>
                    </div>
                    <div className='col'>
                    <button className="btn btn-danger m-2" onClick={() => dispatch(removeProduct(product))}>-</button>
                    <span style={{fontSize:'1.25rem'}}>{product.quantity}</span>
                    <button className="btn btn-success m-2" onClick={() => dispatch(addProduct(product))}>+</button>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col'>
                    <h3>Subtotal: ${(product.price * product.quantity).toFixed(2)}</h3>
                    </div>
                </div>
              </div>
              <div className="col">$ {product.price}</div>
            </div>
      ))}
      <div className='text-center m-3'>
        <h3>Total Quantity: {getTotalQuantity()}</h3>
        <h3>Total Amount: ${getTotalAmount()}</h3>
      </div>
    </div>
  );
}

export default Cart