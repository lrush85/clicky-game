import React from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
class App extends React.Component {
  state = {
    characters: "./images/jimHalpert.jpeg",
  }


  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <div className="row">
                      {
                        characters.map(function (individualCharacter) {
                          return ( 
                          <ClickyCard img={individualCharacter.image} />
                          );
                        })
                      }
          </div>
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default App;
