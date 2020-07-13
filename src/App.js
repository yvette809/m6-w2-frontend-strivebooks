import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BookList from "./components/BookList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from "./components/Cart"


class App extends React.Component {

  state = {
    books: [],
    cart: []
  }

  render() {
    return (
      <Router>
        <Navigation cart={this.state.cart} />

        <Switch>
          <Route path="/" exact >
            <BookList books={this.state.books} />
          </Route>
          <Route path="/cart" exact >
            <Cart cart={this.state.cart} />
          </Route>
        </Switch>
      </Router>
    );
  }

  componentDidMount = async () => {
    const res = await fetch("https://striveschool-api.herokuapp.com/books")
    const books = await res.json()
    this.setState({
      books: books
    })

    // const cartRes = await fetch("https://striveschool-api.herokuapp.com/books")
    // const cart = await res.json()
    // this.setState({
    //   cart: cart
    // })
  }
}

export default App;
