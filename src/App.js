import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BookList from "./components/BookList"


class App extends React.Component {

  state= {
    books: [],
    cart: []
  }

  render() {
    return (
      <>
        <Navigation cart={this.state.cart} />
        <BookList books={this.state.books} />
      </>
    );
  }

  componentDidMount = async() =>{
    const res = await fetch("https://striveschool-api.herokuapp.com/books")
    const books = await res.json()
    this.setState({
      books: books
    })
  }
}

export default App;
