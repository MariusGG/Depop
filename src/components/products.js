import React from "react";
import '../styles/product.css';
import { Card } from 'react-bootstrap';
import Likes from './likes';

export default class Products extends React.Component {
    constructor() {
      super();
      this.state = {
        products: null
      }
    }

 componentDidMount() {
   fetch('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
   .then(res => {
     return res.json();
   }).then(productData => {
     console.log(productData)
     let products = productData.map((item) => {
       return (
         <div class="row">
           <div class="column">
             <Card className="card">
              <Card.Img variant="top" src={item.img} alt={item.description} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.brand}
                  </Card.Text>
                  <Card.Text>
                    {item.size}
                  </Card.Text>
                  <Card.Text>
                    £{item.price}
                </Card.Text>
                <div>
                  <Likes />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

       )
     })
     this.setState({ products: products});
   })
  }


  render() {

    return (

      <div className="App">
        <h1>Welcome to my React App! </h1>
        <div>{ this.state.products }</div>
      </div>
    );
  }
}
