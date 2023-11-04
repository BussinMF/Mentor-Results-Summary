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
      <p id="credits">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/BussinMF/Mentor-Qr-Code/commits?author=BussinMF">BussinMF</a></p>
    </div>
  )
}

export default App
