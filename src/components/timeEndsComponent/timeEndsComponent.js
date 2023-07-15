import "./timeEndsComponent.css"

const TimeEndsComponent = (props) => {

    const {stopWatch} = props

    return(
        <div className="time-ended">
            <p className="bold red"> Time is Up!(stopWatch.m)</p>
        </div>
    )
}
export default TimeEndsComponent