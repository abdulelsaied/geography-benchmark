import './styles/output.css';
import GameButton from './components/GameButtons';
import { handleGuess, startGame } from './utils/GameButtonFunctions'


function App() {
  return <div>
          <GameButton text = "start" buttonFunction = {() => startGame()}/>
          <GameButton text = "seen" buttonFunction = {() => handleGuess("seen")}/>
          <GameButton text = "new" buttonFunction = {() => handleGuess("new")} />
        </div>
}

export default App;