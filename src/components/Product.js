import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './Redux/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  return (
    <div>
      <h2>Products</h2>
      {console.log(products)}
      {products.map((product) => (
        <div
          className="container d-flex justify-content-between text-light bg-dark p-5"
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div className="row">
            <div className="col bg-light">
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "200px", marginRight: "10px" }}
              />
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-info text-light"
                onClick={() => dispatch(addProduct(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
