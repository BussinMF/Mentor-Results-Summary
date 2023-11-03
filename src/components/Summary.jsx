import '../styles/Summary.css';
import { SummaryElements } from './SummaryElements';

export function Summary () {
    return (
        <div id="summary_container">
            <div id='summary_container_content'>
                <p style={{fontSize:"1.2rem"}}>Summary</p>
                <SummaryElements />
            </div>
            <div id='continue_button_container'>
                <button type='button' id='continue_button' style={{fontSize:"1.2rem"}}>Continue</button>
            </div>
            
        </div>
    )
}