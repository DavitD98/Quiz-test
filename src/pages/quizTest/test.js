import { useState } from "react"
import "./test.css"
import questions from "../../components/questionsArray/questionsArray7"
import FinaleResultsComponent from "../../components/finalResultsComponent/finalResultsComponent"
import TimeEndsComponent from "../../components/timeEndsComponent/timeEndsComponent"
import QuestionsComponent from "../../components/questionsComponent/questionsComponent"



const Test = ()=> {
    //            test hooks
    const [isFinished,setIsFinished] = useState(false)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)

    //           stopWatch hooks
    const [stopWatch,setStopWatch] = useState({
        s:0,
        m:0,
    })
    const [myInterval,setMyInterval] = useState()
    let sec = stopWatch.s
    let min = stopWatch.m


    //          StopWatch functions
    const stopWatchCycle = () => {
        sec ++
        if(sec === 60){
            min++
            sec = 0
        }
        setStopWatch({
            s:sec,
            m:min
        })
    }

    const startStopWatch = ()=>{
        setMyInterval(setInterval(stopWatchCycle,1000))
    }


    return(
        <div className="main">

            <h1>Test</h1>
            <div className="stopWatch">
                  {
                       !isFinished && stopWatch.m < 15?
                       <>
                         <p className="bold"> { stopWatch.m < 10 ? `0${stopWatch.m}` : `${stopWatch.m}` } : {stopWatch.s < 10 ? `0${stopWatch.s}` : stopWatch.s}</p>
                         <button onClick={startStopWatch} className="btn">Click to start timer</button>
                         </>


                       : isFinished  && stopWatch.m < 15 ? 
                       <p className="bold green">You've finished test in {stopWatch.m} minutes and {stopWatch.s} seconds</p>
                       : !isFinished && stopWatch.m >= 15 ? <p className="bold red">Times is up</p>: ""
                   }   
            </div>

            {
                isFinished === true ? <FinaleResultsComponent score={score} questions={questions}/> 
                

                : stopWatch.m >= 15 ? <TimeEndsComponent stopWatch={stopWatch}/>

                : <QuestionsComponent questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} 
                            score={score} setScore={setScore} isFinished={isFinished} setIsFinished={setIsFinished} 
                            myInterval={myInterval} setMyInterval={setMyInterval} startStopWatch={startStopWatch}/>
            }
            
        </div>
    )
}

export default Test