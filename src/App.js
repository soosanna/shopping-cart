//import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

function App() {

  let data = [
    {
      "image":"http://placehold.it/360x150"  ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150",
      "name": "Speicial Item",
      "Price": "$20.00 - $18.00"
    },
    {
      "image":"http://placehold.it/360x150" ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150"  ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150" ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150" ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150"  ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },
    {
      "image":"http://placehold.it/360x150"  ,
      "name": "Fancy Product",
      "Price": "$40.00 - $80.00"
    },

  ]
  const [count, setcount] = useState(0)

  return (
    <div className="App">

      <Badge bg="sucess">
        cart{count}
      </Badge>
      <div className='card-container'>
        {data.map((product, idx) => (
          <Product
            key={idx}
            prod={product}
            count={count}
            setcount={setcount}
          />
        ))}

      </div>
    </div>
  );
}

export default App;

function Product({ prod, count, setcount }) {
 
  const [show, setshow] = useState(true)//hook
  function addcart() {
    setcount(count + 1);
    setshow(!show)
  }
  function removecart() {
    setcount(count - 1);
    setshow(!show)
  }

  return (

    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>{prod.Price}</Card.Text>
          <Card.Text> {prod.rating}</Card.Text>

        
          {show ?
            <Button variant="primary"
              onClick={addcart}>
              Add to cart</Button>
            :
            <Button variant="danger"
              onClick={removecart}>
              Remove to cart</Button>}

        </Card.Body>
      </Card>

    </div>
  )
}

