import './styles/output.css';
import GameButton from './components/GameButtons';
import { handleGuess } from './utils/GameButtonFunctions'


function App() {
  return <div>
          <GameButton text = "seen" buttonFunction = {() => handleGuess("seen")}/>
          <GameButton text = "new" buttonFunction = {() => handleGuess("new")} />
        </div>
}

export default App;