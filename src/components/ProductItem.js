import React from "react";
import AddToCart from "./AddToCart";
import { ListGroupItem, Row, Col } from "reactstrap";
import withBackground from "../utils/commonBackground";

/**
 * Wrapped the external component Row with our withBackgroud HOC
 */
const RowWithBackground = withBackground("green")(Row);
class Product extends React.Component {
  render() {
    const { product, addCartItem, disabled } = this.props;
    console.log(disabled);
    return (
      <ListGroupItem>
        <RowWithBackground>
          <Col>{product.title}</Col>
          <Col>{product.description}</Col>
          <Col>{product.price}</Col>
          <Col>
            <AddToCart
              productId={product.id}
              addCartItem={addCartItem}
              disabled={disabled}
            />
          </Col>
        </RowWithBackground>
      </ListGroupItem>
    );
  }
}

export default Product;
