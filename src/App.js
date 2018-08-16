import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AppContent from "./components/AppContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      products: [
        { id: 1, title: "laptop", price: "$1000", description: "" },
        { id: 2, title: "keyboard", price: "$100", description: "" }
      ],
      cartItems: []
    };
  }
  setRoute = route => {
    this.setState({ route });
  };
  addCartItem = cartItem => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.concat(cartItem)
    }));
  };
  deleteCartItem = id => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(cartItem => cartItem.id !== id)
    }));
  };
  render() {
    const { products, cartItems, route } = this.state;
    return (
      <div className="App">
        <Header cartItems={cartItems} setRoute={this.setRoute} />
        <AppContent
          route={route}
          products={products}
          cartItems={cartItems}
          addCartItem={this.addCartItem}
          deleteCartItem={this.deleteCartItem}
        />
      </div>
    );
  }
}

export default App;
