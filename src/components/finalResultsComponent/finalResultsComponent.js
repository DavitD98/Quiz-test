import FinalQuestionsComponent from "../finalQuestionsComponent/finalQuestionsComponent"
import QuestionsComponent from "../questionsComponent/questionsComponent"
import "./finalResultsComponent.css"

const FinaleResultsComponent = (props) => {

    const {score,questions} = props

    const startAgain = () => {
        window.location.reload(false)
    }

    return(


            <div className="final">


                <div className="final-results">
                              <h1>TEST RESULTS</h1>
                              <h2>Your result {parseInt(score / questions?.length)}</h2>

                              <p className="bold">{(score / questions?.length) * 100}%</p>
                              <p className="bold">{(score / questions?.length) * 100 > 90 ? "You passed test successfully" 
                               
                               : "You have not passed the test"}</p>
                </div>

                <button onClick={startAgain} className="btn">Start Again</button>

                <div className="showRights">
                    {
                        questions.map(item => <FinalQuestionsComponent key={item.id} {...item}/>)
                    }
                </div>
                


              </div>
    )
}

export default FinaleResultsComponent