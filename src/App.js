import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

function Signup(){
  console.log("Signed Up");
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
        <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
   
    </>
   )
  }
}

export default App;