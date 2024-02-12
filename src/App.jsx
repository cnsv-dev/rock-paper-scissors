import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [yourChoice, setYourChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  function alege(optiune) {
    setYourChoice(optiune);

    let newC = "";
    // alege random dintre cele 3 valori
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      newC = "rock";
    } else if (random === 1) {
      newC = "paper";
    } else {
      newC = "scissors";
    }

    setComputerChoice(newC);
  }

  useEffect(() => {
    // Daca playerul alege scissors
    if(yourChoice=="paper"){
      if(computerChoice=="rock"){
        setWinner("You");
      }
      else if(computerChoice=="scissors"){
        setWinner("Computer");
      }
      else if(computerChoice=="paper"){
        setWinner("Draw");
      }
    }

    // Daca playerul alege rock
    if(yourChoice=="rock"){
      if(computerChoice=="scissors"){
        setWinner("You");
      }
      else if(computerChoice=="paper"){
        setWinner("Computer");
      }
      else if(computerChoice=="rock"){
        setWinner("Draw");
      }
    }
    // Daca playerul alege scissors
    if(yourChoice=="scissors"){
      if(computerChoice=="paper"){
        setWinner("You");
      }
      else if(computerChoice=="rock"){
        setWinner("Computer");
      }
      else if(computerChoice=="scissors"){
        setWinner("Draw");
      }
    }
  },[computerChoice, yourChoice]);


  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <button
          onClick={()=>{
            alege("rock");
          }}
        >Rock</button>
        <button
          onClick={()=>{
            alege("paper");
          }}
        >Paper</button>
        <button
          onClick={()=>{
            alege("scissors");
          }}
        >Scissors</button>
      </div>

      <div className="game">
        <div className="player">
          <p>You</p>
          <p>{yourChoice}</p>
        </div>
        <p>vs.</p>
        <div className="player">
          <p>Computer</p>
          <p>{computerChoice}</p>
        </div>
      </div>

      <div className="winner">
        Winner: {winner}
      </div>
    </div>
  );
}

export default App;
