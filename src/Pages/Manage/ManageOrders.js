import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const statusRef = useRef();

  const handleStatus = (order) => { 
    // const status = e.target.value;

    // const object = { ...order, status: status };
    // fetch(`http://localhost:5000/orders/${order?.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(object),
    // });
    // console.log(status);
  };

  useEffect(() => {
    fetch("https://house-plant-world.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Manage all Orders</h2>
      <hr />
      <div className="all-products mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Remove Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.date}</td>
                <td>{order.email}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
                  <Form.Select
                    ref={statusRef}
                    onChange={() => handleStatus(order)}
                    aria-label="Default select example"
                  >
                    
                    <option value="pending">
                      Pending
                    </option>
                    <option value="approved">
                      Approved
                    </option>
                  </Form.Select>
                </td>
                <td>
                  <Button variant="danger">Cancel Order</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageOrders;
