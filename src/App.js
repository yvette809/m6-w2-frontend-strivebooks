import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BookList from "./components/BookList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from "./components/Cart"
import { Button, Row } from 'react-bootstrap';
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons"



class App extends React.Component {

  state = {
    books: [],
    cart: [],
    page: 0,
    pageSize: 12
  }

  setPage = async (page) => {
    this.setState({
      page: page
    }, async () => {
      await this.fetchData()
    })
  }

  render() {
    return (
      <Router>
        <Navigation cart={this.state.cart} />

        <Switch>
          <Route path="/" exact >
            <Row className="my-4 justify-content-center">
              {this.state.page > 0 && <Button variant="success" onClick={() => this.setPage(this.state.page-1)}><DashCircleFill /></Button>}
              <Button variant="success"  onClick={() => this.setPage(this.state.page + 1)}><PlusCircleFill /></Button>
            </Row>
            <BookList books={this.state.books} />
          </Route>
          <Route path="/cart" exact >
            <Cart cart={this.state.cart} />
          </Route>
        </Switch>
      </Router>
    );
  }

  fetchData = async () => {
    const res = await fetch(`http://localhost:3456/books?limit=${this.state.pageSize}&offset=${this.state.page * this.state.pageSize}`)
      const books = await res.json()
      this.setState({
        books: books
      })
  }

  componentDidMount = async () => {
    await this.fetchData()

    // const cartRes = await fetch("https://striveschool-api.herokuapp.com/books")
    // const cart = await res.json()
    // this.setState({
    //   cart: cart
    // })
  }
}

export default App;
