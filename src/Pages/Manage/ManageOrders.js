import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const statusRef = useRef();

  const handleStatus = (order) => { 
    // const status = e.target.value;

    // const object = { ...order, status: status };
    // fetch(`https://house-plant-world.herokuapp.com/orders/${order?.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(object),
    // });
    // console.log(status);
  };

  const handleCancelOrder = (order) => {
    fetch(`https://house-plant-world.herokuapp.com/orders/${order._id}`, {
        method: "DELETE",
      }).then((res) => {
        const remaining = orders.filter((o) => o._id !== order._id);
        setOrders(remaining);
      });
  }

  const submit = (order) => {
    confirmAlert({
      title: "Confirm Cancel Order",
      message: "Are you sure to cancel this order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleCancelOrder(order),
        },
        {
          label: "No",
          //   onClick: () => alert('Click No')
        },
      ],
    });
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
                  <Button onClick={() => submit(order)} variant="danger">Cancel Order</Button>
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
