import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import Rating from "react-rating";

const ReviewShow = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://house-plant-world.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse().slice(0,3)));
  }, []);

  return (
    <div className="reviews">
      <h3>
        See Reviews:
        <div className="total">
          {reviews.map((review) => (
            <div>
              <Card
                bg="light"
                text="dark"
                style={{ height: "250px" }}
                className="mb-2 text-left review-card"
              >
                <Card.Header className="review-name">{review.name}</Card.Header>

                <Card.Body>
                  <Card.Title className="rating">
                    <Rating
                      className="rating"
                      initialRating={review.rating}
                      readonly
                      emptySymbol="fa fa-star-o fa-x"
                      fullSymbol="fa fa-star fa-x"
                    />
                  </Card.Title>
                  
                  <h5 className="review-text text-success">
                    <Badge bg="secondary">Product</Badge> {review.product}{" "}
                  </h5>{" "} <br />
                  <Card.Text className="review-review">
                    {review.review}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </h3>
    </div>
  );
};

export default ReviewShow;
