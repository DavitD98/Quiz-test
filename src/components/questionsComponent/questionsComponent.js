import "./questionsComponent.css"

const QuestionsComponent = (props) => {
    const {questions,currentQuestion,setCurrentQuestion,score,setScore,setIsFinished,myInterval,setMyInterval,startStopWatch} = props

    const answerSelect = (isCorrect,answer)=> {
        if(currentQuestion === 0){
            startStopWatch()
        }
        if(isCorrect){
            setScore(score + 1)
        }
        if(currentQuestion + 1 < questions?.length){
            setCurrentQuestion(currentQuestion + 1)
            
        }else{
            setMyInterval(clearInterval(myInterval))
            setIsFinished(true)
        }
        
        answer["answered"] = true

    }

    return(
        <div className="card">
            <p className="bold">Question {currentQuestion + 1} / {questions?.length}</p>
            <h2>{questions[currentQuestion].question}</h2>

            <ul className="answers">
                {
                    questions[currentQuestion].answers?.map(item => {
                        return(
                            <li key={item.id} onClick={()=>{answerSelect(item.isCorrect,item)}}>{item.answer}</li>
                        )
                    })
                }
            </ul>

           
        </div>
    )
}

export default QuestionsComponent