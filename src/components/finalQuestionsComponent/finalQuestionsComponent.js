import "./finalQuestionsComponent.css"

const FinalQuestionsComponent = (props)=> {

    const {id,question,answers} = props

    return(
        <div className="card-final">
            <h2>{`${id})`}  {question}</h2>

            <div className="rightAnswers">
                
                {
                    answers?.map(item => {
                        return(
                            <p key={item.id} className={item.isCorrect  && item.answered ? "correct-answered" 
                            : item.isCorrect && item.answered === false ? "correct"
                            : item.answered && item.isCorrect === false ? "failed" 
                            : ""}>
                                     {`${item.id + 1}) `}
                                         {item.answer} 
                            {item.isCorrect && !item.answered ? "(right answer)" : item.isCorrect && item.answered ? "" : ""}
                            </p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FinalQuestionsComponent