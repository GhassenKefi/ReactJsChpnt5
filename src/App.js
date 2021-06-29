import './App.css';
import React, { Component } from 'react';
import Profile from './Components/Profile';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Person:
      {
        fullname: "Monkey D.Luffy",
        bio: "I Decided To Be Pirate King. I Don’t Care If I Die For It.",
        profession: "Saving the world",
        imgSrc: "https://cutewallpaper.org/21/luffy-profile-pic/Monkey-D-Luffy-YouTube.jpg"
      },
      shows: false,
      counter:0
    }
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

 
  render() {
    return (
      <div className="App">
        <button className="toggle-btn" onClick={this.toggle}>press</button><br></br>
        {this.state.show && (
          <Profile Person={this.state.Person} />
        )}
      </div>
    );
  }
}
export default App;
