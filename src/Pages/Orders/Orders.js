import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import useAuth from "./../../Context/useAuth";
import "./Orders.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div>
      <h2>Your All Order:</h2>
      <hr />
      <div className="orders-list">
        {orders.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </div>
    </div>
  );
};

const Order = ({ order }) => {
  const [deleted, setDeleted] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deleted]);

  const submit = () => {
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

  const handleCancelOrder = (order) => {
    fetch(`http://localhost:5000/orders/${order._id}`, {
      method: "DELETE",
    }).then((res) => {
      setDeleted(true);
      const remaining = orders.filter((o) => o._id !== order._id);
      setOrders(remaining);
    });
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="text-success font-weight-bold">
            {order.product}
          </Card.Title>
          <Card.Text className="text-success font-weight-bold text-secondary pe-3 ps-3">
            Address: {order.address},{order.thana}, {order.district},{" "}
            {order.zip}
          </Card.Text>
        </Card.Body>
        <ListGroup className="">
          <ListGroupItem>Quanity: {order.quantity} </ListGroupItem>
          <ListGroupItem>Price: {order.price} </ListGroupItem>
          <ListGroupItem>Status: {order.status} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="danger" onClick={submit}>
            Cancel Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Orders;
