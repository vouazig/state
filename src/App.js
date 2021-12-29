import React, { Component } from 'react';
import Foto from './Foto.jpg'; 
class App extends Component
{
  state = { fullName: 'salem bouaziz ',
  bio: 'master ',
  imSrc: Foto ,
  profession: 'manager ', 
  show: false,
  digit:0, }

  componentWillMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
      digit: prevState.digit + 1,
    }));
  }, 1000);
  }
  showContent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  render() {
    return (
      <div>
              <button onClick={this.showContent}>show</button>
        {this.state.show ? (
          <div>
            {this.state.fullName} <br/>
            {this.state.bio } <br/>
            {this.state.profession} <br/>
       <img src={this.state.imSrc} alt= 'Foto' width= '300' height= '300' />
             <br/>
             <h1> counter: {this.state.digit} </h1>
          </div>
        ) : null}

      </div>
    );
  };
}
export default App;
