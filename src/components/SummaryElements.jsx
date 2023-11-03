import '../styles/SummaryElements.css';
import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import iconVisual from '../assets/images/icon-visual.svg';

export function SummaryElements() {

    const elements = [
        { id: 1, icon: iconReaction, desc: 'Reaction', value: '80', outOf:'/ 100', txtColor: 'hsl(0, 100%, 67%)', containerColor: 'hsla(0, 100%, 67%, 0.1)' },
        { id: 2, icon: iconMemory, desc: 'Memory', value: '92', outOf:'/ 100', txtColor: 'hsl(39, 100%, 56%)', containerColor: 'hsla(39, 100%, 56%, 0.1)' },
        { id: 3, icon: iconVerbal, desc: 'Verbal', value: '61', outOf:'/ 100', txtColor: 'hsl(166, 100%, 37%)', containerColor: 'hsla(166, 100%, 37%, 0.1)' },
        { id: 4, icon: iconVisual, desc: 'Visual', value: '72', outOf:'/ 100', txtColor: 'hsl(234, 85%, 45%)', containerColor: 'hsla(234, 85%, 45%, 0.1)'}
      ];
      
      const listElements = elements.map(element => (
        <div id="summary_elements_container" key={element.id} style={{ backgroundColor: element.containerColor }}>
          <div id='summary_elements_type'>
            <img src={element.icon} />
            <p style={{ color: element.txtColor, paddingLeft:"10px" }}>{element.desc}</p>
          </div>
          <div id='summary_elements_score'>
            <p style={{color:"#2d2f46", fontWeight:"bold"}}>{element.value}&nbsp;&nbsp;</p>
            <p  style={{color: "#9395a2", fontWeight:"bold"}}>{element.outOf}</p>
          </div>
        </div>
      ));

    return (
        <>
            {listElements}
        </>
    )
}