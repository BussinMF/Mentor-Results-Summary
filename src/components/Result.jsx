import '../styles/Result.css';

export function Result () {

    return (
        <div id='result_container'>
            <p style={{paddingTop: "20px", color: "#d0c3ff", fontSize: "1.2rem"}} id='your_result'>Your Result</p>
            <div id='circle'>
                <p style={{fontWeight: "bold", fontSize: "3.5rem"}}>76</p>
                <p style={{fontWeight: "bold", fontSize: "1rem", color: "hsla(241, 100%, 89%, 0.6)"}}>of 100</p>
            </div>
            <p style={{paddingTop:"25px", paddingBottom:"15px", color:"white", fontSize:"1.5rem"}}>Great</p>
            <p style={{margin:"0 40px", color: "hsla(241, 100%, 89%, 0.9)"}}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}