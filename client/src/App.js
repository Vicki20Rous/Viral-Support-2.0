import React, { Component } from 'react';
import { addResponseMessage, Chat } from 'react-chat-popup';
// import logo from 'background2.jpg';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to Viral Support Chat");
  }
  handleNewUserMessage = (newMessage) => {
    // eslint-disable-next-line no-template-curly-in-string
    console.log('New incoming message! ${newMessage}');
    // eslint-disable-next-line no-undef
    addResponseMessage(response);
  }
  render() {
    return (
      <div className="App">
        <Chat 
        handleNewUserMessage={this.handleNewUserMessage}
        // profileAvatar={logo}
        title= "Viral Support 2.0"
        subtitle="Join Support Staff"
        />
      </div>
    )
  }
}

export default App