import React, { useEffect,  useState } from 'react';
import {  Table, Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://house-plant-world.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

      const handleCancelOrder = (product) => {
        fetch(`https://house-plant-world.herokuapp.com/services/${product._id}`, {
            method: "DELETE",
          }).then((res) => {
            const remaining = products.filter((o) => o._id !== product._id);
            setProducts(remaining);
          });
      }
    
      const submit = (product) => {
        confirmAlert({
          title: "Confirm Delete Product",
          message: "Are you sure to remove this product?",
          buttons: [
            {
              label: "Yes",
              onClick: () => handleCancelOrder(product),
            },
            {
              label: "No",
              //   onClick: () => alert('Click No')
            },
          ],
        });
      };

    return (
        <div className="manage-products">
      <h2>Manage all Products</h2>
      <hr />
      <div className="all-products mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete Product</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr  key={product._id}>
                <td><img src={product.image} height="100px" alt="" /></td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                
                <td>
                  <Button onClick={() => submit(product)} variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    );
};

export default ManageProducts;