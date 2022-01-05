import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

function Signup(){
  console.log("Signed Up");
} 

function checkLogin(Username, Password){
  const requestData = {'Username':Username, 'Password': Password};
  //console.log(requestData);
  fetch('http://localhost:3001',{
    method: 'POST',
    headers :{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    //console.log(response);
    return response.json();
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  }) 
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      isModalOpen : false
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  openModal = () => this.setState({ isModalOpen: true });

  render(){
     return (
      <>
      <button type='button' className="primary" onClick={this.openModal}>Login</button>
      <button type='button' className="primary" onClick={Signup}>Signup</button>
      <Modal  show={this.state.isModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>
          <p>Username</p>
          <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </label>
        <div>
          <button type='submit' className="primary" onClick={checkLogin(this.state.username, this.state.password)}>
              Submit</button>
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