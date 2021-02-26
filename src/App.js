import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const appStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'  
  }
  const products = [
                    {pname:'Photoshop', price:'$39.99'},
                    {pname:'After Effects', price:'$99.99'},
                    {pname:'PDF Reader', price:'$9.99'},
                    {pname:'Character Animator', price:'$199.99'},
                    {pname:'IN Design', price:'$59.99'},
                    {pname:'Media Encoder', price:'$69.99'}
                  ];
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman','Shuvo', 'Bappi','Ananta', 'Nabila'];
  
  const productNames = products.map(product => product.pname);
  console.log(productNames);

  return (
    <div className="App" >
      <header className="App-header">
        <h3> NAYOKS </h3>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok} </li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li> */}
        </ul>

        <ul>
          {
            products.map(product => <li>{product.pname}</li>)
          }
        </ul>  

          <Counter></Counter>
          
          <Users></Users>

        <div style={appStyle}>
          {
            products.map(singleProduct => <Product productItem={singleProduct}></Product>)
          }
          {/* <Product productItem={products[0]}></Product>
          <Product productItem={products[1]}></Product>
          <Product productItem={products[2]}></Product>
          <Product productItem={products[3]}></Product>
          <Product productItem={products[4]}></Product>
          <Product productItem={products[5]}></Product> */}

        </div>
      </header>
    </div>
  );
}

export default App;

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    setCount(count + 1);
};
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* onClick={() => setCount(count + 1)} */}
      <button onClick={handleIncreaseCount}>INCREASE</button>
      <button onClick={() => setCount(count - 1 )}>DECREASE</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {users.map(user => <li>Name: {user.name} || Phone: {user.phone} </li>)}
      </ul>
    </div>
  )
}

function Product(props){
  const productStyles = {
    border:'1px solid grey',
    borderRadius:'10px',
    backgroundColor:'lightgrey',
    height:'400px',
    width:'300px',
  }
  console.log(props.productItem.pname);
  return(
    <div style={productStyles}>
        <h4> {props.productItem.pname} </h4>
        <h3> {props.productItem.price} </h3>
        <button>Buy Now</button>
    </div>
  )
}