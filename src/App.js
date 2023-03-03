import React, { Component } from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: 'Chemengui Med',
      bio: 'A software engineer with experience in React.',
      imgSrc: 'https://img.freepik.com/free-photo/coding-man_1098-18084.jpg',
      profession: 'Civil Engineer',
    },
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { Person, show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={Person.imgSrc} alt='aa'/>
          <h1>{Person.fullName}</h1>
          <button onClick={this.handleShow}>Show Bio</button>
          <button onClick={this.handleHide}> Hide Bio</button>
          {show && <p>{Person.bio}</p>}
        </header>
      </div>
    );
  }
}

export default App;

