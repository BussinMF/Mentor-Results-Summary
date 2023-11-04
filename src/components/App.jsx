import '../styles/App.css';
import { Result } from './Result.jsx';
import { Summary } from './Summary.jsx';

function App() {

  return (
    <div id='overall_container'>
      <div id="overall">
        <Result />
        <Summary />
      </div>
    </div>

  )
}

export default App
