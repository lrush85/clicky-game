import React, {Component} from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

    state = {
      characters,
      score: 0,
      topScore: 0,
      clickedArr: [],
      text: "Click on an image to begin",
      classArr:  []
    }

  handleClick = (event) => {
    const randomizeArray = this.shuffleArray(characters);
    this.setState({characters: randomizeArray});

    if(this.state.clickedArr.includes(event.id)) {
        this.setState({
          score: 0, 
          clickedArr: [],
          topScore: this.state.score,
          text: "Oh noes... Game over!",        
        })
        this.addShake();
      } else {
        this.setState({
          clickedArr: this.state.clickedArr.concat([event.id]),
          score: this.state.score + 1,
          text: "Yay, you are correct!",
        })
        this.removeShake();
      }

      if(this.state.score === 12) {
        this.setState({
          text: "YOU WIN!!!"
        })
      }
  }

  shuffleArray = (charactersArray) => {
    for(let i = 0; i < charactersArray.length - 1; i++) {
      const randomize = Math.floor(Math.random() * (i + 1));
      [charactersArray[i], charactersArray[randomize]] = [charactersArray[randomize], charactersArray[i]]
    }
    return charactersArray;
  }

  addShake = () => {
    this.state.classArr.push("shake");
  }
  removeShake = () => {
    this.state.classArr.pop("shake");
  }
 

  render() {
    return (
      <div>

        <Nav 
          score={this.state.score} 
          topScore={this.state.topScore}
          text={this.state.text}
        />

        <Wrapper>
        <div className="game-name">
          <h1>The Office Clicky Game</h1>
          <p>Click on the images but don't click one twice!</p>
        </div>
          <div id="row">
            {
              this.state.characters.map(individualCharacter => (
                <ClickyCard                   
                  id={individualCharacter.id}
                  img={individualCharacter.image}
                  name={individualCharacter.name} 
                  key={individualCharacter.id}
                  handleClick={this.handleClick}
                  style={this.state.classArr}
                />
              ))
            }
          </div>
        </Wrapper>
        <Footer />
      </div>
    )
  }
}



export default App;
