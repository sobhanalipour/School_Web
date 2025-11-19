function Card(props) {
    return (
        <div className="card mb-5">
            {/* <div className="card-border-top">
            </div>
            <div className="img">
            </div> */}
            <span>{props.firstname} {props.lastname}</span>
            <p className="base">Base : {props.educational_background}</p>
            <button className="mb-3"> Click
            </button>
        </div>
    )
}

export default Card