import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

function Signup(){
  console.log("Signed Up");
}

function checkLog(data = {}){
    fetch('', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
}

function checkLogin(){
  fetch('http://localhost:3001',{
    mode: 'no-cors'
  })
  .then(response => {
    if (!response.ok) {
      console.log(response);
      throw new Error('Network response was not OK');
    }
//    return response.blob();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  }) 
}

class App extends Component{
  state={
    isModalOpen : false
  };

  openModal = () => this.setState({ isModalOpen: true });

  render(){
     return (
       <>
      <button className="primary" onClick={this.openModal}>Login</button>
      <button className="primary" onClick={Signup}>Signup</button>
      <Modal  show={this.state.isModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>
          <p>Username</p>
          <input type="text" name="Username" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="Password"/>
        </label>
        <div>
          <button className="primary" onClick={checkLogin}>Submit</button>
        </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
   
    </>
   )
  }
}

export default App;