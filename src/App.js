import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Lana Del Rey",
        bio: "Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey",
        imgSrc: "./pic.jpg",
        profession: "American singer-songwriter"
      },
      shows: true
    };
  }

  basculer = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows } = this.state;
    
    return (
      <div className="App">
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.fullName}</p>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <button onClick={this.basculer}>Basculer</button>
      </div>
    );
  }
}

export default App;
